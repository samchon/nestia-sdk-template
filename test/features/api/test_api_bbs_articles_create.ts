import api from "@ORGANIZATION/PROJECT-api";
import type { IBbsArticle } from "@ORGANIZATION/PROJECT-api/lib/structures/bbs/IBbsArticle";
import typia from "typia";

export const test_api_bbs_articles_create = async (
  connection: api.IConnection,
) => {
  const output: IBbsArticle = await api.functional.bbs.articles.create(
    connection,
    typia.random<IBbsArticle.ICreate>(),
  );
  typia.assert(output);
};
