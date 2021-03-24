import {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {ImageObjectType} from '../shared/Image/ImageObjectType';
import {VideoSourceObjectType} from '../shared/VideoSource/VideoSourceObjectType';
import {CategoryObjectType} from '../Category/CategoryObjectType';
import {CourseObjectType} from '../Course/CourseObjectType';
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

export const LocalizedVideoObjectType = new GraphQLObjectType({
    name: 'LocalizedVideoObjectType',
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
        benefits: {
            type: new GraphQLNonNull(GraphQLList(GraphQLString)),
        },
        slug: {
            type: new GraphQLNonNull(GraphQLString),
        },
        image: {
            type: new GraphQLNonNull(ImageObjectType),
        },
        sources: {
            type: new GraphQLNonNull(GraphQLList(VideoSourceObjectType)),
        },
        releaseData: getReleasableGraphQLType(),
        metaData: getPublishableGraphQLType(),
        createdAt: getCreatableGraphQLType(),
        updatedAt: getUpdateableGraphQLType(),
    }),
});

export const VideoObjectType = new GraphQLObjectType({
    name: 'VideoObjectType',
    description: '...',
    fields: () => ({
        _id: getIdentifiableGraphQLType(),
        localizedFields: {
            type: new GraphQLNonNull(GraphQLList(LocalizedVideoObjectType)),
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
        trainers: {
            type: new GraphQLNonNull(GraphQLList(TrainerObjectType)),
        },
        createdAt: getCreatableGraphQLType(),
        updatedAt: getUpdateableGraphQLType(),
    }),
});
