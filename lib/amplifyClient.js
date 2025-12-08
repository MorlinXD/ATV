'use client';

import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';

let configured = false;

if (!configured) {
  Amplify.configure({
    ...awsExports,
    ssr: true, // para que Next no se pelee con Amplify
  });
  configured = true;
}

export default Amplify;
