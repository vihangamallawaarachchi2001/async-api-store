
//src/index.ts
import ApiStore from './apiParser';
import apiConfig from './exampleApiStore';

const apiStore = new ApiStore('http://localhost:3000/api', apiConfig);
export const apiMethods = apiStore.createApiMethods();
