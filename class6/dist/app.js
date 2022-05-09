"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const apiRouter_1 = require("./router/apiRouter");
const config_1 = require("./config/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(apiRouter_1.apiRouter);
// app.get('/users', async (req:Request, res:Response) => {
//     try {
//         const users = await getManager().getRepository(User).find({ relations: ['posts'] });
//         console.log(users);
//         res.json(users);
//     } catch (e) {
//         console.log(e);
//     }
// });
const PORT = config_1.config.PORT;
app.listen(PORT, async () => {
    try {
        const connection = await (0, typeorm_1.createConnection)();
        console.log(connection);
        if (connection) {
            console.log(`Server has started${PORT}🚀🚀🚀`);
            console.log('Database connected');
        }
    }
    catch (err) {
        if (err)
            console.log(err);
    }
    console.log(PORT);
});
//# sourceMappingURL=app.js.map