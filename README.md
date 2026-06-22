# AWS Serverless API

This project is a serverless API built using AWS Lambda, API Gateway, and DynamoDB.

## Deployment

Ensure you have the Serverless Framework installed. Deploy the service using:

```
serverless deploy
```

## Environment Variables

- `TABLE_NAME`: The name of the DynamoDB table used by the application.

## IAM Configuration

Ensure that your IAM role has the necessary permissions to access DynamoDB and execute Lambda functions.
