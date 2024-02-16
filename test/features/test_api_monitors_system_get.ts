import api from "@api";
import type { ISystem } from "@api/structures/monitors/ISystem";
import typia from "typia";

export const test_api_monitors_system_get = async (
  connection: api.IConnection,
) => {
  const output: ISystem = await api.functional.monitors.system.get(connection);
  typia.assert(output);
};
