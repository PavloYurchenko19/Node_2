"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const apiRouter_1 = require("./router/apiRouter");
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
app.listen(5500, async () => {
    console.log('Server has started🚀🚀🚀');
    try {
        const connection = await (0, typeorm_1.createConnection)();
        console.log(connection);
        if (connection) {
            console.log('Database connected');
        }
    }
    catch (err) {
        if (err)
            console.log(err);
    }
});
//# sourceMappingURL=app.js.map