using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using ObsDynamicOverlay.Hubs.Models;

namespace ObsDynamicOverlay.Web.Hubs
{
    public class TitleCardHub : Hub
    {
        private const string MethodNameShow = "showTitleCard";

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            await ShowTitleCard(new TitleCardModel {Title = "Nieuw!", SubTitle = "Dit is nieuw 😃", ImageUrl = "", ShowForSeconds = 5 }, CancellationToken.None);
        }

        public async Task ShowTitleCard(TitleCardModel titleCard, CancellationToken token)
        {
            await Clients.All.SendAsync(MethodNameShow, titleCard, token);
        }
    }
}
