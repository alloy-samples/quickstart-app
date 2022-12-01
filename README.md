This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
You need to have Node 16+ and npm 8+ installed

The Quick Start App allows you to demo your Journey and SDK end to end! You can use it to test out any of the supported Alloy plugins (see more details on the plugins [here](https://developer.alloy.com/public/docs/document-verification-web-sdk)) and see sample API responses for each step. See [API Docs](https://developer.alloy.com/public/docs/document-verification-web-sdk) for more details 


## Getting Started

1. Create an env file called .env.local
2. Fill out the env file with 
```
WORKFLOW_TOKEN=xxxxx
WORKFLOW_SECRET=xxxxx
JOURNEY_TOKEN=xxxxx
ALLOY_SDK=xxxxx
API_BASE_URL=https://sandbox.alloy.co/
```

The `WORKFLOW_TOKEN` and `WORKFLOW_SECRET` can be found in the Alloy dashboard's workflow page.
The `JOURNEY_TOKEN` can be found in the Alloy Dashboard's Journey page.
The 'ALLOY_SDK' parameter is the SDK key. Please contact CSM or support@alloy.com to get your key
`API_BASE_URL` is https://sandbox.alloy.co/ for Sandbox and https://api.alloy.co/ for production. 

3. run npm install
4. run npm run dev
