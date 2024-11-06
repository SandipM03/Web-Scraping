import puppeteer from 'puppeteer';

const url = 'https://www.codesprint.ninja/';

const main = async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url);
        console.log('Page loaded successfully');
        await browser.close();
    } catch (error) {
        console.error('Error occurred:', error);
    }
};

main();
