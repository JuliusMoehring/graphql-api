import {ICourse} from '../../../shared/models/interfaces/Course/Course';
import {Schema} from 'mongoose';
import {getCourseDocumentById} from './getCourseDocumentById';
import {getCourseFromCourseDocument} from '../../Helpers/Course/getCourseFromCourseDocument';

export const getCourseById = async (id: string | Schema.Types.ObjectId): Promise<ICourse> => {
    try {
        const course = await getCourseDocumentById(id);

        return getCourseFromCourseDocument(course);
    } catch (error) {
        throw error;
    }
};
