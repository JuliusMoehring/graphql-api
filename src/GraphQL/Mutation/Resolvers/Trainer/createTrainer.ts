import {ITrainer} from '../../../../shared/models/interfaces/Trainer/Trainer';
import {Trainer} from '../../../../Database/Schemas/TrainerSchema/TrainerSchema';
import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';
import {RobotsEnum} from '../../../../shared/models/enums/RobotsEnum';

export const createTrainer = async (): Promise<ITrainer> => {
    try {
        const trainer = new Trainer({
            localizedFields: [
                {
                    locale: LocaleEnum.DE,
                    firstName: 'Vorname',
                    lastName: 'Nachname',
                    description: 'Beschreibung',
                    slug: 'slug',
                    image: {
                        source: 'image.png',
                        alt: 'alt',
                    },
                    releaseData: {
                        released: true,
                        releaseDate: new Date(),
                    },
                    metaData: {
                        title: 'Titel',
                        description: 'Beschreibung',
                        robots: RobotsEnum.INDEX_FOLLOW,
                        og: {title: 'Titel', description: 'Beschreibung'},
                    },
                },
                {
                    locale: LocaleEnum.EN,
                    firstName: 'First Name',
                    lastName: 'Last Name',
                    description: 'Description',
                    slug: 'slug',
                    image: {
                        source: 'image.png',
                        alt: 'alt',
                    },
                    releaseData: {
                        released: true,
                        releaseDate: new Date(),
                    },
                    metaData: {
                        title: 'Title',
                        description: 'Description',
                        robots: RobotsEnum.INDEX_FOLLOW,
                        og: {title: 'Title', description: 'Title'},
                    },
                },
            ],
        } as ITrainer);

        const trainerDocument = await trainer.save();

        return {...trainerDocument._doc};
    } catch (error) {
        throw error;
    }
};
