import {Schema} from 'mongoose';
import {Video} from '../../../../Database/Schemas/VideoSchema/VideoSchema';
import {DocumentNotFoundError} from '../../../../shared/errors';
import {DocumentTypeEnum} from '../../../../shared/models/enums/DocumentTypeEnum';

export const deleteVideo = async (videoId: string | Schema.Types.ObjectId): Promise<boolean> => {
    return Video.findByIdAndDelete(videoId)
        .then(async video => {
            if (!video) {
                throw new DocumentNotFoundError(DocumentTypeEnum.VIDEO, videoId);
            }

            return true;
        })
        .catch(error => {
            throw error;
        });
};
