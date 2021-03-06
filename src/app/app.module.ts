import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }         from './hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
            path: 'heroes',
            component: HeroesComponent
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        },
        {
            path: 'detail/:id',
            component: HeroDetailComponent
        },
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
