import {RobotsEnum} from '../../enums/RobotsEnum';

interface IMetaDataOG {
    title: string;
    description: string;
}

export interface IMetaData {
    title: string;
    description: string;
    robots: RobotsEnum;
    og: IMetaDataOG;
}
