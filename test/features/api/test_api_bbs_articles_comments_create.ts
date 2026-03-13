import api from "@ORGANIZATION/PROJECT-api";
import { IBbsArticleComment } from "@ORGANIZATION/PROJECT-api/lib/structures/bbs/IBbsArticleComment";
import typia, { tags } from "typia";

export const test_api_bbs_articles_comments_create = async (
  connection: api.IConnection,
) => {
  const output: IBbsArticleComment =
    await api.functional.bbs.articles.comments.create(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticleComment.ICreate>(),
    );
  typia.assert(output);
};
