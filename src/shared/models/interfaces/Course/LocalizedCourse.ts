import {Localizable} from '../ExtendableInterfaces/Localizable';
import {IImage} from '../Image/Image';
import {IVideoSource} from '../VideoSource/VideoSource';
import {Publishable} from '../ExtendableInterfaces/Publishable';
import {Releasable} from '../ExtendableInterfaces/Releasable';
import {IVideo} from '../Video/Video';
import {Creatable} from '../ExtendableInterfaces/Createable';
import {Updatable} from '../ExtendableInterfaces/Updatable';

export interface ILocalizedCourse extends Localizable, Publishable, Releasable, Creatable, Updatable {
    title: string;
    description: string;
    slug: string;
    benefits: string[];
    image: IImage;
    trailer: IVideoSource;
    videos: IVideo[];
}
