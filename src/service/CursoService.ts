import { CursoRepository } from "../repository/CursoRepository"

export class CursoService{
    private CursoRepository = CursoRepository.getInstance();

    listarCursos(){
        return this.CursoRepository.listarCursos();
    }
}