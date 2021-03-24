import {Schema} from 'mongoose';
import {Category} from '../../../../Database/Schemas/CategorySchema/CategorySchema';
import {DocumentNotFoundError} from '../../../../shared/errors';
import {DocumentTypeEnum} from '../../../../shared/models/enums/DocumentTypeEnum';

export const deleteCategory = async (categoryId: string | Schema.Types.ObjectId): Promise<boolean> => {
    return Category.findByIdAndDelete(categoryId)
        .then(async category => {
            if (!category) {
                throw new DocumentNotFoundError(DocumentTypeEnum.CATEGORY, categoryId);
            }

            return true;
        })
        .catch(error => {
            throw error;
        });
};
