const friendModel = require("../models/friend");
const db = require("../db");
const { friendTableName } = require("./consts");

const friendRepo = friendModel(db);

const getFriends = () => friendRepo.findAll();

const insertFriend = (payload) =>
  friendRepo.create({
    firstName: payload.firstName,
    lastName: payload.lastName,
    nickname: payload.nickname,
  });

module.exports = { getFriends, insertFriend };
