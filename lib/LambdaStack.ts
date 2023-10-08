import * as cdk from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

interface LambdaStackProps extends cdk.StackProps {
  bucket: IBucket;
}

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    /**
     * This function depends on the S3 bucket
     * 
     * @TODO - comment me out to demonstrate the cross-stack dependency behavior
     */
    const dependentFunction = new NodejsFunction(this, `dependentFunction`, {
      entry: './lib/handler.ts',
      handler: 'handler',
      environment: {
        // notice the cross-stack reference here
        BUCKET_NAME: props.bucket.bucketName
      }
    });
  }
}
