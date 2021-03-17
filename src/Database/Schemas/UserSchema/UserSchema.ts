import mongoose, {Document, Schema} from 'mongoose';
import {getDefaultSchemaOptions} from '../utils/getDefaultSchemaOptions';
import {IMongooseResult} from '../../../shared/models/interfaces/MongooseResult/MongooseResult';
import {IUser} from '../../../shared/models/interfaces/User/User';
import {getUserRolesSchemaDefinition} from '../utils/getUserRolesSchemaDefinition';
import {getUserAddressSchemaDefinition} from '../utils/getUserAddressSchemaDefinition';

interface IMongooseUser extends IMongooseResult, IUser {}

const UserSchema = new Schema<IUser & Document>(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: getUserAddressSchemaDefinition(),
        roles: {
            type: [getUserRolesSchemaDefinition()],
            required: true,
            default: [],
        },
        courseFavorites: {
            type: [Schema.Types.ObjectId],
            ref: 'Course',
            required: true,
            default: [],
        },
    },
    getDefaultSchemaOptions(),
);

UserSchema.index({email: 1}, {unique: true});

export const User = mongoose.model<IMongooseUser>('User', UserSchema);
