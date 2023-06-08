import path from 'path';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./static'))
app.get('/*', (req, res) => {
    res.sendFile(path.resolve('static', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Server on ${PORT}!`);
});
