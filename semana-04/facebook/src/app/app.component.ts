import { Component } from '@angular/core';

import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private fb: FacebookService){
    let initParams: InitParams = {
      appId: '331947460604194',
      xfbml: true,
      version: 'v2.10'
    };

    fb.init(initParams);
  }

  login(){
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }

  buscarDados(){
    this.fb.api('/me')
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }
}
