//src/apiParser.ts
import axios from 'axios';

interface Endpoint {
    method: string;
    url: string;
    returnType: string;
}

class ApiStore {
    private baseUrl: string;
    private endpoints: Record<string, Endpoint>;

    constructor(baseUrl: string, endpoints: Record<string, Endpoint>) {
        this.baseUrl = baseUrl;
        this.endpoints = endpoints;
    }

    public createApiMethods() {
        const apiMethods: Record<string, Function> = {};
    
        for (const [key, endpoint] of Object.entries(this.endpoints)) {
            apiMethods[key] = async (data?: any) => {
                try {
                    const response = await axios({
                        method: endpoint.method,
                        url: `${this.baseUrl}${endpoint.url}`,
                        data,
                    });
                    return response.data;
                } catch (error: any) {
                    console.error(`Error calling ${key}:`, error.message);
                    throw new Error(`API ${key} failed: ${error.response?.data || error.message}`);
                }
            };
        }
    
        return apiMethods;
    }
    
}

export default ApiStore;
