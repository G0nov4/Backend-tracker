// Aqui entra los controladores del sistema
// get(ruta, funcion)
const userModel =  require('./model');


module.exports = {
    async register(req,res){
        if(!req.body.username) return res.sendStatus(400);
        if(!req.body.email) return res.sendStatus(400);
        if(!req.body.password) return res.sendStatus(400);
        
        const NewUser = await userModel.createUser({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        });
        console.log("--",NewUser)    
        
        return res.send(NewUser)
    },
    async login(req,res){

    },
    async getUser(req,res){
        const user = await userModel.getUser(req.params.id);
        return res.send(user); 
    },
    async createUser(req,res,next){

    }
}