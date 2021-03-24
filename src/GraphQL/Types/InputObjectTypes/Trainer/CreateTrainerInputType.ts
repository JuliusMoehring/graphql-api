import {GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import {ImageInputType} from '../shared/Image/ImageInputType';
import {
    getLocalizableGraphQLInputType,
    getPublishableGraphQLInputType,
    getReleasableGraphQLInputType,
} from '../shared/ImplementableInputTypes';
import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';
import {IImage} from '../../../../shared/models/interfaces/Image/Image';
import {IReleaseData} from '../../../../shared/models/interfaces/ReleaseData/ReleaseData';
import {IMetaDataInput} from '../shared/MetaData/MetaDataInputType';

interface ICreateLocalizedTrainerInputType {
    locale: LocaleEnum;
    firstName: string;
    lastName: string;
    description: string;
    slug: string;
    image: IImage;
    releaseData: IReleaseData;
    metaData: IMetaDataInput;
}

export interface ICreateTrainerInputType {
    localizedFields: ICreateLocalizedTrainerInputType[];
    categories?: string[];
    courses?: string[];
    tags?: string[];
    videos?: string[];
}

export const CreateLocalizedTrainerInputType = new GraphQLInputObjectType({
    name: 'CreateLocalizedTrainerInputType',
    description: '...',
    fields: {
        locale: getLocalizableGraphQLInputType(),
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
            type: new GraphQLNonNull(ImageInputType),
        },
        releaseData: getReleasableGraphQLInputType(),
        metaData: getPublishableGraphQLInputType(),
    },
});

export const CreateTrainerInputType = new GraphQLInputObjectType({
    name: 'CreateTrainerInputType',
    description: '...',
    fields: {
        localizedFields: {
            type: new GraphQLNonNull(GraphQLList(CreateLocalizedTrainerInputType)),
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
        videos: {
            type: GraphQLList(GraphQLID),
        },
    },
});
