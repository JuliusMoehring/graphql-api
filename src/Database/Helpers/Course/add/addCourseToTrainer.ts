import {Schema} from 'mongoose';
import {getTrainerDocumentById} from '../../../Queries/Trainer/getTrainerDocumentById';

export const addCourseToTrainer = async (
    trainerId: string | Schema.Types.ObjectId,
    courseId: Schema.Types.ObjectId,
) => {
    try {
        const trainer = await getTrainerDocumentById(trainerId);

        await trainer.courses.push(courseId);
        await trainer.save();
    } catch (error) {
        throw error;
    }
};
