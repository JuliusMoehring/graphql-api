import mongoose, {Document, Schema} from 'mongoose';
import {ILocalizedTag} from '../../../shared/models/interfaces/Tag/LocalizedTag';
import {ITag} from '../../../shared/models/interfaces/Tag/Tag';
import {minLengthArrayValidator} from '../utils/validation';
import {getDefaultSchemaOptions} from '../utils/getDefaultSchemaOptions';
import {IMongooseResult} from '../../../shared/models/interfaces/MongooseResult/MongooseResult';
import {getLocalizableSchemaDefinition} from '../utils/getLocalizableSchemaDefiniton';

interface IMongooseTag extends IMongooseResult, ITag {}

const LocalizedTagSchema = new Schema<ILocalizedTag & Document>(
    {
        locale: getLocalizableSchemaDefinition(),
        name: {
            type: String,
            required: true,
        },
    },
    getDefaultSchemaOptions(),
);

const TagSchema = new Schema<ITag & Document>(
    {
        localizedFields: {
            type: [LocalizedTagSchema],
            required: true,
            validate: minLengthArrayValidator(1),
        },
        courses: {
            type: [Schema.Types.ObjectId],
            ref: 'Course',
            required: true,
            default: [],
        },
        trainers: {
            type: [Schema.Types.ObjectId],
            ref: 'Trainer',
            required: true,
            default: [],
        },
        videos: {
            type: [Schema.Types.ObjectId],
            ref: 'Video',
            required: true,
            default: [],
        },
    },
    getDefaultSchemaOptions(),
);

TagSchema.index({'localizedFields.locale': 1, 'localizedFields.name': 1}, {unique: true});

export const Tag = mongoose.model<IMongooseTag>('Tag', TagSchema);
