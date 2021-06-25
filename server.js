const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is working, I think....');
})

app.listen(3000, () => {
    console.log('Now listening on port 3000 ya mon');
})

/*
/ res -> this is working
/signin -> POST = success/fail
/register -> POST = user(obj)
/profile/:userId = GET = user
/image -> PUT = user
*/ 



