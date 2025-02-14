import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCarouselPause } from './carousel-pause';

@NgModule({
	imports: [BrowserModule, FormsModule, NgbModule],
	declarations: [NgbdCarouselPause],
	exports: [NgbdCarouselPause],
	bootstrap: [NgbdCarouselPause],
})
export class NgbdCarouselPauseModule {}
