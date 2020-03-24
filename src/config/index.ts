import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    port: parseInt(process.env.PORT, 10),

    databaseURL: process.env.MONGODB_URI,

    jwtSecret: process.env.JWT_SECRET,

    api: {
        prefix: '/api',
    },

    emails: {
        apiKey: 'API key from mailgun',
        domain: 'Domain Name from mailgun'
    }
};