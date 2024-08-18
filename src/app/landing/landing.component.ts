import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  quotesList : string[] = []
  randomQuote : string = '';

  constructor(){
    this.quotesList.push()
    console.log('in landing')
  }

  ngOnInit(): void {
      this.quotesList = ["Logic will get you from A to B. Imagination will take you everywhere.", 
        "There are 10 kinds of people. Those who know binary and those who don't.",
        "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
        "It's not that I'm so smart, it's just that I stay with problems longer.",
        "It is pitch dark. You are likely to be eaten by a grue."
        ]

        this.randomQuote = this.quotesList[Math.floor(Math.random() * this.quotesList.length)]
  }

}
