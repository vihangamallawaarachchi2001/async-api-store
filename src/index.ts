import ApiStore from './apiParser';
import apiConfig from './exampleApiStore';

const baseUrl = process.env.API_BASE_URL || 'http://localhost:3000/api'; 

const apiStore = new ApiStore(baseUrl, apiConfig);
const apiMethods = apiStore.createApiMethods();

export { ApiStore, apiMethods };
