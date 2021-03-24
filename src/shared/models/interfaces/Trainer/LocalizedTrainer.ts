import {IImage} from '../Image/Image';
import {Creatable, Identifiable, Localizable, Publishable, Releasable, Updatable} from '../ExtendableInterfaces';

export interface ILocalizedTrainer extends Identifiable, Localizable, Publishable, Releasable, Creatable, Updatable {
    firstName: string;
    lastName: string;
    description: string;
    slug: string;
    image: IImage;
}
