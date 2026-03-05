import test, { expect } from '@playwright/test';

test.describe('Projects Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have a call-to-nav-link button', async ({ page }) => {
    const ctaButton = page.getByTestId('link-projects');

    await expect(ctaButton).toBeVisible();

    await expect(ctaButton).toHaveText(/projects/i);

    await ctaButton.click();

    await expect(page.getByTestId('projects')).toBeVisible({ timeout: 5000 });
  });

  test('should display the projects section', async ({ page }) => {
    const projectsSection = page.getByTestId('projects');

    await projectsSection.scrollIntoViewIfNeeded();

    await expect(projectsSection).toBeVisible({ timeout: 5000 });
  });

  test('should display correct content', async ({ page }) => {
    const heading = page.getByTestId('projects-title');

    await expect(heading).toBeVisible();

    await expect(heading).toContainText(/my featured/i);
  });

  test('should have a call-to-action button', async ({ page }) => {
    const ctaButton = page.getByTestId('projects-tab-react');

    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveText(/react/i);

    await ctaButton.click();

    const card = page.getByTestId('project-card-travelRoute');

    await expect(card).toBeVisible({ timeout: 5000 });

    const title = page.getByTestId('project-travelRoute-title');
    const desc = page.getByTestId('project-travelRoute-desc');

    await expect(title).toBeVisible();
    await expect(desc).toBeVisible();

    await expect(title).toContainText(/travel route/i);

    await expect(desc).toContainText(/fully responsive travel planning app/i);
  });

  test('should visible project modal', async ({ page }) => {
    const ctaButton = page.getByTestId('project-paradiseHotel-details');

    await expect(ctaButton).toBeVisible();

    await ctaButton.click();

    const modal = page.getByTestId('project-modal-paradiseHotel');

    await expect(modal).toBeVisible({ timeout: 5000 });
  });
});
