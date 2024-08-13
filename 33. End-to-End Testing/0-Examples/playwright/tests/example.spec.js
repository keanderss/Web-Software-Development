const { test, expect } = require("@playwright/test");

test("Application has heading 'Books'.", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByRole("heading", { name: "Books" })).toHaveCount(1);
});

test("Creating a book.", async ({ page }) => {
	await page.goto("/");

	const randomName = `Book ${10000 + Math.floor(Math.random() * 90000)}`;
	const randomPages = `${Math.floor(Math.random() * 1000)}`;
	const randomIsbn = `${Math.floor(Math.random() * 10000000000000)}`;

	await page.locator(".ready-for-testing").waitFor();

	await page.getByLabel("Book name:").fill(randomName);
	await page.getByLabel("Number of pages:").fill(randomPages);
	await page.getByLabel("ISBN:").fill(randomIsbn);

	await page.getByRole("button", { name: "Add" }).click();

	await expect(page.locator("li").filter({ hasText: randomName })).toHaveCount(
		1
	);
});

test("Viewing a book.", async ({ page }) => {
	await page.goto("/");

	const randomName = `Book ${10000 + Math.floor(Math.random() * 90000)}`;
	const randomPages = `${Math.floor(Math.random() * 1000)}`;
	const randomIsbn = `${Math.floor(Math.random() * 10000000000000)}`;

	await page.locator(".ready-for-testing").waitFor();

	await page.getByLabel("Book name:").fill(randomName);
	await page.getByLabel("Number of pages:").fill(randomPages);
	await page.getByLabel("ISBN:").fill(randomIsbn);

	await page.getByRole("button", { name: "Add" }).click();

	await expect(page.locator("li").filter({ hasText: randomName })).toHaveCount(
		1
	);

	await page
		.locator("li")
		.filter({ hasText: randomName })
		.getByRole("button", { name: "View" })
		.click();

	await expect(page.getByText(`Name: ${randomName}`)).toHaveCount(1);
});
