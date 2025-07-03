import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home'

export interface DataUser {
  id: number;
  name: string;
  telefono: number;
  email: string;
}


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  dataUser: any;

  constructor(private apiService: HomeService) { }

  ngOnInit(): void {
    this.apiService.obtenerDatos().subscribe(response => {
      this.dataUser = response;
    });
  }
}