import {Component} from '@angular/core';

/**
 * @title Badge overview
 */
@Component({
  selector: 'badge-overview-example',
  templateUrl: 'badge-overview-example.html',
})
export class BadgeOverviewExample {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */