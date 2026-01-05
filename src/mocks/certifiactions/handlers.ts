import { http, HttpResponse } from "msw";
import { mockCertifications } from "./data";

export const certificationHandlers = [
  http.get("/api/certifications", () => {
    return HttpResponse.json({
      success: true,
      data: mockCertifications,
    });
  }),
];
