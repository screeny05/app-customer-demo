import { defineEntityComponentToken } from "@laioutr-core/canonical-types/orchestr";
import { z } from "zod/v4";

export const DestinationBase = defineEntityComponentToken("base", {
  entityType: "Destination",
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});
