export default () => ({});

// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: '@strapi/provider-upload-google-cloud-storage',
//       providerOptions: {
//         bucketName: env('GCS_BUCKET_NAME'),
//         publicFiles: true,
//         credentials: {
//           client_email: env('GCS_CLIENT_EMAIL'),
//           private_key: env('GCS_PRIVATE_KEY'),
//         },
//       },
//     },
//   },
// });

// module.exports = ({ env }) => ({
//     upload: {
//         config: {
//             provider: 'google-cloud-storage',
//             providerOptions: {
//                 bucketName: env('GCS_BUCKET'),
//                 basePath: '',
//                 publicFiles: true,
//             },
//         },
//     },
// });
