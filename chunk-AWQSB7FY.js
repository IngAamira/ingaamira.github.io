import{a as M,b as P}from"./chunk-AVH3CAYE.js";import{c as O}from"./chunk-WH4WJ3MS.js";import{a as j,b as V,c as B,d as E}from"./chunk-6SUOUDTY.js";import{Db as x,Ea as c,Eb as $,Gb as C,Ha as A,Ja as g,Ka as r,La as s,Ma as l,Na as F,Oa as T,Pa as D,Ra as z,Sa as y,Wa as R,Xa as d,Y as p,Ya as k,Za as S,ba as w,ca as L,cb as f,db as H,eb as N,fb as u,gb as h,mb as U,na as b,ta as _,ua as a,va as v}from"./chunk-VKUZALPZ.js";function K(t,e){if(t&1&&(F(0),r(1,"h1"),d(2),u(3,"translate"),s(),T()),t&2){let o=y().$implicit;a(2),k(h(3,1,o.name))}}function Q(t,e){if(t&1&&(r(0,"h3"),d(1),u(2,"translate"),s()),t&2){let o=y().$implicit;a(1),k(h(2,1,o.name))}}function Z(t,e){if(t&1&&(F(0,5),g(1,K,4,3,"ng-container",6)(2,Q,3,3,"ng-template",null,7,U),T()),t&2){let o=e.first,n=R(3);a(1),c("ngIf",o)("ngIfElse",n)}}function ee(t,e){if(t&1){let o=D();r(0,"button",8),z("click",function(){let m=w(o).$implicit;return L(m.event())}),l(1,"img",9),s()}if(t&2){let o=e.$implicit;a(1),c("src",o.img,b)("alt",o.flag)}}var X=(()=>{let e=class e{constructor(n){this.translationService=n,this.menuItemsHeader=_([{flag:"USA Flag",img:"../../../../../assets/icons/usa.png",event:()=>this.changeLanguage("en")},{flag:"Spain Flag",img:"../../../../../assets/icons/spain.png",event:()=>this.changeLanguage("es")}]),this.itemsTitle=[{name:"NAME"},{name:"UNIVERSITY_TITLE_1"},{name:"SOFTWARE_DEVELOPER"},{name:"DATA_ENGINEER"}]}changeLanguage(n){this.translationService.changeLanguage(n)}};e.\u0275fac=function(i){return new(i||e)(v(P))},e.\u0275cmp=p({type:e,selectors:[["app-header"]],standalone:!0,features:[f],decls:5,vars:2,consts:[[1,"header"],[1,"row"],["class","col-lg",4,"ngFor","ngForOf"],[1,"language-selector","bottom-right"],[3,"click",4,"ngFor","ngForOf"],[1,"col-lg"],[4,"ngIf","ngIfElse"],["h3Template",""],[3,"click"],[3,"src","alt"]],template:function(i,m){i&1&&(r(0,"div",0)(1,"div",1),g(2,Z,4,2,"ng-container",2),s(),r(3,"div",3),g(4,ee,2,2,"button",4),s()()),i&2&&(a(2),c("ngForOf",m.itemsTitle),a(2),c("ngForOf",m.menuItemsHeader()))},dependencies:[C,x,$,M,O],styles:[".language-selector[_ngcontent-%COMP%]{width:70px;height:25px;display:flex;justify-content:flex-end;position:absolute;bottom:0;right:0;margin:10px}.language-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:42px;height:0px;padding:0;margin-top:15px;margin-bottom:10px;border:none;border-radius:5px;cursor:pointer;display:flex;align-items:center}.language-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;border-radius:50%;transition:transform .3s}.language-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.2)}.header[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,#59A193 0%,#6e49fe 50%,#4c33b1 100%);padding:2rem 1rem;color:#fff;text-align:center;margin-top:12px;position:relative}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;color:#fff;text-decoration:none}.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;color:#fff;text-decoration:none;transition:text-decoration .3s}@media (min-width: 768px){.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px}.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}}@media (max-width: 767px){.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:25px}.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px}}"]});let t=e;return t})();var ne=t=>[t],ie=()=>({exact:!0});function oe(t,e){if(t&1&&(r(0,"a",2)(1,"div"),l(2,"i"),r(3,"p",3),d(4),u(5,"translate"),s()()()),t&2){let o=e.$implicit;c("routerLink",N(9,ne,o.route))("routerLinkActive","active-link")("routerLinkActiveOptions",H(11,ie)),a(2),A(o.img),a(2),k(h(5,7,o.name))}}var q=(()=>{let e=class e{constructor(n){this.translationService=n,this.menuItemsHome=_([{route:"/",img:"bi bi-house-door-fill",name:"HOME"},{route:"/portfolio",img:"bi bi-briefcase-fill",name:"PORTFOLIO"},{route:"/resume",img:"bi bi-person-workspace",name:"RESUME"},{route:"/contact",img:"bi bi-person-fill-add",name:"CONTACT"}])}changeLanguage(n){this.translationService.changeLanguage(n)}};e.\u0275fac=function(i){return new(i||e)(v(P))},e.\u0275cmp=p({type:e,selectors:[["app-navbar"]],standalone:!0,features:[f],decls:4,vars:1,consts:[[1,"d-flex","justify-content-center"],["class","navigation-link m-2 text-center","aria-current","page",3,"routerLink","routerLinkActive","routerLinkActiveOptions",4,"ngFor","ngForOf"],["aria-current","page",1,"navigation-link","m-2","text-center",3,"routerLink","routerLinkActive","routerLinkActiveOptions"],[1,"d-none","d-md-block","mt-1","mb-0"]],template:function(i,m){i&1&&(l(0,"hr"),r(1,"div",0),g(2,oe,6,12,"a",1),s(),l(3,"hr")),i&2&&(a(2),c("ngForOf",m.menuItemsHome()))},dependencies:[C,x,E,V,B,M,O],styles:[".navigation-link[_ngcontent-%COMP%]{text-decoration:none;color:#794999;padding:3px 10px;border-radius:16px;cursor:pointer;transition:all ease .2s;font-size:25px}@media (min-width: 768px){.navigation-link[_ngcontent-%COMP%]{font-size:25px}}@media (max-width: 767px){.navigation-link[_ngcontent-%COMP%]{font-size:50px}}.navigation-link[_ngcontent-%COMP%]:hover, .active-link[_ngcontent-%COMP%]{color:#fff;background-color:#7134f0;font-weight:700}"]});let t=e;return t})();function re(t,e){if(t&1&&(r(0,"a",5),l(1,"img",6),s()),t&2){let o=e.$implicit;c("href",o.url,b),a(1),c("src",o.img,b)("alt",o.flag)}}var J=(()=>{let e=class e{constructor(n){this.translationService=n,this.menuItemsFooter=_([{url:"https://linkedin.com/in/ingaamira/",img:"assets/icons/linkedin.png",flag:"LinkedIn"},{url:"https://github.com/IngAamira/",img:"assets/icons/github.png",flag:"GitHub"},{url:"https://platzi.com/p/IngAamira/",img:"assets/icons/platzi.png",flag:"Platzi"},{url:"https://www.udemy.com/user/andres-mira/",img:"assets/icons/udemy.png",flag:"Udemy"},{url:"https://twitter.com/Ingaamira/",img:"assets/icons/twitter.png",flag:"Twitter"},{url:"mailto:andres.mira@outlook.com/",img:"assets/icons/e-mail.png",flag:"Email"}]),this.currentYear=new Date().getFullYear()}changeLanguage(n){this.translationService.changeLanguage(n)}};e.\u0275fac=function(i){return new(i||e)(v(P))},e.\u0275cmp=p({type:e,selectors:[["app-footer"]],standalone:!0,features:[f],decls:10,vars:5,consts:[[1,"footer"],[1,"text-center","info"],[1,"text-center","social-links"],["target","_blank",3,"href",4,"ngFor","ngForOf"],[1,"text-center","current-year"],["target","_blank",3,"href"],[3,"src","alt"]],template:function(i,m){i&1&&(r(0,"footer",0)(1,"div",1)(2,"p"),d(3),u(4,"translate"),s()(),r(5,"div",2),g(6,re,2,3,"a",3),s(),r(7,"div",4)(8,"p"),d(9),s()()()),i&2&&(a(3),S("\u{1F680} ",h(4,3,"FOOTER_TEXT")," \u{1F680}"),a(3),c("ngForOf",m.menuItemsFooter()),a(3),S("\xA9 ",m.currentYear," "))},dependencies:[M,O,C,x],styles:[".footer[_ngcontent-%COMP%]{background-image:linear-gradient(360deg,#59A193 0%,#6e49fe 50%,#4c33b1 100%);padding:1rem;color:#fff;margin-top:12px;margin-bottom:12px;position:relative}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:19px;color:#fff;text-decoration:none;text-align:center;transition:text-decoration .3s}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;transition:transform .3s}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.2)}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-top:15px}"]});let t=e;return t})();var Te=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-layout"]],standalone:!0,features:[f],decls:5,vars:0,consts:[[1,"container","mx-auto"]],template:function(i,m){i&1&&(r(0,"div",0),l(1,"app-header")(2,"app-navbar")(3,"router-outlet")(4,"app-footer"),s())},dependencies:[E,j,X,q,J],encapsulation:2});let t=e;return t})();export{Te as default};