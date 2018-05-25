import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UsuarioComponent} from './usuario/usuario.component';
import { ActualizarComponent } from './actualizar/actualizar.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UsuarioComponent,
        ActualizarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: "", component: HomeComponent},
            {path: "usuario", component: UsuarioComponent},
            {path: "usuario/:id", component: ActualizarComponent},

        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
