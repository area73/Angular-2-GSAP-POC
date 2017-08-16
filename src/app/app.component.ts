import { Component } from '@angular/core';
import { TweenMax } from 'gsap';
// import * as ScrollMagic from 'ScrollMagic';
declare var ScrollMagic:any;
declare var TweenMax:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger1"
    })
    .setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
    .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);
  }
}