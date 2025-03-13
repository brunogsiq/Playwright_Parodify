import { test, expect } from '@playwright/test';

test('01 - Validar acesso ao portal do projeto.', async ({ page }) => 
{
	//Dado que foi inserida a Url do projeto
	await page
		.goto('https://parodify.vercel.app/');

	//Quando sistema carregar
	await page.waitForTimeout(1000)

	//Então deverá carregar a página web do projeto
	await expect(page)
		.toHaveURL("https://parodify.vercel.app/");
});

test('02 - Validar identificação usuário logado.', async ({ page }) => 
{
	//Dado que a url do projeto foi acessada
	await page
		.goto('https://parodify.vercel.app/');

	const loggedeUser = page.locator('.logged-user')
	
	//Quando validar o usuário
	await page.waitForSelector('loggedeUser');

	//Então sistema deverá exibir o mesmo
	await expect(loggedeUser)
		.toBeVisible();
	await expect(loggedeUser)
		.toHaveText('Fernando Papito');
});

test('03 - Validar apresentação da playlist de música.', async ({ page }) => 
{
	//Dado que a url do projeto foi acessada
	await page
		.goto('https://parodify.vercel.app/');

	const song = {
		title: "Bughium"
	};

	const nameSong = page.locator('//h6[text()="Bughium"]')

	//Quando validar a apresentação das músicas
	await page.waitForSelector('nameSong')

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
		.goto('https://parodify.vercel.app/');

	await page
		.waitForTimeout(1000);

	const buttonPlayMusic = page.locator('.w-10').nth(0);

	//Quando realizar um evento de clique na opção Play
	await expect(buttonPlayMusic)
		.toBeVisible();
		await buttonPlayMusic
			.click();

	//Então o sistema deverá tocar a música.
	await page
		.waitForTimeout(5000);
});

test('05 - Validar buscar por música.', async ({ page }) => 
{
	//Dado que a url do projeto foi acessada

});

test('06 - Validar bloqueio de áudio.', async ({ page }) => 
{
	//Dado que a url do projeto foi acessada

});