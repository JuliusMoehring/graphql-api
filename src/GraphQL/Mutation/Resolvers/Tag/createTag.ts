import {IMongooseTag, Tag} from '../../../../Database/Schemas/TagSchema/TagSchema';
import {ICreateTagInputType} from '../../../Types/InputObjectTypes/Tag/CreateTagInputType';
import {getCourseDocumentById} from '../../../../Database/Queries/Course/getCourseDocumentById';
import {getTrainerDocumentById} from '../../../../Database/Queries/Trainer/getTrainerDocumentById';
import {getVideoDocumentById} from '../../../../Database/Queries/Video/getVideoDocumentById';

export const createTag = async (inputData: ICreateTagInputType): Promise<IMongooseTag> => {
    try {
        const tag = new Tag({
            localizedFields: inputData.localizedFields,
            courses: inputData.courses || [],
            trainers: inputData.trainers || [],
            videos: inputData.videos || [],
        });

        const tagDocument = await tag.save();

        if (inputData.courses) {
            inputData.courses.map(async courseId => {
                try {
                    const course = await getCourseDocumentById(courseId);

                    course.tags.push(tagDocument._id);
                    await course.save();
                } catch (error) {
                    throw error;
                }
            });
        }

        if (inputData.trainers) {
            inputData.trainers.map(async trainerId => {
                try {
                    const trainer = await getTrainerDocumentById(trainerId);

                    trainer.tags.push(tagDocument._id);
                    await trainer.save();
                } catch (error) {
                    throw error;
                }
            });
        }

        if (inputData.videos) {
            inputData.videos.map(async videoId => {
                try {
                    const video = await getVideoDocumentById(videoId);

                    video.tags.push(tagDocument._id);
                    await video.save();
                } catch (error) {
                    throw error;
                }
            });
        }

        return tagDocument;
    } catch (error) {
        throw error;
    }
};
