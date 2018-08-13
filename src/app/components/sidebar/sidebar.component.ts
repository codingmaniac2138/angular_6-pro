import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) {
    // it works wih below as well
    // router.events.subscribe((_:NavigationEnd) => {
    //   if(!!_.url){
    //     this.currentUrl = _.url;
    //     console.log(this.currentUrl);
    //   }

    // it works like this as well
    router.events.subscribe((_:NavigationEnd) => {
      
        this.currentUrl = this.router.url;
        console.log(this.currentUrl);
      
    });
    console.log("pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp");
    // console.log(router.events);

  }

  ngOnInit() {
  }

}
