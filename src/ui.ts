import "./my-app";

import wasm from "./wasm"; // <-- Our WASM file to load

WebAssembly.instantiateStreaming(wasm as Promise<Response>).then((obj) => {
  // @ts-ignore
  const value: number = obj.instance.exports.add(2, 4);
  console.log("return from wasm", value);
  const elem = document.querySelector("my-app")! as HTMLElement;
  elem.setAttribute("amount", `${value}`);
});
