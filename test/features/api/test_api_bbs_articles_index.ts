import api from "@ORGANIZATION/PROJECT-api";
import type { IBbsArticle } from "@ORGANIZATION/PROJECT-api/structures/bbs/IBbsArticle";
import type { IPage } from "@ORGANIZATION/PROJECT-api/structures/common/IPage";
import typia from "typia";

export const test_api_bbs_articles_index = async (
  connection: api.IConnection,
) => {
  const output: IPage<IBbsArticle.ISummary> =
    await api.functional.bbs.articles.index(
      connection,
      typia.random<IBbsArticle.IRequest>(),
    );
  typia.assert(output);
};
