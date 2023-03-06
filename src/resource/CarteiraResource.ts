import express from 'express';
import Carteira from '../model/Carteira';

const carteiraResource = express.Router();

carteiraResource.post('/', (req, res) => {
    const body = req.body;

    try {
        Carteira.create(body);
    }
    catch(error) {
        console.error("Falha o salvar a carteira.");
    }
});

carteiraResource.get('/', async (req, res) => {

    try {
        const carteiras = await Carteira.findAll()
        res.send(carteiras);
    }
    catch(error) {
        console.error("Falha ao listar carteiras.");
    }
});

carteiraResource.get('/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Obtem a carteira com o ID ${id}`);
});

carteiraResource.put('/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Atualiza a carteira com o ID ${id}`);
});

carteiraResource.delete('/:id', (req, res) => {
    const id: number = +req.params.id;
    res.send(`Apaga a carteira com o ID ${id}`);
});

export default carteiraResource;