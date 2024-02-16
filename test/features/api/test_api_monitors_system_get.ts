import api from "@ORGANIZATION/PROJECT-api";
import type { ISystem } from "@ORGANIZATION/PROJECT-api/lib/structures/monitors/ISystem";
import typia from "typia";

export const test_api_monitors_system_get = async (
  connection: api.IConnection,
) => {
  const output: ISystem = await api.functional.monitors.system.get(connection);
  typia.assert(output);
};
