import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class FooterComponent implements OnInit {
  @ViewChild('tabs') Tabs: any;
  ngOnInit(): void {
    //throw new Error('Method not imple//mented.');
    //this.Tabs.select('transactions');
  }
}
