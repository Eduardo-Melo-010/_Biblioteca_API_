import { Request, Response } from "express";
import LivroRepository from "../repositories/livroRepository";
import { Livro } from "../model/livro";

class LivroController {
  repository = LivroRepository;

  createLivro = async (req: Request, res: Response) => {
    try {
      const livro: Livro = req.body;
      const novoLivro = await this.repository.createLivro(livro);
      res.status(201).json(novoLivro);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  };

  getAllLivros = async (_req: Request, res: Response) => {
    try {
      const livros = await this.repository.getAllLivro();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  };

  getLivroById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const livro = await this.repository.getLivroById(id);
      if (!livro) return res.status(404).json({ message: "Livro não encontrado" });
      res.status(200).json(livro);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  };

  updateLivro = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const livroExistente = await this.repository.getLivroById(id);
      if (!livroExistente) return res.status(404).json({ message: "Livro não encontrado" });

      const dadosAtualizados = { ...livroExistente, ...req.body } as Livro;
      await this.repository.updateLivro(dadosAtualizados);

      res.status(200).json(dadosAtualizados);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  };

  deleteLivro = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const livro = await this.repository.getLivroById(id);
      if (!livro) return res.status(404).json({ message: "Livro não encontrado" });

      await this.repository.deleteLivro(id);
      res.status(200).json({ message: "Livro excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  };

  deleteAllLivros = async (_req: Request, res: Response) => {
    try {
      const livros = await this.repository.getAllLivro();
      for (const livro of livros) {
        await this.repository.deleteLivro(livro.id);
      }
      res.status(200).json({ message: "Todos os livros foram excluídos" });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  };
}

export default LivroController;
