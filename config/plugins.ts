module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
            providerOptions: {
                bucketName: env('GCS_BUCKET'),
                publicFiles: true,
                uniform: false,
            },
        },
    },
});
