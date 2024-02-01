import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "user",
        component: ProfileComponent
    }

];
