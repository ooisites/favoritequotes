var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";
var FavoritesPage = (function () {
    function FavoritesPage(
        //inject quotesService
        quotesService, modalCtrl) {
        this.quotesService = quotesService;
        this.modalCtrl = modalCtrl;
    }
    FavoritesPage.prototype.ionViewWillEnter = function () {
        this.quotes = this.quotesService.getFavoriteQuotes();
    };
    FavoritesPage.prototype.onViewQuote = function (quote) {
        var _this = this;
        var modal = this.modalCtrl.create(QuotePage, quote);
        modal.present();
        modal.onDidDismiss(function (remove) {
            //console.log(remove);
            if (remove) {
                _this.onRemoveQuote(quote);
            }
        });
        //modal.didLeave.subscribe(
        //  (remove: boolean) => console.log(remove)
        //);
    };
    FavoritesPage.prototype.onRemoveQuote = function (quote) {
        this.quotesService.removeQuoteFromFavorites(quote);
        //this.quotes = this.quotesService.getFavoriteQuotes();
        var position = this.quotes.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Component({
        selector: 'page-favorites',
        templateUrl: 'favorites.html',
    }),
    __metadata("design:paramtypes", [QuotesService,
        ModalController])
], FavoritesPage);
export { FavoritesPage };
//# sourceMappingURL=favorites.js.map