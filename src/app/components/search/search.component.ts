import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  heroes:any[]= [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
               private router:Router,
               private _heroesService:HeroesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      //console.log(params['termino']);
          this.termino = params['termino'];
          this.heroes = this._heroesService.buscarHeroes( params['termino']);
          console.log(this.heroes)
    })
  }


  verHeroe( idx: number ) {
    this.router.navigate( [ '/heroe', idx]);
   }
}
