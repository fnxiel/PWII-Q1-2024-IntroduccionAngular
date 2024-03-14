import { Routes } from '@angular/router';
import { PrimerapantallaComponent } from './primerapantalla/primerapantalla.component';
import { SegundapantallaComponent } from './segundapantalla/segundapantalla.component';


export const routes: Routes = [
    {
        path:"primerapantalla", component: PrimerapantallaComponent,
    },
    {
        path:"segundapantalla", component: SegundapantallaComponent
    }
];
