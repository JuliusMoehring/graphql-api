import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';

export const getLocalizableSchemaDefinition = () => ({
    type: String,
    required: true,
    enum: Object.values(LocaleEnum),
});
