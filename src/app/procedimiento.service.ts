import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProcedimientoService {
  uri = 'http://localhost:4000/horas';

  constructor(private http: HttpClient) {}
  AgregarProcedimiento(
    documento,
    nombres,
    fechaInicio,
    fechaFin,
    horarioIniTur,
    horarioFinTur,
    horarioIniHor,
    horarioFinHor,
    motivo
  ) {
    const obj = {
      documento: documento,
      nombres: nombres,
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      horarioIniTur: horarioIniTur,
      horarioFinTur: horarioFinTur,
      horarioIniHor: horarioIniHor,
      horarioFinHor: horarioFinHor,
      motivo: motivo
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('done'));
  }
}
