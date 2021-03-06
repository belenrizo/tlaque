webpackJsonp([2],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reportes_reportes__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reportar_reportar__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardPage = (function () {
    function DashboardPage(navCtrl, authService, storage) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.storage = storage;
    }
    DashboardPage.prototype.openList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reportes_reportes__["a" /* ReportesPage */]);
    };
    DashboardPage.prototype.CreateReport = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__reportar_reportar__["a" /* ReportarPage */]);
    };
    DashboardPage.prototype.signOut = function () {
        this.authService.signOut();
        this.storage.remove('user');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SignInPage */]);
    };
    DashboardPage.prototype.goToNext = function () {
        if (!this.slides.isEnd()) {
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(false);
            this.slides.slideNext(800);
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(true);
            this.slides.update();
        }
    };
    DashboardPage.prototype.goToPrev = function () {
        if (!this.slides.isBeginning()) {
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(false);
            this.slides.slidePrev(800);
            this.slides.lockSwipeToNext(true);
            this.slides.lockSwipeToPrev(false);
            this.slides.update();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], DashboardPage.prototype, "slides", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/xavier/Documents/tlaque/src/pages/dashboard/dashboard.html"*/'<ion-content>\n  <ion-item no-border>\n    <ion-slides #Slides  no-border>\n		    <!-- <ion-slide>\n          <img src="assets/imgs/t1.jpeg"> -->\n        <!-- </ion-slide> -->\n		    <!-- <ion-slide>\n			    <img src="assets/imgs/t6.jpeg">\n		    </ion-slide> -->\n		    <ion-slide>\n			    <img src="assets/imgs/t3.jpeg">\n		    </ion-slide>\n		    <ion-slide>\n			    <img src="assets/imgs/t4.jpeg">\n		    </ion-slide>\n	 </ion-slides>\n  </ion-item>\n\n<ion-grid>\n  <ion-row>\n    <ion-col (click)="openList()">\n      <div>Mis Reportes\n        <ion-icon ios="ios-clipboard-outline" md="md-clipboard"></ion-icon>\n      </div>\n    </ion-col>\n    <ion-col (click)="CreateReport()">\n      <div> Hacer reporte\n      <ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-card>\n  <ion-card-header>\n    Tlaquepaque\n  </ion-card-header>\n  <ion-list>\n    <button ion-item>\n      <ion-icon name="cart" item-start></ion-icon>\n\n    </button>\n\n    <button ion-item>\n      <ion-icon name="medical" item-start></ion-icon>\n      Hospital\n    </button>\n\n    <button ion-item>\n      <ion-icon name="cafe" item-start></ion-icon>\n      Cafe\n    </button>\n\n    <button ion-item>\n      <ion-icon name="paw" item-start></ion-icon>\n      Dog Park\n    </button>\n\n    <button ion-item>\n      <ion-icon name="beer" item-start></ion-icon>\n      Pub\n    </button>\n\n    <button ion-item>\n      <ion-icon name="planet" item-start></ion-icon>\n      Space\n    </button>\n\n  </ion-list>\n</ion-card>\n</ion-content>\n<ion-footer>\n  <ion-navbar hideBackButton="true">\n    <button ion-button icon-only menuToggle>\n  	<ion-icon name ="menu"> </ion-icon>\n    </button>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="signOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-footer>\n\n<!-- <ion-icon ios="ios-clipboard" md="md-clipboard"></ion-icon>\nion-icon name="contact"></ion-icon>\n<ion-icon ios="ios-home-outline" md="md-home"></ion-icon>\n  <ion-icon name="images"></ion-icon>\n  <ion-icon ios="ios-images" md="md-images"></ion-icon> -->\n'/*ion-inline-end:"/home/xavier/Documents/tlaque/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportesPage = (function () {
    function ReportesPage(navCtrl, authService, storage) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.storage = storage;
    }
    ReportesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportesPage');
    };
    ReportesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reportes',template:/*ion-inline-start:"/home/xavier/Documents/tlaque/src/pages/reportes/reportes.html"*/'<!--\n  Generated template for the ReportesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reportes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/xavier/Documents/tlaque/src/pages/reportes/reportes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ReportesPage);
    return ReportesPage;
}());

