import {GraphQLSchema} from 'graphql';
import {QuerySchema} from "./Query/QuerySchema";
import {MutationSchema} from "./Mutation/MutationSchema";
import {SubscriptionSchema} from "./Subscription/SubscriptionSchema";


export const Schema = new GraphQLSchema({
    query: QuerySchema,
    mutation: MutationSchema,
    subscription: SubscriptionSchema,
});
