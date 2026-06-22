const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const tableName = process.env.TABLE_NAME;
    const params = {
        TableName: tableName,
        Key: {
            'id': event.pathParameters.id
        }
    };

    try {
        const data = await dynamoDb.get(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Item)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not retrieve item' })
        };
    }
};