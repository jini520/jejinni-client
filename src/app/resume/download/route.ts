import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
    const response = await fetch(`${apiUrl}/api/resumes/latest`);

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch resume",
        },
        { status: response.status }
      );
    }

    const blob = await response.blob();
    const contentDisposition = response.headers.get("content-disposition");
    const filename = contentDisposition
      ?.split("filename=")[1]
      .replace(/['"]/g, "");

    console.log(filename);

    return new NextResponse(blob, {
      headers: {
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    console.error("Error fetching resume:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
