'use client';

import { Amplify } from 'aws-amplify';
import awsExports from '@/src/aws-exports';

let configured = false;

if (!configured) {
  Amplify.configure({
    ...awsExports,

    // Auth + Identity Pool
    Auth: {
      region: awsExports.aws_cognito_region,
      userPoolId: awsExports.aws_user_pools_id,
      userPoolWebClientId: awsExports.aws_user_pools_web_client_id,
      identityPoolId: awsExports.aws_cognito_identity_pool_id,
      mandatorySignIn: true,
    },

    // Storage (S3)
    Storage: {
      AWSS3: {
        bucket: awsExports.aws_user_files_s3_bucket,
        region: awsExports.aws_user_files_s3_bucket_region,
      },
    },

    ssr: true,
  });

  configured = true;
}

export default Amplify;
