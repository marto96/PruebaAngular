import { Component, OnInit } from "@angular/core";
import { ProcedimientoService } from "../../procedimiento.service";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.component.html",
  styleUrls: ["./agregar.component.css"]
})
export class AgregarComponent implements OnInit {
  constructor(private bs: ProcedimientoService) {}

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
    this.bs.AgregarProcedimiento(
      documento,
      nombres,
      fechaInicio,
      fechaFin,
      horarioIniTur,
      horarioFinTur,
      horarioIniHor,
      horarioFinHor,
      motivo
    );
  }

  ngOnInit(): void {}
}
