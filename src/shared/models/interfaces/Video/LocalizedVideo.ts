import {IImage} from '../Image/Image';
import {IVideoSource} from '../VideoSource/VideoSource';
import {Creatable, Identifiable, Localizable, Publishable, Releasable, Updatable} from '../ExtendableInterfaces';

export interface ILocalizedVideo extends Identifiable, Localizable, Publishable, Releasable, Creatable, Updatable {
    title: string;
    description: string;
    benefits: string[];
    image: IImage;
    sources: IVideoSource[];
    slug?: string;
}
