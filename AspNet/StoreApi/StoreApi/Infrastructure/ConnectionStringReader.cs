using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreApi.Infrastructure
{
    public static class ConnectionStringReader
    {
        private static IConfigurationRoot _configuration;
        static ConnectionStringReader()
        {
            var builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json", false, true);
            _configuration = builder.Build();
        }

        public static string DefaultConfiguration
        {
            get
            {
                return _configuration["ConnectionStrings:Default"];
            }
        }
    }
}
