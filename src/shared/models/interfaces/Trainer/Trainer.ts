import {Creatable} from '../ExtendableInterfaces/Createable';
import {ILocalizedTrainer} from './LocalizedTrainer';
import {IVideo} from '../Video/Video';
import {ICourse} from '../Course/Course';
import {ICategory} from '../Category/Category';
import {Updatable} from '../ExtendableInterfaces/Updatable';

export interface ITrainer extends Creatable, Updatable {
    localizedFields: ILocalizedTrainer[];
    categories: ICategory[];
    courses: ICourse[];
    videos: IVideo[];
}
