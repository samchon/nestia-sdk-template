import api from "@ORGANIZATION/PROJECT-api";
import { IBbsArticleComment } from "@ORGANIZATION/PROJECT-api/lib/structures/bbs/IBbsArticleComment";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

export const test_api_bbs_articles_comments_update = async (
  connection: api.IConnection,
) => {
  const output: IBbsArticleComment.ISnapshot =
    await api.functional.bbs.articles.comments.update(
      connection,
      typia.random<string & Format<"uuid">>(),
      typia.random<string & Format<"uuid">>(),
      typia.random<IBbsArticleComment.IUpdate>(),
    );
  typia.assert(output);
};
