import { promises as fs } from "fs";
import { deflate } from "zlib";

export async function imageToBase64(file: Blob | string) {}

export function compressBase64(string: string) {
  return new Promise((resolve, reject) => {
    deflate(string, (err, buffer) => {
      if (err) reject(err);
      else resolve(buffer.toString("base64"));
    });
  });
}
