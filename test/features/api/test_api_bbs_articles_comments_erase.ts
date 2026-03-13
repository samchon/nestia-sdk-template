import api from "@ORGANIZATION/PROJECT-api";
import { IBbsArticleComment } from "@ORGANIZATION/PROJECT-api/lib/structures/bbs/IBbsArticleComment";
import typia, { tags } from "typia";

export const test_api_bbs_articles_comments_erase = async (
  connection: api.IConnection,
) => {
  const output = await api.functional.bbs.articles.comments.erase(
    connection,
    typia.random<string & tags.Format<"uuid">>(),
    typia.random<string & tags.Format<"uuid">>(),
    typia.random<IBbsArticleComment.IErase>(),
  );
  typia.assert(output);
};
