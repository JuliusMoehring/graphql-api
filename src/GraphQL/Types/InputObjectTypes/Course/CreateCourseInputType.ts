import {GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import {
    getLocalizableGraphQLInputType,
    getPublishableGraphQLInputType,
    getReleasableGraphQLInputType,
} from '../shared/ImplementableInputTypes';
import {VideoSourceInputType} from '../shared/VideoSource/VideoSourceInputType';
import {ImageInputType} from '../shared/Image/ImageInputType';
import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';
import {IImage} from '../../../../shared/models/interfaces/Image/Image';
import {IVideoSource} from '../../../../shared/models/interfaces/VideoSource/VideoSource';
import {IReleaseData} from '../../../../shared/models/interfaces/ReleaseData/ReleaseData';
import {IMetaDataInput} from '../shared/MetaData/MetaDataInputType';

interface ICreateLocalizedCourseInputType {
    locale: LocaleEnum;
    title: string;
    description: string;
    slug: string;
    benefits: string[];
    image: IImage;
    trailer: IVideoSource;
    videos: string[];
    releaseData: IReleaseData;
    metaData: IMetaDataInput;
}

export interface ICreateCourseInputType {
    localizedFields: ICreateLocalizedCourseInputType[];
    categories?: string[];
    tags?: string[];
    trainers?: string[];
}

export const CreateLocalizedCourseInputType = new GraphQLInputObjectType({
    name: 'CreateLocalizedCourseInputType',
    description: '...',
    fields: {
        locale: getLocalizableGraphQLInputType(),
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
            type: new GraphQLNonNull(ImageInputType),
        },
        trailer: {
            type: new GraphQLNonNull(VideoSourceInputType),
        },
        videos: {
            type: new GraphQLNonNull(GraphQLList(GraphQLID)),
        },
        releaseData: getReleasableGraphQLInputType(),
        metaData: getPublishableGraphQLInputType(),
    },
});

export const CreateCourseInputType = new GraphQLInputObjectType({
    name: 'CreateCourseInputType',
    description: '...',
    fields: {
        localizedFields: {
            type: new GraphQLNonNull(GraphQLList(CreateLocalizedCourseInputType)),
        },
        categories: {
            type: GraphQLList(GraphQLID),
        },
        tags: {
            type: GraphQLList(GraphQLID),
        },
        trainers: {
            type: GraphQLList(GraphQLID),
        },
    },
});
