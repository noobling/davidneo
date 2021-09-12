import { API } from "aws-amplify";

export const useGraphApi = (options: any) => {
  API.graphql(options);
};
