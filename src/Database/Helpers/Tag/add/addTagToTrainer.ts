import {Schema} from 'mongoose';
import {getTrainerDocumentById} from '../../../Queries/Trainer/getTrainerDocumentById';

export const addTagToTrainer = async (trainerId: string | Schema.Types.ObjectId, tagId: Schema.Types.ObjectId) => {
    try {
        const trainer = await getTrainerDocumentById(trainerId);

        await trainer.tags.push(tagId);
        await trainer.save();
    } catch (error) {
        throw error;
    }
};
