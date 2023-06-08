import path from 'path';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'))
app.get('/*', (req, res) => {
    res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Server on ${PORT}!`);
});
