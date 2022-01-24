import { Component, Input, OnInit } from '@angular/core';
import { DataCard, DataPrice, DataSection } from '@core/interfaces/dataSection.interface';



@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.css']
})


export class GenericSectionComponent implements OnInit {


  @Input() dataSection: DataSection = { dataSection: { title: '', text: '' }, dataCard: [] }

  @Input() dataPriceOn: boolean = false;
  @Input() dataTeamOn: boolean = false;
  @Input() dataRecentPostOn: boolean = false;
  @Input() bgColor: 'yellow' | 'light' = 'light'

  constructor() { }

  ngOnInit(): void {

  }

}
