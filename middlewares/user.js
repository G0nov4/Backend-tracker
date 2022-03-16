const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const middlewares = {
  async isUserInDB(req, res, next) {
    console.log(req.body);
    const existUser = prisma.user
      .findUnique({
        where: {
          email: req.body.email,
        },
      })
      .then((data) => {
        return res.send({
          status: 400,
          msg: "El email que ingreso ya existe, porfavor verifique su cuenta.. ",
        });
      })
      .catch((err) => {
        next();
      });
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
