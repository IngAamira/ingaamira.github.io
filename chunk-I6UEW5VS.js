import{b as A}from"./chunk-7YW3572F.js";import{c as U,d as b,i as h}from"./chunk-5LBHNCPS.js";import"./chunk-SPGNP7DV.js";import{a as P,b as R}from"./chunk-PZC2IP3O.js";import{c as O}from"./chunk-R3R2TV7X.js";import{b as F}from"./chunk-V3Z2KOF5.js";import{Db as C,Ea as u,Eb as I,Gb as M,Hb as B,Ja as T,Ka as n,La as r,Ma as f,Pb as D,Sa as y,Xa as o,Y as S,Ya as m,Za as g,cb as _,eb as v,fb as j,gb as c,hb as p,ib as w,na as E,ua as i,va as d}from"./chunk-ODH375KV.js";var N=(t,a)=>({"width.px":t,"height.px":a}),k=t=>({"img-fluid":t});function L(t,a){if(t&1&&(n(0,"div")(1,"slide")(2,"div",13),f(3,"img",14),r()()()),t&2){let W=a.$implicit,e=y();i(3),u("src",W,E)("ngStyle",j(3,N,e.getWidth(),e.getHeight()))("ngClass",v(6,k,e.isResponsive()))}}var H=t=>({years:t}),te=(()=>{let a=class a{constructor(e,s,l,x){this.titleService=e,this.projectService=s,this.ngxBootstrapModule=l,this.translationService=x,this.featureProject={},this.startDate=new Date(2011,11,28),this.titleService.setTitle("Home"),this.years=this.calculateYears(new Date(this.startDate))}ngOnInit(){this.featureProject=this.projectService.GetProjectById(0)}changeLanguage(e){this.translationService.changeLanguage(e)}calculateYears(e){let l=Math.abs(new Date().getTime()-e.getTime());return Math.floor(l/(1e3*3600*24*365.25))}getWidth(){let e=window.innerWidth;return e>=768?600:e>=480?400:300}getHeight(){let e=window.innerWidth;return e>=768?220:(e>=480,150)}isResponsive(){return window.innerWidth<768}};a.\u0275fac=function(s){return new(s||a)(d(D),d(A),d(h),d(R))},a.\u0275cmp=S({type:a,selectors:[["app-home"]],standalone:!0,features:[_],decls:31,vars:24,consts:[[1,"container"],[1,"row"],[1,"col-lg","col-12","mx-auto","shadow","border","m-1"],[1,"text-center"],[1,"mt-4"],["src","assets/imgs/home/profile.jpg","alt","Profile picture","width","250","height","250",1,"rounded-circle","mt-4"],[1,"text-justify",2,"text-align","justify"],[1,"mt-2"],[1,"col-lg","col-12","mx-auto","shadow","border","m-1","text-center"],[1,"d-block","carousel","carousel-dark","slide"],[4,"ngFor","ngForOf"],["aria-current","page",3,"routerLink"],[1,"bi","bi-briefcase-fill"],[1,"text-center","py-2"],["alt","slide",1,"img-fluid",3,"src","ngStyle","ngClass"]],template:function(s,l){s&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),o(5),c(6,"translate"),r(),f(7,"img",5),r(),n(8,"div",6)(9,"p",4),o(10),c(11,"translate"),r(),n(12,"p",7),o(13),c(14,"translate"),r()()(),n(15,"div",8)(16,"h2",4),o(17),c(18,"translate"),r(),n(19,"h4"),o(20),r(),n(21,"carousel",9),T(22,L,4,8,"div",10),r(),n(23,"p",4),o(24),c(25,"translate"),r(),n(26,"p",7),o(27),c(28,"translate"),n(29,"a",11),f(30,"i",12),r()()()()()),s&2&&(i(5),m(p(6,9,"ABOUT_ME")),i(5),g(" ",w(11,11,"ABOUT_ME_TEXT_1",v(22,H,l.years.toString()))," "),i(3),g(" ",p(14,14,"ABOUT_ME_TEXT_2")," "),i(4),m(p(18,16,"FEATURED_PROJECT")),i(3),m(l.featureProject.name),i(2),u("ngForOf",l.featureProject.pictures),i(2),m(p(25,18,"FEATURED_PROJECT_SUMMARY")),i(3),g(" ",p(28,20,"FEATURED_PROJECT_INFO")," "),i(2),u("routerLink","/portfolio"))},dependencies:[B,C,I,M,P,O,h,b,U,F],encapsulation:2});let t=a;return t})();export{te as default};
