import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoUser = async (id: number, username: string, email: string, password: string, firstName: string, lastName: string)=>{
    const insertResponse = await prisma.user.create({
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
}
// insertIntoUser(2, "testuser1", "testUser1@example.com", "testPassword1", "test1", "user1");

const insertIntoTodo = async (id: number, title: string, description: string, done: boolean, userId: number)=>{
    const insertResponse = await prisma.todo.create({
        data: {
            id,
            title,
            description,
            done,
            userId
        }
    })
}

// insertIntoTodo(1, "lets learn prisma", "learning prisma desc", false, 1);


const getData = async (userId: number)=>{
    const getResponse = await prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            done: true,
            user:true
        }
    })
    console.log(getResponse);
}
getData(1);