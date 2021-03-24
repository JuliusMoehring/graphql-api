import {GraphQLBoolean, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull} from 'graphql';

export const ReleaseDataInputType = new GraphQLInputObjectType({
    name: 'ReleaseDataInputType',
    description: '...',
    fields: {
        released: {
            type: new GraphQLNonNull(GraphQLBoolean),
        },
        releaseDate: {
            type: GraphQLInt,
        },
    },
});
