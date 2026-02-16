using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelo.Modelos
{
    [MetadataType(typeof(MedicoMetadato))]
    public partial class Medico
    {
    }

    public class MedicoMetadato
    {
        // Defino validaciones a realizar sobre cada campo
        [Required]
        [StringLength(8)]
        public decimal dni { get; set; }

        [Required]
        [StringLength(50)]
        public string nombre { get; set; }

        [Required]
        [StringLength(50)]
        public string apellido { get; set; }

        [Required]
        public bool esEspecialista { get; set; }

        [Required]
        public bool habilitado { get; set; }

    }
}
