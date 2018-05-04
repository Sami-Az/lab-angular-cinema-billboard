import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies-service/movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(
    public movieTruc: MoviesService,
  ) { }

  ngOnInit() {
  }

}
