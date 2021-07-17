const Joi = require("joi");
const friendRepo = require("../repo/friendRepo");

const friendSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  nickname: Joi.string(),
});

const getFriends = async () => {
  try {
    const allFriends = await friendRepo.getFriends();
    return allFriends;
  } catch (error) {
    throw new Error("Failed fetching friends | " + error);
  }
};

const insertFriend = async (body) => {
  try {
    const validatedBody = await friendSchema.validateAsync(body);
    const insertedFriend = await friendRepo.insertFriend(validatedBody);
    return insertedFriend;
  } catch (error) {
    throw new Error("Failed inserting friend | " + error);
  }
};

module.exports = { getFriends, insertFriend };
