import { Pipe, PipeTransform} from '@angular/core';
import {Content} from '../helper-files/content-interface'; 

//@Component({
  //selector: 'app-pipe',
  //templateUrl: './pipe.component.html',
  //styleUrls: ['./pipe.component.scss']
//})

@Pipe ({ name: 'pipeComponentPipe'})

export class PipeComponentPipe implements PipeTransform {

  transform (contentArray: Content[], type?: string) { 
  
      return contentArray;
    }
  }



