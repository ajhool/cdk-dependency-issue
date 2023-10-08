# Summary

This repository provides a simple example showing how eliminating a dependency causes the source stack to fail to deploy because the source stack immediately tries to delete the `exportedValue` (in this case, the S3 bucket's name).

# Resources

**BucketStack** - contains an S3 bucket
            - contains commented out code showing the current `this.exportValue(this.bucket.bucketName)` workaround
**LambdaStack** - contains a Lambda function that uses the S3 Bucket's name as an env variable. That's the cross stack dependency.
            - handler.ts - irrelevant to this example, it's just a placeholder.

# Steps to reproduce

1. Initialize the repo
```
yarn install
```

2. Deploy the BucketStack and the LambdaStack
```
yarn cdk deploy --all
```

3. Comment out the lambda function in the `lib/LambdasStack.ts`

4. Deploy all again and see the error
```
yarn cdk deploy --all
```