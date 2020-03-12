import { Component } from '@angular/core';

import  * as sentiment  from 'sentiment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SentimentAnalysis';
  score:number=0;
  AnalysisResult:any;


  constructor() {
         

  }

  statementScore(statement:any){
    
        var Sentiment = require('sentiment');
        var sentiment = new Sentiment();
        var result = sentiment.analyze(statement.target.value);
        console.dir(result);  

        this.score=result.score;
        this.AnalysisResult=result;
  }
}
