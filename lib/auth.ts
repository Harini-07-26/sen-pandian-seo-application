import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export type Role = "ADMIN" | "MARKETING" | "CLIENT";

/**
 * Retrieves the current session on the server.
 */
export const getSession = async () => {
  return await getServerSession(authOptions);
};

/**
 * Enforces authentication and optional role requirements.
 * Throws an error if the user is not authenticated or lacks one of the required roles.
 */
export const requireAuth = async (requiredRoles: Role[] = []) => {
  const session = await getSession();
  if (!session?.user) {
    throw new Error("Unauthenticated");
  }
  if (requiredRoles.length > 0) {
    const userRole = (session.user as any).role as Role;
    if (!requiredRoles.includes(userRole)) {
      throw new Error("Unauthorized");
    }
  }
  return session;
};
