import {Creatable} from '../ExtendableInterfaces/Createable';
import {ICategory} from '../Category/Category';
import {ITag} from '../Tag/Tag';
import {ITrainer} from '../Trainer/Trainer';
import {ILocalizedCourse} from './LocalizedCourse';
import {Updatable} from '../ExtendableInterfaces/Updatable';

export interface ICourse extends Creatable, Updatable {
    localizedFields: ILocalizedCourse[];
    categories: ICategory[];
    tags: ITag[];
    trainers: ITrainer[];
}
