"use server";

import { Prisma } from "@/generated/prisma/client";
import { getUserId } from "../actions/auth";
import prisma from "../prisma";
import { getNZDateKey } from "../helpers";


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
        where: { type: "PURCHASE", month: currentMonth, year: currentYear, userId },
        _sum: {
            totalCost: true
        }
    });

    return spend._sum.totalCost;
};


type ChartPoint = {
    date: string;
    spend: number;
};

export async function getBudgetChartData() {
    const userId = await getUserId();



    const purchases = await prisma.costLedger.findMany({
        where: { userId, type: "PURCHASE" },
        select: {
            createdAt: true,
            totalCost: true
        }
    });

    const map = new Map<string, Prisma.Decimal>();


    for (const p of purchases) {
       const dateKey = getNZDateKey(p.createdAt);
        const existing = map.get(dateKey) ?? new Prisma.Decimal(0);
        map.set(dateKey, existing.plus(p.totalCost));
    }

    const start = new Date();
    start.setDate(1);
    start.setHours(0, 0, 0, 0);


    const result: ChartPoint[] = [];


      const todayKey = getNZDateKey();

          const current = new Date(start);

    while (getNZDateKey(current) <= todayKey) {

            const key = getNZDateKey(current);

        result.push({
            date: key,
            spend: map.get(key)?.toNumber() ?? 0
        });
       current.setDate(current.getDate() + 1);
    };

    return result;




}


// Get vendor purchases in the last 30 days

export async function getMonthlyVendorPurchases(){
    const userId = await getUserId();

    


}