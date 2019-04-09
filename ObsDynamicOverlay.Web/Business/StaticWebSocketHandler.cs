using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ObsDynamicOverlay.Web.Business
{
    // Look at https://radu-matei.com/blog/aspnet-core-websockets-middleware/
    public static class StaticWebSocketHandler
    {
        private const string WebsocketUrl = "/ws";

        public static async Task Handle(HttpContext context, Func<Task> next, CancellationToken token)
        {
            if (context.Request.Path == WebsocketUrl)
            {
                if (context.WebSockets.IsWebSocketRequest)
                {
                    var ws = await context.WebSockets.AcceptWebSocketAsync();
                    await Echo(context, ws, token);
                }
                else
                {
                    context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                }
            }
            else
            {
                await next();
            }
        }

        private static async Task Echo(HttpContext context, WebSocket webSocket, CancellationToken token)
        {
            var buffer = new byte[4096];
            var result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), token);

            while (!result.CloseStatus.HasValue)
            {
                await webSocket.SendAsync(new ArraySegment<byte>(buffer), result.MessageType, result.EndOfMessage, token);

                result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), token);
            }

            await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, token);
        }
    }
}
