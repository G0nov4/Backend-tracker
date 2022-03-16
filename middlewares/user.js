const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const middlewares = {
  async isUserInDB(req, res, next) {
    await prisma.user
      .findUnique({
        where: {
          email: req.body.email,
        },
      })
      .then((data) => {
          console.log("----",data)
        if(data == null){
            next();
        }else{
            return res.sendStatus(400);
        }
      })
  },
  async isEmailValidate(req, res, next) {
      emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (emailRegex.test(req.body.email)) {
            next();
      } else {
        return res.send({
            status: 400,
            msg: "El formato de Email esta mal",
          });
      }
  },
};

module.exports = middlewares;
