import {IMongooseResult} from '../../../shared/models/interfaces/MongooseResult/MongooseResult';
import mongoose, {Document, Schema} from 'mongoose';
import {getDefaultSchemaOptions} from '../utils/getDefaultSchemaOptions';
import {minLengthArrayValidator} from '../utils/validation';
import {getLocalizableSchemaDefinition} from '../utils/SchemaDefinitions/getLocalizableSchemaDefiniton';
import {getReleasableSchemaDefinition} from '../utils/SchemaDefinitions/getReleasableSchemaDefinition';
import {getPublishableSchemaDefinition} from '../utils/SchemaDefinitions/getPublishableSchemaDefinition';
import {getVideoSourceSchemaDefinition} from '../utils/SchemaDefinitions/getVideoSourceSchemaDefinition';
import {getImageSchemaDefinition} from '../utils/SchemaDefinitions/getImageSchemaDefinition';
import {ICourse} from '../../../shared/models/interfaces/Course/Course';
import {ILocalizedCourse} from '../../../shared/models/interfaces/Course/LocalizedCourse';

interface IMongooseLocalizedCourse extends IMongooseResult, Omit<ILocalizedCourse, '_id' | 'videos'> {
    _id: Schema.Types.ObjectId;
    videos: Schema.Types.ObjectId[];
}

export interface IMongooseCourse
    extends IMongooseResult,
        Omit<ICourse, '_id' | 'localizedFields' | 'categories' | 'tags' | 'trainers'> {
    localizedFields: IMongooseLocalizedCourse[];
    categories: Schema.Types.ObjectId[];
    tags: Schema.Types.ObjectId[];
    trainers: Schema.Types.ObjectId[];
}

const LocalizedCourseSchema = new Schema<ILocalizedCourse & Document>(
    {
        locale: getLocalizableSchemaDefinition(),
        title: {
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
        benefits: {
            type: [String],
            required: true,
            default: [],
            validate: minLengthArrayValidator(1),
        },
        image: getImageSchemaDefinition(),
        trailer: getVideoSourceSchemaDefinition(),
        videos: {
            type: [Schema.Types.ObjectId],
            ref: 'Video',
            required: true,
            default: [],
            validate: minLengthArrayValidator(1),
        },
        releaseData: getReleasableSchemaDefinition(),
        metaData: getPublishableSchemaDefinition(),
    },
    getDefaultSchemaOptions(),
);

const CourseSchema = new Schema<ICourse & Document>(
    {
        localizedFields: {
            type: [LocalizedCourseSchema],
            required: true,
            validate: minLengthArrayValidator(1),
        },
        categories: {
            type: [Schema.Types.ObjectId],
            ref: 'Category',
            required: true,
            default: [],
        },
        tags: {
            type: [Schema.Types.ObjectId],
            ref: 'Tag',
            required: true,
            default: [],
        },
        trainers: {
            type: [Schema.Types.ObjectId],
            ref: 'Trainer',
            required: true,
            default: [],
        },
    },
    getDefaultSchemaOptions(),
);

CourseSchema.index({'localizedFields.locale': 1, 'localizedFields.title': 1}, {unique: true});
CourseSchema.index({'localizedFields.locale': 1, 'localizedFields.slug': 1}, {unique: true});

export const Course = mongoose.model<IMongooseCourse>('Course', CourseSchema);
