const puppeteer = require("puppeteer");

module.exports = async (req, res) => {

  const { url } = req.body;

  let base64 = "";

  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1024, height: 800 });

    base64 = await page.screenshot({
      fullPage: true,
      encoding: "base64",
    });

    await page.close();
    await browser.close();
  } catch (e) {
    console.log(e);
    res.status(400);
    return;
  }

  res.status(200).send(base64);
};
