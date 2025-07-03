import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home';
import { DataUser } from '../../interfaces/IServiceUser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  dataUser: DataUser[] = [];

  constructor(private apiService: HomeService) { }

  ngOnInit(): void {
    this.apiService.obtenerDatos().subscribe(response => {
      this.dataUser = response;
    });
  }
}