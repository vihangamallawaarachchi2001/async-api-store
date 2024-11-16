//test/index.test.js
const axios = require('axios');
const { apiMethods } = require('../src/index'); 


jest.mock('axios');

test('fetch users - example test', async () => {
    const mockUsers = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];

    
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockUsers });

    const users = await apiMethods.getUsers();

    expect(users).toEqual(mockUsers);
    expect(Array.isArray(users)).toBe(true);
    expect(users).toHaveLength(2);
    
});
