import express from 'express';

const BancoCorretoraResource = express.Router();

BancoCorretoraResource.post('/', (req, res) => {
    res.send('Cria banco ou corretora');
});

BancoCorretoraResource.get('/', (req, res) => {
    res.send('Litar todos os bancos e corretoras');
});

BancoCorretoraResource.get('/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Obtem o banco ou corretora com o ID ${id}`);
});

BancoCorretoraResource.put('/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Atualiza o banco ou corretora com o ID ${id}`);
});

BancoCorretoraResource.delete('/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Apaga o campo ou corretora com o ID ${id}`);
});

export default BancoCorretoraResource;