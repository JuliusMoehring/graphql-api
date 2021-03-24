import {GraphQLNonNull} from 'graphql';
import {MetaDataObjectType} from '../MetaData/MetaDataObjectType';

export const getPublishableGraphQLType = () => ({
    type: new GraphQLNonNull(MetaDataObjectType),
});
