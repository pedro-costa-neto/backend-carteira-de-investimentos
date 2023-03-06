import BancoCorretora from "./BancoCorretora"

type Transacao = {
    id?: Number,
    codigoAcao: String,
    quantidade: Number,
    valor: Number,
    data: Date,
    bancoCorretora: BancoCorretora
}

export default Transacao;