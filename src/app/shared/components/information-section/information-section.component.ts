import { Component, Input, OnInit } from '@angular/core';
import { DataCard } from '@core/interfaces/dataSection.interface';





@Component({
  selector: 'app-information-section',
  templateUrl: './information-section.component.html',
  styleUrls: ['./information-section.component.css']
})
export class InformationSectionComponent implements OnInit {

  @Input() dataInformation!:DataCard;

  @Input() positionImg: 'left' | 'right' ='right' 

  

  constructor() { }

  ngOnInit(): void {
  }

}
