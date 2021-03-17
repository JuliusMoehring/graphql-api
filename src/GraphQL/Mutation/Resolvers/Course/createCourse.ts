import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';
import {ICourse} from '../../../../shared/models/interfaces/Course/Course';
import {Course} from '../../../../Database/Schemas/CourseSchema/CourseSchema';
import {ContentTypeEnum} from '../../../../shared/models/enums/ContentTypeEnum';
import {RobotsEnum} from '../../../../shared/models/enums/RobotsEnum';

export const createCourse = async (): Promise<ICourse> => {
    try {
        const course = new Course({
            localizedFields: [
                {
                    locale: LocaleEnum.DE,
                    title: 'Titel',
                    description: 'Beschreibung',
                    slug: 'slug',
                    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
                    image: {
                        source: 'image.png',
                        alt: 'alt',
                    },
                    trailer: {
                        contentType: ContentTypeEnum.TRAILER,
                        source: 'trailer.m3u8',
                        duration: 10,
                    },
                    videos: ['6052821f7527eb30209d667a'],
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
                    title: 'Titel',
                    description: 'Description',
                    slug: 'slug',
                    benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
                    image: {
                        source: 'image.png',
                        alt: 'alt',
                    },
                    trailer: {
                        contentType: ContentTypeEnum.TRAILER,
                        source: 'trailer.m3u8',
                        duration: 10,
                    },
                    videos: ['6052821f7527eb30209d667a'],
                    releaseData: {
                        released: true,
                        releaseDate: new Date(),
                    },
                    metaData: {
                        title: 'Titel',
                        description: 'Description',
                        robots: RobotsEnum.INDEX_FOLLOW,
                        og: {title: 'Titel', description: 'Description'},
                    },
                },
            ],
        });

        const courseDocument = await course.save();

        return {...courseDocument._doc};
    } catch (error) {
        throw error;
    }
};
