import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  githubIcon = faGithub;
  instagramIcon = faInstagram;
  ngOnInit(): void {
  }

}
