import test, { expect } from '@playwright/test';

test.describe('Contact Info', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have a call-to-nav-link button', async ({ page }) => {
    const ctaButton = page.getByTestId('link-contact');

    await expect(ctaButton).toBeVisible();

    await expect(ctaButton).toHaveText(/contact/i);

    await ctaButton.click();

    await expect(page.getByTestId('contact')).toBeVisible({ timeout: 5000 });
  });

  test('should display the contact section', async ({ page }) => {
    const contactSection = page.getByTestId('contact');

    await contactSection.scrollIntoViewIfNeeded();

    await expect(contactSection).toBeVisible({ timeout: 5000 });
  });

  test('should display correct content', async ({ page }) => {
    const heading = page.getByTestId('contact-title');

    const subheading = page.getByTestId('contact-subtitle');

    await expect(heading).toBeVisible();
    await expect(subheading).toBeVisible();

    await expect(heading).toContainText(/connect/i);
    await expect(subheading).toContainText(/feel free to reach out/i);
  });

  test('linkedin button should link to profile', async ({ page }) => {
    const linkedinButton = page.getByTestId('contact-icon-linkedin');

    await expect(linkedinButton).toBeVisible();

    await expect(linkedinButton).toHaveAttribute('href', 'https://www.linkedin.com/in/onur-yemez/');

    const [newPage] = await Promise.all([
      page.waitForEvent('popup', { timeout: 5000 }),
      linkedinButton.click(),
    ]);

    await expect(newPage).toHaveURL(/linkedin\.com/);
  });
});
