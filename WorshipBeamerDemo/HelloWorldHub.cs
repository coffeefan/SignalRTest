using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace WorshipBeamerDemo
{
    public class HelloWorldHub : Hub
    {
        public override Task OnConnected()
        {
            return base.OnConnected();
        }

        public void GreetAll()
        {
            Clients.All.acceptGreet("Good morning! The time is " + DateTime.Now.ToLongTimeString());
        }
    }
}