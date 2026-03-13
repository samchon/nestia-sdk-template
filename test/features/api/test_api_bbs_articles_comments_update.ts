import api from "@ORGANIZATION/PROJECT-api";
import { IBbsArticleComment } from "@ORGANIZATION/PROJECT-api/lib/structures/bbs/IBbsArticleComment";
import typia, { tags } from "typia";

export const test_api_bbs_articles_comments_update = async (
  connection: api.IConnection,
) => {
  const output: IBbsArticleComment.ISnapshot =
    await api.functional.bbs.articles.comments.update(
      connection,
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<string & tags.Format<"uuid">>(),
      typia.random<IBbsArticleComment.IUpdate>(),
    );
  typia.assert(output);
};
