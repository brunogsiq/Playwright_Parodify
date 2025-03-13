import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => 
{
	await page
		.goto('https://parodify.vercel.app/');
});

test('01 - Validar acesso ao portal do projeto.', async ({ page }) => 
{
	//Dado que foi inserida a Url do projeto

	//Quando sistema carregar
	await page.waitForTimeout(1000)

	//Então deverá carregar a página web do projeto
	await expect(page)
		.toHaveURL("https://parodify.vercel.app/");
});

test('02 - Validar identificação usuário logado.', async ({ page }) => 
{
	//Dado que a url do projeto foi acessada

	const loggedeUser = page.locator('.logged-user')
	
	//Quando validar o usuário
	await page.waitForSelector('loggedeUser');

	await page.waitForTimeout(3000)

	//Então sistema deverá exibir o mesmo
	await expect(loggedeUser)
		.toBeVisible();
	await expect(loggedeUser)
		.toHaveText('Fernando Papito');
});

test('03 - Validar apresentação da playlist de música.', async ({ page }) => 
{
	//Dado que a url do projeto foi acessada

	const song = {
		title: "Bughium"
	};

	//Quando validar a apresentação da lista de músicas
	const musicList = page.locator('.gap-y-8');
	const nameSong = page.locator('//h6[text()="Bughium"]');

	await musicList.waitFor();
	await expect(musicList)
		.toBeVisible();

	//Então o sistema deverá apresentar ao menos uma música
	await expect(nameSong)
		.toBeVisible();	
	await expect(nameSong)
		.toHaveText('Bughium');
});

test('04 - Validar tocar a música selecionada.', async ({ page }) => 
{
	//Dado que a url do projeto foi acessada

	await page
		.waitForTimeout(1000);

	const buttonPlayMusic = page.locator('.w-10').nth(0);
	const buttonPauseMusic = page.locator('.pause').nth(0);

	//Quando realizar um evento de clique na opção Play
	await expect(buttonPlayMusic)
		.toBeVisible();
		await buttonPlayMusic
			.click();
		await page
			.waitForTimeout(2000);
		await expect(buttonPlayMusic)
			.toBeEmpty();

	//Então o sistema deverá tocar a música.
	await page
		.waitForTimeout(10000);
	await expect(buttonPauseMusic)
		.toBeVisible();
});

test('05 - Validar buscar por música.', async ({ page }) => 
{
	//Dado que a url do projeto foi acessada

	//Quando realizar a busca por uma música existente
	const inputSearchMusic = page.locator('#search-input');
	const buttonSearchMusic = page.locator('.ml-4');

	await page.waitForTimeout(5000);

	await expect(inputSearchMusic)
		.toBeVisible()
		await expect(inputSearchMusic)
			.toHaveAttribute('placeholder', 'Buscar pelo nome da música');

	await expect(buttonSearchMusic)
		.toBeVisible();
		await expect(buttonSearchMusic)
			.toHaveText('Buscar')

	await inputSearchMusic
		.click();
		await inputSearchMusic
			.fill('Nice Bugs')
			await buttonSearchMusic
				.click();

	await page.waitForTimeout(5000);

	//Então o sistema deverá apresenta somente esta
	const musicList = page.locator('.gap-y-8');
	const nameSong = page.locator('//h6[text()="Nice Bugs Finish Devs"]');

	await expect(musicList)
		.toBeVisible()
		expect(nameSong)
			.toBeVisible()
});