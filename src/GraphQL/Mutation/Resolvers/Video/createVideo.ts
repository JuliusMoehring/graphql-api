import {IMongooseVideo, Video} from '../../../../Database/Schemas/VideoSchema/VideoSchema';
import {ICreateVideoInputType} from '../../../Types/InputObjectTypes/Video/CreateVideoInputType';

export const createVideo = async (inputData: ICreateVideoInputType): Promise<IMongooseVideo> => {
    try {
        const video = new Video({
            localizedFields: inputData.localizedFields.map(locale => ({
                locale: locale.locale,
                title: locale.title,
                description: locale.description,
                slug: locale.slug,
                benefits: locale.benefits,
                sources: locale.sources.map(source => ({
                    contentType: source.contentType,
                    source: source.source,
                    duration: source.duration,
                })),
                image: {
                    source: locale.image.source,
                    alt: locale.image.alt,
                },
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
            courses: inputData.courses || [],
            tags: inputData.tags || [],
            trainers: inputData.trainers || [],
        });

        const videoDocument = await video.save();

        return videoDocument;
    } catch (error) {
        throw error;
    }
};
