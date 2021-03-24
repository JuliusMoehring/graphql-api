import {IMongooseVideo, Video} from '../../Schemas/VideoSchema/VideoSchema';
import {Schema} from 'mongoose';
import {DocumentNotFoundError} from '../../../shared/errors';
import {DocumentTypeEnum} from '../../../shared/models/enums/DocumentTypeEnum';

export const getVideoDocumentById = (id: string | Schema.Types.ObjectId): Promise<IMongooseVideo> => {
    return Video.findById(id)
        .then(video => {
            if (!video) {
                throw new DocumentNotFoundError(DocumentTypeEnum.VIDEO, id);
            }

            return video;
        })
        .catch(error => {
            throw error;
        });
};
