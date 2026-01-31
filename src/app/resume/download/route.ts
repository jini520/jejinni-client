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
    const contentType =
      response.headers.get("content-type") || "application/pdf";

    // 파일명 파싱 (RFC 5987 형식 지원)
    let filename = "resume.pdf"; // 기본값

    if (contentDisposition) {
      // RFC 5987 형식: filename*=UTF-8''인코딩된파일명
      const utf8Match = contentDisposition.match(/filename\*=UTF-8''(.+)/);
      if (utf8Match && utf8Match[1]) {
        filename = decodeURIComponent(utf8Match[1]);
      } else {
        // 일반 형식: filename="파일명" 또는 filename=파일명
        const filenameMatch = contentDisposition.match(
          /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
        );
        if (filenameMatch && filenameMatch[1]) {
          filename = filenameMatch[1].replace(/['"]/g, "");
        }
      }
    }

    // 한글 파일명을 RFC 5987 형식으로 인코딩하여 전달
    const encodedFilename = encodeURIComponent(filename);

    return new NextResponse(blob, {
      headers: {
        "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodedFilename}`,
        "Content-Type": contentType,
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
