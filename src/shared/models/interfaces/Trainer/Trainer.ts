import {ILocalizedTrainer} from './LocalizedTrainer';
import {IVideo} from '../Video/Video';
import {ICourse} from '../Course/Course';
import {ICategory} from '../Category/Category';
import {ITag} from '../Tag/Tag';
import {Creatable, Identifiable, Updatable} from '../ExtendableInterfaces';

export interface ITrainer extends Identifiable, Creatable, Updatable {
    localizedFields: ILocalizedTrainer[];
    categories: ICategory[];
    courses: ICourse[];
    tags: ITag[];
    videos: IVideo[];
}
