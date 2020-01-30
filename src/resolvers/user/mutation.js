const bcrypt = require("bcryptjs");

const Mutation = {
  async signin(parent, args, ctx) {
    const password = await bcrypt.hash(args.password, 10);
    const data = { ...args, password };

    const newUser = await ctx.prisma.createUser({
      ...data
    });

    return newUser;
  }
};

module.exports = Mutation;
