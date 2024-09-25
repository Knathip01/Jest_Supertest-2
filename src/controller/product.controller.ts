// import { Router, Request, Response } from "express";
// import { Product } from "../model/product";
// const productList: Product[] = [
//   {
//     id: 1,
//     name: "Bombril",
//     price: 8,
//   },
//   {
//     id: 1,
//     name: "Sausage",
//     price: 3,
//   },
// ];
// const getAll = (req: Request, res: Response) => {
//   res.status(200).send(productList);
// };
// export default { getAll };

import { Request, Response } from "express";
// import { Product } from "../model/product";
// import { promisePool } from "../config/db";
// import { QueryError, PoolConnection } from "mysql2";
// import { RowDataPacket } from "mysql2"; // Import type for rows returned from queries
import product from "../db/product";

const getAll = (req: Request, res: Response) => {
  product
    .selectAll() //--db/product.ts
    .then((products) => {
      // .then for async call
      res.status(200).send({
        message: "OK",
        result: products,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "DATABASE ERROR",
        error: err.code,
      });
    });
};
export default { getAll };
