import {GraphQLEnumType} from 'graphql';

export const ContentTypeEnumType = new GraphQLEnumType({
    name: 'ContentTypeEnumType',
    values: {
        FULL: {value: 'full'},
        TRAILER: {value: 'trailer'},
    },
});
