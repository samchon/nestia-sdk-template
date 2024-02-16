import api from "@api";
import { IBbsArticle } from "@api/structures/bbs/IBbsArticle";
import { IPage } from "@api/structures/common/IPage";
import typia from "typia";

export const test_api_bbs_articles_abridges = async (
  connection: api.IConnection,
) => {
  const output: IPage<IBbsArticle.IAbridge> =
    await api.functional.bbs.articles.abridges(
      connection,
      typia.random<IBbsArticle.IRequest>(),
    );
  typia.assert(output);
};
