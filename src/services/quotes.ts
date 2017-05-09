import { Quote } from "../data/quotes.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuotesToFavorites(quote: Quote){
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromFavorites(quote: Quote){
    const position = this.favoriteQuotes.findIndex( (quoteEl: Quote) => {
       return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes(){
    //immutable
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote){
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}
