export class Livro {
    constructor(
        public id: number,
        public titulo: string,
        public editora: string,
        public autor: string,
        public edicao: string,
        public categoria_id: number,
        public ISBN: string
    ) {}
}