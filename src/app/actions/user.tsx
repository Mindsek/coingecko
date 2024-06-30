"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getData() {
    const data = await prisma.user.findMany();
    return data;
}

export async function getUser(address: string) {
    try {
        const data = await prisma.user.findUnique({
            where: {
                address: address,
            },
        });
        return data;
    } catch (error) {
        console.error("An error occurred while fetching the user, (getUser)");
        return null;
    }
}

export async function createUser(address: string) {
    const isUserExist = await getUser(address);
    console.log("isUserExist", isUserExist);
    if (isUserExist) {
        return {
            variant: "destructive",
            message: "A user with this address already exists"
        };
    }

    try {
        const user = await prisma.user.create({
            data: {
                address: address,
            },
        });
        revalidatePath("/");
        if (user) {
            console.log("user", user);
            return {
                variant: "success",
                message: "User created successfully"
            };
        }
        return {
            variant: "destructive",
            message: "User creation failed"
        };
    } catch (error: any) {
        if (error.code === 'P2002') { // Code d'erreur pour violation de contrainte unique
            console.error(`A user with this address already exists. ${error.code}`);
            return {
                variant: "destructive",
                message: "A user with this address already exists"
            };
        } else {
            console.error("An error occurred while creating the user, (createUser)");
            return {
                variant: "destructive",
                message: "An error occurred while creating the user"
            };
        }
    }
}