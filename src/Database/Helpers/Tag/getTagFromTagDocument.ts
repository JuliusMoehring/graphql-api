import {IMongooseTag} from '../../Schemas/TagSchema/TagSchema';
import {ITag} from '../../../shared/models/interfaces/Tag/Tag';
import {getCourseById} from '../../Queries/Course/getCourseById';
import {getTrainerById} from '../../Queries/Trainer/getTrainerById';
import {getVideoById} from '../../Queries/Video/getVideoById';

export const getTagFromTagDocument = async (tag: IMongooseTag): Promise<ITag> => {
    try {
        return {
            ...tag._doc,
            courses: tag.courses.map(courseId => getCourseById(courseId)),
            trainers: tag.trainers.map(trainerId => getTrainerById(trainerId)),
            videos: tag.videos.map(videoId => getVideoById(videoId)),
        } as ITag;
    } catch (error) {
        throw error;
    }
};
