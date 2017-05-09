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
import { NavParams, AlertController } from "ionic-angular";
import { QuotesService } from "../../services/quotes";
var QuotesPage = (function () {
    function QuotesPage(navParams, alertCtrl, quotesService) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.quotesService = quotesService;
    }
    QuotesPage.prototype.ngOnInit = function () {
        this.quotesGroup = this.navParams.data;
    };
    QuotesPage.prototype.onRemoveFromFavorites = function (quote) {
        this.quotesService.removeQuoteFromFavorites(quote);
    };
    QuotesPage.prototype.isFavorite = function (quote) {
        return this.quotesService.isQuoteFavorite(quote);
    };
    QuotesPage.prototype.onAddToFavorite = function (selectedQuote) {
        var _this = this;
        console.log(selectedQuote);
        var alert = this.alertCtrl.create({
            title: 'Add Quote',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to add this quote?',
            buttons: [{
                    text: 'Yes, go ahead',
                    handler: function () {
                        _this.quotesService.addQuotesToFavorites(selectedQuote);
                    }
                }, {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log("I changed my mind");
                    }
                }
            ]
        });
        alert.present();
    };
    return QuotesPage;
}());
QuotesPage = __decorate([
    Component({
        selector: 'page-quotes',
        templateUrl: 'quotes.html',
    }),
    __metadata("design:paramtypes", [NavParams,
        AlertController,
        QuotesService])
], QuotesPage);
export { QuotesPage };
//# sourceMappingURL=quotes.js.map