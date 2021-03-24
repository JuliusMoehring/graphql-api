import {Course, IMongooseCourse} from '../../../../Database/Schemas/CourseSchema/CourseSchema';
import {ICreateCourseInputType} from '../../../Types/InputObjectTypes/Course/CreateCourseInputType';

export const createCourse = async (inputData: ICreateCourseInputType): Promise<IMongooseCourse> => {
    try {
        const course = new Course({
            localizedFields: inputData.localizedFields.map(locale => ({
                locale: locale.locale,
                title: locale.title,
                description: locale.description,
                slug: locale.slug,
                benefits: locale.benefits,
                image: {
                    source: locale.image.source,
                    alt: locale.image.alt,
                },
                trailer: {
                    contentType: locale.trailer.contentType,
                    source: locale.trailer.source,
                    duration: locale.trailer.duration,
                },
                videos: locale.videos,
                releaseData: {
                    released: locale.releaseData.released,
                    releaseDate: locale.releaseData.releaseDate,
                },
                metaData: {
                    title: locale.metaData.title,
                    description: locale.metaData.description,
                    robots: locale.metaData.robots,
                    og: {
                        title: locale.metaData.og?.title || locale.metaData.title,
                        description: locale.metaData.og?.description || locale.metaData.description,
                    },
                },
            })),
            categories: inputData.categories || [],
            tags: inputData.tags || [],
            trainers: inputData.trainers || [],
        });

        const courseDocument = await course.save();

        return courseDocument;
    } catch (error) {
        throw error;
    }
};
