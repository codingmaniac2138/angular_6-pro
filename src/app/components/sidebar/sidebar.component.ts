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
    router.events.subscribe((_:NavigationEnd) => {
      if(!!_.url){
        this.currentUrl = _.url;
        console.log(this.currentUrl);
      }
    });
    console.log("pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp");
    // console.log(router.events);

  }

  ngOnInit() {
  }

}
