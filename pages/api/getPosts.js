import fs from "fs";
//The Node.js file system module allows you to work with the file system on your computer
import { join } from "path";
import matter from "gray-matter";

let postsDirectory;
//The process.cwd() method returns the current working directory of the Node.js process

export function getPostSlugs(dir) {
  postsDirectory = join(process.cwd(), dir);

  return fs.readdirSync(postsDirectory);
  //Reads the contents of a directory.
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  //Replaces de md from the filename to get slug
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

const sortBy = {
  dateDescending: (post1, post2) => (post1.date > post2.date ? "-1" : "1"),
  dateAscending: (post1, post2) => (post1.date > post2.date ? "1" : "-1"),
  nameAscending: (post1, post2) => (post1.title > post2.title ? "-1" : "1"),
  nameDescending: (post1, post2) => (post1.title > post2.title ? "1" : "-1"),
};

export function getAllPosts(fields = [], dir, sort) {
  const slugs = getPostSlugs(dir);

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort(sortBy[sort]);
  return posts;
}
