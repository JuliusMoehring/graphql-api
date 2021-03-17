import {Document} from 'mongoose';

export interface IMongooseResult extends Document {
    _doc: any;
}
