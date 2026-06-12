// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

import { test, expect } from '@playwright/test';

const routes = [
  '/role-select',
  '/login',
  '/otp',
  '/create-profile',
  "/refer-earn",
  "/referral-history" ,
  "/learning-plan",
  "/student-dashboard",
  "/ask-doubt",
  "/audio-call",
  "/Mcq",
  "/live-classes",
  "/video-upload",
  "/spinner",
  // "/dashboard"
];

routes.forEach((route) => {
  test(`route ${route} loads`, async ({ page }) => {
    await page.goto(`http://localhost:5173${route}`);

    await expect(page).toHaveURL(
      `http://localhost:5173${route}`
    );
  });
});