import {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {UserRoleEnumType} from '../../EnumTypes/UserRoleEnumType';
import {
    getCreatableGraphQLType,
    getIdentifiableGraphQLType,
    getUpdateableGraphQLType,
} from '../shared/ImplementableTypes';

export const UserAddressObjectType = new GraphQLObjectType({
    name: 'UserAddressObjectType',
    description: '...',
    fields: () => ({
        company: {
            type: GraphQLString,
        },
        street: {
            type: GraphQLString,
        },
        postalCode: {
            type: GraphQLString,
        },
        city: {
            type: GraphQLString,
        },
        state: {
            type: GraphQLString,
        },
        country: {
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

export const UserObjectType = new GraphQLObjectType({
    name: 'UserObjectType',
    description: '...',
    fields: () => ({
        _id: getIdentifiableGraphQLType(),
        firstName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        },
        address: {
            type: new GraphQLNonNull(UserAddressObjectType),
        },
        roles: {
            type: new GraphQLNonNull(GraphQLList(UserRoleEnumType)),
        },
        courseFavorites: {
            type: new GraphQLNonNull(GraphQLList(GraphQLString)),
        },
        createdAt: getCreatableGraphQLType(),
        updatedAt: getUpdateableGraphQLType(),
    }),
});
