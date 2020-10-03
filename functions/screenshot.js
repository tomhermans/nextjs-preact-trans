const puppeteer = require("puppeteer");

(async () => {
	// 1. Launch a new browser
	const browser = await puppeteer.launch();

	// 2. Open a new page
	const page = await browser.newPage();

	// 3. Navigate to the given URL
	await page.goto("https://bitsofco.de");

	// 4. Take screenshot
	const screenshot = await page.screenshot({ encoding: "binary" });

	await browser.close();
})();
