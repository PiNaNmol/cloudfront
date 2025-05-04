
interface CloudConfig {
  provider: 'aws' | 'azure' | 'gcp';
  region: string;
  credentials?: {
    accessKey?: string;
    secretKey?: string;
  };
  endpoints?: {
    api?: string;
    storage?: string;
    auth?: string;
  };
}

class CloudConfigService {
  private config: CloudConfig;

  constructor(config: CloudConfig) {
    this.config = config;
  }

  getCloudConfig() {
    return this.config;
  }

  getRegion() {
    return this.config.region;
  }

  getEndpoints() {
    return this.config.endpoints || {};
  }

  // This method helps configure storage endpoints for AWS S3 or similar services
  getStorageEndpoint() {
    if (this.config.provider === 'aws') {
      return this.config.endpoints?.storage || 
        `https://s3.${this.config.region}.amazonaws.com`;
    }
    return this.config.endpoints?.storage;
  }

  // This method helps configure API endpoints for AWS API Gateway or similar
  getApiEndpoint() {
    return this.config.endpoints?.api;
  }
}

export default CloudConfigService;
export type { CloudConfig };
