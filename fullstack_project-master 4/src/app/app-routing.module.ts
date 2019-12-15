import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { GameTableComponent } from './game-table/game-table.component';
import { PlayerDetailComponent } from  './player-detail/player-detail.component';
import { PlayerJoinComponent } from './player-join/player-join.component';
import { PlayerTableComponent} from './player-table/player-table.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-player' },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent},
  { path: 'player-list', component: PlayerListComponent },
  { path: 'game-table', component: GameTableComponent },
  { path: 'player-table', component: PlayerTableComponent },
  { path: 'player-join', component: PlayerJoinComponent },
  { path: 'player-detail', component: PlayerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
