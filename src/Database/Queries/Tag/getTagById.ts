import {Tag} from '../../Schemas/TagSchema/TagSchema';
import {ITag} from '../../../shared/models/interfaces/Tag/Tag';
import {Schema} from 'mongoose';
import {getCourseById} from '../Course/getCourseById';
import {getTrainerById} from '../Trainer/getTrainerById';
import {getVideoById} from '../Video/getVideoById';

export const getTagById = (id: string | Schema.Types.ObjectId): Promise<ITag> => {
    return Tag.findById(id)
        .then(tag => {
            if (!tag) {
                throw new Error(`No tag with id ${id} found`);
            }

            return {
                ...tag._doc,
                courses: tag.courses.map(courseId => getCourseById(courseId)),
                trainers: tag.trainers.map(trainerId => getTrainerById(trainerId)),
                videos: tag.videos.map(videoId => getVideoById(videoId)),
            } as ITag;
        })
        .catch(error => {
            throw error;
        });
};
