import express from 'express';

require('dotenv').config();

const app = express();


app.get('/ping', (req, res) => {
    return res.json(req.headers);
})

app.get('*', function(req, res){
    return res.sendStatus(404);
});

app.use('*', function(req, res){
    return res.sendStatus(500);
});

const start = async () => {
try {
    var env_port: number = !process.env.PING_LISTEN_PORT
    ? 3000
    : +process.env.PING_LISTEN_PORT;
    await app.listen({ port: env_port });
} catch (err) {
    console.log(err);
    process.exit(1);
}
};
start();