import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TypographyComponent } from './typography/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'dropdowns', component: DropdownsComponent },
  { path: 'dropdowns', component: DropdownsComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'notifications', component: NotificationsComponent },
];

@NgModule({
  declarations: [ BadgesComponent, BreadcrumbsComponent,  DropdownsComponent,     TooltipsComponent, TypographyComponent, NotificationsComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class BasicUiModule { }
