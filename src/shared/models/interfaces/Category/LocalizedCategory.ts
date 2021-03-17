import {Localizable} from '../ExtendableInterfaces/Localizable';
import {Publishable} from '../ExtendableInterfaces/Publishable';
import {Releasable} from '../ExtendableInterfaces/Releasable';
import {Creatable} from '../ExtendableInterfaces/Createable';
import {Updatable} from '../ExtendableInterfaces/Updatable';

export interface ILocalizedCategory extends Localizable, Publishable, Releasable, Creatable, Updatable {
    name: string;
    description: string;
    slug: string;
}
