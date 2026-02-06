import { test, expect } from '@playwright/test';

test.describe('SEO Checks', () => {
  test('homepage has correct meta tags', async ({ page }) => {
    await page.goto('/en/');
    
    // Title
    await expect(page).toHaveTitle(/Minimalist/);

    // Meta Description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveCount(1);
    const content = await metaDescription.getAttribute('content');
    expect(content).toBeTruthy();
    expect(content?.length).toBeGreaterThan(10);
  });

  test('about page has correct meta tags', async ({ page }) => {
    await page.goto('/en/about');
    
    await expect(page).toHaveTitle(/Context/);
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveCount(1);
  });

  test('html lang attribute is correct', async ({ page }) => {
    await page.goto('/en/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    await page.goto('/es/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  });
});
