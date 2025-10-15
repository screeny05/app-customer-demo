import { z } from "zod/v4";
import {
  defineQueryToken,
  defineLinkToken,
  defineEntityComponentToken,
} from "@laioutr-core/canonical-types/orchestr";

export const HotelAllQuery = defineQueryToken("hygraph/hotel/all", {
  entity: "Hotel",
  type: "multi",
  label: "Hotel All",
  defaultLimit: 10,
  input: z.object({}),
});

export const HotelBase = defineEntityComponentToken("base", {
  entityType: "Hotel",
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const HotelDestinationsLink = defineLinkToken(
  "hygraph/hotel/destinations",
  {
    source: "Hotel",
    target: "Destination",
    type: "multi",
    label: "Hotel Destination",
  }
);
