//src/exampleApiStore.ts
export default {
    getUsers: { 
        method: 'GET',
        url: '/users',
        returnType: 'array',
    },
    createUser: {
        method: 'POST',
        url: '/users',
        returnType: 'object'
    }
};
