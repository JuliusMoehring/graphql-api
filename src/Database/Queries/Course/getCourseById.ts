import {ICourse} from '../../../shared/models/interfaces/Course/Course';
import {Course} from '../../Schemas/CourseSchema/CourseSchema';
import {getTrainerById} from '../Trainer/getTrainerById';
import {getCategoryById} from '../Category/getCategoryById';
import {getTagById} from '../Tag/getTagById';
import {Schema} from 'mongoose';
import {getVideoById} from '../Video/getVideoById';

export const getCourseById = (id: string | Schema.Types.ObjectId): Promise<ICourse> => {
    return Course.findById(id)
        .then(course => {
            if (!course) {
                throw new Error(`No course with id ${id} found`);
            }

            return {
                ...course._doc,
                localizedFields: course.localizedFields.map(localizedField => ({
                    ...localizedField,
                    videos: localizedField.videos.map(videoId => getVideoById(videoId)),
                })),
                categories: course.categories.map(categoryId => getCategoryById(categoryId)),
                tags: course.tags.map(tagId => getTagById(tagId)),
                trainers: course.trainers.map(trainerId => getTrainerById(trainerId)),
            } as ICourse;
        })
        .catch(error => {
            throw error;
        });
};
