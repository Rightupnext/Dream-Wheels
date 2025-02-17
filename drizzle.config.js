/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_q8toQekpA7ZL@ep-soft-resonance-a8clxcwg-pooler.eastus2.azure.neon.tech/car-marketplace?sslmode=require',
    }
  };