const friendRepo = require("../repo/friendRepo");

const getFriends = async () => {
  try {
    const allFriends = await friendRepo.getFriends();
    return allFriends;
  } catch (error) {
    throw new Error("Failed fetching friends", error);
  }
};

const insertFriend = async (body) => {
  try {
    const insertedFriend = await friendRepo.insertFriend(body);
    return insertedFriend;
  } catch (error) {
    throw new Error("Failed inserting friend", error);
  }
};

module.exports = { getFriends, insertFriend };
