//import * as $ from 'jquery';
//import * as signalR from "@aspnet/signalr";
//import * as titleCard from "./classes/titleCardModel";
const signalR = require("./signalr/signalr");

export const startApp = () => {

    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/hub")
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.start().catch(err => console.log("Caught error: ", err));

//connection.on("messageReceived", ())
}