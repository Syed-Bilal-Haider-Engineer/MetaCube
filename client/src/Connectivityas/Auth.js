import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
let REACT_APP_PRJECT_ID = "2J8ODU2MZZc34KUHVRhF6kRQR06";
let REACT_APP_SECRET_KEY = "183d5903c2fc72ca3ceb49733e12d52d";
let REACT_APP_END_POINT = " https://ipfs.infura.io:5001";
const auth =
  "Basic " +
  Buffer.from(
    `${REACT_APP_PRJECT_ID}` + ":" + `${REACT_APP_SECRET_KEY}`
  ).toString("base64");

export const client = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export const getHash = async (data) => {
  if (data) {
    const buffer = await Buffer(data.snapshot.split(",")[1], 'base64');
    const imgHash = await client.add(buffer);
    const obj = {
      name: "global land",
      image: imgHash.path,
      description: "Global Land Nft this is the plate form  where you can mint the NFT from map."
    }
    const objHash = await client.add(Buffer.from(JSON.stringify(obj)));
    return objHash
  }
}


export function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += (new Array(e + 1)).join('0');
    }
  }
  return x;
}