import {Localizable} from '../ExtendableInterfaces/Localizable';
import {IImage} from '../Image/Image';
import {IVideoSource} from '../VideoSource/VideoSource';
import {Publishable} from '../ExtendableInterfaces/Publishable';
import {Releasable} from '../ExtendableInterfaces/Releasable';
import {Creatable} from '../ExtendableInterfaces/Createable';
import {Updatable} from '../ExtendableInterfaces/Updatable';

export interface ILocalizedVideo extends Localizable, Publishable, Releasable, Creatable, Updatable {
    title: string;
    description: string;
    benefits: string[];
    image: IImage;
    sources: IVideoSource[];
    slug?: string;
}
