import {GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import {
    getLocalizableGraphQLInputType,
    getPublishableGraphQLInputType,
    getReleasableGraphQLInputType,
} from '../shared/ImplementableInputTypes';
import {ImageInputType} from '../shared/Image/ImageInputType';
import {VideoSourceInputType} from '../shared/VideoSource/VideoSourceInputType';
import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';
import {IVideoSource} from '../../../../shared/models/interfaces/VideoSource/VideoSource';
import {IImage} from '../../../../shared/models/interfaces/Image/Image';
import {IReleaseData} from '../../../../shared/models/interfaces/ReleaseData/ReleaseData';
import {IMetaDataInput} from '../shared/MetaData/MetaDataInputType';

interface ICreateLocalizedVideoInputType {
    locale: LocaleEnum;
    title: string;
    description: string;
    benefits: string[];
    slug: string;
    image: IImage;
    sources: IVideoSource[];
    releaseData: IReleaseData;
    metaData: IMetaDataInput;
}

export interface ICreateVideoInputType {
    localizedFields: ICreateLocalizedVideoInputType[];
    categories?: string[];
    courses?: string[];
    tags?: string[];
    trainers?: string[];
}

export const CreateLocalizedVideoInputType = new GraphQLInputObjectType({
    name: 'CreateLocalizedVideoInputType',
    description: '...',
    fields: {
        locale: getLocalizableGraphQLInputType(),
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
            type: new GraphQLNonNull(ImageInputType),
        },
        sources: {
            type: new GraphQLNonNull(GraphQLList(VideoSourceInputType)),
        },
        releaseData: getReleasableGraphQLInputType(),
        metaData: getPublishableGraphQLInputType(),
    },
});

export const CreateVideoInputType = new GraphQLInputObjectType({
    name: 'CreateVideoInputType',
    description: '...',
    fields: {
        localizedFields: {
            type: new GraphQLNonNull(GraphQLList(CreateLocalizedVideoInputType)),
        },
        categories: {
            type: GraphQLList(GraphQLID),
        },
        courses: {
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
