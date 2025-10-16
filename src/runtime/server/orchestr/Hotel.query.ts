import { defineHygraph } from "../middleware/hygraph";
import { HotelAllQuery } from "../../shared/tokens/Hotel";

export default defineHygraph.queryHandler(
  HotelAllQuery,
  async ({ context }) => {
    const res = await context.hygraph.query(`
      query {
        hotels {
          id
        }
      }
    `);

    return {
      ids: res.data.hotels.map((hotel: any) => hotel.id),
    };
  }
);
