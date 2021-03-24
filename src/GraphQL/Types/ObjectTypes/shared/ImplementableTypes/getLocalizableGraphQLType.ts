import {GraphQLNonNull} from 'graphql';
import {LocaleEnumType} from '../../../EnumTypes/LocaleEnumType';

export const getLocalizableGraphQLType = () => ({
    type: new GraphQLNonNull(LocaleEnumType),
});
