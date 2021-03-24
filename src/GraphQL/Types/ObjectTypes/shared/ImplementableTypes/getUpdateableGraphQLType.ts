import {GraphQLNonNull, GraphQLString} from 'graphql';

export const getUpdateableGraphQLType = () => ({
    type: new GraphQLNonNull(GraphQLString),
});
