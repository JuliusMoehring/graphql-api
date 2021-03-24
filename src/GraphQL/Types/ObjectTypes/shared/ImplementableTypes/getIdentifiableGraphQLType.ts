import {GraphQLID, GraphQLNonNull} from 'graphql';

export const getIdentifiableGraphQLType = () => ({
    type: new GraphQLNonNull(GraphQLID),
});
