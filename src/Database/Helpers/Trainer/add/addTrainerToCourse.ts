import {Schema} from 'mongoose';
import {getCourseDocumentById} from '../../../Queries/Course/getCourseDocumentById';

export const addTrainerToCategory = async (
    courseId: string | Schema.Types.ObjectId,
    trainerId: Schema.Types.ObjectId,
) => {
    try {
        const course = await getCourseDocumentById(courseId);

        await course.trainers.push(trainerId);
        await course.save();
    } catch (error) {
        throw error;
    }
};
