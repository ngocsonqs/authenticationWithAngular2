// import default
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import routings
import { routing, appRoutingProviders } from './app.routing';

// import library
import { AUTH_PROVIDERS } from 'angular2-jwt';

// import components
import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

// import services
import { Auth } from './services/auth.service';

// import class guard
import { AuthGuard } from './auth.guard';

@NgModule({
  imports:      [
    BrowserModule,
    routing
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],

  bootstrap:    [ AppComponent ],

  providers : [
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ]
})
export class AppModule { }
