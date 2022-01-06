import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<Array<any>>;

  resultSearch;

  research ='';

  resultSubscribe;

  filter='';
  page=1;
  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.getMovies();
  }

  getMovies(){
      this.resultSubscribe=this.movieService.getMovies().subscribe((results)=>{
      console.log(results.results);
      this.results = of(results.results);
    });
  }

  loadMovies(event){
    this.page++;
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      this.resultSubscribe=this.movieService.getMovies(this.page).subscribe((results)=>{
        console.log(results.results);
        if(this.results){
          this.results.subscribe((observer)=>{
            // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
            results.results.forEach(function(arrayItem: any){
              observer.push(arrayItem);
          });
          // and disable the infinite scroll
      if (observer.length === results.total_results) {
        event.target.disabled = true;
      }
          });
        }else{
        this.results = of(results.results);
      }
      });
    }, 500);
  }

  searchChange(){
    this.movieService.searchData(this.research).subscribe((results)=>{
        console.log(results.results);
        this.results=of(results.results);
    });
  }

  filterMovie(){
    this.movieService.filterData(this.filter).subscribe((results)=>{
      console.log(results);
      this.results=of(results.results);
  });
  }

  ionViewDidLeave() {
    this.resultSubscribe.unsubscribe();
  }

}
