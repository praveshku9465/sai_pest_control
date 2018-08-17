import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppConfig} from './config/app.config';
import {HomePage} from './core/pages/home/home.page';
import {Error404Page} from './core/pages/error404/error404.page';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomePage},
  {path: AppConfig.routes.about, component: AboutusComponent},
  {path: AppConfig.routes.services, component: ServicesComponent},
  {path: AppConfig.routes.contact, component: ContactComponent},
  {path: AppConfig.routes.error404, component: Error404Page},
  {path: AppConfig.routes.heroes, loadChildren: './modules/heroes/heroes.module#HeroesModule'},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
