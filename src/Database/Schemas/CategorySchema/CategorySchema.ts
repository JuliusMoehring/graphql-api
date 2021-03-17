import mongoose, {Document, Schema} from 'mongoose';
import {minLengthArrayValidator} from '../utils/validation';
import {getDefaultSchemaOptions} from '../utils/getDefaultSchemaOptions';
import {IMongooseResult} from '../../../shared/models/interfaces/MongooseResult/MongooseResult';
import {ICategory} from '../../../shared/models/interfaces/Category/Category';
import {ILocalizedCategory} from '../../../shared/models/interfaces/Category/LocalizedCategory';
import {getLocalizableSchemaDefinition} from '../utils/SchemaDefinitions/getLocalizableSchemaDefiniton';
import {getReleasableSchemaDefinition} from '../utils/SchemaDefinitions/getReleasableSchemaDefinition';
import {getPublishableSchemaDefinition} from '../utils/SchemaDefinitions/getPublishableSchemaDefinition';

interface IMongooseCategory extends IMongooseResult, ICategory {}

const LocalizedCategorySchema = new Schema<ILocalizedCategory & Document>(
    {
        locale: getLocalizableSchemaDefinition(),
        name: {
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
        releaseData: getReleasableSchemaDefinition(),
        metaData: getPublishableSchemaDefinition(),
    },
    getDefaultSchemaOptions(),
);

const CategorySchema = new Schema<ICategory & Document>(
    {
        localizedFields: {
            type: [LocalizedCategorySchema],
            required: true,
            validate: minLengthArrayValidator(1),
        },
        children: {
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
        trainers: {
            type: [Schema.Types.ObjectId],
            ref: 'Trainers',
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

CategorySchema.index({'localizedFields.locale': 1, 'localizedFields.name': 1}, {unique: true});
CategorySchema.index({'localizedFields.locale': 1, 'localizedFields.slug': 1}, {unique: true});

export const Category = mongoose.model<IMongooseCategory>('Category', CategorySchema);
