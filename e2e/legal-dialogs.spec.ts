import { expect, test } from '@playwright/test';

test('shows the terms of service when its footer button is clicked', async ({
  page,
}) => {
  await page.goto('/');

  await page
    .locator('footer')
    .getByRole('button', { name: '利用規約' })
    .click();

  await expect(page.getByRole('dialog', { name: '利用規約' })).toBeVisible();
});

test('shows the privacy policy when its footer button is clicked', async ({
  page,
}) => {
  await page.goto('/');

  await page
    .locator('footer')
    .getByRole('button', { name: 'プライバシーポリシー' })
    .click();

  await expect(
    page.getByRole('dialog', { name: 'プライバシーポリシー' }),
  ).toBeVisible();
});
