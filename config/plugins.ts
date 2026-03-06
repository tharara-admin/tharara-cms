const fs = require('fs');

// Function to get service account credentials
function getServiceAccountCredentials() {
    // For local development, use JSON file
    const keyFilePath = './config/gcs-service-account.json';

    if (fs.existsSync(keyFilePath)) {
        // Local development - use JSON file
        console.log('Using local service account file');
        return JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));
        // } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
        //     // Production - use single JSON environment variable
        //     console.log('Using JSON environment variable for service account');
        //     return JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
    } else if (process.env.GCS_SERVICE_ACCOUNT_JSON_BASE64) {
        console.log('Using base64 encoded service account');
        const decoded = Buffer.from(process.env.GCS_SERVICE_ACCOUNT_JSON_BASE64, 'base64').toString('utf8');
        return JSON.parse(decoded);
    } else {
        console.error('No service account credentials found');
        return null;
    }
}

module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
            providerOptions: {
                bucketName: 'tharara-bucket', //env('GCS_BUCKET'),
                publicFiles: false,
                uniform: false,
                baseUrl: `https://storage.googleapis.com/tharara-bucket`,
                basePath: '',
                keyFile: getServiceAccountCredentials(),
            },
        },
    },
});
