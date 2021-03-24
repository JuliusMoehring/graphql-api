import {GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLString, GraphQLID} from 'graphql';
import {LocaleEnum} from '../../../../shared/models/enums/LocaleEnum';
import {getLocalizableGraphQLInputType} from '../shared/ImplementableInputTypes';

interface ICreateLocalizedTagInputType {
    locale: LocaleEnum;
    name: string;
}

export interface ICreateTagInputType {
    localizedFields: ICreateLocalizedTagInputType[];
    courses?: string[];
    trainers?: string[];
    videos?: string[];
}

const CreateLocalizedTagInputType = new GraphQLInputObjectType({
    name: 'CreateLocalizedTagInputType',
    description: '...',
    fields: {
        locale: getLocalizableGraphQLInputType(),
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
});

export const CreateTagInputType = new GraphQLInputObjectType({
    name: 'CreateTagInputType',
    description: '...',
    fields: {
        localizedFields: {
            type: new GraphQLNonNull(GraphQLList(CreateLocalizedTagInputType)),
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
