import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Quote } from "../../data/quotes.interface";
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    //inject quotesService
    private quotesService: QuotesService,
    private modalCtrl: ModalController
  ){}

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      //console.log(remove);
      if(remove){
        this.onRemoveQuote(quote);
      }
    });
    //modal.didLeave.subscribe(
    //  (remove: boolean) => console.log(remove)
    //);
  }
  onRemoveQuote(quote: Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
    //this.quotes = this.quotesService.getFavoriteQuotes();
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }
}
