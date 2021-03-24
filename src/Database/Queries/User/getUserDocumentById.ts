import {IMongooseUser, User} from '../../Schemas/UserSchema/UserSchema';
import {Schema} from 'mongoose';
import {DocumentNotFoundError} from '../../../shared/errors';
import {DocumentTypeEnum} from '../../../shared/models/enums/DocumentTypeEnum';

export const getUserDocumentById = (id: string | Schema.Types.ObjectId): Promise<IMongooseUser> => {
    return User.findById(id)
        .then(user => {
            if (!user) {
                throw new DocumentNotFoundError(DocumentTypeEnum.USER, id);
            }

            return user;
        })
        .catch(error => {
            throw error;
        });
};
