import {IMongooseTrainer, Trainer} from '../../Schemas/TrainerSchema/TrainerSchema';
import {Schema} from 'mongoose';
import {DocumentNotFoundError} from '../../../shared/errors';
import {DocumentTypeEnum} from '../../../shared/models/enums/DocumentTypeEnum';

export const getTrainerDocumentById = (id: string | Schema.Types.ObjectId): Promise<IMongooseTrainer> => {
    return Trainer.findById(id)
        .then(trainer => {
            if (!trainer) {
                throw new DocumentNotFoundError(DocumentTypeEnum.TRAINER, id);
            }

            return trainer;
        })
        .catch(error => {
            throw error;
        });
};
