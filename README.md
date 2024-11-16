Here’s the updated `README.md` with changes reflecting the new configuration flexibility for the base URL and usage:

---

# **Async API Store**  
Effortlessly structure and manage your API calls in a modern, reusable way.

---

## **Overview**  
**Async API Store** is a Node.js module designed to simplify how developers work with REST APIs. By defining your API endpoints in a configuration file, the module dynamically creates callable methods, reducing boilerplate and improving code maintainability.

---

## **Features**  
- Dynamically create API methods from a configuration file.
- Built-in support for `GET`, `POST`, `PUT`, `DELETE`, etc.
- Simplifies request handling with a single initialization.
- Easily extendable for additional functionality.
- TypeScript-ready with strong typing support.
- Flexible base URL configuration (default to `http://localhost:3000/api`).

---

## **Installation**
Install the package using npm:
```bash
npm install async-api-store
```

---

## **Usage**
### Step 1: Define Your API Configuration
Create a configuration file (e.g., `apiStore.js`) to define your API endpoints:
```javascript
// apiStore.js
module.exports = {
  getUsers: {
    method: 'GET',
    url: '/users',
    returnType: 'array',
  },
  createUser: {
    method: 'POST',
    url: '/users',
    returnType: 'object',
  },
  deleteUser: {
    method: 'DELETE',
    url: '/users/:id',
    returnType: 'object',
  },
};
```

---

### Step 2: Initialize the API Store
Set up the module in your project. You can specify a custom base URL (default is `http://localhost:3000/api`):
```javascript
// index.js
const { ApiStore } = require('async-api-store');
const apiConfig = require('./apiStore');

// Initialize API Store with a custom base URL or use default
const baseUrl = process.env.API_BASE_URL || 'http://localhost:3000/api'; // Set base URL dynamically or use the default
const apiStore = new ApiStore(apiConfig, baseUrl);
const apiMethods = apiStore.createApiMethods();

module.exports = { apiMethods };
```

---

### Step 3: Use the Generated Methods
Use the dynamically created methods in your application:
```javascript
// app.js
const { apiMethods } = require('./index');

(async () => {
  try {
    // Fetch all users
    const users = await apiMethods.getUsers();
    console.log('Users:', users);

    // Create a new user
    const newUser = await apiMethods.createUser({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
    console.log('New User:', newUser);

    // Delete a user
    const deleteResponse = await apiMethods.deleteUser({ id: 1 });
    console.log('Delete Response:', deleteResponse);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

---

## **API Configuration File**
The configuration file defines your API endpoints. Each key in the object maps to a method name, and its value defines the endpoint properties:
```javascript
{
  method: 'HTTP_METHOD', // e.g., GET, POST, PUT, DELETE
  url: 'API_ENDPOINT',   // e.g., /users or /users/:id
  returnType: 'RESPONSE_TYPE', // e.g., array, object, string
}
```

### Example:
```javascript
{
  getUsers: {
    method: 'GET',
    url: '/users',
    returnType: 'array',
  },
  createUser: {
    method: 'POST',
    url: '/users',
    returnType: 'object',
  },
}
```

---

## **Error Handling**
All errors during API calls (e.g., network issues or invalid responses) are returned as JavaScript exceptions. Use `try-catch` to handle them gracefully:
```javascript
try {
  const users = await apiMethods.getUsers();
} catch (error) {
  console.error('API Error:', error.message);
}
```

---

## **Flexible Base URL Configuration**
You can specify a custom base URL for your API when initializing the `ApiStore`. If no base URL is provided, the default will be used (`http://localhost:3000/api`).

1. **Set Environment Variable**
   - In `.env` or similar files:
     ```
     API_BASE_URL=http://localhost:5000/api
     ```

   - In your application:
     ```javascript
     const baseUrl = process.env.API_BASE_URL || 'http://localhost:3000/api'; // Dynamically load the base URL
     const apiStore = new ApiStore(apiConfig, baseUrl);
     ```

2. **Pass Base URL Directly**
   - You can also pass a custom base URL directly when initializing the `ApiStore`:
     ```javascript
     const apiStore = new ApiStore(apiConfig, 'http://localhost:5000/api');
     ```

---

## **Built-In Enhancements**
### TypeScript Support
Use TypeScript to ensure strong typing in your project. The `ApiStore` class includes typings for methods and endpoints.

---

## **Future Enhancements**
- **Response Validation**: Automatically validate responses based on the `returnType`.
- **Custom Middleware**: Add hooks for logging, authentication, or caching.
- **GraphQL Support**: Extend functionality to support GraphQL APIs.

---

## **Testing**
Run the included test cases to ensure the module works as expected:
1. Install Jest:
   ```bash
   npm install --save-dev jest ts-jest @types/jest
   ```

2. Add a test file (`test/index.test.js`):
   ```javascript
   const { apiMethods } = require('../dist/index');

   test('fetch users', async () => {
       const users = await apiMethods.getUsers();
       expect(Array.isArray(users)).toBe(true);
   });
   ```

3. Run tests:
   ```bash
   npx jest
   ```

---

## **Contributing**
Contributions are welcome! If you have suggestions, bug reports, or feature requests, feel free to open an issue or a pull request on GitHub.

---

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.

---

This updated `README.md` provides clear instructions on configuring the base URL, as well as a flexible setup for users to adjust it based on their environment or preferences.