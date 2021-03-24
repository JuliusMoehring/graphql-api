import {IVideo} from '../../../shared/models/interfaces/Video/Video';
import {Schema} from 'mongoose';
import {getVideoDocumentById} from './getVideoDocumentById';
import {getVideoFromVideoDocument} from '../../Helpers/Video/getVideoFromVideoDocument';

export const getVideoById = async (id: string | Schema.Types.ObjectId): Promise<IVideo> => {
    try {
        const video = await getVideoDocumentById(id);

        return getVideoFromVideoDocument(video);
    } catch (error) {
        throw error;
    }
};
