
import axios from 'axios';

interface StrapiConfig {
  baseUrl: string;
  apiToken?: string;
}

class StrapiService {
  private config: StrapiConfig;
  
  constructor(config: StrapiConfig) {
    this.config = config;
  }

  private getHeaders() {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (this.config.apiToken) {
      headers['Authorization'] = `Bearer ${this.config.apiToken}`;
    }
    
    return headers;
  }

  async fetchProducts() {
    try {
      const response = await axios.get(`${this.config.baseUrl}/products`, {
        headers: this.getHeaders()
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products from Strapi:', error);
      throw error;
    }
  }

  async fetchProductById(id: string) {
    try {
      const response = await axios.get(`${this.config.baseUrl}/products/${id}`, {
        headers: this.getHeaders()
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${id} from Strapi:`, error);
      throw error;
    }
  }
}

export default StrapiService;
