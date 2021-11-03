import express from "express";
import routes from "./routes";
const globalRouter = express.Router();

globalRouter.post(routes.join, IsNotLogged, PostJoin, PostLogin);
globalRouter.post(routes.login, IsNotLogged, PostLogin);
globalRouter.get(routes.logout, IsLogged, Logout);
globalRouter.post(routes.logout, IsLogged, Logout);

export default globalRouter;