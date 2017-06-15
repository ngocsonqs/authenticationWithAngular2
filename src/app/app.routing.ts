// import providers
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import component
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

// import guard
import { AuthGuard } from './auth.guard';

// create routes
const appRoutes: Routes = [
  // route for HOME component
  {
    path : '',
    component : HomeComponent
  },

  // route for PROFILE component
  {
    path : 'profile',
    component : ProfileComponent,
    canActivate : [AuthGuard]
  }
];

export const appRoutingProviders : any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
