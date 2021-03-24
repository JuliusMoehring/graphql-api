import {Schema} from 'mongoose';
import {getVideoDocumentById} from '../../../Queries/Video/getVideoDocumentById';

export const addTrainerToCategory = async (
    videoId: string | Schema.Types.ObjectId,
    trainerId: Schema.Types.ObjectId,
) => {
    try {
        const video = await getVideoDocumentById(videoId);

        await video.trainers.push(trainerId);
        await video.save();
    } catch (error) {
        throw error;
    }
};
