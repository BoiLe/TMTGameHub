import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tmt-ghub-report-lastest',
  templateUrl: './report-lastest.component.html',
  styleUrls: ['./report-lastest.component.scss']
})
export class ReportLastestComponent implements OnInit {

  @Input() image: string = "";
  @Input() users: number = 0;
  @Input() name: string = "";
  @Input() setDay: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
