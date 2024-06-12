const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Go to your site with the query parameter to hide the header
  await page.goto("https://hridoy-ahmed.vercel.app/?hideHeader=true", {
    waitUntil: "networkidle2",
  });

  // Add a delay to ensure everything is rendered
  await new Promise((resolve) => setTimeout(resolve, 5000)); // wait for 5 seconds

  // Dynamically scale the page content
  await page.evaluate(() => {
    document.body.style.zoom = "0.8"; // Adjust the zoom level as needed
  });

  // Generate the PDF with adjusted settings
  await page.pdf({
    path: "hridoy-ahmed.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "0mm",
      bottom: "0mm",
      left: "0mm",
      right: "0mm",
    },
  });

  await browser.close();
})();
