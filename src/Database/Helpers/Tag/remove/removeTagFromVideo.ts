import {Schema} from 'mongoose';
import {getVideoDocumentById} from '../../../Queries/Video/getVideoDocumentById';

export const removeTagFromVideo = async (
    videoId: string | Schema.Types.ObjectId,
    tagId: Schema.Types.ObjectId | string,
) => {
    try {
        const video = await getVideoDocumentById(videoId);

        await video.update({$pull: {tags: tagId}});
        await video.save();
    } catch (error) {
        throw error;
    }
};
