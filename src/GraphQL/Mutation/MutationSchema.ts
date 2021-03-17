import {GraphQLBoolean, GraphQLObjectType} from 'graphql';
import {createTag} from './Resolvers/Tag/createTag';
import {createCategory} from './Resolvers/Category/createCategory';
import {createTrainer} from './Resolvers/Trainer/createTrainer';
import {createVideo} from './Resolvers/Video/createVideo';
import {createCourse} from './Resolvers/Course/createCourse';

/*
TODO Mutations:

Category:

--> createCategory
--> updateCategory
--> deleteCategory

Course:

--> createCourse
--> updateCourse
--> deleteCourse

Tag:

--> createTag
--> updateTag
--> deleteTag

Trainer:

--> createTrainer
--> updateTrainer
--> deleteTrainer

User:

--> createUser
--> logInUser
--> logOutUser
--> updateUser
--> deleteUser

Video:

--> createVideo
--> updateVideo
--> deleteVideo

 */

export const MutationSchema = new GraphQLObjectType({
    name: 'MutationSchema',
    description: '...',
    fields: {
        createCategory: {
            type: GraphQLBoolean,
            resolve: async (_source, _args) => {
                const category = await createCategory();
                console.log(category);
                return true;
            },
        },
        createCourse: {
            type: GraphQLBoolean,
            resolve: async (_source, _args) => {
                const course = await createCourse();
                console.log(course);
                return true;
            },
        },
        createTag: {
            type: GraphQLBoolean,
            resolve: async (_source, _args) => {
                const tag = await createTag();
                console.log(tag);
                return true;
            },
        },
        createTrainer: {
            type: GraphQLBoolean,
            resolve: async (_source, _args) => {
                const trainer = await createTrainer();
                console.log(trainer);
                return true;
            },
        },
        createVideo: {
            type: GraphQLBoolean,
            resolve: async (_source, _args) => {
                const video = await createVideo();
                console.log(video);
                return true;
            },
        },
    },
});
