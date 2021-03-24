import {Document, Schema} from 'mongoose';

export interface IMongooseResult extends Document {
    _id: Schema.Types.ObjectId;
    _doc: any;
}
