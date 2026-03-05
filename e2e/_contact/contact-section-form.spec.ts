import test, { expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have a call-to-nav-link button', async ({ page }) => {
    const ctaButton = page.getByTestId('link-contact');

    await expect(ctaButton).toBeVisible();

    await expect(ctaButton).toHaveText(/contact/i);

    await ctaButton.click();

    await expect(page.getByTestId('contact-form')).toBeVisible({ timeout: 5000 });
  });

  test('should display correct content', async ({ page }) => {
    const heading = page.getByTestId('contact-form-title');

    const subheading = page.getByTestId('contact-form-subtitle');

    await expect(heading).toBeVisible();
    await expect(subheading).toBeVisible();

    await expect(heading).toContainText(/send/i);
    await expect(subheading).toContainText(/your input is invaluable/i);
  });

  test('should display all form fields', async ({ page }) => {
    const form = page.getByTestId('contact-form');
    await form.scrollIntoViewIfNeeded();

    const topicSelect = page.getByTestId('contact-topic');
    const nameInput = page.getByTestId('contact-name');
    const emailInput = page.getByTestId('contact-email');
    const messageInput = page.getByTestId('contact-message');
    const submitButton = page.getByTestId('contact-submit');

    await expect(topicSelect).toBeVisible();
    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(messageInput).toBeVisible();
    await expect(submitButton).toBeVisible();
  });

  test('user can fill contact form', async ({ page }) => {
    const form = page.getByTestId('contact-form');
    await form.scrollIntoViewIfNeeded();

    await page.getByTestId('contact-name').fill('Onur');
    await page.getByTestId('contact-email').fill('onur@test.com');
    await page.getByTestId('contact-message').fill('Hello this is a test message');

    const topicSelect = page.getByTestId('contact-topic');

    await topicSelect.click();
    const option = page.getByRole('option', { name: /collaboration/i });
    await option.click();

    const submitButton = page.getByTestId('contact-submit');

    await expect(submitButton).toBeEnabled();
    await submitButton.click();

    await expect(page.getByText(/your feedback means a lot to us/i)).toBeVisible({
      timeout: 15_000,
    });
  });

  test('clear button should reset form', async ({ page }) => {
    await page.getByTestId('contact-name').fill('Onur');

    await page.getByTestId('contact-reset').click();

    await expect(page.getByTestId('contact-name')).toHaveValue('');
  });
});
