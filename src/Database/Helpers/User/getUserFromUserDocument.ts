import {IMongooseUser} from '../../Schemas/UserSchema/UserSchema';
import {IUser} from '../../../shared/models/interfaces/User/User';
import {getCourseById} from '../../Queries/Course/getCourseById';

export const getUserFromUserDocument = async (user: IMongooseUser): Promise<IUser> => {
    try {
        return {
            ...user._doc,
            courseFavorites: user.courseFavorites.map(courseId => getCourseById(courseId)),
        } as IUser;
    } catch (error) {
        throw error;
    }
};
