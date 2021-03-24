import {IMongooseCategory} from '../../Schemas/CategorySchema/CategorySchema';
import {ICategory} from '../../../shared/models/interfaces/Category/Category';
import {getCourseById} from '../../Queries/Course/getCourseById';
import {getTrainerById} from '../../Queries/Trainer/getTrainerById';
import {getVideoById} from '../../Queries/Video/getVideoById';
import {getCategoryById} from '../../Queries/Category/getCategoryById';

export const getCategoryFromCategoryDocument = async (category: IMongooseCategory): Promise<ICategory> => {
    try {
        return {
            ...category._doc,
            children: category.children.map(childCategoryId => getCategoryById(childCategoryId)),
            courses: category.courses.map(courseId => getCourseById(courseId)),
            trainers: category.trainers.map(trainerId => getTrainerById(trainerId)),
            videos: category.videos.map(videoId => getVideoById(videoId)),
        } as ICategory;
    } catch (error) {
        throw error;
    }
};
