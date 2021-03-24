import {Schema} from 'mongoose';
import {getCourseDocumentById} from '../../../Queries/Course/getCourseDocumentById';

export const updateTagsFromCourse = async (
    courseId: string | Schema.Types.ObjectId,
    tagIds: Schema.Types.ObjectId[],
) => {
    try {
        const course = await getCourseDocumentById(courseId);

        await course.update({$set: {tags: tagIds}});
        await course.save();
    } catch (error) {
        throw error;
    }
};
