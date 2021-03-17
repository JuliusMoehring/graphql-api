import {Creatable} from '../ExtendableInterfaces/Createable';
import {ILocalizedVideo} from './LocalizedVideo';
import {ICategory} from '../Category/Category';
import {ITag} from '../Tag/Tag';
import {ITrainer} from '../Trainer/Trainer';
import {ICourse} from '../Course/Course';
import {Updatable} from '../ExtendableInterfaces/Updatable';

export interface IVideo extends Creatable, Updatable {
    localizedFields: ILocalizedVideo[];
    categories: ICategory[];
    courses: ICourse[];
    tags: ITag[];
    trainers: ITrainer[];
}
