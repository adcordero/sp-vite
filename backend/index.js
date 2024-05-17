import express from 'express';

// initializes app
const app = express();

// make app listen to port 3000
app.listen(3000, () => {
    console.log("Listening to port 3000!!")
});