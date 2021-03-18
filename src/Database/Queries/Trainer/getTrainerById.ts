import {ITrainer} from '../../../shared/models/interfaces/Trainer/Trainer';
import {Trainer} from '../../Schemas/TrainerSchema/TrainerSchema';
import {Schema} from 'mongoose';
import {getCategoryById} from '../Category/getCategoryById';
import {getCourseById} from '../Course/getCourseById';
import {getVideoById} from '../Video/getVideoById';

export const getTrainerById = (id: string | Schema.Types.ObjectId): Promise<ITrainer> => {
    return Trainer.findById(id)
        .then(trainer => {
            if (!trainer) {
                throw new Error(`No trainer with id ${id} found`);
            }

            return {
                ...trainer._doc,
                categories: trainer.categories.map(categoryId => getCategoryById(categoryId)),
                courses: trainer.courses.map(courseId => getCourseById(courseId)),
                videos: trainer.videos.map(videoId => getVideoById(videoId)),
            } as ITrainer;
        })
        .catch(error => {
            throw error;
        });
};
