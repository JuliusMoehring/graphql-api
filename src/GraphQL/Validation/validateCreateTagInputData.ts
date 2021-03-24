import {ICreateTagInputType} from '../Types/InputObjectTypes/Tag/CreateTagInputType';
import {validateArrayMinLength, validateUniqueLocale} from '../../shared/models/validation/inputValidation';
import {getCourseById} from '../../Database/Queries/Course/getCourseById';
import {getTrainerById} from '../../Database/Queries/Trainer/getTrainerById';
import {getVideoById} from '../../Database/Queries/Video/getVideoById';
import {InputValidationError} from '../../shared/errors/InputValidationError';

export const validateCreateTagInputData = (inputData: ICreateTagInputType) => {
    const hasRequiredMinLength = validateArrayMinLength(inputData.localizedFields, 1);
    const hasUniqueLocale = validateUniqueLocale(inputData.localizedFields);

    if (!hasRequiredMinLength) {
        throw new InputValidationError('LocalizedFields Array must contain at least one element');
    }

    if (!hasUniqueLocale) {
        throw new InputValidationError('LocalizedFields Array must not contain the same locale more than once');
    }

    if (inputData.courses) {
        try {
            inputData.courses.map(async courseId => {
                await getCourseById(courseId);
            });
        } catch (error) {
            throw error;
        }
    }

    if (inputData.trainers) {
        try {
            inputData.trainers.map(async trainerId => {
                await getTrainerById(trainerId);
            });
        } catch (error) {
            throw error;
        }
    }

    if (inputData.videos) {
        try {
            inputData.videos.map(async videoId => {
                await getVideoById(videoId);
            });
        } catch (error) {
            throw error;
        }
    }
};
