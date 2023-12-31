import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieModule } from './movie/movie.module';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './public/navigation/navigation.component';
import { SigninViewComponent } from './views/signin-view/signin-view.component';
import { HomeComponent } from './public/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink, 
    RouterLinkActive,
    MovieModule,
    HttpClientModule,
    FormsModule, 
    NavigationComponent,
    SigninViewComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cdaflix-dashboard';
}
