import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

// Token -> "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2IxZjg5NGEyZjhiMDFlY2I3ZmFmZWYiLCJpYXQiOjE3Mzk3MTY3NTYsImV4cCI6MTczOTgwMzE1Nn0.glGxr7mh6TdAWJE1XbYP7vglreUCFkyGTjsS36XfdOE"
// _ID -> "67b1f894a2f8b01ecb7fafef"