import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information ;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService)  { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.getDetails(id).subscribe(result => {
      console.log(result);
      this.information =result;
    });
  }
  openWebsite() {
    window.open(this.information.Website, '_blank');

  }

}
