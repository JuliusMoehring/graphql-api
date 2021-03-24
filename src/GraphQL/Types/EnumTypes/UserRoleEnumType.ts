import {GraphQLEnumType} from 'graphql';

export const UserRoleEnumType = new GraphQLEnumType({
    name: 'UserRoleEnumType',
    values: {
        ADMIN: {value: 'admin'},
    },
});
