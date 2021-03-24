import {GraphQLEnumType} from 'graphql';

export const LocaleEnumType = new GraphQLEnumType({
    name: 'LocaleEnumType',
    values: {
        EN: {value: 'en'},
        DE: {value: 'de'},
    },
});
