import { readFile } from "fs";
import { deflate } from "zlib";

export function imageToBase64(file: Blob | string) {
  return new Promise((resolve, reject) => {
    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64String = result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    } else {
      readFile(file, { encoding: "base64" }, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    }
  });
}

export function compressBase64(string: string) {
  return new Promise((resolve, reject) => {
    deflate(string, (err, buffer) => {
      if (err) reject(err);
      else resolve(buffer.toString("base64"));
    });
  });
}
