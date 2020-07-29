import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Service } from '../../api/service';
import { Telefono } from '../../api/models/telefono';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialogdelete2',
  templateUrl: './dialogdelete2.component.html',
  styleUrls: ['./dialogdelete2.component.scss']
})
export class Dialogdelete2Component {

  constructor(
      public dialogRef: MatDialogRef<Dialogdelete2Component>,
      public apiCliente: Service,
      public snackBar: MatSnackBar,
      @Inject(MAT_DIALOG_DATA) public cliente: Telefono
  ){}

  close(){
      this.dialogRef.close();
  }

  eliminarCliente() {
      this.apiCliente.delete(this.cliente._id).subscribe(response => {
        this.dialogRef.close();
        this.snackBar.open('Contacto eliminado con éxito', '',{
          duration: 2000
        });
      });
  }
}
