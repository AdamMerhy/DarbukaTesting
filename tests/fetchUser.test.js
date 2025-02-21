const fetchUser = require('../src/fetchUser');

global.fetch = jest.fn();

describe('fetchUser', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('This should return user data when the API call is successful', async () => {
    const mockUserData = { id: 1, name: 'Adam Merhy' };

  
    global.fetch.mockResolvedValueOnce({
      ok: true, //succcess
      json: () => Promise.resolve(mockUserData),
    });

    const result = await fetchUser(1);
    expect(result).toEqual(mockUserData);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1');
  });

 
  it('This should throw an error when the user is not found', async () => {
   
    global.fetch.mockResolvedValueOnce({
      ok: false, //fail
      status: 404,
    });

    
    await expect(fetchUser(999)).rejects.toThrow('User not found');
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/999');
  });

  
  it('This should throw an error when there is a network failure', async () => {
 
    global.fetch.mockRejectedValueOnce(new Error('Network error'));


    await expect(fetchUser(1)).rejects.toThrow('Network error');
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1');
  });
});