import prisma from ".";

// getting all the users
export async function getUsers(){
    try{
        const users = await prisma.user.findMany();
        return {users};
    }
    catch(error){
        return {error};
    }
}


// creating a new user
export async function createUser(user){
    try{
        const newUser = await prisma.user.create({data: user});
        return {newUser};
    }
    catch(error){
        return {error};
    }
}


// getting the user by its id 
export async function getUserById(id){
    try{
        const user = await prisma.user.findUnique({where: {id}, include: {tweets: true}});
        return {user};
    }
    catch(error){
        return {error};
    }
}