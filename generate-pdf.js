const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Go to your site with the query parameter to hide the header
  await page.goto("https://hridoy-ahmed.vercel.app/?hideHeader=true", {
    waitUntil: "networkidle2",
  });

  // Add an extra wait time to ensure everything is rendered
  await new Promise((resolve) => setTimeout(resolve, 5000)); // wait for 5 seconds

  // Generate the PDF
  await page.pdf({
    path: "site.pdf",
    format: "A3",
    printBackground: true,
  });

  await browser.close();
})();
