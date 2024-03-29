﻿import * as signalR from "@microsoft/signalr";
import * as titleCard from "./classes/titleCardModel";

export const startApp = () => {

    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/hub")
        .configureLogging(signalR.LogLevel.None)
        .build();

    connection.start().catch(err => console.log("Caught error: ", err));

    connection.on("showTitleCard", (titleCard: titleCard.Model) => {
        //document.getElementById("logo").src = titleCard.imageUrl;
        console.log("Got showTitleCard message, model:", titleCard);

        showTitleCard(titleCard);

        console.log("All done!");
    });

    connection.on("hideTitleCard", () => {
        console.log("Got hideTitleCard message, hiding...");
        hideTitleCard();
    });

    function showTitleCard(titleCard: titleCard.Model) {
        let logo = document.getElementById("logo") as HTMLImageElement;
        if (logo !== undefined) {
            logo.src = titleCard.imageUrl;
        }

        document.getElementById("title").innerText = titleCard.title;
        document.getElementById("subtitle").innerText = titleCard.subTitle;
        document.getElementById("titleCard").classList.add("visible");

        window.setTimeout(hideTitleCard, titleCard.showForSeconds * 1000);
    }

    function hideTitleCard() {
        document.getElementById("titleCard").classList.remove("visible");
        console.log("Hid the titleCard");
    }
}