export class estoque {
    constructor(
        public id: number,
        public codigo: string,
        public quantidade_emprestimo: number = 0,
        public quantidade: number,
    ) {}


    isDisponibilidade(): boolean {
        return this.quantidade > this.quantidade_emprestimo;
    }
}

