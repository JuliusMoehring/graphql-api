import {GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';
import {ContentTypeEnumType} from '../../../EnumTypes/ContentTypeEnumType';

export const VideoSourceInputType = new GraphQLInputObjectType({
    name: 'VideoSourceInputType',
    description: '...',
    fields: {
        contentType: {
            type: new GraphQLNonNull(ContentTypeEnumType),
        },
        source: {
            type: new GraphQLNonNull(GraphQLString),
        },
        duration: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
});
