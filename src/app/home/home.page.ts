import { Component, OnInit } from '@angular/core';
import {MovieService} from '../Services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  movies: any = [];

  constructor(private movieService:MovieService) {
  }

  ngOnInit(){
    this.movieService.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
        console.log(this.movies);
      }
    );
  }

}
