import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataDB } from '@core/interfaces/data.interface';
import { Subscription } from 'rxjs';
import { FilterService } from '../../services/filter.service';
import { Data } from '../../../../core/interfaces/dataSection.interface';

export enum levels {
  FirmCode ='FirmCode'
  , ItemCode ='ItemCode'
  , CategoriaCode='CategoriaCode'
  , SlpCode='SlpCode'
  , CardCode='CardCode'
  , DocNum='DocNum'

}
@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.css']
})



export class FilterPageComponent implements OnInit {

  data: any[] = [];


  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.getAllData()
      .subscribe(resp => this.data = resp);
  }



  levels:levels[] = [];
  levelsSelect = [
    { id: 1, name: 'FirmCode', name_esp: 'Marca' },
    { id: 2, name: 'ItemCode', name_esp: 'articulo' },
    { id: 3, name: 'CategoriaCode', name_esp: 'categoria' },
    { id: 4, name: 'SlpCode', name_esp: 'vendedor' },
    { id: 5, name: 'CardCode', name_esp: 'cliente' },
    { id: 6, name: 'DocNum', name_esp: 'pedido' },
  ];






}
