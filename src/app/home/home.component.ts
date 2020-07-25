import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lst: string[] = ['xd1', 'xd2', 'xd3', 'xd4'];
  public columnas: string[] = ['id','nombre', 'numero1', 'numero2', 'actions'];
  constructor() { }

  ngOnInit(): void {
  }

}
