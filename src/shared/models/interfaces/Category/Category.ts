import {ILocalizedCategory} from './LocalizedCategory';
import {Creatable} from '../ExtendableInterfaces/Createable';
import {ITrainer} from '../Trainer/Trainer';
import {IVideo} from '../Video/Video';
import {ICourse} from '../Course/Course';
import {Updatable} from '../ExtendableInterfaces/Updatable';

export interface ICategory extends Creatable, Updatable {
    localizedFields: ILocalizedCategory[];
    children: ICategory[];
    courses: ICourse[];
    trainers: ITrainer[];
    videos: IVideo[];
}
