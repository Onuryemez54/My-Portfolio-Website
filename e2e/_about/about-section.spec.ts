import test, { expect } from '@playwright/test';

test.describe('About Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have a call-to-nav-link button', async ({ page }) => {
    const ctaButton = page.getByTestId('link-about');

    await expect(ctaButton).toBeVisible();

    await expect(ctaButton).toHaveText(/about/i);

    await ctaButton.click();

    await expect(page.getByTestId('about')).toBeVisible({ timeout: 5000 });
  });

  test('should display the about section', async ({ page }) => {
    const aboutSection = page.getByTestId('about');

    await aboutSection.scrollIntoViewIfNeeded();

    await expect(aboutSection).toBeVisible({ timeout: 5000 });
  });

  test('should display correct content', async ({ page }) => {
    const heading = page.getByTestId('about-title');

    const subheading = page.getByTestId('about-subtitle');

    await expect(heading).toBeVisible();
    await expect(subheading).toBeVisible();

    await expect(heading).toContainText(/about me/i);
    await expect(subheading).toContainText(/focused full-stack developer/i);
  });

  test('should have a call-to-action button', async ({ page }) => {
    const ctaButton = page.getByTestId('tab-frontend');

    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveText(/frontend/i);

    await ctaButton.click();

    const content = page.getByTestId('content-frontend');

    await expect(content).toBeVisible({ timeout: 5000 });

    await expect(content).toHaveText(/react/i);
    await expect(content).toHaveText(/typescript/i);
    await expect(content).toHaveText(/next\.js/i);
    await expect(content).toHaveText(/tailwind/i);
  });
});
