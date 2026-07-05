import { Component } from '@angular/core';
import { Carousel } from "../carousal/carousal";


@Component({
  selector: 'app-home',
  imports: [Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
