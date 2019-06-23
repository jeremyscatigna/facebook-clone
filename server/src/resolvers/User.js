function posts(root, args, context) {
  return context.prisma
    .user({
      id: root.id
    })
    .posts()
}

module.exports = {
  posts
}
