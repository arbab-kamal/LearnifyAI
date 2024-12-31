import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:1oeA4xwORVTy@ep-little-sound-a5w4ydf7.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
