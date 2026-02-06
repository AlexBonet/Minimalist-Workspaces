import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/en/');
  await expect(page).toHaveTitle(/Minimalist/);
});

test('can navigate to about page', async ({ page }) => {
  await page.goto('/en/');
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/.*about/);
  await expect(page.locator('main h1')).toBeVisible();
});

test('handles 404 correctly', async ({ page }) => {
  await page.goto('/en/non-existent-page');
  await expect(page.locator('h1')).toContainText('404');
  await expect(page.getByText('Page Not Found')).toBeVisible();
});
