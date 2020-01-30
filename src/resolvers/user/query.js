

const Query = {
  async user(parent, args, ctx) {
    return ctx.prisma.user({ id: args.id });
  }
};

module.exports = Query;
