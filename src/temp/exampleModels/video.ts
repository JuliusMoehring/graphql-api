import {IVideo} from '../../shared/models/interfaces/Video/Video';
import {LocaleEnum} from '../../shared/models/enums/LocaleEnum';
import {RobotsEnum} from '../../shared/models/enums/RobotsEnum';
import {ContentTypeEnum} from '../../shared/models/enums/ContentTypeEnum';
import {exampleCategory} from './category';
import {exampleCourse} from './course';
import {exampleTag} from './tag';
import {exampleTrainer} from './trainer';

export const exampleVideo: IVideo = {
    localizedFields: [
        {
            locale: LocaleEnum.DE,
            title: 'title',
            description: 'description',
            slug: 'slug',
            benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
            image: {
                source: 'image.png',
                alt: 'alt',
            },
            sources: [
                {
                    contentType: ContentTypeEnum.TRAILER,
                    source: 'source.m3u8',
                    duration: 10,
                },
                {
                    contentType: ContentTypeEnum.FULL,
                    source: 'source.m3u8',
                    duration: 100,
                },
            ],
            releaseData: {
                released: true,
                releaseDate: new Date(),
            },
            metaData: {
                title: 'title',
                description: 'description',
                robots: RobotsEnum.INDEX_FOLLOW,
                og: {
                    title: 'title',
                    description: 'description',
                },
            },
            updatedAt: new Date(),
            createdAt: new Date(),
        },
        {
            locale: LocaleEnum.EN,
            title: 'title',
            description: 'description',
            slug: 'slug',
            benefits: ['benefit 1', 'benefit 2', 'benefit 3'],
            sources: [
                {
                    contentType: ContentTypeEnum.TRAILER,
                    source: 'source.m3u8',
                    duration: 10,
                },
                {
                    contentType: ContentTypeEnum.FULL,
                    source: 'source.m3u8',
                    duration: 100,
                },
            ],
            releaseData: {
                released: true,
                releaseDate: new Date(),
            },
            metaData: {
                title: 'title',
                description: 'description',
                robots: RobotsEnum.INDEX_FOLLOW,
                og: {
                    title: 'title',
                    description: 'description',
                },
            },
            updatedAt: new Date(),
            createdAt: new Date(),
        },
    ],
    categories: [exampleCategory, exampleCategory],
    courses: [exampleCourse, exampleCourse],
    tags: [exampleTag, exampleTag],
    trainers: [exampleTrainer, exampleTrainer],
    updatedAt: new Date(),
    createdAt: new Date(),
};
