import {IImage} from '../Image/Image';
import {IVideoSource} from '../VideoSource/VideoSource';
import {IVideo} from '../Video/Video';
import {Creatable, Identifiable, Localizable, Publishable, Releasable, Updatable} from '../ExtendableInterfaces';

export interface ILocalizedCourse extends Identifiable, Localizable, Publishable, Releasable, Creatable, Updatable {
    title: string;
    description: string;
    slug: string;
    benefits: string[];
    image: IImage;
    trailer: IVideoSource;
    videos: IVideo[];
}
