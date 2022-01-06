import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;

  resultSearch;

  research ='';

  resultSubscribe;

  filter='';
  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.getMovies();
  }

  getMovies(){
      this.resultSubscribe=this.movieService.getMovies().subscribe((results)=>{
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

  filterMovie(){
    this.movieService.filterData(this.filter).subscribe((results)=>{
      console.log(results);
      if(this.filter!=='latest'){
        this.results=results.results;
      }else{
        this.results=results;
      }
  });
  }

  ionViewDidLeave() {
    this.resultSubscribe.unsubscribe();
  }

}
