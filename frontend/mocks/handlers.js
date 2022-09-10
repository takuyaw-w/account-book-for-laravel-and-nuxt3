import { rest } from "msw";

export const handlers = [
  rest.get("/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          {
            id: 1,
            name: "suzuki",
          },
        ],
      })
    );
  }),
];
