import {GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt} from 'graphql';
import {ContentTypeEnumType} from '../../../EnumTypes/ContentTypeEnumType';

export const VideoSourceObjectType = new GraphQLObjectType({
    name: 'VideoSourceObjectType',
    description: '...',
    fields: () => ({
        contentType: {
            type: new GraphQLNonNull(ContentTypeEnumType),
        },
        source: {
            type: new GraphQLNonNull(GraphQLString),
        },
        duration: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    }),
});
