using Microsoft.AspNet.SignalR;
using ProgressBarSignalr.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProgressBarSignalr.Util
{
    public class Functions
    {
        public static void SendProgress(string progressMessage, int progressCount, int totalItems,bool hide,string connectionId) {
            //inn order to invoke signalr functionallly directtly fromm server side we mmust use thihs
            var hubContext = GlobalHost.ConnectionManager.GetHubContext<ProgressHub>();
            //calculating percentaje based on the parameters sent
            var percentage = (progressCount * 100) / totalItems;
            //pushing data to all clients
            //hubContext.Clients.All.AddProgress(progressMessage, percentage + "%",hide);
            hubContext.Clients.Client(connectionId).AddProgress(progressMessage, percentage + "%", hide);
            //hubContext.Clients.Client

        }
    }
}