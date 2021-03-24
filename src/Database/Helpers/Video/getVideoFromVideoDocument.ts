import {IMongooseVideo} from '../../Schemas/VideoSchema/VideoSchema';
import {IVideo} from '../../../shared/models/interfaces/Video/Video';
import {getCategoryById} from '../../Queries/Category/getCategoryById';
import {getCourseById} from '../../Queries/Course/getCourseById';
import {getTagById} from '../../Queries/Tag/getTagById';
import {getTrainerById} from '../../Queries/Trainer/getTrainerById';

export const getVideoFromVideoDocument = async (video: IMongooseVideo): Promise<IVideo> => {
    try {
        return {
            ...video._doc,
            categories: video.categories.map(categoryId => getCategoryById(categoryId)),
            courses: video.courses.map(courseId => getCourseById(courseId)),
            tags: video.tags.map(tagId => getTagById(tagId)),
            trainers: video.trainers.map(trainerId => getTrainerById(trainerId)),
        } as IVideo;
    } catch (error) {
        throw error;
    }
};
