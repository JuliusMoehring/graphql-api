import {ContentTypeEnum} from '../../../../shared/models/enums/ContentTypeEnum';

export const getVideoSourceSchemaDefinition = () => ({
    contentType: {
        type: String,
        required: true,
        enum: Object.values(ContentTypeEnum),
    },
    source: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
});