//# sourceMappingURL=reportes.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorial2_tutorial2__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    TutorialPage.prototype.comenzar = function () {
        var _this = this;
        this.storage.set('tutorial', true).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SignInPage */]);
        });
    };
    TutorialPage.prototype.startSlide = function () {
        var _this = this;
        this.storage.set('tutorial', true).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tutorial2_tutorial2__["a" /* Tutorial2Page */]);
        });
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/home/xavier/Documents/tlaque/src/pages/tutorial/tutorial.html"*/'<!--\n  Generated template for the TutorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n</ion-header>\n\n\n<ion-content>\n\n	<img src="assets/imgs/logo.jpeg">\n\n	<br>\n	<ion-item no-lines style="margin: auto;position: relative;  width: 47vw; top: -1vh; border-style: none;background-color: transparent">\n		<button  (click)="startSlide()" ion-button item-center block  style=background-color:#C62F72   >Continuar</button><br>\n		<button (click)="comenzar()" ion-button item-center block  color="light"   >Saltar</button>\n	</ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/xavier/Documents/tlaque/src/pages/tutorial/tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tutorial2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tutorial2Page = (function () {
    function Tutorial2Page(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    Tutorial2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    /*  goToSlide() {
        this.slides.slideNext();
        this.slides.isEnd();
        this.slides.length();
      }
      slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
      }
      */
    Tutorial2Page.prototype.goToNext = function () {
        if (!this.slides.isEnd()) {
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(false);
            this.slides.slideNext(800);
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(true);
            this.slides.update();
        }
        else {
        }
    };
    Tutorial2Page.prototype.goToPrev = function () {
        if (!this.slides.isBeginning()) {
            this.slides.lockSwipeToNext(false);
            this.slides.lockSwipeToPrev(false);
            this.slides.slidePrev(800);
            this.slides.lockSwipeToNext(true);
            this.slides.lockSwipeToPrev(false);
            this.slides.update();
        }
    };
    Tutorial2Page.prototype.comenzar = function () {
        var _this = this;
        this.storage.set('tutorial', true).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], Tutorial2Page.prototype, "slides", void 0);
    Tutorial2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial2',template:/*ion-inline-start:"/home/xavier/Documents/tlaque/src/pages/tutorial2/tutorial2.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content >\n	<ion-slides #Slides pager>\n		<ion-slide >\n			<p>Tutorial</p>\n    	<img src="assets/imgs/flecha_roja.png" id="right"  fa-align-right ion-fab color="danger" style="border-style: none;background-color: transparent" (click)=" goToNext()">\n		</ion-slide>\n		<ion-slide >\n			<p>Tutorial</p>\n      <img src="assets/imgs/flecha_roja1.png" id="left"  fa-align-right ion-fab color="danger" style="border-style: none;background-color: transparent" (click)=" goToPrev()">\n    	<img src="assets/imgs/flecha_roja.png" id="right"  fa-align-right ion-fab color="danger" style="border-style: none;background-color: transparent" (click)=" goToNext()">\n		</ion-slide>\n		<ion-slide >\n			<p>Tutorial</p>\n  		<img src="assets/imgs/flecha_roja1.png" id="left"  fa-align-right ion-fab color="danger" style="border-style: none;background-color: transparent" (click)=" goToPrev()">\n    	<img src="assets/imgs/flecha_roja.png" id="right"  fa-align-right ion-fab color="danger" style="border-style: none;background-color: transparent" (click)=" goToNext()">\n		</ion-slide>\n\n		<ion-slide >\n			<p>Tutorial</p>\n			<button class="comenzar" color="rojo" (click)="comenzar()" ion-button>Comenzar</button>\n\n		</ion-slide>\n	</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/xavier/Documents/tlaque/src/pages/tutorial2/tutorial2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], Tutorial2Page);
    return Tutorial2Page;
}());

