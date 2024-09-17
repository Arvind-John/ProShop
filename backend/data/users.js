import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("654321", 10),
    isAdmin: true,
  },
  {
    name: "Derik",
    email: "derik@gmail.com",
    password: bcrypt.hashSync("654321", 10),
    isAdmin: false,
  },
  {
    name: "Glen",
    email: "glen@gmail.com",
    password: bcrypt.hashSync("654321", 10),
    isAdmin: false,
  },
];

export default users;
