import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Lang } from '../../models/lang.model';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styles: []
})
export class LangComponent implements OnInit {

  langs: Lang[];

  constructor(private router: Router, private langService: LangService) {

  }

  ngOnInit() {
    this.langService.getLangs()
      .subscribe( data => {
        this.langs = data;
      });
  };

  deleteLang(lang: Lang): void {
    this.langService.deleteLang(lang)
      .subscribe( data => {
        this.langs = this.langs.filter(u => u !== lang);
      })
  };

}
