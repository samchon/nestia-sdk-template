import api from "@ORGANIZATION/PROJECT-api";
import type { IPerformance } from "@ORGANIZATION/PROJECT-api/structures/monitors/IPerformance";
import typia from "typia";

export const test_api_monitors_performance_get = async (
  connection: api.IConnection,
) => {
  const output: IPerformance =
    await api.functional.monitors.performance.get(connection);
  typia.assert(output);
};
