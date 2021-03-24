import {Schema} from 'mongoose';
import {getVideoDocumentById} from '../../../Queries/Video/getVideoDocumentById';

export const updateTagsFromVideo = async (videoId: string | Schema.Types.ObjectId, tagIds: Schema.Types.ObjectId[]) => {
    try {
        const video = await getVideoDocumentById(videoId);

        await video.update({$set: {tags: tagIds}});
        await video.save();
    } catch (error) {
        throw error;
    }
};
