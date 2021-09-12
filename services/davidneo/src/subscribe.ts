import { client } from "lib/client";
import {
  createSubscriber,
  CreateSubscriberMutationVariables,
  getSubscriber,
  GetSubscriberQuery,
  GetSubscriberQueryVariables,
  SubscribeMutationVariables,
  SubscribeResponse,
  SubscribeStatus,
} from "@graphql";
import gql from "graphql-tag";

export const handler = async (event) => {
  const data: SubscribeMutationVariables = event.arguments;
  console.log(data);
  const variables: CreateSubscriberMutationVariables = {
    input: { email: data.email },
  };
  const getSubVariables: GetSubscriberQueryVariables = {
    email: data.email,
  };
  const found = await client.query<GetSubscriberQuery>({
    query: gql(getSubscriber),
    variables: getSubVariables,
    fetchPolicy: "network-only",
  });
  const exists = found?.data?.getSubscriber;
  console.log(found);
  if (exists)
    return {
      status: SubscribeStatus.EXISTS,
      message: `${data.email} already exists`,
    };

  await client.mutate({
    mutation: gql(createSubscriber),
    variables,
  });

  return {
    status: SubscribeStatus.SUCCESS,
    message: "Subscribed",
  };
};