//# sourceMappingURL=tutorial2.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/tutorial/tutorial.module": [
		514,
		1
	],
	"../pages/tutorial2/tutorial2.module": [
		515,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

//# sourceMappingURL=user-model.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SPage = (function () {
    function SPage(afAuth, navCtrl, loadingCtrl, alertCtrl, authService) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */]();
    }
    SPage.prototype.signUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, RESULT_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: 'Creando cuenta. Por favor, espere...'
                        });
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(this.userModel.email, this.userModel.password).then(function (result) {
                                console.log(RESULT_1);
                                loading.dismiss();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SignInPage */]);
                            }).catch(function (error) {
                                loading.dismiss();
                                console.log(error);
                                _this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
                            })];
                    case 2:
                        RESULT_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SPage.prototype.alert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    SPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-s',template:/*ion-inline-start:"/home/xavier/Documents/tlaque/src/pages/s/s.html"*/'<ion-header>\n    <ion-navbar hideBackButton="false">\n        <ion-title>Registrarse</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="background"><br><br><br><br><br><br>\n    <form #signUpForm="ngForm" (submit)="signUp()">\n      <ion-card>\n        <ion-card-header>\n          Registrarse\n        </ion-card-header>\n      <ion-card-content>\n        	<ion-list no-line>\n            <ion-list>\n            <ion-item>\n                <ion-label stacked>Correo electrónico</ion-label>\n                <ion-input [(ngModel)]="userModel.email" type="email" placeholder="Ingrese correo" autocorrect="off" autocapitalize="none" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"\n                    required></ion-input>\n            </ion-item><br><br>\n            <ion-item>\n                <ion-label stacked>Contraseña</ion-label>\n                <ion-input [(ngModel)]="userModel.password" type="password" placeholder="Ingrese contraseña" name="password" required minlength="6"></ion-input>\n            </ion-item><br><br>\n            <div padding-left padding-right padding-top>\n                <button ion-button block outline color="light" [disabled]="!signUpForm.form.valid" block>Registrarse</button>\n            </div>\n        </ion-list>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/xavier/Documents/tlaque/src/pages/s/s.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], SPage);
    return SPage;
}());

