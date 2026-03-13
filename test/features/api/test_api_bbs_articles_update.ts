import api from "@ORGANIZATION/PROJECT-api";
import type { IBbsArticle } from "@ORGANIZATION/PROJECT-api/lib/structures/bbs/IBbsArticle";
import typia, { tags } from "typia";

export const test_api_bbs_articles_update = async (
  connection: api.IConnection,
) => {
  const output: IBbsArticle.ISnapshot =
    await api.functional.bbs.articles.update(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticle.IUpdate>(),
    );
  typia.assert(output);
};
