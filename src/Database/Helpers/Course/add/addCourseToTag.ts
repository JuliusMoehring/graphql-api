import {Schema} from 'mongoose';
import {getTagDocumentById} from '../../../Queries/Tag/getTagDocumentById';

export const addCourseToTag = async (tagId: string | Schema.Types.ObjectId, courseId: Schema.Types.ObjectId) => {
    try {
        const tag = await getTagDocumentById(tagId);

        await tag.courses.push(courseId);
        await tag.save();
    } catch (error) {
        throw error;
    }
};
