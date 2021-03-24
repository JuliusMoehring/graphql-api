import {Schema} from 'mongoose';
import {getCategoryDocumentById} from '../../../Queries/Category/getCategoryDocumentById';

export const addTrainerToCategory = async (
    categoryId: string | Schema.Types.ObjectId,
    trainerId: Schema.Types.ObjectId,
) => {
    try {
        const category = await getCategoryDocumentById(categoryId);

        await category.trainers.push(trainerId);
        await category.save();
    } catch (error) {
        throw error;
    }
};
