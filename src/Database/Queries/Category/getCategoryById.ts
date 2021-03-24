import {ICategory} from '../../../shared/models/interfaces/Category/Category';
import {Schema} from 'mongoose';
import {getCategoryDocumentById} from './getCategoryDocumentById';
import {getCategoryFromCategoryDocument} from '../../Helpers/Category/getCategoryFromCategoryDocument';

export const getCategoryById = async (id: string | Schema.Types.ObjectId): Promise<ICategory> => {
    try {
        const category = await getCategoryDocumentById(id);

        return getCategoryFromCategoryDocument(category);
    } catch (error) {
        throw error;
    }
};
