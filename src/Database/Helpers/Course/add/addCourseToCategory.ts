import {Schema} from 'mongoose';
import {getCategoryDocumentById} from '../../../Queries/Category/getCategoryDocumentById';

export const addCourseToCategory = async (
    categoryId: string | Schema.Types.ObjectId,
    courseId: Schema.Types.ObjectId,
) => {
    try {
        const category = await getCategoryDocumentById(categoryId);

        await category.courses.push(courseId);
        await category.save();
    } catch (error) {
        throw error;
    }
};
