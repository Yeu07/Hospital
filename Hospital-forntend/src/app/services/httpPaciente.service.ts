import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Medico } from "../modules/medico/interfaceMedico";
import { Paciente } from "../modules/paciente/interfacePaciente";

@Injectable({
    providedIn: 'root'
})


export class HttpServicePaciente{

    constructor(private httpCliente: HttpClient){
        
    }

    LeerTodo(cantidad: number, pagina: number, textoBusqueda: string){
        let parametros = new HttpParams();

        parametros = parametros.append('cantidad',cantidad)
        parametros = parametros.append('pagina',pagina)
        parametros = parametros.append('textoBusqueda',textoBusqueda)


        return this.httpCliente.get('https://localhost:44372/api/paciente', {params:parametros})
    }

    Eliminar(ids : number[]){
        const option = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: ids
        }

        return this.httpCliente.delete('https://localhost:44372/api/paciente', option)
    }

    Crear(paciente: Paciente){
        return this.httpCliente.post<number>('https://localhost:44372/api/paciente',paciente)
    }

    Editar(paciente:Paciente){
        return this.httpCliente.put<number>('https://localhost:44372/api/paciente/'+paciente.id,paciente)
    }
}