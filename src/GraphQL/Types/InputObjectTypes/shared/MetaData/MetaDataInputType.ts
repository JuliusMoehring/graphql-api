import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from 'graphql';
import {RobotsEnumType} from '../../../EnumTypes/RobotsEnumType';
import {RobotsEnum} from '../../../../../shared/models/enums/RobotsEnum';

export interface IOGMetaDataInput {
    title?: string;
    description?: string;
}

export interface IMetaDataInput {
    title: string;
    description: string;
    robots: RobotsEnum;
    og?: IOGMetaDataInput;
}

export const OGMetaDataInputType = new GraphQLInputObjectType({
    name: 'OGMetaDataInputType',
    description: '...',
    fields: {
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
    },
});

export const MetaDataInputType = new GraphQLInputObjectType({
    name: 'MetaDataInputType',
    description: '...',
    fields: {
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
        robots: {
            type: new GraphQLNonNull(RobotsEnumType),
        },
        og: {
            type: OGMetaDataInputType,
        },
    },
});
