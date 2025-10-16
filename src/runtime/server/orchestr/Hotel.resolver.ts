import { defineHygraph } from "../middleware/hygraph";
import { HotelBase } from "../../shared/tokens/Hotel";

export default defineHygraph.componentResolver({
  entityType: "Hotel",
  provides: [HotelBase],
  label: "Hotel Base",
  resolve: async ({ entityIds, context, $entity }) => {
    const res = await context.hygraph.query(
      `
      query Foo($ids: [ID!]) {
        hotels(where: { id_in: $ids }) {
          id
          name
          description
        }
      }
    `,
      {
        ids: entityIds,
      }
    );

    return {
      entities: res.data.hotels.map((hotel: any) =>
        $entity({
          id: hotel.id,
          base: () => ({
            name: hotel.name,
            description: hotel.description,
          }),
        })
      ),
    };
  },
});
