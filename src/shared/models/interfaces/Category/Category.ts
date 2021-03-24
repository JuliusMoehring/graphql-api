import {ILocalizedCategory} from './LocalizedCategory';
import {ITrainer} from '../Trainer/Trainer';
import {IVideo} from '../Video/Video';
import {ICourse} from '../Course/Course';
import {Identifiable, Creatable, Updatable} from '../ExtendableInterfaces';

export interface ICategory extends Identifiable, Creatable, Updatable {
    localizedFields: ILocalizedCategory[];
    children: ICategory[];
    courses: ICourse[];
    trainers: ITrainer[];
    videos: IVideo[];
}
