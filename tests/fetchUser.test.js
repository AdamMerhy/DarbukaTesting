const fetchUser = require('../src/fetchUser');
// Mock the global fetch function
global.fetch = jest.fn();

describe('fetchUser', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  // Test 1: Successful API call returning user data
  it('should return user data when the API call is successful', async () => {
    const mockUserData = { id: 1, name: 'John Doe' };

    // Mock a successful fetch response
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockUserData),
    });

    const result = await fetchUser(1);
    expect(result).toEqual(mockUserData); // Assert the returned data
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1'); // Assert the fetch call
  });

  // Test 2: API call where the user is not found (404 error)
  it('should throw an error when the user is not found', async () => {
    // Mock a 404 response
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    // Assert that the function throws the correct error
    await expect(fetchUser(999)).rejects.toThrow('User not found');
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/999'); // Assert the fetch call
  });

  // Test 3: Network failure scenario
  it('should throw an error when there is a network failure', async () => {
    // Mock a network error
    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    // Assert that the function throws the network error
    await expect(fetchUser(1)).rejects.toThrow('Network error');
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1'); // Assert the fetch call
  });
});