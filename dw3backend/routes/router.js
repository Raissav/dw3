const express = require("express");
const routerApp = express.Router();

const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appLogin = require("../apps/login/controller/ctlLogin");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appClientes = require("../apps/clientes/controller/ctlClientes");
const appPedidos = require("../apps/pedidos/controller/ctlPedidos");


// middleware that is specific to this router
routerApp.use((req, res, next) => {
next();
});

routerApp.get("/", (req, res) => {
res.send("Olá mundo!");
});

//@ Rotas de Alunos
routerApp.get("/getAllAlunos", appAlunos.getAllAlunos);
routerApp.post("/getAlunoByID", appLogin.AutenticaJWT, appAlunos.getAlunoByID);//para deixar o acesso restrito, apenas auentificados;
routerApp.post("/insertAlunos", appLogin.AutenticaJWT, appAlunos.insertAlunos);
routerApp.post("/updateAlunos", appAlunos.updateAlunos);
routerApp.post("/DeleteAlunos", appAlunos.DeleteAlunos);

//@ Rotas de Cursos
routerApp.get("/GetAllCursos", appCursos.GetAllCursos);
routerApp.post("/GetCursoByID", appCursos.GetCursoByID);
routerApp.post("/InsertCursos", appCursos.InsertCursos);
routerApp.post("/UpdateCursos", appCursos.UpdateCursos);
routerApp.post("/DeleteCursos", appCursos.DeleteCursos);

//@ Rotas de Clientes
routerApp.get("/GetAllClientes", appClientes.GetAllClientes);
routerApp.post("/GetClienteByID", appClientes.GetClienteByID);
routerApp.post("/InsertClientes", appClientes.InsertClientes);
routerApp.post("/UpdateClientes", appClientes.UpdateClientes);
routerApp.post("/DeleteClientes", appClientes.DeleteClientes);

//@ Rotas de Pedidos
routerApp.get("/GetAllPedidos", appPedidos.GetAllPedidos);
routerApp.post("/GetPedidoByID", appPedidos.GetPedidoByID);
routerApp.post("/InsertPedidos", appPedidos.InsertPedidos);
routerApp.post("/UpdatePedidos", appPedidos.UpdatePedidos);
routerApp.post("/DeletePedidos", appPedidos.DeletePedidos);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;