import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

export const ImageInputType = new GraphQLInputObjectType({
    name: 'ImageInputType',
    description: '...',
    fields: {
        source: {
            type: new GraphQLNonNull(GraphQLString),
        },
        alt: {
            type: GraphQLString,
        },
    },
});
