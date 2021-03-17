import {SchemaOptions} from 'mongoose';

export const getDefaultSchemaOptions = (): SchemaOptions => ({
    timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'},
});