//# sourceMappingURL=s.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportarPage = (function () {
    function ReportarPage(navCtrl, authService, storage, googleMaps) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.storage = storage;
        this.googleMaps = googleMaps;
    }
    ReportarPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    ReportarPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 20.6409100,
                    lng: -103.2932700 // default location
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = this.googleMaps.create('map_canvas', mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            // Now you can use all methods safely.
            _this.getPosition();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ReportarPage.prototype.getPosition = function () {
        var _this = this;
        this.map.getMyLocation()
            .then(function (response) {
            _this.map.moveCamera({
                target: response.latLng
            });
            _this.map.addMarker({
                title: 'My Position',
                icon: 'blue',
                animation: 'DROP',
                position: response.latLng
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ReportarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-reportar',template:/*ion-inline-start:"/home/xavier/Documents/tlaque/src/pages/reportar/reportar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Reportar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map_canvas"></div>\n</ion-content>'/*ion-inline-end:"/home/xavier/Documents/tlaque/src/pages/reportar/reportar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], ReportarPage);
    return ReportarPage;
}());

//# sourceMappingURL=reportar.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_data_firebase_data__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportPage = (function () {
    function ReportPage(navCtrl, firebaseData, formBuilder) {
        this.navCtrl = navCtrl;
        this.firebaseData = firebaseData;
        this.formBuilder = formBuilder;
        this.reporte = this.formBuilder.group({
            calleP: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)])],
            calleCruce1: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)])],
            calleCruce2: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)])],
            tipoCalle: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].min(1)])]
        });
    }
    ReportPage.prototype.reportar = function () {
        if (!this.reporte.valid) {
            console.log("Nice try!");
        }
        else {
            this.firebaseData.reportar(this.reporte.value.calleP, this.reporte.value.calleCruce1, this.reporte.value.calleCruce2, this.reporte.value.tipoCalle, this.firebaseData.email);
            this.reporte.reset();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"/home/xavier/Documents/tlaque/src/pages/report/report.html"*/'<ion-header>\n  <ion-navbar hideBackButton="false">\n    <button ion-button icon-only menuToggle>\n  	<ion-icon name = "menu"> </ion-icon>\n  </button>\n    <ion-title>\n      tlaqueBACHE\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="signOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="reporte" novalidate (submit)="reportar()">\n    <ion-item>\n      <ion-label stacked>Calle principal</ion-label>\n      <ion-input formControlName="calleP" type="text"\n        placeholder="Ingrese calle principal"\n        [class.invalid]="!reporte.controls.calleP.valid && reporte.controls.calleP.dirty">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!reporte.controls.calleP.valid && reporte.controls.calleP.dirty">\n      <p>\n        Ingrese una calle válida.\n      </p>\n    </ion-item><br>\n    <ion-item>\n      <ion-label stacked>Primer cruce</ion-label>\n      <ion-input formControlName="calleCruce1" type="text"\n        placeholder="Ingrese primer cruce"\n        [class.invalid]="!reporte.controls.calleCruce1.valid && reporte.controls.calleCruce1.dirty">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!reporte.controls.calleCruce1.valid && reporte.controls.calleCruce1.dirty">\n      <p>\n        Ingrese una calle válida.\n      </p>\n    </ion-item><br>\n    <ion-item>\n      <ion-label stacked>Segundo cruce</ion-label>\n      <ion-input formControlName="calleCruce2" type="text"\n        placeholder="Ingrese segundo cruce"\n        [class.invalid]="!reporte.controls.calleCruce2.valid && reporte.controls.calleCruce2.dirty">\n      </ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!reporte.controls.calleCruce2.valid && reporte.controls.calleCruce2.dirty">\n      <p>\n        Ingrese una calle válida.\n      </p>\n    </ion-item><br>\n    <ion-item>\n      <ion-label stacked>Tipo de calle</ion-label>\n      <ion-input formControlName="tipoCalle" type="text"\n        placeholder="Ingrese tipo de calle"\n        [class.invalid]="!reporte.controls.tipoCalle.valid && reporte.controls.tipoCalle.dirty">\n      </ion-input>\n    </ion-item>\n    <a>Ej. Concreto, empedrado, etc.</a>\n    <ion-item class="error-message" *ngIf="!reporte.controls.tipoCalle.valid && reporte.controls.tipoCalle.dirty">\n      <p>\n        Ingrese un tipo válido.\n      </p>\n    </ion-item><br>\n  \n\n    <ion-item>\n      <button ion-button block type="submit" [disabled]="!reporte.valid">\n        Enviar\n      </button>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/xavier/Documents/tlaque/src/pages/report/report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_data_firebase_data__["a" /* FirebaseDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, authService, storage) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.storage = storage;
    }
    HomePage.prototype.signOut = function () {
        this.storage.remove('user');
        this.authService.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SignInPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/xavier/Documents/tlaque/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button icon-only menuToggle>\n  	<ion-icon name = "menu"> </ion-icon>\n  </button>\n    <ion-title>\n      tlaqueBACHE\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="signOut()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n'/*ion-inline-end:"/home/xavier/Documents/tlaque/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FirebaseDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseDataProvider = (function () {
    function FirebaseDataProvider(http) {
        this.http = http;
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        this.email = this.user.email;
        console.log('Hello FirebaseDataProvider Provider');
    }
    FirebaseDataProvider.prototype.reportar = function (calleP, calleCruce1, calleCruce2, tipoCalle, email) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('reporte')
            .push({ calleP: calleP, calleCruce1: calleCruce1, calleCruce2: calleCruce2, tipoCalle: tipoCalle, email: email });
    };
    FirebaseDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FirebaseDataProvider);
    return FirebaseDataProvider;
}());

//# sourceMappingURL=firebase-data.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(343);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_s_s__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_report_report__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_reportes_reportes__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reportar_reportar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tutorial2_tutorial2__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_firebase_data_firebase_data__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseConfig = {
    apiKey: "AIzaSyBzIRbUj9pqa-UAmsWKVtSsk5QfmFf2si8",
    authDomain: "tlaque-67444.firebaseapp.com",
    databaseURL: "https://tlaque-67444.firebaseio.com",
    projectId: "tlaque-67444",
    storageBucket: "tlaque-67444.appspot.com",
    messagingSenderId: "23618756914"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_s_s__["a" /* SPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reportes_reportes__["a" /* ReportesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reportar_reportar__["a" /* ReportarPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tutorial2_tutorial2__["a" /* Tutorial2Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial2/tutorial2.module#Tutorial2PageModule', name: 'Tutorial2Page', segment: 'tutorial2', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signin_signin__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_s_s__["a" /* SPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reportes_reportes__["a" /* ReportesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reportar_reportar__["a" /* ReportarPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tutorial2_tutorial2__["a" /* Tutorial2Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_maps__["a" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_22__providers_firebase_data_firebase_data__["a" /* FirebaseDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(angularFireAuth) {
        var _this = this;
        this.angularFireAuth = angularFireAuth;
        angularFireAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user != null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signInWithEmailAndPassword = function (userModel) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(userModel.email, userModel.password);
    };
    AuthService.prototype.createUserWithEmailAndPassword = function (userModel) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(userModel.email, userModel.password);
    };
    AuthService.prototype.signOut = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__s_s__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutorial_tutorial__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var SignInPage = (function () {
    function SignInPage(afAuth, navCtrl, loadingCtrl, alertCtrl, authService, storage) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.storage = storage;
        this.show = false;
        this.userModel = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */]();
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.show = false;
        this.storage.get('tutorial').then(function (tuto) {
            if (!tuto)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tutorial_tutorial__["a" /* TutorialPage */]);
        });
        this.storage.get('user').then(function (user) {
            if (user) {
                if (user.length > 0)
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else
                _this.show = true;
        });
    };
    SignInPage.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: 'Iniciando sesión. Por favor, espere...'
                        });
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(this.userModel.email, this.userModel.password).then(function () {
                                loading.dismiss();
                                _this.storage.set('user', _this.userModel.email).then(function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
                                });
                            }).catch(function (error) {
                                loading.dismiss();
                                console.log(error);
                                _this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SignInPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__s_s__["a" /* SPage */]);
    };
    SignInPage.prototype.alert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/xavier/Documents/tlaque/src/pages/signin/signin.html"*/'<ion-content class="background" *ngIf=\'this.show\'>\n<form #signUpForm="ngForm" (submit)="signIn()">\n  <ion-card >\n		<ion-card-header>\n			TlaqueBACHE\n		</ion-card-header>\n		<ion-card-content>\n			<ion-list no-line>\n				<ion-item>\n          <ion-input  [(ngModel)]="userModel.email" type="email" placeholder="Ingrese correo" autocorrect="off" autocapitalize="none" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"\n                    required></ion-input>\n				</ion-item>\n				<ion-item>\n          <ion-input [(ngModel)]="userModel.password" type="password" placeholder="Ingrese contraseña" name="password" required minlength="6"></ion-input>\n				</ion-item>\n				<a>Olvidaste tu contraseña? <b>Haz click aquí</b></a>\n				<button ion-button block outline color="light">Iniciar Sesión</button>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n  </form>\n  <button class="bottom" ion-button clear full color="light" (click)="signUp()">¿No tienes una cuenta? Registrate</button>\n</ion-content>\n'/*ion-inline-end:"/home/xavier/Documents/tlaque/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_report_report__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_reportes_reportes__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SignInPage */];
    }
    MyApp.prototype.openHome = function () {
        this.rootPage(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openReport = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_report_report__["a" /* ReportPage */]);
    };
    MyApp.prototype.openList = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_reportes_reportes__["a" /* ReportesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/xavier/Documents/tlaque/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-content padding>\n  <ion-title >Menú</ion-title>\n	<ion-item-group>\n    	<ion-item (click)="openHome()" menuClose>\n	    	<ion-icon name="home" item-start></ion-icon>\n	    	Inicio\n		  </ion-item>\n      <ion-item menuClose>\n        <div (click)="openReport()">\n          <ion-icon name="clipboard" item-start></ion-icon>\n          Crear Reporte\n        </div>\n        <div (click)="openList()">\n          <ion-icon name="clipboard" item-start></ion-icon>\n          Mis Reportes\n        </div>\n      </ion-item>\n  </ion-item-group>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/home/xavier/Documents/tlaque/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[323]);
//# sourceMappingURL=main.js.map