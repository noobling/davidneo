/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubscriber = /* GraphQL */ `
  query GetSubscriber($email: String!) {
    getSubscriber(email: $email) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const listSubscribers = /* GraphQL */ `
  query ListSubscribers(
    $email: String
    $filter: ModelSubscriberFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSubscribers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
