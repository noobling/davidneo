/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type SubscribeResponse = {
  __typename: "SubscribeResponse",
  status: SubscribeStatus,
  message?: string | null,
};

export enum SubscribeStatus {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  EXISTS = "EXISTS",
}


export type CreateSubscriberInput = {
  id?: string | null,
  email: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelSubscriberConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubscriberConditionInput | null > | null,
  or?: Array< ModelSubscriberConditionInput | null > | null,
  not?: ModelSubscriberConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Subscriber = {
  __typename: "Subscriber",
  id: string,
  email: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSubscriberInput = {
  id?: string | null,
  email: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteSubscriberInput = {
  email: string,
};

export type ModelSubscriberFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubscriberFilterInput | null > | null,
  or?: Array< ModelSubscriberFilterInput | null > | null,
  not?: ModelSubscriberFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriberConnection = {
  __typename: "ModelSubscriberConnection",
  items?:  Array<Subscriber | null > | null,
  nextToken?: string | null,
};

export type SubscribeMutationVariables = {
  email: string,
};

export type SubscribeMutation = {
  subscribe:  {
    __typename: "SubscribeResponse",
    status: SubscribeStatus,
    message?: string | null,
  },
};

export type CreateSubscriberMutationVariables = {
  input: CreateSubscriberInput,
  condition?: ModelSubscriberConditionInput | null,
};

export type CreateSubscriberMutation = {
  createSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubscriberMutationVariables = {
  input: UpdateSubscriberInput,
  condition?: ModelSubscriberConditionInput | null,
};

export type UpdateSubscriberMutation = {
  updateSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubscriberMutationVariables = {
  input: DeleteSubscriberInput,
  condition?: ModelSubscriberConditionInput | null,
};

export type DeleteSubscriberMutation = {
  deleteSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSubscriberQueryVariables = {
  email: string,
};

export type GetSubscriberQuery = {
  getSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubscribersQueryVariables = {
  email?: string | null,
  filter?: ModelSubscriberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSubscribersQuery = {
  listSubscribers?:  {
    __typename: "ModelSubscriberConnection",
    items?:  Array< {
      __typename: "Subscriber",
      id: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSubscriberSubscription = {
  onCreateSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubscriberSubscription = {
  onUpdateSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubscriberSubscription = {
  onDeleteSubscriber?:  {
    __typename: "Subscriber",
    id: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
