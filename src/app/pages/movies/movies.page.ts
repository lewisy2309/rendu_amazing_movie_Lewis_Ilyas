import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results;

  resultSearch;

  research ='';
  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies().subscribe((results)=>{
      console.log(results.results);
      this.results = results.results;
    });
  }

  searchChange(){
    this.movieService.searchData(this.research).subscribe((results)=>{
        console.log(results.results);
        this.results=results.results;
    });
  }

}
