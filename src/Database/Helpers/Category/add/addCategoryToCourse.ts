import {Schema} from 'mongoose';
import {getCourseDocumentById} from '../../../Queries/Course/getCourseDocumentById';

export const addCategoryToCourse = async (
    courseId: string | Schema.Types.ObjectId,
    categoryId: Schema.Types.ObjectId,
) => {
    try {
        const course = await getCourseDocumentById(courseId);

        await course.categories.push(categoryId);
        await course.save();
    } catch (error) {
        throw error;
    }
};
