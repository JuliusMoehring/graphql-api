import {GraphQLObjectType, GraphQLString} from 'graphql';

/*
TODO Queries:

Category:

--> category
--> categories

Course:

--> course
--> courses

Tag:

--> tag
--> tags

Trainer:

--> trainer
--> trainers

User:

--> user

Video:

--> video
--> videos
 */

export const QuerySchema = new GraphQLObjectType({
    name: 'QuerySchema',
    description: '...',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'World!',
        },
    },
});
