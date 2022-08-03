import { Component, OnInit } from '@angular/core';
import { Lunch } from './lunch.model';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  selectedPackage!: Lunch;

  constructor() { }

  ngOnInit(): void {
  }

}
