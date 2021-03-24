import {Schema} from 'mongoose';
import {Tag} from '../../../../Database/Schemas/TagSchema/TagSchema';
import {removeTagFromTrainer} from '../../../../Database/Helpers/Tag/remove/removeTagFromTrainer';
import {removeTagFromVideo} from '../../../../Database/Helpers/Tag/remove/removeTagFromVideo';
import {removeTagFromCourse} from '../../../../Database/Helpers/Tag/remove/removeTagFromCourse';
import {DocumentNotFoundError} from '../../../../shared/errors';
import {DocumentTypeEnum} from '../../../../shared/models/enums/DocumentTypeEnum';

export const deleteTag = async (tagId: string | Schema.Types.ObjectId): Promise<boolean> => {
    return Tag.findByIdAndDelete(tagId)
        .then(async tag => {
            if (!tag) {
                throw new DocumentNotFoundError(DocumentTypeEnum.TAG, tagId);
            }

            await tag.courses.map(async courseId => removeTagFromCourse(courseId, tag._id));
            await tag.trainers.map(async trainerId => removeTagFromTrainer(trainerId, tag._id));
            await tag.videos.map(async videoId => removeTagFromVideo(videoId, tag._id));

            return true;
        })
        .catch(error => {
            throw error;
        });
};
