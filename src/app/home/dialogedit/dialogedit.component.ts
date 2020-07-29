import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Service } from '../../api/service';
import { Telefono } from '../../api/models/telefono';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-dialogedit',
  templateUrl: './dialogedit.component.html',
  styleUrls: ['./dialogedit.component.scss']
})
export class DialogeditComponent {
  public nombre: string;
  public apellido2: string;
  public apellido1: string;
  public numero1: number;
  public numero2: number;
  public email: string;
  public profesion: string;

  constructor(
      public dialogRef: MatDialogRef<DialogeditComponent>,
      public apiCliente: Service,
      public snackBar: MatSnackBar,
      @Inject(MAT_DIALOG_DATA) public cliente: Telefono
  ){
      if (this.cliente !== null){
          this.nombre = cliente.name;
          this.apellido1 = cliente.firsLastName;
          this.apellido2 = cliente.secondLastName;
          this.numero1 = cliente.phone;
          this.numero2 = cliente.phone2;
          this.email = cliente.email;
          this.profesion = cliente.profetion;
      }
  }

  close(){
      this.dialogRef.close();
  }

  editCliente() {
      const cliente: Telefono = { name: this.nombre, _id: this.cliente._id, firsLastName: this.apellido1,
        secondLastName: this.apellido2, email: this.email, phone: this.numero1,
        phone2: this.numero2, profetion: this.profesion};
      this.apiCliente.edit(cliente, this.cliente._id).subscribe(response => {
        this.dialogRef.close();
        this.snackBar.open('Contacato editado con éxito', '',{
          duration: 2000
        });
      });
  }

  valiEntradas() {
    if (this.nombre !== "" && this.apellido1 !== "" && this.apellido2 !== "" &&
      this.email !== "" && this.numero1 !== 0 && this.profesion !== "") {
        this.editCliente();
      } else {
        this.snackBar.open('Llene correctamente los datos', '',{
          duration: 2000
        });
      }
  }
}
