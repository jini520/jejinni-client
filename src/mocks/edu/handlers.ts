import { http, HttpResponse } from "msw";
import { mockEdu } from "./data";

export const eduHandlers = [
  http.get("/api/edu", () => {
    return HttpResponse.json({
      success: true,
      data: mockEdu,
    });
  }),
];
