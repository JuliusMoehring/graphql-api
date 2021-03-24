import {Schema} from 'mongoose';
import {getVideoDocumentById} from '../../../Queries/Video/getVideoDocumentById';

export const addTagToVideo = async (videoId: string | Schema.Types.ObjectId, tagId: Schema.Types.ObjectId) => {
    try {
        const video = await getVideoDocumentById(videoId);

        await video.tags.push(tagId);
        await video.save();
    } catch (error) {
        throw error;
    }
};
