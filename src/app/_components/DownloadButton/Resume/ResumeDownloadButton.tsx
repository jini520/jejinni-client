"use client";

import React from "react";
import DownloadButton from "../DownloadButton";
import { downloadResume } from "@/api/resume.api";

const ResumeDownloadButton = () => {
  const handleDownload = async () => {
    try {
      const blob = await downloadResume();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();

      console.log(blob);
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };
  return (
    <DownloadButton onClick={handleDownload}>이력서 다운로드</DownloadButton>
  );
};

export default ResumeDownloadButton;
