import db from "../db/connection.js";
import Post from "../models/post.js";
import faker from "faker";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // create an array of 100 objects
  // use faker package to generate fake data
  const posts = [...Array(10)].map((item) => {
    return {
      title: faker.lorem.sentence(),
      image_url: faker.internet.url(),
      content: faker.lorem.paragraph(),
      author: faker.name.findName(),
    };
  });
  await Post.insertMany(posts);
  console.log("Created posts!");

  // close database connection. done.
  db.close();
};

insertData();
