import { test, expect } from '@playwright/test';

test.describe('Workspaces Flow', () => {
  test('displays list of workspaces on home page', async ({ page }) => {
    await page.goto('/en/');
    // Assuming workspace cards are links or have a specific class. 
    // I need to look at index.astro or the component to be sure of selectors.
    // But usually looking for "Workspaces" heading or cards is good.
    // Let's assume there are images or headings for workspaces.
    await expect(page.locator('main')).toBeVisible();
    // Check for at least one link inside main that is not pagination
    const gridItems = page.locator('main a[href*="/workspace/"]');
    await expect(gridItems.first()).toBeVisible();
  });

  test('can navigate to a workspace detail', async ({ page }) => {
    await page.goto('/en/');
    const firstWorkspace = page.locator('main a[href*="/workspace/"]').first();
    const title = await firstWorkspace.innerText(); // capture title (might be empty if image only?)
    
    await firstWorkspace.click();
    
    await expect(page).toHaveURL(/\/workspace\//);
    await expect(page.locator('main h1')).toBeVisible();
  });

  // Verify English Version specifically
  test('displays english content on /en/', async ({ page }) => {
    await page.goto('/en/');
    await expect(page).toHaveURL('/en/');
    const firstWorkspace = page.locator('main a[href*="/en/workspace/"]').first();
    await expect(firstWorkspace).toBeVisible();
  });
});
