import { CategoriaUsuario } from "../model/categoriaUsuario";
import { CategoriaUsuarioRepository } from "../repository/CategoriaUsuarioRepository";

export class CategoriaUsuarioService{
    private categoriaUsuarioRepository = CategoriaUsuarioRepository.getInstance();

    listarCategoria(){
        return this.categoriaUsuarioRepository.listarCategorias();
    }
}