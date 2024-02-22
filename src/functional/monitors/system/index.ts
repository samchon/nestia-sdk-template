/**
 * @packageDocumentation
 * @module api.functional.monitors.system
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { EncryptedFetcher } from "@nestia/fetcher/lib/EncryptedFetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { ISystem } from "../../../structures/monitors/ISystem";

/**
 * Get system information.
 *
 * Get system information with commit and package information.
 *
 * As such information is a type of sensitive, response be encrypted.
 *
 * @returns System info
 * @tag Monitor
 * @author Samchon
 *
 * @controller MonitorSystemController.get
 * @path GET /monitors/system
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return !!connection.simulate
    ? get.simulate(connection)
    : EncryptedFetcher.fetch(connection, {
        ...get.METADATA,
        path: get.path(),
      });
}
export namespace get {
  export type Output = ISystem;

  export const METADATA = {
    method: "GET",
    path: "/monitors/system",
    request: null,
    response: {
      type: "text/plain",
      encrypted: true,
    },
    status: null,
  } as const;

  export const path = () => "/monitors/system";
  export const random = (g?: Partial<typia.IRandomGenerator>): ISystem =>
    typia.random<ISystem>(g);
  export const simulate = (connection: IConnection): Output => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}