import S3 from 'aws-sdk/clients/s3.js';
import crypto from 'crypto'
import sharp from 'sharp';
const bucketName = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

export async function uploadFile(file) {
    const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');
    const imageName = randomImageName();
    const buffer = await sharp(file?.buffer).resize({ height: 1920, width: 1080, fit: "contain" }).toBuffer()
    const params = {
        Bucket: bucketName,
        Body: buffer,
        Key: imageName,
    }
    return s3.upload(params).promise()
}


export async function getAwsFile(fileKey) {
    const params = {
        Bucket: bucketName,
        Key:fileKey,
    }
    const result = await s3.getSignedUrl('getObject', params)
    return result;
}

export async function deleteAwsFile(file) {
    const params = {
        Bucket: bucketName,
        Key: file,
    }
    return s3.deleteObject(params).promise()
}