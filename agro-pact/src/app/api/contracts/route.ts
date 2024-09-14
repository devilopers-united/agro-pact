import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { ContractSchema } from "./contractSchema";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate data with Zod
    const parsedData = ContractSchema.parse({
      ...data,
      userId: undefined, // Exclude userId from parsedData
    });

    // Automatically assign userId
    const userId = 1; // Replace with your logic to get the current user ID

    const contract = await prisma.contract.create({
      data: {
        walletAddress: parsedData.walletAddress,
        cropType: parsedData.cropType,
        quantity: parsedData.quantity,
        deadline: parsedData.deadline,
        pricePerKg: parsedData.pricePerKg,
        userId: userId, // Automatically assigned
        phoneNumber: parsedData.phoneNumber, // Ensure this field is included
      },
    });

    return NextResponse.json(contract);
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      return NextResponse.json(
        { message: "Validation failed", errors: error.errors },
        { status: 400 }
      );
    }

    console.error("Failed to create contract:", error);
    return NextResponse.json(
      { message: "Failed to create contract" },
      { status: 500 }
    );
  }
}
