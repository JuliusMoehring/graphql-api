import {IMongooseCourse} from '../../Schemas/CourseSchema/CourseSchema';
import {ICourse} from '../../../shared/models/interfaces/Course/Course';
import {getVideoById} from '../../Queries/Video/getVideoById';
import {getCategoryById} from '../../Queries/Category/getCategoryById';
import {getTagById} from '../../Queries/Tag/getTagById';
import {getTrainerById} from '../../Queries/Trainer/getTrainerById';

export const getCourseFromCourseDocument = async (course: IMongooseCourse): Promise<ICourse> => {
    try {
        return {
            ...course._doc,
            localizedFields: course.localizedFields.map(localizedField => ({
                ...localizedField._doc,
                videos: localizedField.videos.map(videoId => getVideoById(videoId)),
            })),
            categories: course.categories.map(categoryId => getCategoryById(categoryId)),
            tags: course.tags.map(tagId => getTagById(tagId)),
            trainers: course.trainers.map(trainerId => getTrainerById(trainerId)),
        } as ICourse;
    } catch (error) {
        throw error;
    }
};
