import {ILocalizedVideo} from './LocalizedVideo';
import {ICategory} from '../Category/Category';
import {ITag} from '../Tag/Tag';
import {ITrainer} from '../Trainer/Trainer';
import {ICourse} from '../Course/Course';
import {Creatable, Identifiable, Updatable} from '../ExtendableInterfaces';

export interface IVideo extends Identifiable, Creatable, Updatable {
    localizedFields: ILocalizedVideo[];
    categories: ICategory[];
    courses: ICourse[];
    tags: ITag[];
    trainers: ITrainer[];
}
