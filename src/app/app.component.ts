import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faSearch, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from './services/movie.service';
import { Movie } from './models/movie.model';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  movieList: Movie[] = [];

  ngAfterViewInit(): void {
    this.movieService.getPopularMovies().subscribe({
      next: (movies) => (this.movieList = movies.results),
    });
  }
  faHeart = faHeart;
  faSearch = faSearch;
  faPlay = faPlay;

  private toastr = inject(ToastrService);
  private movieService = inject(MovieService);

  showError(message: string) {
    this.toastr.error(message, 'Error');
  }

  showSuccess(message: string) {
    this.toastr.success(message, 'Success');
  }
}
