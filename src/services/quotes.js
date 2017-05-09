var QuotesService = (function () {
    function QuotesService() {
        this.favoriteQuotes = [];
    }
    QuotesService.prototype.addQuotesToFavorites = function (quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    };
    QuotesService.prototype.removeQuoteFromFavorites = function (quote) {
        var position = this.favoriteQuotes.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    };
    QuotesService.prototype.getFavoriteQuotes = function () {
        //immutable
        return this.favoriteQuotes.slice();
    };
    QuotesService.prototype.isQuoteFavorite = function (quote) {
        return this.favoriteQuotes.find(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
    };
    return QuotesService;
}());
export { QuotesService };
//# sourceMappingURL=quotes.js.map