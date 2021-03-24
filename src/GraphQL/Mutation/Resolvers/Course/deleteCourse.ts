import {Schema} from 'mongoose';
import {Course} from '../../../../Database/Schemas/CourseSchema/CourseSchema';
import {DocumentNotFoundError} from '../../../../shared/errors';
import {DocumentTypeEnum} from '../../../../shared/models/enums/DocumentTypeEnum';

export const deleteCourse = async (courseId: string | Schema.Types.ObjectId): Promise<boolean> => {
    return Course.findByIdAndDelete(courseId)
        .then(async course => {
            if (!course) {
                throw new DocumentNotFoundError(DocumentTypeEnum.COURSE, courseId);
            }

            return true;
        })
        .catch(error => {
            throw error;
        });
};
