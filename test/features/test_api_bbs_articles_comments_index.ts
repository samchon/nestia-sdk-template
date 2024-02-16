import api from "@api";
import { IBbsArticleComment } from "@api/structures/bbs/IBbsArticleComment";
import { IPage } from "@api/structures/common/IPage";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

export const test_api_bbs_articles_comments_index = async (
  connection: api.IConnection,
) => {
  const output: IPage<IBbsArticleComment> =
    await api.functional.bbs.articles.comments.index(
      connection,
      typia.random<string & Format<"uuid">>(),
      typia.random<IBbsArticleComment.IRequest>(),
    );
  typia.assert(output);
};
