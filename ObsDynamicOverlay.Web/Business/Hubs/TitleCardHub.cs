using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using ObsDynamicOverlay.Web.Models;

namespace ObsDynamicOverlay.Web.Business.Hubs
{
    public class TitleCardHub : Hub
    {
        private const string MethodNameShow = "showTitleCard";
        private const string MethodNameHide = "hideTitleCard";

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            await ShowTitleCard(new TitleCardModel {Title = "Nieuw!", SubTitle = "Dit is nieuw 😃", ImageUrl = "" }, CancellationToken.None);
        }

        public async Task ShowTitleCard(TitleCardModel titleCard, CancellationToken token)
        {
            await Clients.All.SendAsync(MethodNameShow, titleCard, token);
        }

        public async Task HideTitleCard(CancellationToken token)
        {
            await Clients.All.SendAsync(MethodNameHide, token);
        }
    }
}
