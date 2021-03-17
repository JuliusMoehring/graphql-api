import {ICourse} from '../../shared/models/interfaces/Course/Course';
import {LocaleEnum} from '../../shared/models/enums/LocaleEnum';
import {RobotsEnum} from '../../shared/models/enums/RobotsEnum';
import {exampleVideo} from './video';
import {ContentTypeEnum} from '../../shared/models/enums/ContentTypeEnum';
import {exampleCategory} from './category';
import {exampleTag} from './tag';
import {exampleTrainer} from './trainer';

export const exampleCourse: ICourse = {
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
            trailer: {
                contentType: ContentTypeEnum.TRAILER,
                source: 'source.m3u8',
                duration: 100,
            },
            videos: [exampleVideo, exampleVideo, exampleVideo],
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
            image: {
                source: 'image.png',
                alt: 'alt',
            },
            trailer: {
                contentType: ContentTypeEnum.TRAILER,
                source: 'source.m3u8',
                duration: 100,
            },
            videos: [exampleVideo, exampleVideo, exampleVideo],
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
    tags: [exampleTag, exampleTag],
    trainers: [exampleTrainer, exampleTrainer],
    updatedAt: new Date(),
    createdAt: new Date(),
};
