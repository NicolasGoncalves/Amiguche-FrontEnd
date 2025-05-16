import axios from "axios";
const LOGIN_KEY = "user";

export function getUser() {
  const data = localStorage.getItem(LOGIN_KEY);
  return data ? JSON.parse(data) : null;
}

export function saveUser(user) {
  localStorage.setItem(LOGIN_KEY, JSON.stringify(user));
}

export function removeUser() {
  localStorage.removeItem(LOGIN_KEY);
}

export function isLoggedIn() {
  return getUser() !== null;
}

export function addUser(user) {
  const data = getUser();
  if (data) {
    removeUser();
  }
  saveUser(user);
}

export async function login(email, senha) {
  try {
    const user = getUser();
    if (user) {
      removeUser();
      return;
    }
    let urlU = "http://localhost:5000/usuario/login";
    let urlC = "http://localhost:5000/cliente/login";
    let conta = {
      email: email,
      senha: senha,
    };
    let resp = await axios.post(urlU, conta);
    if (resp.status === 200) {
      addUser({
        user: "user",
        id: resp.data.id_usuarios,
      });
    }
    resp = await axios.post(urlC, conta);
    if (resp.status === 200) {
      addUser({
        user: "client",
        id: resp.data.id_clientes,
      });
    }
  } catch (err) {
    console.error("Erro ao fazer login:", err);
  }
}
