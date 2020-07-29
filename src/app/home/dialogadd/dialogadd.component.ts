import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Service } from '../../api/service';
import { Telefono } from '../../api/models/telefono';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialogadd',
  templateUrl: './dialogadd.component.html',
  styleUrls: ['./dialogadd.component.scss']
})
export class DialogaddComponent{
  public nombre: string = "";
  public apellido2: string = "";
  public apellido1: string = "";
  public numero1: number = 0;
  public numero2: number = 0;
  public email: string = "";
  public profesion: string = "";
  public keyPres: string = "";

  constructor(
      public dialogRef: MatDialogRef<DialogaddComponent>,
      public apiCliente: Service,
      public snackBar: MatSnackBar,
  ){}

  close(){
      this.dialogRef.close();
  }

  valiEntradas() {
    if (this.nombre !== "" && this.apellido1 !== "" && this.apellido2 !== "" &&
      this.email !== "" && this.numero1 !== 0 && this.profesion !== "") {
        this.add();
      } else {
        this.snackBar.open('Llene correctamente los datos', '',{
          duration: 2000
        });
      }
  }

  add() {
      const cliente: Telefono = { name: this.nombre, _id: "", firsLastName: this.apellido1,
        secondLastName: this.apellido2, email: this.email, phone: this.numero1,
        phone2: this.numero2, profetion: this.profesion};
      this.apiCliente.add(cliente).subscribe(response => {
        this.dialogRef.close();
        this.snackBar.open('Contacto agregado con éxito', '',{
          duration: 2000
        });
      });
  }

  handleKeyboardEvent(event: KeyboardEvent) { 
    this.keyPres = event.key;
    var numeros="0123456789";
    var especiales="8-37-38-46";
    var tecladoespecial = false;
    if (numeros.includes(this.keyPres) || especiales.includes(this.keyPres)) {
      tecladoespecial = true;
    }
    return tecladoespecial;
  }
}
