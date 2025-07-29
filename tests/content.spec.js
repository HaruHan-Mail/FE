// @ts-check
import { test, expect } from '@playwright/test';
import { mockContents, mockBookmarks } from './mocks';

test.describe('/content/mine 페이지 테스트', () => {
  test.beforeEach(async ({ page }) => {
    // 2. API 요청 모킹 설정: 실제 API 응답과 완전히 동일한 구조로 모킹합니다.
    await page.route('**/content/mine?email=*', (route) => {
      if (route.request().resourceType() === 'xhr' || route.request().resourceType() === 'fetch') {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            data: mockContents,
            message: '요청이 성공적으로 처리되었습니다.',
            stateCode: 200,
          }),
        });
      } else {
        route.continue();
      }
    });

    await page.route('**/bookmark?email=*', (route) => {
      if (route.request().resourceType() === 'xhr' || route.request().resourceType() === 'fetch') {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            data: mockBookmarks,
            message: '요청이 성공적으로 처리되었습니다.',
            stateCode: 200,
          }),
        });
      } else {
        route.continue();
      }
    });

    // 3. 페이지로 이동합니다.
    await page.goto('/content/mine?email=test@example.com&token=test');
  });

  test('콘텐츠 및 북마크 목록이 올바르게 표시되어야 한다', async ({ page }) => {
    await expect(page.getByRole('heading', { name: '나의 하루한 콘텐츠' })).toBeVisible();
    await expect(page.getByText(`전체 지식 ${mockContents.length}`)).toBeVisible();
    await expect(page.getByText(`북마크한 지식 ${mockBookmarks.length}`)).toBeVisible();

    for (const content of mockContents) {
      await expect(page.getByText(content.title)).toBeVisible();
    }
  });

  test('북마크 탭을 클릭하면 북마크된 콘텐츠가 보여야 한다', async ({ page }) => {
    await page.getByText(`북마크한 지식 ${mockBookmarks.length}`).click();
    await expect(page.getByText(mockBookmarks[0].title)).toBeVisible();
  });

  test('콘텐츠 아이템을 클릭하면 상세 페이지로 이동해야 한다', async ({ page }) => {
    // 상세 페이지 API를 모킹합니다.
    await page.route(`**/content/${mockContents[0].id}`, (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: mockContents[0],
          message: '요청이 성공적으로 처리되었습니다.',
          stateCode: 200,
        }),
      });
    });

    // 목록에서 첫 번째 콘텐츠 아이템을 클릭합니다.
    await page.getByText(mockContents[0].title).click();

    // URL이 올바르게 변경되었는지 확인합니다.
    await expect(page).toHaveURL(`/content/${mockContents[0].id}`);

    // 상세 페이지의 제목과 요약이 올바르게 표시되는지 확인합니다.
    await expect(page.getByRole('heading', { name: mockContents[0].title })).toBeVisible();
    await expect(page.getByText(mockContents[0].summary)).toBeVisible();

    // 다른 상세 정보 섹션들도 올바르게 표시되는지 확인합니다.
    await expect(page.getByRole('heading', { name: '알아두면 쓸모 있는 배경 지식' })).toBeVisible();
    await expect(page.getByText(mockContents[0].background[0])).toBeVisible();
    await expect(page.getByRole('heading', { name: '이 지식이 왜 중요할까?' })).toBeVisible();
    await expect(page.getByText(mockContents[0].importance[0])).toBeVisible();
  });
});
