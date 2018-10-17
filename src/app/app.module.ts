import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/topBar/topBar.component';
import { BottomBarComponent } from './components/bottomBar/bottomBar.component';
import { SidePaneComponent } from './components/sidePane/sidePane.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    SidePaneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
