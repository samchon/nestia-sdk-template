import api from "@api";
import { IBbsArticleComment } from "@api/structures/bbs/IBbsArticleComment";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

export const test_api_bbs_articles_comments_erase = async (
  connection: api.IConnection,
) => {
  const output = await api.functional.bbs.articles.comments.erase(
    connection,
    typia.random<string & Format<"uuid">>(),
    typia.random<string & Format<"uuid">>(),
    typia.random<IBbsArticleComment.IErase>(),
  );
  typia.assert(output);
};
