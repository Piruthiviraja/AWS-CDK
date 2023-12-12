import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from "aws-cdk-lib/aws-s3";
import { LambdaFnConstruct } from './lambda-construct';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const bucket = new s3.Bucket(this, 'MyTempFileBucket', {
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    })

    // example resource
    // const queue = new sqs.Queue(this, 'CdkProjectQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    new LambdaFnConstruct(this, "LambdaFnConstruct", { LambfnName: "LambdaFn" });
  }
}
