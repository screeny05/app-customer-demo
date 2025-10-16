import { defineHygraph } from "../middleware/hygraph";
import { DestinationBase } from "../../shared/tokens/Destination";

export default defineHygraph.componentResolver({
  entityType: "Destination",
  provides: [DestinationBase],
  label: "Destination Base",
  resolve: async ({ entityIds, context, $entity }) => {
    const res = await context.hygraph.query(
      `
      query Foo($ids: [ID!]) {
        destinations(where: { id_in: $ids }) {
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
      entities: res.data.destinations.map((destination: any) =>
        $entity({
          id: destination.id,
          base: () => ({
            name: destination.name,
            description: destination.description,
          }),
        })
      ),
    };
  },
});
