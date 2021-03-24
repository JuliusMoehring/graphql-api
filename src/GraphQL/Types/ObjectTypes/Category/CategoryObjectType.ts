import {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {CourseObjectType} from '../Course/CourseObjectType';
import {TrainerObjectType} from '../Trainer/TrainerObjectType';
import {VideoObjectType} from '../Video/VideoObjectType';
import {
    getCreatableGraphQLType,
    getIdentifiableGraphQLType,
    getLocalizableGraphQLType,
    getPublishableGraphQLType,
    getReleasableGraphQLType,
    getUpdateableGraphQLType,
} from '../shared/ImplementableTypes';

export const LocalizedCategoryObjectType = new GraphQLObjectType({
    name: 'LocalizedCategoryObjectType',
    description: '...',
    fields: () => ({
        _id: getIdentifiableGraphQLType(),
        locale: getLocalizableGraphQLType(),
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
        slug: {
            type: new GraphQLNonNull(GraphQLString),
        },
        releaseData: getReleasableGraphQLType(),
        metaData: getPublishableGraphQLType(),
        createdAt: getCreatableGraphQLType(),
        updatedAt: getUpdateableGraphQLType(),
    }),
});

export const CategoryObjectType = new GraphQLObjectType({
    name: 'CategoryObjectType',
    description: '...',
    fields: () => ({
        _id: getIdentifiableGraphQLType(),
        localizedFields: {
            type: new GraphQLNonNull(GraphQLList(LocalizedCategoryObjectType)),
        },
        children: {
            type: new GraphQLNonNull(GraphQLList(CategoryObjectType)),
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
