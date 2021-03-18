import {IVideo} from '../../../shared/models/interfaces/Video/Video';
import {Video} from '../../Schemas/VideoSchema/VideoSchema';
import {Schema} from 'mongoose';
import {getCategoryById} from '../Category/getCategoryById';
import {getCourseById} from '../Course/getCourseById';
import {getTagById} from '../Tag/getTagById';
import {getTrainerById} from '../Trainer/getTrainerById';

export const getVideoById = (id: string | Schema.Types.ObjectId): Promise<IVideo> => {
    return Video.findById(id)
        .then(video => {
            if (!video) {
                throw new Error(`No video with id ${id} found`);
            }

            return {
                ...video._doc,
                categories: video.categories.map(categoryId => getCategoryById(categoryId)),
                courses: video.courses.map(courseId => getCourseById(courseId)),
                tags: video.tags.map(tagId => getTagById(tagId)),
                trainers: video.trainers.map(trainerId => getTrainerById(trainerId)),
            } as IVideo;
        })
        .catch(error => {
            throw error;
        });
};
