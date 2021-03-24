import {IMongooseTrainer} from '../../Schemas/TrainerSchema/TrainerSchema';
import {ITrainer} from '../../../shared/models/interfaces/Trainer/Trainer';
import {getCategoryById} from '../../Queries/Category/getCategoryById';
import {getCourseById} from '../../Queries/Course/getCourseById';
import {getVideoById} from '../../Queries/Video/getVideoById';

export const getTrainerFromTrainerDocument = async (trainer: IMongooseTrainer): Promise<ITrainer> => {
    try {
        return {
            ...trainer._doc,
            categories: trainer.categories.map(categoryId => getCategoryById(categoryId)),
            courses: trainer.courses.map(courseId => getCourseById(courseId)),
            videos: trainer.videos.map(videoId => getVideoById(videoId)),
        } as ITrainer;
    } catch (error) {
        throw error;
    }
};
