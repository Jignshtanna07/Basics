import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , AfterContentInit {

  constructor() { }
  container:string = "jignesh Tanna"
  ngOnInit(): void {
    console.log(this.paraEle)
  }
  ngAfterContentInit(): void {
    console.log(this.paraEle.nativeElement.textContent)
  }
  @ContentChild('paragraph') paraEle!: ElementRef
}
