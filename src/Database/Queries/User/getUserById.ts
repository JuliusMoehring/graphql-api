import {IUser} from '../../../shared/models/interfaces/User/User';
import {Schema} from 'mongoose';
import {getUserDocumentById} from './getUserDocumentById';
import {getUserFromUserDocument} from '../../Helpers/User/getUserFromUserDocument';

export const getUserById = async (id: string | Schema.Types.ObjectId): Promise<IUser> => {
    try {
        const user = await getUserDocumentById(id);

        return getUserFromUserDocument(user);
    } catch (error) {
        throw error;
    }
};
