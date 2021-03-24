import {Schema} from 'mongoose';
import {getCourseDocumentById} from '../../../Queries/Course/getCourseDocumentById';

export const removeTagFromCourse = async (
    courseId: string | Schema.Types.ObjectId,
    tagId: Schema.Types.ObjectId | string,
) => {
    try {
        const course = await getCourseDocumentById(courseId);

        await course.update({$pull: {tags: tagId}});
        await course.save();
    } catch (error) {
        throw error;
    }
};
