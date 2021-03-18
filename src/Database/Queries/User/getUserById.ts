import {IUser} from '../../../shared/models/interfaces/User/User';
import {User} from '../../Schemas/UserSchema/UserSchema';
import {Schema} from 'mongoose';
import {getCourseById} from '../Course/getCourseById';

export const getUserById = (id: string | Schema.Types.ObjectId): Promise<IUser> => {
    return User.findById(id)
        .then(user => {
            if (!user) {
                throw new Error(`No user with id ${id} found`);
            }

            return {
                ...user._doc,
                courseFavorites: user.courseFavorites.map(courseId => getCourseById(courseId)),
            } as IUser;
        })
        .catch(error => {
            throw error;
        });
};
