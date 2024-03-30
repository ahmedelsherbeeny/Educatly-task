import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loading$!:Observable<boolean>


  constructor(private loader:LoaderService){
    this.loading$  = loader.loading$
  }

}
