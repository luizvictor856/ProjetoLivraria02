export class emprestimo {
    constructor(
        public id: number,
        public usuario_id: string,
        public data_emprestimo: Date,
        public codigo: number,
        public data_devolucao: Date,
        public data_entrega: Date,
        public atraso_dias: number,
    ) {}


     processarAtraso(): number {
        if (!this.data_entrega) return 0;

        const difEmMs = this.data_entrega.getTime() - this.data_devolucao.getTime();
        const atraso_dias = difEmMs / (1000 * 60 * 60 * 24);

        if (atraso_dias < 0){
            return 0;
        } else {
            return atraso_dias;
        }
    }

}

