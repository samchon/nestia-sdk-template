import api from "@ORGANIZATION/PROJECT-api";
import type { IBbsArticle } from "@ORGANIZATION/PROJECT-api/lib/structures/bbs/IBbsArticle";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

export const test_api_bbs_articles_erase = async (
  connection: api.IConnection,
) => {
  const output = await api.functional.bbs.articles.erase(
    connection,
    typia.random<string & Format<"uuid">>(),
    typia.random<IBbsArticle.IErase>(),
  );
  typia.assert(output);
};
