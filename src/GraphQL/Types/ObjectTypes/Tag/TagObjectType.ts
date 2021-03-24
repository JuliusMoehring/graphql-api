import {GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString} from 'graphql';
import {CourseObjectType} from '../Course/CourseObjectType';
import {TrainerObjectType} from '../Trainer/TrainerObjectType';
import {VideoObjectType} from '../Video/VideoObjectType';
import {
    getCreatableGraphQLType,
    getIdentifiableGraphQLType,
    getLocalizableGraphQLType,
    getUpdateableGraphQLType,
} from '../shared/ImplementableTypes';

export const LocalizedTagObjectType = new GraphQLObjectType({
    name: 'LocalizedTagObjectType',
    description: '...',
    fields: () => ({
        _id: getIdentifiableGraphQLType(),
        locale: getLocalizableGraphQLType(),
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        createdAt: getCreatableGraphQLType(),
        updatedAt: getUpdateableGraphQLType(),
    }),
});

export const TagObjectType = new GraphQLObjectType({
    name: 'TagObjectType',
    description: '...',
    fields: () => ({
        _id: getIdentifiableGraphQLType(),
        localizedFields: {
            type: new GraphQLNonNull(GraphQLList(LocalizedTagObjectType)),
        },
        courses: {
            type: new GraphQLNonNull(GraphQLList(CourseObjectType)),
        },
        trainers: {
            type: new GraphQLNonNull(GraphQLList(TrainerObjectType)),
        },
        videos: {
            type: new GraphQLNonNull(GraphQLList(VideoObjectType)),
        },
        createdAt: getCreatableGraphQLType(),
        updatedAt: getUpdateableGraphQLType(),
    }),
});
