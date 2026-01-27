"use server";

import { getUserId } from "../actions/auth";
import prisma from "../prisma";


export async function getBudgetAmount() {
    const userId = await getUserId();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const total = await prisma.budget.findUnique({
        where: { userId_month_year: { userId, month: currentMonth, year: currentYear } }
    });

    return total?.amount;



};

export async function getMonthlyTotalSpend() {
    const userId = await getUserId();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

   const spend = await prisma.costLedger.aggregate({
    where:{type:"PURCHASE", month: currentMonth, year: currentYear, userId},
    _sum:{
        totalCost: true
    }
   });

   return spend._sum.totalCost;
};




