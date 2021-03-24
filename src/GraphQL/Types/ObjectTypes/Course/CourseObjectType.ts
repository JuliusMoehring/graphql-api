import {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {ImageObjectType} from '../shared/Image/ImageObjectType';
import {VideoSourceObjectType} from '../shared/VideoSource/VideoSourceObjectType';
import {VideoObjectType} from '../Video/VideoObjectType';
import {CategoryObjectType} from '../Category/CategoryObjectType';
import {TagObjectType} from '../Tag/TagObjectType';
import {TrainerObjectType} from '../Trainer/TrainerObjectType';
import {
    getCreatableGraphQLType,
    getIdentifiableGraphQLType,
    getLocalizableGraphQLType,
    getPublishableGraphQLType,
    getReleasableGraphQLType,
    getUpdateableGraphQLType,
} from '../shared/ImplementableTypes';

export const LocalizedCourseObjectType = new GraphQLObjectType({
    name: 'LocalizedCourseObjectType',
    description: '...',
    fields: () => ({
        _id: getIdentifiableGraphQLType(),
        locale: getLocalizableGraphQLType(),
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
        slug: {
            type: new GraphQLNonNull(GraphQLString),
        },
        benefits: {
            type: new GraphQLNonNull(GraphQLList(GraphQLString)),
        },
        image: {
            type: new GraphQLNonNull(ImageObjectType),
        },
        trailer: {
            type: new GraphQLNonNull(VideoSourceObjectType),
        },
        videos: {
            type: new GraphQLNonNull(GraphQLList(VideoObjectType)),
        },
        releaseData: getReleasableGraphQLType(),
        metaData: getPublishableGraphQLType(),
        updatedAt: getUpdateableGraphQLType(),
        createdAt: getCreatableGraphQLType(),
    }),
});

export const CourseObjectType = new GraphQLObjectType({
    name: 'CourseObjectType',
    description: '...',
    fields: () => ({
        _id: getIdentifiableGraphQLType(),
        localizedFields: {
            type: new GraphQLNonNull(GraphQLList(LocalizedCourseObjectType)),
        },
        categories: {
            type: new GraphQLNonNull(GraphQLList(CategoryObjectType)),
        },
        tags: {
            type: new GraphQLNonNull(GraphQLList(TagObjectType)),
        },
        trainers: {
            type: new GraphQLNonNull(GraphQLList(TrainerObjectType)),
        },
        updatedAt: getUpdateableGraphQLType(),
        createdAt: getCreatableGraphQLType(),
    }),
});
