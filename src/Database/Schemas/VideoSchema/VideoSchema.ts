import {IMongooseResult} from '../../../shared/models/interfaces/MongooseResult/MongooseResult';
import mongoose, {Document, Schema} from 'mongoose';
import {getDefaultSchemaOptions} from '../utils/getDefaultSchemaOptions';
import {minLengthArrayValidator} from '../utils/validation';
import {getLocalizableSchemaDefinition} from '../utils/getLocalizableSchemaDefiniton';
import {getReleasableSchemaDefinition} from '../utils/getReleasableSchemaDefinition';
import {getPublishableSchemaDefinition} from '../utils/getPublishableSchemaDefinition';
import {IVideo} from '../../../shared/models/interfaces/Video/Video';
import {ILocalizedVideo} from '../../../shared/models/interfaces/Video/LocalizedVideo';
import {getVideoSourceSchemaDefinition} from '../utils/getVideoSourceSchemaDefinition';
import {getImageSchemaDefinition} from '../utils/getImageSchemaDefinition';

interface IMongooseVideo extends IMongooseResult, IVideo {}

const LocalizedVideoSchema = new Schema<ILocalizedVideo & Document>(
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
        benefits: {
            type: [String],
            required: true,
            default: [],
            validate: minLengthArrayValidator(1),
        },
        slug: {
            type: String,
            required: false,
        },
        image: getImageSchemaDefinition(),
        sources: {
            type: [getVideoSourceSchemaDefinition()],
            required: true,
            default: [],
            validate: minLengthArrayValidator(1),
        },
        releaseData: getReleasableSchemaDefinition(),
        metaData: getPublishableSchemaDefinition(),
    },
    getDefaultSchemaOptions(),
);

const VideoSchema = new Schema<IVideo & Document>(
    {
        localizedFields: {
            type: [LocalizedVideoSchema],
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

VideoSchema.index({'localizedFields.locale': 1, 'localizedFields.title': 1}, {unique: true});
VideoSchema.index({'localizedFields.locale': 1, 'localizedFields.slug': 1}, {unique: true});

export const Video = mongoose.model<IMongooseVideo>('Video', VideoSchema);
