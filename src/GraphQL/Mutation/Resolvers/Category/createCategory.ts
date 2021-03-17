import {ICategory} from '../../../../shared/models/interfaces/Category/Category';
import {Category} from '../../../../Database/Schemas/CategorySchema/CategorySchema';
import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';
import {RobotsEnum} from '../../../../shared/models/enums/RobotsEnum';

export const createCategory = async (): Promise<ICategory> => {
    try {
        const category = new Category({
            localizedFields: [
                {
                    locale: LocaleEnum.DE,
                    name: 'Kategorie',
                    description: 'Beschreibung',
                    slug: 'kategoie',
                    releaseData: {
                        released: true,
                        releaseDate: new Date(),
                    },
                    metaData: {
                        title: 'Titel',
                        description: 'Beschreibung',
                        robots: RobotsEnum.INDEX_FOLLOW,
                        og: {
                            title: 'Titel',
                            description: 'Beschreibung',
                        },
                    },
                },
                {
                    locale: LocaleEnum.EN,
                    name: 'Category',
                    description: 'Description',
                    slug: 'category',
                    releaseData: {
                        released: false,
                    },
                    metaData: {
                        title: 'Titel',
                        description: 'Description',
                        robots: RobotsEnum.INDEX_FOLLOW,
                        og: {
                            title: 'Titel',
                            description: 'Description',
                        },
                    },
                },
            ],
        } as ICategory);

        const categoryDocument = await category.save();

        return {...categoryDocument._doc};
    } catch (error) {
        throw error;
    }
};
