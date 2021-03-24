import {ITrainer} from '../../shared/models/interfaces/Trainer/Trainer';
import {LocaleEnum} from '../../shared/models/enums/LocaleEnum';
import {RobotsEnum} from '../../shared/models/enums/RobotsEnum';
import {exampleCategory} from './category';
import {exampleCourse} from './course';
import {exampleVideo} from './video';
import {exampleTag} from './tag';

export const exampleTrainer: ITrainer = {
    _id: '',
    localizedFields: [
        {
            _id: '',
            locale: LocaleEnum.DE,
            firstName: 'firstName',
            lastName: 'lastName',
            description: 'description',
            slug: 'slug',
            image: {
                source: 'image.png',
                alt: 'alt',
            },
            releaseData: {
                released: true,
                releaseDate: new Date(),
            },
            metaData: {
                title: 'title',
                description: 'description',
                robots: RobotsEnum.INDEX_FOLLOW,
                og: {title: 'title', description: 'description'},
            },
            updatedAt: new Date(),
            createdAt: new Date(),
        },
        {
            _id: '',
            locale: LocaleEnum.EN,
            firstName: 'firstName',
            lastName: 'lastName',
            description: 'description',
            slug: 'slug',
            image: {
                source: 'image.png',
                alt: 'alt',
            },
            releaseData: {
                released: true,
                releaseDate: new Date(),
            },
            metaData: {
                title: 'title',
                description: 'description',
                robots: RobotsEnum.INDEX_FOLLOW,
                og: {title: 'title', description: 'description'},
            },
            updatedAt: new Date(),
            createdAt: new Date(),
        },
    ],
    categories: [exampleCategory, exampleCategory],
    courses: [exampleCourse, exampleCourse],
    tags: [exampleTag, exampleTag],
    videos: [exampleVideo, exampleVideo],
    createdAt: new Date(),
    updatedAt: new Date(),
};
