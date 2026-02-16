using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Comun.ViewModels
{
    public class PacienteVMR
    {
        public long id { get; set; }
        public string dni { get; set; }
        public string nombre { get; set; }

        public string apellido { get; set; }

        public string direccion { get; set; }

        public string celular { get; set; }

        public string correo { get; set; }
    }
}
