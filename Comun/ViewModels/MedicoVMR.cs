using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Comun.ViewModels
{
    // Clases que son iguales a las de la base de datos pero solo contienen los datos que realmente debo enviar
    // Clases con menos atributos que la original
    public class MedicoVMR
    {
        public long id { get; set; }
        public string dni { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public bool esEspecialista { get; set; }
        public bool habilitado { get; set; }
    }
}
