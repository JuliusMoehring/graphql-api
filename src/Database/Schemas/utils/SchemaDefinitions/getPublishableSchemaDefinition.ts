import {RobotsEnum} from '../../../../shared/models/enums/RobotsEnum';

export const getPublishableSchemaDefinition = () => ({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    robots: {
        type: String,
        required: true,
        enum: Object.values(RobotsEnum),
    },
    og: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
});
