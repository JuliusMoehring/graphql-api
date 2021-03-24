import {IMongooseTrainer, Trainer} from '../../../../Database/Schemas/TrainerSchema/TrainerSchema';
import {ICreateTrainerInputType} from '../../../Types/InputObjectTypes/Trainer/CreateTrainerInputType';
import {ILocalizedTrainer} from '../../../../shared/models/interfaces/Trainer/LocalizedTrainer';

export const createTrainer = async (inputData: ICreateTrainerInputType): Promise<IMongooseTrainer> => {
    try {
        const trainer = new Trainer({
            localizedFields: inputData.localizedFields.map(
                locale =>
                    ({
                        locale: locale.locale,
                        firstName: locale.firstName,
                        lastName: locale.lastName,
                        description: locale.description,
                        slug: locale.slug,
                        image: {
                            source: locale.image.source,
                            alt: locale.image.alt,
                        },
                        releaseData: {
                            released: locale.releaseData.released,
                            releaseDate: locale.releaseData.releaseDate,
                        },
                        metaData: {
                            title: locale.metaData.title,
                            description: locale.metaData.description,
                            robots: locale.metaData.robots,
                            og: {
                                title: locale.metaData.og?.title || locale.metaData.title,
                                description: locale.metaData.og?.description || locale.metaData.description,
                            },
                        },
                    } as ILocalizedTrainer),
            ),
            categories: inputData.categories || [],
            courses: inputData.courses || [],
            tags: inputData.tags || [],
            videos: inputData.categories || [],
        });

        const trainerDocument = await trainer.save();

        return trainerDocument;
    } catch (error) {
        throw error;
    }
};
