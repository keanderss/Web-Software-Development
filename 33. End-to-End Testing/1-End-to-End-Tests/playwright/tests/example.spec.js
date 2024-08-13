const { test, expect } = require("@playwright/test");

test("Movement with buttons works.", async ({ page }) => {
	await page.goto("/");
	await page.waitForTimeout(1000);
	await page.getByRole("button", { name: "Up" }).click();
	await page.getByRole("button", { name: "Up" }).click();
	await page.getByRole("button", { name: "Down" }).click();
	await page.getByRole("button", { name: "Left" }).click();
	await page.getByRole("button", { name: "Left" }).click();
	await page.getByRole("button", { name: "Right" }).click();
	await expect(page.getByRole("paragraph")).toContainText("At (-1, 1)");
});

test("Location persists between page reloads.", async ({ page }) => {
	await page.goto("/");
	await page.waitForTimeout(1000);
	await page.getByRole("button", { name: "Up" }).click();
	await page.getByRole("button", { name: "Up" }).click();
	await page.getByRole("button", { name: "Down" }).click();
	await page.getByRole("button", { name: "Left" }).click();
	await page.getByRole("button", { name: "Left" }).click();
	await page.getByRole("button", { name: "Right" }).click();
	await page.reload();
	await expect(page.getByRole("paragraph")).toContainText("At (-1, 1)");
});
