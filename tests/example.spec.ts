import { test } from '@playwright/test';

const urls = [
  'https://archives.yamanoku.net/',
  'https://yamanoku.net/vue-a11y-2019/ja/',
  'https://yamanoku.net/',
];

for (const url of urls) {
  test(`${url} 存在確認`, async ({ page }) => {
    console.log(url);
    await page.goto(url);
  });
}
