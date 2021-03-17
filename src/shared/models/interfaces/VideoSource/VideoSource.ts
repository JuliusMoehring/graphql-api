import {ContentTypeEnum} from '../../enums/ContentTypeEnum';

export interface IVideoSource {
    contentType: ContentTypeEnum;
    source: string;
    duration: number;
}
