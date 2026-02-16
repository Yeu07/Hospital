using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelo.Modelos
{
    public partial class DbConexion : DbContext
    {

        public virtual DbSet<Medico> Medico { get; set; }
        public virtual DbSet<Paciente> Paciente { get; set; }
        public virtual DbSet<Ingreso> Ingreso { get; set; }
        public virtual DbSet<Egreso> Egreso { get; set; }

        // constructor privado el cual usa el constructor de la clase base DbContext
        private DbConexion(string connectionString)
            : base(connectionString)
        {
            // Deshabilitar el Lazy Loading y Proxy Creation para evitar problemas de serialización 
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
            this.Database.CommandTimeout = 900;
        }


        public static DbConexion Create()
        {
            return new DbConexion("name=HospitalEntities");
        }
    }
}
