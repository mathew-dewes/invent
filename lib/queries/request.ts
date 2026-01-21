"use server";

import { RequestStatus } from "@/generated/prisma/enums";
import { getUserId } from "../actions/auth";
import prisma from "../prisma";

export async function getRequests(filter?: RequestStatus){
const userId = await getUserId();
const requests = await prisma.request.findMany({
    where: {
        userId,
    },


    orderBy: {
        createdAt: "desc"
    },

    select:{
        id: true,
        requestNumber: true,
        createdAt: true,
        customer: true,
        stockItem:{
            select:{
                id: true,
                name:true,
                quantity:true
            }
        },
        quantity: true,
        status: true,
        plantNumber: true,
        note: true
    }

});

const openRequests = requests.filter(
    item => item.status === "OPEN"
);
const pendingRequests = requests.filter(
    item => item.status === "PENDING"
);
const readyRequests = requests.filter(
    item => item.status === "READY"
);
const completeRequests = requests.filter(
    item => item.status === "COMPLETE"
);

if (filter === "OPEN"){
    return openRequests;
} else if (filter === "PENDING"){
    return pendingRequests;
} else if (filter === "COMPLETE"){
    return completeRequests;
} else if (filter === "READY"){
    return readyRequests;
} else {
    return requests;
}



}


export async function getRequestCardData(){
    const userId = await getUserId();
    const request = await prisma.request.findMany({
        where:{userId},
        select:{
            status:true,
            customer:true,
            quantity:true,
            stockItem:{
                select:{
                    name:true,
                  
                }
            }
        }
    });

    return request;
}


export async function getRequestsByStatusCount(){
        const userId = await getUserId();

        const requests = await prisma.request.findMany({
            select:{
                status:true
            },
            where:{userId}
        });


        const queryCounts = {
            OPEN:requests.filter(q => q.status === "OPEN").length,
            PENDING: requests.filter(q => q.status === "PENDING").length,
            READY: requests.filter(q => q.status === "READY").length,
            COMPLETE: requests.filter(q => q.status === "COMPLETE").length
        }

          return queryCounts
}

export async function getRequestById(id: string){
    const userId = await getUserId();
const requests = await prisma.request.findUnique({
    where: {
        userId, id
    },

    select:{
        id: true,
        requestNumber: true,
        createdAt: true,
        customer: true,
        stockItem:{
            select:{
                id: true,
                name:true,
                quantity:true
            }
        },
        quantity: true,
        status: true,
        plantNumber: true,
        note: true
    }

});

return requests;
}

export async function getCompletedRequests(){
    const userId = await getUserId();
const stock = await prisma.request.findMany({
    where: {
        userId,
        status:"COMPLETE"
    },


    orderBy: {
        createdAt: "desc"
    },

    select:{
        id: true,
        requestNumber: true,
        createdAt: true,
        customer: true,
        stockItem:{
            select:{
                id: true,
                name:true,
                quantity:true
            }
        },
        quantity: true,
        status: true,
        plantNumber: true,
        note: true
    }

});


return stock;
}