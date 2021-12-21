import { randomBytes } from 'crypto';
import express from 'express';
import pretty from 'express-prettify';

const app = express();
const port = 3000;

app.use(pretty({ query: 'pretty' }));

import quotes from '../src/quotes.json';

app.get('/quotes', async (req, res) => {
    return res.json({"quotes": quotes});
});

app.get('/randomquote', async (req, res) => {
    return res.json({"randomquote": quotes[Math.floor(Math.random()*quotes.length)]});
});

app.get('/quotes/:author', async (req, res) => {
    const { author } = req.params;

    if(author !== undefined && author.length !== 0) {
        const newQuotes = [];

        // quotes.filter(q.author.toLowerCase() === author.toString().toLowerCase()).join();

        for(const q of quotes) {
            if(q.author.toLowerCase().replace(" ", "") === author.toString().toLowerCase().replace(" ", "")) {
                newQuotes.push(q);
            }
        }

        return res.json({"quotes": newQuotes});
    }

    return res.json({"quotes": quotes});
});

app.listen(port, () => console.log(`Server is listening on ${port}`));