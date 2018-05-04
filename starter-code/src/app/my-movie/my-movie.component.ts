import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../movies-service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movieId: string;
  movieInfo: Movie;
  constructor(private reqThang: ActivatedRoute,
    public movieTruc: MoviesService,
    private resThang: Router
  ) { }

  ngOnInit() {

    this.reqThang.paramMap
      .subscribe((myParams) => {
        //  this.contactId = myParams.get("blahId");
         this.movieId = myParams.get('id');
                                  //req.params.blahId

         this.movieInfo = this.movieTruc.getMovie(this.movieId);
      });
  }

  confirmBack() {
    
   
   return  this.resThang.navigateByUrl('/');
                   //res.redirect('/contacts')
    }
  }


