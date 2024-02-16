import api from "@api";
import type { IBbsArticle } from "@api/structures/bbs/IBbsArticle";
import type { IPage } from "@api/structures/common/IPage";
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
