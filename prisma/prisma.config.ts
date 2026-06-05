import { PrismaClient } from '@prisma/client';

// Load environment variables (e.g., DATABASE_URL) from .env
import * as dotenv from 'dotenv';
dotenv.config();

// Export a pre-configured PrismaClient instance
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export default prisma;
