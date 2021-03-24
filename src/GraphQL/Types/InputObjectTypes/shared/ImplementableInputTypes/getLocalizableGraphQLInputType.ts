import {GraphQLNonNull} from 'graphql';
import {LocaleEnumType} from '../../../EnumTypes/LocaleEnumType';

export const getLocalizableGraphQLInputType = () => ({
    type: new GraphQLNonNull(LocaleEnumType),
});
