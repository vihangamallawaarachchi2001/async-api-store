const apiConfig = {
    fetchUsers: { method: 'GET', url: '/users', returnType: 'array' },
    createUser: { method: 'POST', url: '/users', returnType: 'object' },
};

export default apiConfig;
