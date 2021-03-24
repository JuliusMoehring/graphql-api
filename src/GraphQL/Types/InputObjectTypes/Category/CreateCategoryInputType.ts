import {GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';
import {
    getLocalizableGraphQLInputType,
    getPublishableGraphQLInputType,
    getReleasableGraphQLInputType,
} from '../shared/ImplementableInputTypes';
import {IReleaseData} from '../../../../shared/models/interfaces/ReleaseData/ReleaseData';
import {IMetaDataInput} from '../shared/MetaData/MetaDataInputType';

interface ICreateLocalizedCategoryInputType {
    locale: LocaleEnum;
    name: string;
    description: string;
    slug: string;
    releaseData: IReleaseData;
    metaData: IMetaDataInput;
}

export interface ICreateCategoryInputType {
    localizedFields: ICreateLocalizedCategoryInputType[];
    parent?: string;
    children?: string[];
    courses?: string[];
    trainers?: string[];
    videos?: string[];
}

export const CreateLocalizedCategoryInputType = new GraphQLInputObjectType({
    name: 'CreateLocalizedCategoryInputType',
    description: '...',
    fields: {
        locale: getLocalizableGraphQLInputType(),
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
        },
        slug: {
            type: new GraphQLNonNull(GraphQLString),
        },
        releaseData: getReleasableGraphQLInputType(),
        metaData: getPublishableGraphQLInputType(),
    },
});

export const CreateCategoryInputType = new GraphQLInputObjectType({
    name: 'CreateCategoryInputType',
    description: '...',
    fields: {
        localizedFields: {
            type: new GraphQLNonNull(GraphQLList(CreateLocalizedCategoryInputType)),
        },
        parent: {
            type: GraphQLID,
        },
        children: {
            type: GraphQLList(GraphQLID),
        },
        courses: {
            type: GraphQLList(GraphQLID),
        },
        trainers: {
            type: GraphQLList(GraphQLID),
        },
        videos: {
            type: GraphQLList(GraphQLID),
        },
    },
});
