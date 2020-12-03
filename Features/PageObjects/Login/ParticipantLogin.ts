import { Element } from "webdriverio";
export class ParticipantLoginPage {

    async txtEmail() {
        let elem = await $("//*[contains(@resource-id,'mat-input')]");
        return elem;
    };
    async btnMenu(){
        let elem = await $("(//android.widget.Button)[1]");
        return elem;
    }
    async btnMyJourney(){
        let elem = await $("//android.widget.Image/following-sibling::android.view.View/android.view.View[2]");
        return elem;
    }
    async stageNames(){
        //let elems = await $$("//*[contains(@resource-id,'mat-tab')]/android.view.View/android.view.View/android.view.View[1]");
        let elems = await $$("//h2[contains(@class,'stage-title')]");
        return elems;
    }
    ////*[contains(@resource-id,'mat-tab')]/android.view.View/android.view.View[2]/android.view.View[2]//android.widget.Button/../following-sibling::android.view.View[contains(text(),'')][2]
}