export async function downloadResume(): Promise<Blob> {
  try {
    const response = await fetch("/resume/download");

    if (!response.ok) {
      throw new Error("Failed to download resume");
    }

    return response.blob();
  } catch (error) {
    console.error("Error downloading resume:", error);
    throw error;
  }
}
