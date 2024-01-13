import { Sequelize } from "sequelize";

const db = new Sequelize({
    username: "DFEProject_pagepolice",
    password: "e13186a3571c77a9f4100b84cfd3fdd20dcf2148",
    database: "DFEProject_pagepolice",
    dialect: 'mysql',
    port: "3307",
    host: "znk.h.filess.io"
});

export default db;