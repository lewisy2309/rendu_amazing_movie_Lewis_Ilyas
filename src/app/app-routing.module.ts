import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  loadChildren: () => import( './pages/index/index.module').then(x => x.IndexPageModule) },
  { path: 'movies',  loadChildren: () => import( './pages/movies/movies.module').then(x => x.MoviesPageModule) },
  { path: 'movies/:id', loadChildren:()=> import('./pages/movie-details/movie-details.module').then( x => x.MovieDetailsPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
