import {Category, IMongooseCategory} from '../../Schemas/CategorySchema/CategorySchema';
import {Schema} from 'mongoose';
import {DocumentNotFoundError} from '../../../shared/errors';
import {DocumentTypeEnum} from '../../../shared/models/enums/DocumentTypeEnum';

export const getCategoryDocumentById = (id: string | Schema.Types.ObjectId): Promise<IMongooseCategory> => {
    return Category.findById(id)
        .then(category => {
            if (!category) {
                throw new DocumentNotFoundError(DocumentTypeEnum.CATEGORY, id);
            }

            return category;
        })
        .catch(error => {
            throw error;
        });
};
