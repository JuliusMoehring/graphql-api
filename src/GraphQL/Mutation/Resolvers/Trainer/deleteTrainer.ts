import {Schema} from 'mongoose';
import {Trainer} from '../../../../Database/Schemas/TrainerSchema/TrainerSchema';
import {DocumentNotFoundError} from '../../../../shared/errors';
import {DocumentTypeEnum} from '../../../../shared/models/enums/DocumentTypeEnum';

export const deleteTrainer = async (trainerId: string | Schema.Types.ObjectId): Promise<boolean> => {
    return Trainer.findByIdAndDelete(trainerId)
        .then(async trainer => {
            if (!trainer) {
                throw new DocumentNotFoundError(DocumentTypeEnum.TRAINER, trainerId);
            }

            return true;
        })
        .catch(error => {
            throw error;
        });
};
