const db = require("../db");
const { friendTableName } = require("./conts");

const getFriends = async () => {
  return await db(friendTableName).select("*");
};

const insertFriend = async (payload) => {
  return await db(friendTableName).insert(
    {
      first_name: payload.firstName,
      last_name: payload.lastName,
      nickname: payload.nickname,
    },
    "*"
  );
};

module.exports = { getFriends, insertFriend };
