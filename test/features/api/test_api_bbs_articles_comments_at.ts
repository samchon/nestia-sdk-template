import api from "@ORGANIZATION/PROJECT-api";
import { IBbsArticleComment } from "@ORGANIZATION/PROJECT-api/lib/structures/bbs/IBbsArticleComment";
import typia, { tags } from "typia";

export const test_api_bbs_articles_comments_at = async (
  connection: api.IConnection,
) => {
  const output: IBbsArticleComment =
    await api.functional.bbs.articles.comments.at(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
    );
  typia.assert(output);
};
