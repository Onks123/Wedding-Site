import "dotenv/config";
import * as fs from "fs";
import * as path from "path";
import * as csv from "fast-csv";
import { customAlphabet } from "nanoid";
import db from "@/lib/db";

export const nanoid = customAlphabet("123456789ABCDEFGHJKLMNPQRSTUVWXYZ");

fs.createReadStream(path.resolve("guests.csv"))
  .pipe(csv.parse({ headers: true }))
  .on("error", (error) => console.error(error))
  .on("data", async (row) => {
    await db.guest.create({
      data: {
        fullName: row.Name as string,
        displayName: row.DisplayName as string,
        id: row.InviteCode as string,
      },
    });
  })
  .on("end", (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
