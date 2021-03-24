import {Category, IMongooseCategory} from '../../../../Database/Schemas/CategorySchema/CategorySchema';
import {ICreateCategoryInputType} from '../../../Types/InputObjectTypes/Category/CreateCategoryInputType';

export const createCategory = async (inputData: ICreateCategoryInputType): Promise<IMongooseCategory> => {
    try {
        const category = new Category({
            localizedFields: inputData.localizedFields.map(locale => ({
                locale: locale.locale,
                name: locale.name,
                description: locale.description,
                slug: locale.slug,
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
            })),
            courses: inputData.courses || [],
            trainers: inputData.trainers || [],
            videos: inputData.videos || [],
        });

        const categoryDocument = await category.save();

        return categoryDocument;
    } catch (error) {
        throw error;
    }
};
