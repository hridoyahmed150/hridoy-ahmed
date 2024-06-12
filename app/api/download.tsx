// pages/download.js

import { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    // Perform the download when the component mounts
    const downloadPdf = async () => {
      try {
        const res = await fetch("/hridoy-ahmed.pdf");
        const blob = await res.blob();

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "hridoy-ahmed.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading PDF:", error);
      }
    };

    downloadPdf();

    // Clean up
    return () => {
      // Remove the created anchor element from the DOM
      const anchor = document.querySelector("a");
      if (anchor) {
        document.body.removeChild(anchor);
      }
    };
  }, []);

  return null; // No need to render anything on this page
};

export default Download;
