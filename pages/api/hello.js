// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  const { method } = req;

  if (method == "POST") {
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      // origin: "*",
      origin: ["http://127.0.0.1", "http://localhost:5502", "http://127.0.0.1:5502", "http://localhost"],
      headers: "*",
      //   res.header("Access-Control-Allow-Origin", "*");
      // res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,
      // Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    res.status(200).json({ name: "POST John Doe" });
  }

  if (method == "GET") {
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: ["http://127.0.0.1", "http://localhost:5502", "http://127.0.0.1:5502", "http://localhost"],
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    res.status(200).json({ name: "John Doe" });
  }
}
