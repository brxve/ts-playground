import express from 'express';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    return res.status(404).json({response: "Nothing found", status: 404});
});

app.listen(port, () => console.log(`Server is listening on ${port}`));