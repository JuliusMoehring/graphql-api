import {ICategory} from '../Category/Category';
import {ITag} from '../Tag/Tag';
import {ITrainer} from '../Trainer/Trainer';
import {ILocalizedCourse} from './LocalizedCourse';
import {Creatable, Identifiable, Updatable} from '../ExtendableInterfaces';

export interface ICourse extends Identifiable, Creatable, Updatable {
    localizedFields: ILocalizedCourse[];
    categories: ICategory[];
    tags: ITag[];
    trainers: ITrainer[];
}
