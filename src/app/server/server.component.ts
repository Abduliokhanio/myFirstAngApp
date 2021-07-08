import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})

export class ServerComponent{
    serverId: number = 10;
    serverStat: string = 'online'

    getProxyNumber(){
        let proxyNum = 100
        return --proxyNum
    }

    getColor(){
        return this.serverStat == 'online'? 'green':'red';
    }
}