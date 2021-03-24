import {GraphQLBoolean, GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';

export const ReleaseDataObjectType = new GraphQLObjectType({
    name: 'ReleaseDataObjectType',
    description: '...',
    fields: () => ({
        released: {
            type: new GraphQLNonNull(GraphQLBoolean),
        },
        releaseDate: {
            type: GraphQLString,
        },
    }),
});
