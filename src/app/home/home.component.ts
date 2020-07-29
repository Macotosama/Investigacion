import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Service } from '../api/service';
import { Telefono } from '../api/models/telefono';
import { Dialogdelete2Component } from './dialogdelete2/dialogdelete2.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogeditComponent } from './dialogedit/dialogedit.component';
import { DialogaddComponent } from './dialogadd/dialogadd.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lst: string[] = ['xd1', 'xd2', 'xd3', 'xd4'];
  public columnas: string[] = ['nombre', 'apellido1', 'apellido2', 'numero1',
  'numero2', 'email', 'profecion', 'actions'];
  readonly with: string = '600px';
  readonly with2: string = '300px';
  constructor(
    private api: Service,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.api.get().subscribe(responses => {
      this.lst = responses.Customers;
    })
  }

  openEdit(cliente: Telefono){
    const dialogRef = this.dialog.open(DialogeditComponent, {
      width: this.with,
      data: cliente
    })
    dialogRef.afterClosed().subscribe(result => {
      this.get();
    });
  }

  delete(cliente: Telefono){
    const dialogRef = this.dialog.open(Dialogdelete2Component, {
      width: this.with2,
      data: cliente
    })
    dialogRef.afterClosed().subscribe(result => {
      this.get();
    });
  }

  add(){
    const dialogRef = this.dialog.open(DialogaddComponent, {
      width: this.with
    })
    dialogRef.afterClosed().subscribe(result => {
      this.get();
    });
  }
}
