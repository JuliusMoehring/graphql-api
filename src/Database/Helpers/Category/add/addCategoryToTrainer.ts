import {Schema} from 'mongoose';
import {getTrainerDocumentById} from '../../../Queries/Trainer/getTrainerDocumentById';

export const addCategoryToTrainer = async (
    trainerId: string | Schema.Types.ObjectId,
    categoryId: Schema.Types.ObjectId,
) => {
    try {
        const trainer = await getTrainerDocumentById(trainerId);

        await trainer.categories.push(categoryId);
        await trainer.save();
    } catch (error) {
        throw error;
    }
};
