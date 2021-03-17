import {IImage} from '../Image/Image';
import {Localizable} from '../ExtendableInterfaces/Localizable';
import {Publishable} from '../ExtendableInterfaces/Publishable';
import {Releasable} from '../ExtendableInterfaces/Releasable';
import {Creatable} from '../ExtendableInterfaces/Createable';
import {Updatable} from '../ExtendableInterfaces/Updatable';

export interface ILocalizedTrainer extends Localizable, Publishable, Releasable, Creatable, Updatable {
    firstName: string;
    lastName: string;
    description: string;
    slug: string;
    image: IImage;
}
