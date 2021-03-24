import {Schema} from 'mongoose';
import {getCourseDocumentById} from '../../../Queries/Course/getCourseDocumentById';

export const addTagToCourse = async (courseId: string | Schema.Types.ObjectId, tagId: Schema.Types.ObjectId) => {
    try {
        const course = await getCourseDocumentById(courseId);

        await course.tags.push(tagId);
        await course.save();
    } catch (error) {
        throw error;
    }
};
