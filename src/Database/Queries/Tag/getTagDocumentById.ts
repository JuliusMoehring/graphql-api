import {IMongooseTag, Tag} from '../../Schemas/TagSchema/TagSchema';
import {Schema} from 'mongoose';
import {DocumentNotFoundError} from '../../../shared/errors';
import {DocumentTypeEnum} from '../../../shared/models/enums/DocumentTypeEnum';

export const getTagDocumentById = (id: string | Schema.Types.ObjectId): Promise<IMongooseTag> => {
    return Tag.findById(id)
        .then(tag => {
            if (!tag) {
                throw new DocumentNotFoundError(DocumentTypeEnum.TAG, id);
            }

            return tag;
        })
        .catch(error => {
            throw error;
        });
};
