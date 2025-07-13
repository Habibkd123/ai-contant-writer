import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './drizzle',
  schema: './src/utils/Schema.tsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_mxS6qXVRlI0o@ep-odd-smoke-a7w938th-pooler.ap-southeast-2.aws.neon.tech/Ai-contant-writer?sslmode=require&channel_binding=require",
  },
});
