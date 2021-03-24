import {GraphQLObjectType, GraphQLNonNull, GraphQLString} from 'graphql';
import {RobotsEnumType} from '../../../EnumTypes/RobotsEnumType';

export const OGMetaDataObjectType = new GraphQLObjectType({
    name: 'OGMetaDataObjectType',
    description: '...',
    fields: () => ({
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

export const MetaDataObjectType = new GraphQLObjectType({
    name: 'MetaDataObjectType',
    description: '...',
    fields: () => ({
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
            type: new GraphQLNonNull(OGMetaDataObjectType),
        },
    }),
});
