import { defineOrchestr, useRuntimeConfig } from "#imports";
import { createHygraphClient } from "../client/hygraph";

/** Decorate orchestr with a middleware that provides a hygraph client to the context. */
export const defineHygraph = defineOrchestr
  .meta({
    app: "@laioutr-demo/customer-demo",
  })
  .use(async (ctx, next) => {
    const config = useRuntimeConfig()["@laioutr-demo/customer-demo"];
    const hygraph = createHygraphClient(config.hygraphUrl, config.hygraphToken);

    // Add the hygraph client to the context
    // This allows us to use the hygraph client in the orchestr functions
    // e.g. `ctx.hygraph.query(query, variables)`
    return next({ context: { hygraph } });
  });
