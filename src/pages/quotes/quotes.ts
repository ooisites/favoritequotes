import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from "ionic-angular";
import { Quote } from "../../data/quotes.interface";
import { QuotesService } from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quotesGroup:{category: string, quotes: Quote[], icon: string};
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
  ){}

  ngOnInit(){
    this.quotesGroup = this.navParams.data;
  }

  onRemoveFromFavorites(quote: Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote){
    return this.quotesService.isQuoteFavorite(quote);
  }

  onAddToFavorite(selectedQuote: Quote){
    console.log(selectedQuote);
    const alert = this.alertCtrl.create({
      title:'Add Quote',
      subTitle:'Are you sure?',
      message: 'Are you sure you want to add this quote?',
      buttons: [{
        text:'Yes, go ahead',
        handler: ()=>{
          this.quotesService.addQuotesToFavorites(selectedQuote);
        }
      },{
        text:'No',
        role: 'cancel',
        handler: ()=>{
          console.log("I changed my mind");
        }
      }
      ]
    });
    alert.present();
  }
  //ionViewDidLoad(){
  //  this.quotesGroup = this.navParams.data;
  //}
}
