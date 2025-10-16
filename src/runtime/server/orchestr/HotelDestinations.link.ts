import { defineHygraph } from "../middleware/hygraph";
import { HotelDestinationsLink } from "../../shared/tokens/Hotel";

export default defineHygraph.linkHandler(
  HotelDestinationsLink,
  async ({ entityIds, context }) => {
    const res = await context.hygraph.query(
      `
      query Foo($ids: [ID!]) {
        hotels(where: { id_in: $ids }) {
            id
            destinations {
            id
            }
        }
      }
    `,
      {
        ids: entityIds,
      }
    );

    return {
      links: res.data.hotels.map((hotel: any) => {
        return {
          sourceId: hotel.id,
          targetIds: hotel.destinations.map(
            (destination: any) => destination.id
          ),
        };
      }),
    };
  }
);
