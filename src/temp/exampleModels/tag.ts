import {ITag} from '../../shared/models/interfaces/Tag/Tag';
import {LocaleEnum} from '../../shared/models/enums/LocaleEnum';
import {exampleCourse} from './course';
import {exampleVideo} from './video';
import {exampleTrainer} from './trainer';

export const exampleTag: ITag = {
    _id: '',
    localizedFields: [
        {
            _id: '',
            locale: LocaleEnum.DE,
            name: 'exampleTag',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: '',
            locale: LocaleEnum.EN,
            name: 'exampleTag',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ],
    courses: [exampleCourse, exampleCourse],
    trainers: [exampleTrainer, exampleTrainer],
    videos: [exampleVideo, exampleVideo],
    createdAt: new Date(),
    updatedAt: new Date(),
};
