import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';
import {RobotsEnum} from '../../../../shared/models/enums/RobotsEnum';
import {IVideo} from '../../../../shared/models/interfaces/Video/Video';
import {Video} from '../../../../Database/Schemas/VideoSchema/VideoSchema';
import {ContentTypeEnum} from '../../../../shared/models/enums/ContentTypeEnum';

export const createVideo = async (): Promise<IVideo> => {
    try {
        const video = new Video({
            localizedFields: [
                {
                    locale: LocaleEnum.DE,
                    title: 'Video',
                    description: 'Beschreibung',
                    slug: 'slug',
                    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
                    sources: [
                        {
                            contentType: ContentTypeEnum.TRAILER,
                            source: 'trailer.m3u8',
                            duration: 10,
                        },
                        {
                            contentType: ContentTypeEnum.FULL,
                            source: 'full.m3u8',
                            duration: 100,
                        },
                    ],
                    image: {
                        source: 'image.png',
                        alt: 'alt',
                    },
                    releaseData: {
                        released: true,
                        releaseDate: new Date(),
                    },
                    metaData: {
                        title: 'Titel',
                        description: 'Beschreibung',
                        robots: RobotsEnum.INDEX_FOLLOW,
                        og: {title: 'Titel', description: 'Beschreibung'},
                    },
                },
                {
                    locale: LocaleEnum.EN,
                    title: 'Video',
                    description: 'Description',
                    slug: 'slug',
                    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
                    sources: [
                        {
                            contentType: ContentTypeEnum.TRAILER,
                            source: 'trailer.m3u8',
                            duration: 10,
                        },
                        {
                            contentType: ContentTypeEnum.FULL,
                            source: 'full.m3u8',
                            duration: 100,
                        },
                    ],
                    image: {
                        source: 'image.png',
                        alt: 'alt',
                    },
                    releaseData: {
                        released: true,
                        releaseDate: new Date(),
                    },
                    metaData: {
                        title: 'Title',
                        description: 'Description',
                        robots: RobotsEnum.INDEX_FOLLOW,
                        og: {title: 'Title', description: 'Title'},
                    },
                },
            ],
        } as IVideo);

        const videoDocument = await video.save();

        return {...videoDocument._doc};
    } catch (error) {
        throw error;
    }
};
