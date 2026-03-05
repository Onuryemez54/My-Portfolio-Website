import test, { expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('home').scrollIntoViewIfNeeded();
  });

  test('should display the hero section', async ({ page }) => {
    const heroSection = page.getByTestId('home');

    await expect(heroSection).toBeVisible({ timeout: 5000 });
  });

  test('should display correct content', async ({ page }) => {
    const heading = page.getByTestId('hero-title');

    const subheading = page.getByTestId('hero-subtitle');

    await expect(heading).toBeVisible();
    await expect(subheading).toBeVisible();

    await expect(heading).toContainText(/onur/i);
    await expect(subheading).toContainText(/web interfaces/i);
  });

  test('should have a call-to-action button', async ({ page }) => {
    const ctaButton = page.getByTestId('hero-cta');
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveText(/get in touch/i);

    await ctaButton.click();
    await expect(page.getByTestId('contact')).toBeVisible({ timeout: 5000 });
  });
});
