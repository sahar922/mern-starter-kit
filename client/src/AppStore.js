/**
 * Created by saharbenshushan on 11/19/18
 */

import {observable, computed, action} from "mobx";

export default class AppStore {
    // constructor() {
    // }

    @observable sessionData = null;

    @action
    setSessionStatus(sessionStatus) {
        this.sessionStatus = sessionStatus;
    }

    @computed
    get getHumenRepAdmins() {
        return this.allAdmins.filter(x => x.humanRep && x.status === "ACTIVE");
    }
};