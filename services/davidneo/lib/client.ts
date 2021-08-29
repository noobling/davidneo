import {
  AUTH_TYPE,
  AWSAppSyncClient,
  AWSAppSyncClientOptions,
} from "aws-appsync";
import * as aws from "aws-sdk";
import awsConfigs from "@config";
import "cross-fetch/polyfill"; // Required for appsync client as it needs a global fetch function

const config: AWSAppSyncClientOptions = {
  url: awsConfigs.aws_appsync_graphqlEndpoint,
  region: awsConfigs.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AWS_IAM,
    credentials: aws.config.credentials,
  },
  disableOffline: true,
};

export const client = new AWSAppSyncClient(config);
