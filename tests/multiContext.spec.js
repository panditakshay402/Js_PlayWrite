const { test, expect } = require('@playwright/test');

test.describe('Multiple Browser Context Example', () => {

    let context1;
    let context2;
    let pageA;
    let pageB;

    test.beforeEach(async ({ browser }) => {

        context1 = await browser.newContext();
        context2 = await browser.newContext();

        pageA = await context1.newPage();
        pageB = await context2.newPage();

        await pageA.goto('https://the-internet.herokuapp.com/add_remove_elements/');
        await pageB.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    });

    test('User A and User B work independently', async () => {


        await pageA.getByRole('button', {
            name: 'Add Element'
        }).click();

        await expect(
            pageA.getByRole('button', {
                name: 'Delete'
            })
        ).toHaveCount(1);



        await pageB.getByRole('button', {
            name: 'Add Element'
        }).click();

        await pageB.getByRole('button', {
            name: 'Add Element'
        }).click();

        await pageB.getByRole('button', {
            name: 'Add Element'
        }).click();

        await expect(
            pageB.getByRole('button', {
                name: 'Delete'
            })
        ).toHaveCount(3);



        await expect(
            pageA.getByRole('button', {
                name: 'Delete'
            })
        ).toHaveCount(1);
    });

    test.afterEach(async () => {
        await context1.close();
        await context2.close();
    });

});