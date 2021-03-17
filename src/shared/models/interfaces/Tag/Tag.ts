import {ILocalizedTag} from './LocalizedTag';
import {Creatable} from '../ExtendableInterfaces/Createable';
import {ICourse} from '../Course/Course';
import {IVideo} from '../Video/Video';
import {ITrainer} from '../Trainer/Trainer';
import {Updatable} from '../ExtendableInterfaces/Updatable';

export interface ITag extends Creatable, Updatable {
    localizedFields: ILocalizedTag[];
    courses: ICourse[];
    trainers: ITrainer[];
    videos: IVideo[];
}
