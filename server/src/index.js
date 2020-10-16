const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hello world',
    });
});



const port = process.env.port || 1337;
app.listen(port, () => {
    console.log(`listening to http://localhost:${port}`);
});