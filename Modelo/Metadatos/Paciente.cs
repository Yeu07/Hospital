using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelo.Modelos
{
    [MetadataType(typeof(PacienteMetadato))]
    public partial class Paciente
    {
    }

    public class PacienteMetadato
    {
        [Required]
        [StringLength(8)]
        public string dni { get; set; }

        [Required]
        [StringLength(50)]
        public string nombre { get; set; }

        [Required]
        [StringLength(50)]
        public string apellido { get; set; }

        [Required]
        [StringLength(50)]
        public string direccion { get; set; }
        [Required]
        [StringLength(10)]
        public string celular { get; set; }

        [Required]
        [StringLength(50)]
        public string correo { get; set; }

    }
}
