import {Schema} from 'mongoose';

export interface Identifiable {
    _id: Schema.Types.ObjectId | string;
}
