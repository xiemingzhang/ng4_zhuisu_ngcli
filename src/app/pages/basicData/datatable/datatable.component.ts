import { Component, Input,OnInit,ElementRef,Inject } from '@angular/core';

import { Chanpin } from '../../service/chanpinliebiao';
import { ChanpinliebiaoService } from '../../service/chanpinliebiao.service';

@Component({
  selector: 'datatable',
  templateUrl: 'datatable.component.html',
  providers: [ ChanpinliebiaoService ]
 
})

export class DatatableComponent implements OnInit {
    public data:Chanpin[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "approyear";
    public sortOrder = "asc";

   constructor(
     private chanpinliebiaoService: ChanpinliebiaoService,
     ) {}

   
     /*delete($event):void{
       console.log($event)
        this.chanpinliebiaoService.deleteChanpin($event)
        this.chanpinliebiaoService.getChanpinliebiao().then((data) =>{this.data=data;} );
     }*/


    ngOnInit(): void {
      this.chanpinliebiaoService.getChanpinliebiao();
      /*this.chanpinliebiaoService.getChanpinliebiao().then((data) =>{this.data=data;console.log(data)} );*/
    }

    /*public sortByNameLength = (a: any) => {
        return a.name.length;
    }
*/
    /*output($event){
     this.rowsOnPage = $event;
    } */

}