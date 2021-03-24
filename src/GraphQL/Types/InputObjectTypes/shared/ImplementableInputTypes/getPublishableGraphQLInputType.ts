import {GraphQLNonNull} from 'graphql';
import {MetaDataInputType} from '../MetaData/MetaDataInputType';

export const getPublishableGraphQLInputType = () => ({
    type: new GraphQLNonNull(MetaDataInputType),
});
