import mongoose from 'mongoose';

mongoose.connect(
    process.env.MONGO_URL || 'mongodb://localhost:27017/local',
    {
        authSource: 'admin'
    },
    err => {
        const LOGMSG = '⚡️[Base39]:';
        const msg = err
            ? `${LOGMSG} Failed to connect to MongoDB: ${err}`
            : `${LOGMSG} MongoDB connection established successfully`
        console.log(msg);
    },
);
