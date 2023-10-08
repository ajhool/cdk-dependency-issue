#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BucketStack } from '../lib/BucketStack';
import { LambdaStack } from '../lib/LambdaStack';

const app = new cdk.App();

const bucketStack = new BucketStack(app, 'BucketStack');
const lambdaStack = new LambdaStack(app, 'LambdaStack', {
  bucket: bucketStack.bucket
})

