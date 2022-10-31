import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detaile-membre',
  templateUrl: './detaile-membre.component.html',
  styleUrls: ['./detaile-membre.component.css']
})
export class DetaileMembreComponent implements OnInit {

  constructor( public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
