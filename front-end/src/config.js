const dev = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-uploads-tcc"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://iron6phyqg.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_G4zRx5YUU",
        APP_CLIENT_ID: "3q7380lp6ogtkf2alho29mpdqh",
        IDENTITY_POOL_ID: "us-east-1:e1bab4c5-197f-462a-8c9d-2ba83f45bd0c"
    }
};

const prod = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-uploads-tcc"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://iron6phyqg.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_G4zRx5YUU",
        APP_CLIENT_ID: "3q7380lp6ogtkf2alho29mpdqh",
        IDENTITY_POOL_ID: "us-east-1:e1bab4c5-197f-462a-8c9d-2ba83f45bd0c"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};