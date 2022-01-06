import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'https://api.themoviedb.org/';
  apikey = '47c83dba53b886908202bf372b2fab93';

  constructor(private http: HttpClient) { }


  getMovies(): Observable<any>{
    return this.http.get(`${this.url}3/movie/popular?api_key=${this.apikey}`);

  }

  getDetails(id) {
    return this.http.get(`${this.url}3/movie/${id}?api_key=${this.apikey}`);
  }

  searchData(title: string): Observable<any> {
    if (title!=null){
    return this.http.get(`${this.url}3/search/movie?api_key=${this.apikey}&language=en-US&query=${title}`);
    } else {
      this.getMovies();
    }
  }
}
