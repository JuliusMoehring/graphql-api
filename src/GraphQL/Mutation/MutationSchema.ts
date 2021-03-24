import {GraphQLBoolean, GraphQLObjectType, GraphQLNonNull, GraphQLString} from 'graphql';
import {createCategory} from './Resolvers/Category/createCategory';
import {createTrainer} from './Resolvers/Trainer/createTrainer';
import {createVideo} from './Resolvers/Video/createVideo';
import {createCourse} from './Resolvers/Course/createCourse';
import {CreateTagInputType, ICreateTagInputType} from '../Types/InputObjectTypes/Tag/CreateTagInputType';
import {validateCreateTagInputData} from '../Validation/validateCreateTagInputData';
import {createTag} from './Resolvers/Tag/createTag';
import {deleteCategory} from './Resolvers/Category/deleteCategory';
import {deleteCourse} from './Resolvers/Course/deleteCourse';
import {deleteTag} from './Resolvers/Tag/deleteTag';
import {deleteTrainer} from './Resolvers/Trainer/deleteTrainer';
import {deleteVideo} from './Resolvers/Video/deleteVideo';
import {TagObjectType} from '../Types/ObjectTypes/Tag/TagObjectType';
import {getTagFromTagDocument} from '../../Database/Helpers/Tag/getTagFromTagDocument';
import {CategoryObjectType} from '../Types/ObjectTypes/Category/CategoryObjectType';
import {CourseObjectType} from '../Types/ObjectTypes/Course/CourseObjectType';
import {TrainerObjectType} from '../Types/ObjectTypes/Trainer/TrainerObjectType';
import {VideoObjectType} from '../Types/ObjectTypes/Video/VideoObjectType';
import {
    CreateCategoryInputType,
    ICreateCategoryInputType,
} from '../Types/InputObjectTypes/Category/CreateCategoryInputType';
import {CreateCourseInputType, ICreateCourseInputType} from '../Types/InputObjectTypes/Course/CreateCourseInputType';
import {
    CreateTrainerInputType,
    ICreateTrainerInputType,
} from '../Types/InputObjectTypes/Trainer/CreateTrainerInputType';
import {CreateVideoInputType, ICreateVideoInputType} from '../Types/InputObjectTypes/Video/CreateVideoInputType';
import {getCourseFromCourseDocument} from '../../Database/Helpers/Course/getCourseFromCourseDocument';
import {getCategoryFromCategoryDocument} from '../../Database/Helpers/Category/getCategoryFromCategoryDocument';
import {getTrainerFromTrainerDocument} from '../../Database/Helpers/Trainer/getTrainerFromTrainerDocument';
import {getVideoFromVideoDocument} from '../../Database/Helpers/Video/getVideoFromVideoDocument';

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
            type: CategoryObjectType,
            args: {
                data: {
                    type: new GraphQLNonNull(CreateCategoryInputType),
                },
            },
            resolve: async (_source, args) => {
                const inputData = args.data as ICreateCategoryInputType;

                const category = await createCategory(inputData);

                return getCategoryFromCategoryDocument(category);
            },
        },
        deleteCategory: {
            type: GraphQLBoolean,
            args: {
                categoryId: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: async (_, args) => deleteCategory(args.categoryId),
        },
        createCourse: {
            type: CourseObjectType,
            args: {
                data: {
                    type: new GraphQLNonNull(CreateCourseInputType),
                },
            },
            resolve: async (_source, args) => {
                const inputData = args.data as ICreateCourseInputType;

                const course = await createCourse(inputData);

                return getCourseFromCourseDocument(course);
            },
        },
        deleteCourse: {
            type: GraphQLBoolean,
            args: {
                courseId: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: async (_, args) => deleteCourse(args.courseId),
        },
        createTag: {
            type: TagObjectType,
            args: {
                data: {
                    type: new GraphQLNonNull(CreateTagInputType),
                },
            },
            resolve: async (_source, args) => {
                const inputData = args.data as ICreateTagInputType;
                validateCreateTagInputData(inputData);

                const tag = await createTag(inputData);

                return getTagFromTagDocument(tag);
            },
        },
        deleteTag: {
            type: GraphQLBoolean,
            args: {
                tagId: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: async (_, args) => deleteTag(args.tagId),
        },
        createTrainer: {
            type: TrainerObjectType,
            args: {
                data: {
                    type: new GraphQLNonNull(CreateTrainerInputType),
                },
            },
            resolve: async (_source, args) => {
                const inputData = args.data as ICreateTrainerInputType;

                const trainer = await createTrainer(inputData);

                return getTrainerFromTrainerDocument(trainer);
            },
        },
        deleteTrainer: {
            type: GraphQLBoolean,
            args: {
                trainerId: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: async (_, args) => deleteTrainer(args.trainerId),
        },
        createVideo: {
            type: VideoObjectType,
            args: {
                data: {
                    type: new GraphQLNonNull(CreateVideoInputType),
                },
            },
            resolve: async (_source, args) => {
                const inputData = args.data as ICreateVideoInputType;

                const video = await createVideo(inputData);

                return getVideoFromVideoDocument(video);
            },
        },
        deleteVideo: {
            type: GraphQLBoolean,
            args: {
                videoId: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: async (_, args) => deleteVideo(args.videoId),
        },
    },
});
