import {Creatable, Identifiable, Localizable, Publishable, Releasable, Updatable} from '../ExtendableInterfaces';

export interface ILocalizedCategory extends Identifiable, Localizable, Publishable, Releasable, Creatable, Updatable {
    name: string;
    description: string;
    slug: string;
}
