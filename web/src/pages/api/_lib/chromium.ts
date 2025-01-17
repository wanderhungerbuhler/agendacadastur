import puppeteer, { Page } from 'puppeteer-core';
import { getOptions } from './chomriumOptions';

let _page: Page | null;

async function getPage(isDev: boolean) {
  if(_page) {
    return _page;
  }

  const options = await getOptions(isDev);
  const browser = await puppeteer.launch(options);

  _page = await browser.newPage();

  return _page;
}

export async function getScreenshot(
  html: string,
  isDev: boolean,
) {
  const page = await getPage(isDev);
  
  await page.setViewport({ width: 590, height: 290 });
  await page.setContent(html);

  const file = await page.screenshot({ type: 'png', omitBackground: true });
 
  return file;
}