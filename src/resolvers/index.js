
const userQuery = require("./user/query");
const userMutation = require("./user/mutation");
// const { loginChecker } = require("../resolvers/common");

// const commentFragment = require("./comment/fragment");
// const postFragment = require("./post/fragment");

// const Subscription = {
//   comment: {
//     subscribe(parent, { postId }, { prisma }, info) {
//       return prisma.subscription
//         .comment({
//           where: {
//             node: {
//               post: {
//                 id: postId
//               }
//             }
//           }
//         })
//         .$fragment(commentFragment);
//     }
//   },
//   post: {
//     subscribe(parent, args, { prisma }) {
//       return prisma.subscription
//         .post({
//           where: {
//             node: {
//               published: true
//             }
//           }
//         })
//         .$fragment(postFragment);
//     }
//   },

//   myPost: {
//     async subscribe(parent, args, ctx) {
//       const user = await loginChecker(ctx);
//       return ctx.prisma
//         .post({
//           where: {
//             node: {
//               author: {
//                 id: userQuery.id
//               }
//             }
//           }
//         })
//         .$fragment(postFragment);
//     }
//   }
// };

const resolvers = {
  Mutation: {
    ...userMutation
  },

  Query: {
    ...userQuery
  }
};

module.exports = resolvers;
