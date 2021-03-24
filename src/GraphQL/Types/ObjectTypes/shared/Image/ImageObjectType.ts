import {GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';

export const ImageObjectType = new GraphQLObjectType({
    name: 'ImageObjectType',
    description: '...',
    fields: () => ({
        source: {
            type: new GraphQLNonNull(GraphQLString),
        },
        alt: {
            type: GraphQLString,
        },
    }),
});
