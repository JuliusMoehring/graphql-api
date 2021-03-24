import {GraphQLEnumType} from 'graphql';

export const RobotsEnumType = new GraphQLEnumType({
    name: 'RobotsEnumType',
    values: {
        INDEX_FOLLOW: {value: 'index, follow'},
        INDEX_NOFOLLOW: {value: 'index, nofollow'},
        NOINDEX_FOLLOW: {value: 'noindex, follow'},
        NOINDEX_NOFOLLOW: {value: 'noindex, nofollow'},
    },
});
