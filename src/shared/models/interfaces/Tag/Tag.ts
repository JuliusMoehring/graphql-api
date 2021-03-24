import {ILocalizedTag} from './LocalizedTag';
import {ICourse} from '../Course/Course';
import {IVideo} from '../Video/Video';
import {ITrainer} from '../Trainer/Trainer';
import {Creatable, Identifiable, Updatable} from '../ExtendableInterfaces';

export interface ITag extends Identifiable, Creatable, Updatable {
    localizedFields: ILocalizedTag[];
    courses: ICourse[];
    trainers: ITrainer[];
    videos: IVideo[];
}
