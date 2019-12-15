import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

//Student Name: Patrick Parreno, Asim Patel
//Student ID: 101085299, 101162370

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})

export class AddPlayerComponent implements OnInit {  
  submitted = false;
  playerForm: FormGroup;
  PlayersProfile:any = ['Player', 'Admin'];
  Ranks: any = ['1','2','3','4','5'];
  FavouriteGames: any = ['CSGO', 'Fortnite', 'DotA','Leageue of Legends', 'Call of Duty'];
  Status: any = ['Online','Offline'];

  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    // this.mainForm();
  }

  ngOnInit() {
    this.mainForm();
   }

  mainForm() {
    this.playerForm = this.fb.group({
      playername: ['', [Validators.required]],
      rank: ['', [Validators.required]],
      score: ['', [Validators.required]],
      time: ['', [Validators.required]],
      favouritegame: ['', [Validators.required]],
      status: ['', [Validators.required]],
    })
  }

  //Player
  updatePlayer(e){
    this.playerForm.get('Player').setValue(e, {
      onlySelf: true
    })
  }
  //Rank
  updateRank(e){
    this.playerForm.get('rank').setValue(e, {
      onlySelf: true
    })
  }

  //Score
  updateScore(e){
    this.playerForm.get('Score').setValue(e, {
      onlySelf: true
    })
  }

  //Choose Favorite Game with select dropdown
  updateGame(e){
    this.playerForm.get('favourite_game').setValue(e, {
      onlySelf: true
    })
  }
  
  //Choose Status with select dropdown
  updateStatus(e){
    this.playerForm.get('status').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.playerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.playerForm.valid) {
      console.log("YOU SUCK!");
      return false;
    } else {
      console.log("SUCCESS!!!!");
      this.apiService.CreatePlayer(this.playerForm.value).subscribe(
        res => {
          console.log('Player successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/player-list'))
        }, error => {
          console.log(error);
        });
    }
  }

}