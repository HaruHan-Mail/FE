// @ts-check
import { test, expect } from '@playwright/test';

test.describe('사용자가 팀소개 섹션을 볼 때', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('헤더가 보이고, 팀소개 섹션으로 이동할 수 있다', async ({ page }) => {
    await expect(page.getByText(/'One a Day' HARUHAN/i)).toBeVisible();

    await page.evaluate(() => window.scrollBy(0, 100));

    await page.getByText('팀 소개').click();

    await expect(page).toHaveURL('/teamInfo');

    await expect(page.getByRole('heading', { name: 'Our Team', level: 1 })).toBeVisible();
  });
});

test.describe('사용자가 구독 버튼을 클릭할 때', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('구독 모달이 나타나고, 양식을 채우고 제출할 수 있다', async ({ page }) => {
    await expect(page.getByText(/'One a Day' HARUHAN/i)).toBeVisible();

    await page.evaluate(() => window.scrollBy(0, 100));

    await page.getByRole('button', { name: '구독하기' }).first().click();

    await expect(page.getByRole('heading', { name: 'Haruhan 지식 구독' })).toBeVisible();

    await page.getByText('하루 하나 (월~금)').click();

    await page.getByText('오전 7시').click();

    const emailInput = page.getByPlaceholder('example@naver.com');
    await emailInput.fill('test@example.com');
    await expect(emailInput).toHaveValue('test@example.com');

    await page.getByText('개인정보취급방침에 동의합니다').click();

    const modal = page.getByRole('dialog');
    await modal.getByRole('button', { name: '구독하기' }).click();
  });
});
