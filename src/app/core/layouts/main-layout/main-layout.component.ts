import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { MenuComponent } from "../../../shared/components/menu/menu.component";

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, MenuComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent { }
