export class Usuario {
    constructor(
    public id: number,
    public nome: string,
    public ativo: boolean = true,
    public cpf: string,
    public categoria_id: number,
    public curso_id: number,
    public suspensao?: Date
) {}

    Ativo(): boolean {
    return this.ativo && (!this.suspensao || this.suspensao < new Date());
    }
}