"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoUser = (id, username, email, password, firstName, lastName) => __awaiter(void 0, void 0, void 0, function* () {
    const insertResponse = yield prisma.user.create({
        data: {
            id,
            username,
            email,
            password,
            firstName,
            lastName,
        },
    });
    console.log(insertResponse);
});
// insertIntoUser(2, "testuser1", "testUser1@example.com", "testPassword1", "test1", "user1");
const insertIntoTodo = (id, title, description, done, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const insertResponse = yield prisma.todo.create({
        data: {
            id,
            title,
            description,
            done,
            userId
        }
    });
});
// insertIntoTodo(1, "lets learn prisma", "learning prisma desc", false, 1);
const getData = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const getResponse = yield prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            done: true,
            user: true
        }
    });
    console.log(getResponse);
});
getData(1);
