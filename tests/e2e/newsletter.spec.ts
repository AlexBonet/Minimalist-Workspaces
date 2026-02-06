import { test, expect } from '@playwright/test';

test.describe('Newsletter Flow', () => {
  test('allows user to subscribe', async ({ page }) => {
    await page.goto('/en/');

    // Open Modal
    await page.locator('footer').getByRole('button', { name: 'NEWSLETTER' }).click();
    
    // Check Modal Header
    await expect(page.getByTestId('newsletter-modal')).toContainText(/STAY/);

    // Fill Email
    const emailInput = page.getByPlaceholder('ENTER EMAIL');
    await emailInput.fill('e2e@example.com');

    // Submit
    await page.getByRole('button', { name: 'SUBSCRIBE' }).click();

    // Wait for success
    // The animation takes time, so standard timeout should be fine, or extended
    await expect(page.getByText('YOU ARE IN')).toBeVisible({ timeout: 10000 });
  });

  test('validates empty input', async ({ page }) => {
    await page.goto('/en/');
    await page.locator('footer').getByRole('button', { name: 'NEWSLETTER' }).click();
    
    // Click submit without filling
    await page.getByRole('button', { name: 'SUBSCRIBE' }).click();

    // Browser validation is hard to test in Playwright directly (pseudo-class :invalid)
    const emailInput = page.getByPlaceholder('ENTER EMAIL');
    // Check if input matches :invalid pseudo-class
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.checkValidity());
    expect(isInvalid).toBe(true);
  });
});
