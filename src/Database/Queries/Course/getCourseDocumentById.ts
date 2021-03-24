import {Course, IMongooseCourse} from '../../Schemas/CourseSchema/CourseSchema';
import {Schema} from 'mongoose';
import {DocumentNotFoundError} from '../../../shared/errors';
import {DocumentTypeEnum} from '../../../shared/models/enums/DocumentTypeEnum';

export const getCourseDocumentById = (id: string | Schema.Types.ObjectId): Promise<IMongooseCourse> => {
    return Course.findById(id)
        .then(course => {
            if (!course) {
                throw new DocumentNotFoundError(DocumentTypeEnum.COURSE, id);
            }

            return course;
        })
        .catch(error => {
            throw error;
        });
};
