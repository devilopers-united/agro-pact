import { z } from "zod";

export const ContractSchema = z.object({
  walletAddress: z.string().min(1),
  cropType: z.string().min(1),
  quantity: z.number().positive(),
  deadline: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    })
    .transform((val) => new Date(val)),
  pricePerKg: z.number().positive(),
  phoneNumber: z.string().min(1), // Ensure this is required
});
