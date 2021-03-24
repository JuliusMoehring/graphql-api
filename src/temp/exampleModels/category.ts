import {ICategory} from '../../shared/models/interfaces/Category/Category';
import {LocaleEnum} from '../../shared/models/enums/LocaleEnum';
import {RobotsEnum} from '../../shared/models/enums/RobotsEnum';
import {exampleCourse} from './course';
import {exampleTrainer} from './trainer';
import {exampleVideo} from './video';

export const getExampleCategory = (): ICategory => ({...exampleCategory});

export const exampleCategory: ICategory = {
    _id: '',
    localizedFields: [
        {
            _id: '',
            locale: LocaleEnum.DE,
            name: 'name',
            description: 'description',
            slug: 'slug',
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
            _id: '',
            locale: LocaleEnum.EN,
            name: 'name',
            description: 'description',
            slug: 'slug',

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
    children: [getExampleCategory(), getExampleCategory()],
    courses: [exampleCourse, exampleCourse],
    trainers: [exampleTrainer, exampleTrainer],
    videos: [exampleVideo, exampleVideo],
    createdAt: new Date(),
    updatedAt: new Date(),
};
