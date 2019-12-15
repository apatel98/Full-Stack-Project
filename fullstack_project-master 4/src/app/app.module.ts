import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerJoinComponent } from './player-join/player-join.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import { GameTableComponent } from './game-table/game-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPlayerComponent } from './login-player/login-player.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ApiService } from './shared/api.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    UpdatePlayerComponent,
    PlayerDetailComponent,
    PlayerJoinComponent,
    PlayerListComponent,
    PlayerTableComponent,
    GameTableComponent,
    LoginPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
