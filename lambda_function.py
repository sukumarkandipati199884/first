import os
import boto3
from PIL import Image
import io
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

s3_client = boto3.client('s3')

OUTPUT_BUCKET = os.environ['OUTPUT_BUCKET']


def resize_image(image_path, resized_path):
    with Image.open(image_path) as image:
        image.thumbnail((128, 128))
        image.save(resized_path)


def lambda_handler(event, context):
    try:
        for record in event['Records']:
            bucket = record['s3']['bucket']['name']
            key = record['s3']['object']['key']

            download_path = '/tmp/{}{}'.format(key.replace('/', ''), 'original')
            upload_path = '/tmp/resized-{}'.format(key)

            s3_client.download_file(bucket, key, download_path)
            resize_image(download_path, upload_path)

            s3_client.upload_file(upload_path, OUTPUT_BUCKET, key)

            logger.info('Image resized and uploaded to {}'.format(OUTPUT_BUCKET))

        return {
            'statusCode': 200,
            'body': 'Image resized successfully'
        }
    except Exception as e:
        logger.error('Error processing image: {}'.format(e))
        return {
            'statusCode': 500,
            'body': 'Error processing image'
        }