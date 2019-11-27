import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  title = 'B2B Backbone ASN';
  subTitle = 'ASN support';
  constructor() { }

  ngOnInit() {
  }

}
