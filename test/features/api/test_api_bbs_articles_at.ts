import api from "@ORGANIZATION/PROJECT-api";
import { IBbsArticle } from "@ORGANIZATION/PROJECT-api/lib/structures/bbs/IBbsArticle";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

export const test_api_bbs_articles_at = async (connection: api.IConnection) => {
  const output: IBbsArticle = await api.functional.bbs.articles.at(
    connection,
    typia.random<string & Format<"uuid">>(),
  );
  typia.assert(output);
};
