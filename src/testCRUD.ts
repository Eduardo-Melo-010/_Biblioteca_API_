import axios from "axios";

const baseURL = "http://127.0.0.1:3000/biblioteca/livro";

// ----------------------------------------
// 1) Criar Livro (POST)
// ----------------------------------------
export async function testarPOST() {
  try {
    const livro = {
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      isbn: "9999999999999",
      anoPublicacao: 1954,
      disponivel: true
    };

    const res = await axios.post(baseURL, livro);
    console.log("POST OK:", res.data);
  } catch (e: any) {
    console.log("POST ERRO:", e.response?.data || e.message);
  }
}

// ----------------------------------------
// 2) Buscar todos (GET)
// ----------------------------------------
export async function testarGET_All() {
  try {
    const res = await axios.get(baseURL);
    console.log("GET ALL OK:", res.data);
  } catch (e: any) {
    console.log("GET ALL ERRO:", e.response?.data || e.message);
  }
}

// ----------------------------------------
// 3) Buscar por ID (GET /:id)
// ----------------------------------------
export async function testarGET_ById(id: number) {
  try {
    const res = await axios.get(`${baseURL}/${id}`);
    console.log("GET BY ID OK:", res.data);
  } catch (e: any) {
    console.log("GET BY ID ERRO:", e.response?.data || e.message);
  }
}

// ----------------------------------------
// 4) Atualizar (PUT /:id)
// ----------------------------------------
export async function testarPUT(id: number) {
  try {
    const livroAtualizado = {
      titulo: "O Hobbit",
      autor: "J.R.R. Tolkien",
      isbn: "9999999999999",
      anoPublicacao: 1937,
      disponivel: false
    };

    const res = await axios.put(`${baseURL}/${id}`, livroAtualizado);
    console.log("PUT OK:", res.data);
  } catch (e: any) {
    console.log("PUT ERRO:", e.response?.data || e.message);
  }
}

// ----------------------------------------
// 5) Deletar (DELETE /:id)
// ----------------------------------------
export async function testarDELETE(id: number) {
  try {
    const res = await axios.delete(`${baseURL}/${id}`);
    console.log("DELETE OK:", res.data);
  } catch (e: any) {
    console.log("DELETE ERRO:", e.response?.data || e.message);
  }
}
