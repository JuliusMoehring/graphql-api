import {GraphQLNonNull, GraphQLString} from 'graphql';

export const getCreatableGraphQLType = () => ({
    type: new GraphQLNonNull(GraphQLString),
});
