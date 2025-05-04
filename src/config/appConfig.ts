
import StrapiService from "../services/strapiService";
import CloudConfigService, { CloudConfig } from "../services/cloudConfig";

// Strapi configuration
const strapiConfig = {
  baseUrl: import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337/api',
  apiToken: import.meta.env.VITE_STRAPI_API_TOKEN,
};

// AWS Cloud configuration
const cloudConfig: CloudConfig = {
  provider: 'aws',
  region: import.meta.env.VITE_AWS_REGION || 'us-east-1',
  endpoints: {
    api: import.meta.env.VITE_AWS_API_ENDPOINT,
    storage: import.meta.env.VITE_AWS_STORAGE_ENDPOINT,
  },
  credentials: {
    accessKey: import.meta.env.VITE_AWS_ACCESS_KEY,
    secretKey: import.meta.env.VITE_AWS_SECRET_KEY,
  }
};

// Initialize services
export const strapiService = new StrapiService(strapiConfig);
export const cloudService = new CloudConfigService(cloudConfig);

// Helper to determine if we're using real APIs or local data
export const useRealApi = import.meta.env.VITE_USE_REAL_API === 'true';
