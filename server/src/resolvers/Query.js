async function feed(parent, args, context) {
  const count = await context.prisma
    .linksConnection({
      where: {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    })
    .aggregate()
    .count();
  const links = await context.prisma.links({
    where: {
      OR: [{ description_contains: args.filter }, { url_contains: args.filter }]
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  return {
    count,
    links
  };
}

// async function feed(parent, args, ctx, info) {
//   const { filter, first, skip } = args; // destructure input arguments
//   const where = filter
//     ? { OR: [{ url_contains: filter }, { description_contains: filter }] }
//     : {};

//   const queriedLinks = await ctx.db.query.links({ first, skip, where });

//   return {
//     linkIds: queriedLinks.map(link => link.id),
//     count
//   };
// }

module.exports = {
  feed
};
