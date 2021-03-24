import {GraphQLNonNull} from 'graphql';
import {ReleaseDataObjectType} from '../ReleaseData/ReleaseDataObjectType';

export const getReleasableGraphQLType = () => ({
    type: new GraphQLNonNull(ReleaseDataObjectType),
});
