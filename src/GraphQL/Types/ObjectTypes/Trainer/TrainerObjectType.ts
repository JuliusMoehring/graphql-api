import {GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString} from 'graphql';
import {ImageObjectType} from '../shared/Image/ImageObjectType';
import {CourseObjectType} from '../Course/CourseObjectType';
import {VideoObjectType} from '../Video/VideoObjectType';
import {TagObjectType} from '../Tag/TagObjectType';
import {CategoryObjectType} from '../Category/CategoryObjectType';
import {
    getCreatableGraphQLType,
    getIdentifiableGraphQLType,
    getLocalizableGraphQLType,
    getPublishableGraphQLType,
    getReleasableGraphQLType,
    getUpdateableGraphQLType,
} from '../shared/ImplementableTypes';

export const LocalizedTrainerObjectType = new GraphQLObjectType({
    name: 'LocalizedTrainerObjectType',
    description: '...',
    fields: () => ({
        _id: getIdentifiableGraphQLType(),
        locale: getLocalizableGraphQLType(),
        firstName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        lastName: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
        slug: {
            type: new GraphQLNonNull(GraphQLString),
        },
        image: {
            type: new GraphQLNonNull(ImageObjectType),
        },
        releaseData: getReleasableGraphQLType(),
        metaData: getPublishableGraphQLType(),
        createdAt: getCreatableGraphQLType(),
        updatedAt: getUpdateableGraphQLType(),
    }),
});

export const TrainerObjectType = new GraphQLObjectType({
    name: 'TrainerObjectType',
    description: '...',
    fields: () => ({
        _id: getIdentifiableGraphQLType(),
        localizedFields: {
            type: new GraphQLNonNull(GraphQLList(LocalizedTrainerObjectType)),
        },
        categories: {
            type: new GraphQLNonNull(GraphQLList(CategoryObjectType)),
        },
        courses: {
            type: new GraphQLNonNull(GraphQLList(CourseObjectType)),
        },
        tags: {
            type: new GraphQLNonNull(GraphQLList(TagObjectType)),
        },
        videos: {
            type: new GraphQLNonNull(GraphQLList(VideoObjectType)),
        },
        createdAt: getCreatableGraphQLType(),
        updatedAt: getUpdateableGraphQLType(),
    }),
});
