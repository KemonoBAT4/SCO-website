import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  //data: string = `ciao come va ${1}`;

  banner_path: string = "";

  public ngOnInit(): void {
    //console.log(this.data);

  }
}
