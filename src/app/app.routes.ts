import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { EdutinComponent } from './components/edutin/edutin.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

export const routes: Routes = [

    {
        path:'hola',
        component: HolaMundoComponent
    },
    {
        path:'edutin',
        component: EdutinComponent
    },
    {
        path:'acercade',
        component:AcercaDeComponent
    },
    {
        path:'**',
        redirectTo:'hola',
        pathMatch:'full'
    }

];
