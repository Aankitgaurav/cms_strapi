export default ({ env }) => ({
    upload: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
        region: "ap-south-1",
        params: {
          Bucket: env("S3_BUCKET_NAME"),
        },
      },
    },
  });
  