import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.use(express.static('./static'));
app.get('*', (req, res) => res.sendFile('./static/index.html', { root: _dirname}));

app.listen(PORT, function () {
    console.log(`Server on ${PORT}!`);
});



