import { Router } from "express";
import { menuRoute } from "./menus.router";

const router = Router();

const routers = [
    { path: "/api/v1/menu", action: menuRoute },
];

for (const route of routers) {
    router.use(route.path, route.action);
}

export { router };
