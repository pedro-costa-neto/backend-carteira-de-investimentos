import express from "express";
import cors from "cors";
import BancoCorretoraResource from "./resource/BancoCorretoraResource";
import carteiraResource from "./resource/CarteiraResource";
import transacaoResource from "./resource/TransacaoResource";

const PORT = process.env.PORT || 8000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Raiz")
});

app.use(cors({
    origin: [`${ HOSTNAME }:${ PORT }`]
}));

app.use('/carteiras', carteiraResource);
app.use('/transacoes', transacaoResource);
app.use('/banco-corretora', BancoCorretoraResource);

app.use((req, res) => {
    res.status(404);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${ HOSTNAME }:${ PORT }`);
});