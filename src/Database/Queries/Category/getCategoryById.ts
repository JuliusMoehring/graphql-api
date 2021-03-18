import {ICategory} from '../../../shared/models/interfaces/Category/Category';
import {Category} from '../../Schemas/CategorySchema/CategorySchema';
import {getTrainerById} from '../Trainer/getTrainerById';
import {getCourseById} from '../Course/getCourseById';
import {getVideoById} from '../Video/getVideoById';
import {Schema} from 'mongoose';

export const getCategoryById = (id: string | Schema.Types.ObjectId): Promise<ICategory> => {
    return Category.findById(id)
        .then(category => {
            if (!category) {
                throw new Error(`No category with id ${id} found`);
            }

            return {
                ...category._doc,
                children: category.children.map(childCategoryId => getCategoryById(childCategoryId)),
                courses: category.courses.map(courseId => getCourseById(courseId)),
                trainers: category.trainers.map(trainerId => getTrainerById(trainerId)),
                videos: category.videos.map(videoId => getVideoById(videoId)),
            } as ICategory;
        })
        .catch(error => {
            throw error;
        });
};
