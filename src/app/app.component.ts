import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faSearch, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  faHeart = faHeart;
  faSearch = faSearch;
  faPlay = faPlay;

  private toastr = inject(ToastrService);

  showError(message: string) {
    this.toastr.error(message, 'Error');
  }

  showSuccess(message: string) {
    this.toastr.success(message, 'Success');
  }
}
