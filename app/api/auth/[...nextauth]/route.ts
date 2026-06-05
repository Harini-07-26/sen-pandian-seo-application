import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/prisma.config";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Email magic link provider (requires EMAIL_SERVER and EMAIL_FROM env vars)
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // Google OAuth – enable by setting GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  // Include the user's role in the session token
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        // @ts-ignore – Prisma User includes role field
        session.user.role = (user as any).role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
} as const;

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
