const db = require("../db");
const { friendTableName } = require("./conts");

const getFriends = () => db(friendTableName).select("*");

const insertFriend = (payload) =>
  db(friendTableName).insert(
    {
      first_name: payload.firstName,
      last_name: payload.lastName,
      nickname: payload.nickname,
    },
    "*"
  );

module.exports = { getFriends, insertFriend };
