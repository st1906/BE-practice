import { getRepository } from 'typeorm';
import { Friend } from '../entity/Friend';

export const getFriends = () => {
    return getRepository(Friend).find();
}

export const insertFriend = (payload) => {
    return getRepository(Friend).save(payload)
}