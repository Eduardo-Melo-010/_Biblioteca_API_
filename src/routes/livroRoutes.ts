// src/routes/livroRoutes.ts
import { Router } from "express";
import LivroController from "../controllers/livroController";

class LivroRoutes {
  router = Router ();
  controller = new LivroController();

  constructor () {
    this.initializeRoutes();
  }

  initializeRoutes() {

    this.router.post("/livro", this.controller.createLivro);

    this.router.get("/livro", this.controller.getAllLivros);

    // Retorna um genero específico pelo seu id
    this.router.get("/livro/:id", this.controller.getLivroById);

    // Atualizar um genero pelo seu id
    this.router.put("/livro/:id", this.controller.updateLivro);

    // Deleta um genero pelo seu id
    this.router.delete("/livro/:id", this.controller.deleteLivro);

    // Deleta todos os generos
    this.router.delete("/generos/", this.controller.deleteAllLivros);
  }
}
    export default new LivroRoutes().router;

