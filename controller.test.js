const targetFn = require("./controller");

describe("the print function", () => {
  // standard best practice
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should respond with 'Hello I'm Nelson! I've succesfully deployed my code in heroku!'", () => {
    const mockReq = {};
    const mockRes = {
      send: jest.fn(),
    };

    targetFn(mockReq, mockRes);
    expect(mockRes.send).toHaveBeenCalledWith(
      "Hello I'm Nelson! I've succesfully deployed my code in heroku!"
    ); // If you change this value, the test will fail.
  });
});
