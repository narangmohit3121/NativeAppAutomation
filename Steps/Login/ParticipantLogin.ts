import { Given, When, Then } from "cucumber";
import { Element, ElementArray } from "webdriverio";
import { ParticipantLoginPage } from "../../Features/PageObjects/Login/ParticipantLogin";

let participantLoginPage = new ParticipantLoginPage();


Given("user logs in into Momenta App", async function () {
    // let count: number = 10;
    // for(let i:number = 1; i<=10;i++){
    //     console.log('Test');
    // }
    let isDeviceLocked: boolean = await driver.isLocked();
    console.log(isDeviceLocked);
    if (isDeviceLocked) {
        await driver.unlock();
    }
    console.log(browser.capabilities);
    //console.log(browser.capabilities.chromeOptions);
    await browser.setImplicitTimeout(30 * 1000);
    //await driver.isAppInstalled();
    await driver.startActivity('com.bts.btsmomenta', 'com.bts.btsmomenta.MainActivity', 'com.bts.btsmomenta', 'com.bts.btsmomenta.MainActivity');
    //await driver.launchApp();
    //await driver.startActivity('com.bts.btsmomenta', 'com.bts.btsmomenta.MainActivity');
    await browser.pause(10 * 1000);

    let email = await participantLoginPage.txtEmail();
    //let email = await $("//*[contains(@resource-id,'mat-input')]");
    await email.click();
    await email.setValue("karthik.avinash@abbott.com");
    let nextBtn: Element = await $("//android.widget.Button");
    await nextBtn.click();
    
    let password: Element = await $("//*[contains(@resource-id,'password')]");

    await browser.waitUntil(async function(){
        return await password.isDisplayedInViewport()
    },{
        timeout:5000,
        timeoutMsg:"Password button not displayed"
    });
    
    await browser.pause(5000);
    //await password.click();
    await password.setValue("ABab12$");

    let btnLogin: Element = await $("//*[contains(@resource-id,'btnLogin') and not(contains(@resource-id,'SSO'))]");
    await btnLogin.click();

    await browser.pause(10 * 1000);


})

When("user navigates to My Journey Page", async function () {
    let btnMenu = await participantLoginPage.btnMenu();
    await btnMenu.click();
    let btnMyJourney = await participantLoginPage.btnMyJourney();
    await btnMyJourney.click();
    await browser.pause(5000);

    let currentContext: string | null = await driver.getContext();
    console.log(currentContext);
    let contexts: string[] = await driver.getContexts();
    console.log(contexts);
    await browser.switchContext('WEBVIEW_com.bts.btsmomenta');
    console.log('one');
    currentContext = await driver.getContext()
    console.log(currentContext);
    let stages: ElementArray = await participantLoginPage.stageNames();
    console.log(stages.length);
    stages.forEach(async function (stageName) {
        let stage = await stageName.getText();
        console.log(stage);
    })

    const startPercentage: number = 30;
    const endPerctentage: number = 90;
    const anchorPercent: number = 50;
    const { width, height } = await driver.getWindowSize();
    console.log(width, height);

    const startX: number = Math.floor((width * anchorPercent) / 100);
    const startY: number = Math.floor((height * startPercentage) / 100);
    const endX: number = Math.floor((width * anchorPercent) / 100);
    const endY: number = Math.floor((height * endPerctentage) / 100);


    // await driver.touchPerform([
    //     {
    //         action: 'press',
    //         options: { x:startX , y: startY}
    //     },
    //     {
    //         action: 'wait',
    //         options: {
    //             ms: 0,
    //         },
    //     },
    //     {
    //         action: 'moveTo',
    //         options: { x: endX, y: endY }
    //     },

    //     { action: 'release', options: {} }
    // ]);
    // await driver.multiTouchPerform(
    //     [
    //         {
    //             action: 'press',
    //             options: { x: startX, y: startY }
    //         },
    //         {
    //             action: 'moveTo',
    //             options: { x: endX, y: endY }
    //         }
    //     ],
    //     []);



    // await browser.touchAction([
    //     {
    //         action: 'press',  x:startX , y: startY
    //     },
    //     { action: "wait",  ms: 1000 },
    //     {
    //         action: 'moveTo', x: endX, y: endY 
    //     },

    //     { action: 'release' }
    // ]);
    // await browser.touchAction([
    //     {
    //         action: 'moveTo', x: endX, y: endY 
    //     }
    // ])
    // await browser.touchAction([
    //     { action: 'release' }
    // ])

    

    await browser.pause(3000);
    await browser.closeApp();
    //await driver.closeApp();
})