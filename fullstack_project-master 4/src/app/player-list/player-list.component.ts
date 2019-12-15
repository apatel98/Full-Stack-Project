import { Players } from '../../../backend/models/players';
import { ApiService } from '../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {Player} from '../shared/player';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent implements OnInit {
  PlayerData: any = [];
  dataSource: MatTableDataSource<Players>;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'playername', 'rank', 'score', 'time','favourite_game','status'];

  constructor(private playerApi: ApiService) {
    this.playerApi.GetPlayers().subscribe(data => {
      this.PlayerData= data; 
      this.dataSource = new MatTableDataSource<Players>(this.PlayerData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator; 
      }, 0);
    });
  }

  ngOnInit() { 
   }

  public loadPlayers(){
    this.playerApi.GetPlayers().subscribe(
      response => this.PlayerData = response,
    )
  }
  

  deletePlayer(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.playerApi.DeletePlayer(e._id).subscribe()
    }
  }

}