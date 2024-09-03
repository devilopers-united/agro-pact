import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const user = await prisma.user.findUnique({
          where: { email: credentials },
        });
        if (user && user.password === credentials.password) {
          return { id: user.id, email: user.email, name: user.name };
        }

        throw new Error("Invalid credentials");
      },
    }),
  ],
});
export { handler as GET, handler as POST };
