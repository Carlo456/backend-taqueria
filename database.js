const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost/taqueria_db';

    const conn = async () =>{
    try {
        await mongoose.connect(URI,{
            useNewUrlParser: true,   
        });
    } catch (error) {
        console.log(error);
    }
}
        
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
conn();