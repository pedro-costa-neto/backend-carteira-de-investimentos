import express from 'express';

const transacaoResource = express.Router();

transacaoResource.post('/', (req, res) => {
    res.send('Cria transação');
});

transacaoResource.get('/', (req, res) => {
    res.send('Litar todas as transações');
});

transacaoResource.get('/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Obtem a transação com o ID ${id}`);
});

transacaoResource.put('/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Atualiza a transação com o ID ${id}`);
});

transacaoResource.delete('/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Apaga a transação com o ID ${id}`);
});

export default transacaoResource;