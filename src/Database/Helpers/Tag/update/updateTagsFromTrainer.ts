import {Schema} from 'mongoose';
import {getTrainerDocumentById} from '../../../Queries/Trainer/getTrainerDocumentById';

export const updateTagsFromTrainer = async (
    trainerId: string | Schema.Types.ObjectId,
    tagIds: Schema.Types.ObjectId[],
) => {
    try {
        const trainer = await getTrainerDocumentById(trainerId);

        await trainer.update({$set: {tags: tagIds}});
        await trainer.save();
    } catch (error) {
        throw error;
    }
};
