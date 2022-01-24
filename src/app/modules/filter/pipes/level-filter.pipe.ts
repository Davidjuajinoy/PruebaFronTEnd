import { Pipe, PipeTransform } from '@angular/core';
import { DataDB } from '../../../core/interfaces/data.interface';
import { levels } from '../pages/filter-page/filter-page.component';

@Pipe({
  name: 'levelFilter'
})
export class LevelFilterPipe implements PipeTransform {

  transform(datos: DataDB[] | any[], levels: levels[]) {

    try {

 
      let data = [];
      for (const level of levels) {
        for (const dato of datos) {
          data.push(
              // { [level] : dato?.[level]}
              dato?.[level]
          );

        }
   
      }


      // for (const nivel of levels) {
        
      //   for (let i = 0; i < data.length; i++) {
      //     const datosD = data[i]?.[nivel];
      //     console.log(datosD); 
      //   }
      // }


      return data;

    } catch (e) {
      console.log('Algo fallo');
      return datos;
    }
  }
}