import {Schema} from 'mongoose';
import {getTagDocumentById} from '../../../Queries/Tag/getTagDocumentById';

export const addTrainerToCategory = async (tagId: string | Schema.Types.ObjectId, trainerId: Schema.Types.ObjectId) => {
    try {
        const tag = await getTagDocumentById(tagId);

        await tag.trainers.push(trainerId);
        await tag.save();
    } catch (error) {
        throw error;
    }
};
