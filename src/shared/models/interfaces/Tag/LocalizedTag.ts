import {Creatable, Identifiable, Localizable, Updatable} from '../ExtendableInterfaces';

export interface ILocalizedTag extends Identifiable, Localizable, Creatable, Updatable {
    name: string;
}
