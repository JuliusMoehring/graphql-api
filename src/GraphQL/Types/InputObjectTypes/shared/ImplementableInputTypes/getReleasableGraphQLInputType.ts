import {GraphQLNonNull} from 'graphql';
import {ReleaseDataInputType} from '../ReleaseData/ReleaseDataInputType';

export const getReleasableGraphQLInputType = () => ({
    type: new GraphQLNonNull(ReleaseDataInputType),
});
