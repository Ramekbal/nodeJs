// Unit tests for: getContact

const { getContact } = require("../contactController");

// Import the necessary modules
// Mock the response object
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

// Test suite for getContact function
describe("getContact() getContact method", () => {
  // Happy path tests
  describe("Happy Path", () => {
    it("should return status 200 and a message when called", () => {
      // Arrange
      const req = {}; // No specific request data needed for this test
      const res = mockResponse();

      // Act
      getContact(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "get all..." });
    });
  });

  // Edge case tests
  describe("Edge Cases", () => {
    it("should handle unexpected request object gracefully", () => {
      // Arrange
      const req = null; // Simulating an unexpected null request
      const res = mockResponse();

      // Act
      getContact(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "get all..." });
    });

    it("should handle missing response object methods gracefully", () => {
      // Arrange
      const req = {}; // No specific request data needed for this test
      const res = {}; // Simulating a response object without methods

      // Act & Assert
      expect(() => getContact(req, res)).toThrow(); // Expecting an error due to missing methods
    });
  });
});

// End of unit tests for: getContact
