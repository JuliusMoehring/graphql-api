import {Localizable} from '../ExtendableInterfaces/Localizable';
import {Creatable} from '../ExtendableInterfaces/Createable';
import {Updatable} from '../ExtendableInterfaces/Updatable';

export interface ILocalizedTag extends Localizable, Creatable, Updatable {
    name: string;
}
