import { http, HttpResponse } from "msw";

export const handler = [
  http.get("/name", () => {
    return HttpResponse.json(
      { name: "임우찬" },
      {
        status: 200,
      }
    );
  }),

  http.get("/age", () => {
    return HttpResponse.json(
      { age: "26" },
      {
        status: 200,
      }
    );
  }),
];
