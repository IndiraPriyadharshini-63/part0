const _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item;
  };
  const blogsLikes = blogs.map((blogs) => blogs.likes);
  return blogsLikes.reduce(reducer, 0);
};

// const favouriteBlog = (blogs) => {
//   const blogLikes = blogs.map((blogs) => blogs.likes);
//   const largestIndex = blogLikes.indexOf(Math.max(...blogLikes));
//   const largestBlog = blogs[largestIndex];
//   return {
//     title: largestBlog.title,
//     author: largestBlog.author,
//     likes: largestBlog.likes,
//   };
// };

const favoriteBlog = (blogs) => {
  return blogs.length === 0
    ? {}
    : blogs.reduce(
        (maxLikes, blog) => (blog.likes > maxLikes ? blog.likes : maxLikes),
        blogs[0].likes
      );
};

const mostBlogs = (blogs) => {
  const blogsAuthor = blogs.map((blogs) => blogs.author);

  let mode = _.chain(blogsAuthor)
    .countBy()
    .entries()
    .maxBy(_.last)
    .thru(_.head)
    .value();

  let count = 0;

  blogsAuthor.forEach((element) => {
    if (element === mode) {
      count += 1;
    }
  });

  return {
    author: mode,
    blogs: count,
  };
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs };
