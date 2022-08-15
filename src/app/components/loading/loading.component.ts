import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading',
    template: `
    
    <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>


    `, 

    styleUrls:['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
