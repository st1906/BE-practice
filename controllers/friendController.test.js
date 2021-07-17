const friendController = require("./friendContoller");
const friendRepo = require("../repo/friendRepo");

jest.mock("../repo/friendRepo", () => ({
  getFriends: jest.fn(),
  insertFriend: jest.fn().mockImplementation((valuePassed) => valuePassed),
}));

describe("Friend Controller test suite", () => {
  it("getFriends: return all friends", async () => {
    const allFriends = await friendController.getFriends();

    expect(friendRepo.getFriends).toBeCalled();
    expect(allFriends).toBeUndefined();
  });
  it("insertFriends: correct payload", async () => {
    const mockBody = {
      firstName: "John",
      lastName: "Doe",
    };
    const newFriend = await friendController.insertFriend(mockBody);

    expect(friendRepo.insertFriend).toBeCalledWith(mockBody);
    expect(newFriend).toStrictEqual(mockBody);
  });

  it("insertFriends: correct payload and nickname", async () => {
    const mockBody = {
      firstName: "John",
      lastName: "Doe",
      nickname: "Tom",
    };
    const newFriend = await friendController.insertFriend(mockBody);

    expect(friendRepo.insertFriend).toBeCalledWith(mockBody);
    expect(newFriend).toStrictEqual(mockBody);
  });
  it("insertFriends: wrong payload firstName", async () => {
    const mockBody = {
      firName: "John",
      lastName: "Doe",
    };
    try {
      await friendController.insertFriend(mockBody);
    } catch (error) {
      expect(error.toString()).toContain(
        `Error: Failed inserting friend | ValidationError: "firstName" is required`
      );
    }
  });
  it("insertFriends: wrong payload lastName", async () => {
    const mockBody = {
      firstName: "John",
      lasName: "Doe",
    };
    try {
      await friendController.insertFriend(mockBody);
    } catch (error) {
      expect(error.toString()).toContain(
        `Error: Failed inserting friend | ValidationError: "lastName" is required`
      );
    }
  });
  it("insertFriends: wrong payload nickname", async () => {
    const mockBody = {
      firstName: "John",
      lastName: "Doe",
      nicky: "Wat?",
    };
    try {
      await friendController.insertFriend(mockBody);
    } catch (error) {
      expect(error.toString()).toContain(
        `Error: Failed inserting friend | ValidationError: "nicky" is not allowed`
      );
    }
  });
});
