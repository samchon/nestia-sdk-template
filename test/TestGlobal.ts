import api from "@api";

export namespace TestGlobal {
  export const connection = (): api.IConnection => ({
    host: `http://127.0.0.1:37001`,
  });
}
