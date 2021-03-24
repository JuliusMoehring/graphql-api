import {Schema} from 'mongoose';
import {getTrainerDocumentById} from '../../../Queries/Trainer/getTrainerDocumentById';

export const removeTagFromTrainer = async (
    trainerId: string | Schema.Types.ObjectId,
    tagId: Schema.Types.ObjectId | string,
) => {
    try {
        const trainer = await getTrainerDocumentById(trainerId);

        await trainer.update({$pull: {tags: tagId}});
        await trainer.save();
    } catch (error) {
        throw error;
    }
};
