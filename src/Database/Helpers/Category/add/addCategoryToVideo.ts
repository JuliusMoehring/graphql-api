import {Schema} from 'mongoose';
import {getVideoDocumentById} from '../../../Queries/Video/getVideoDocumentById';

export const addCategoryToVideo = async (
    videoId: string | Schema.Types.ObjectId,
    categoryId: Schema.Types.ObjectId,
) => {
    try {
        const video = await getVideoDocumentById(videoId);

        await video.categories.push(categoryId);
        await video.save();
    } catch (error) {
        throw error;
    }
};
