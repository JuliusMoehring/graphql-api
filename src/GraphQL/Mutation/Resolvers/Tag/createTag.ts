import {Tag} from '../../../../Database/Schemas/TagSchema/TagSchema';
import {ITag} from '../../../../shared/models/interfaces/Tag/Tag';
import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';

export const createTag = async (): Promise<ITag> => {
    try {
        const tag = new Tag({
            localizedFields: [
                {locale: LocaleEnum.DE, name: 'Tag'},
                {locale: LocaleEnum.EN, name: 'Tag'},
            ],
        } as ITag);

        const tagDocument = await tag.save();

        return {...tagDocument._doc};
    } catch (error) {
        throw error;
    }
};
