import { client } from "lib/client";
import {
  createSubscriber,
  CreateSubscriberMutationVariables,
  SubscribeMutationVariables,
} from "@graphql";
import gql from "graphql-tag";

export const handler = async (event) => {
  const data: SubscribeMutationVariables = event.arguments;
  console.log(data);
  const variables: CreateSubscriberMutationVariables = {
    input: { email: data.email },
  };

  const result = await client.mutate({
    mutation: gql(createSubscriber),
    variables,
  });

  console.log(result);

  return result;
};
