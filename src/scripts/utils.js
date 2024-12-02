export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatPosts(
  posts,
  { sortByDate = true, limit = undefined } = {}
) {
  if (sortByDate) {
    // Sort posts by date
    posts.sort((a, b) => new Date(a.data.pubDate) - new Date(b.data.pubDate));
  } else {
    // Randomize posts
    posts.sort(() => Math.random() - 0.5);
  }

  // Limit number of rendered posts if "limit" is passed
  if (typeof limit === "number") {
    return posts.slice(0, limit);
  }

  return posts;
}
