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
            },
        },
    },
});
