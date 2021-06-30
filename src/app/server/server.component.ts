import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: './server.component.html'
})

export class ServerComponent{
    serverId: number = 10;
    serverStat: string = 'offline'

    getProxyNumber(){
        let proxyNum = 100
        return --proxyNum
    }
}