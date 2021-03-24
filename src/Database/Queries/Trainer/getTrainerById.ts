import {ITrainer} from '../../../shared/models/interfaces/Trainer/Trainer';
import {Schema} from 'mongoose';
import {getTrainerDocumentById} from './getTrainerDocumentById';
import {getTrainerFromTrainerDocument} from '../../Helpers/Trainer/getTrainerFromTrainerDocument';

export const getTrainerById = async (id: string | Schema.Types.ObjectId): Promise<ITrainer> => {
    try {
        const trainer = await getTrainerDocumentById(id);

        return getTrainerFromTrainerDocument(trainer);
    } catch (error) {
        throw error;
    }
};
