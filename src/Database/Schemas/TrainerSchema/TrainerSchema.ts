import {IMongooseResult} from '../../../shared/models/interfaces/MongooseResult/MongooseResult';
import mongoose, {Document, Schema} from 'mongoose';
import {getDefaultSchemaOptions} from '../utils/getDefaultSchemaOptions';
import {minLengthArrayValidator} from '../utils/validation';
import {ITrainer} from '../../../shared/models/interfaces/Trainer/Trainer';
import {ILocalizedTrainer} from '../../../shared/models/interfaces/Trainer/LocalizedTrainer';
import {getLocalizableSchemaDefinition} from '../utils/SchemaDefinitions/getLocalizableSchemaDefiniton';
import {getReleasableSchemaDefinition} from '../utils/SchemaDefinitions/getReleasableSchemaDefinition';
import {getPublishableSchemaDefinition} from '../utils/SchemaDefinitions/getPublishableSchemaDefinition';
import {getImageSchemaDefinition} from '../utils/SchemaDefinitions/getImageSchemaDefinition';

interface IMongooseTrainer extends IMongooseResult, ITrainer {}

const LocalizedTrainerSchema = new Schema<ILocalizedTrainer & Document>(
    {
        locale: getLocalizableSchemaDefinition(),
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        image: getImageSchemaDefinition(),
        releaseData: getReleasableSchemaDefinition(),
        metaData: getPublishableSchemaDefinition(),
    },
    getDefaultSchemaOptions(),
);

const TrainerSchema = new Schema<ITrainer & Document>(
    {
        localizedFields: {
            type: [LocalizedTrainerSchema],
            required: true,
            validate: minLengthArrayValidator(1),
        },
        categories: {
            type: [Schema.Types.ObjectId],
            ref: 'Category',
            required: true,
            default: [],
        },
        courses: {
            type: [Schema.Types.ObjectId],
            ref: 'Course',
            required: true,
            default: [],
        },
        videos: {
            type: [Schema.Types.ObjectId],
            ref: 'Videos',
            required: true,
            default: [],
        },
    },
    getDefaultSchemaOptions(),
);

TrainerSchema.index(
    {'localizedFields.locale': 1, 'localizedFields.firstName': 1, 'localizedFields.lastName': 1},
    {unique: true},
);
TrainerSchema.index({'localizedFields.locale': 1, 'localizedFields.slug': 1}, {unique: true});

export const Trainer = mongoose.model<IMongooseTrainer>('Trainer', TrainerSchema);
