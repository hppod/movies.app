import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private activatedRout: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const movieName = this.activatedRout.snapshot.params['movieName'] 
    console.log(movieName)
  }

}
