import{b as W}from"./chunk-UBVK4BMN.js";import{c as U,d as A,i as h}from"./chunk-N4DGEMXV.js";import"./chunk-Z4KI4OCW.js";import{a as P,b as R}from"./chunk-S4STUHQA.js";import{c as O}from"./chunk-LLQEC7FR.js";import{b as F}from"./chunk-RTV3LSIA.js";import{Bb as I,Cb as M,Ea as u,Eb as j,Fb as B,Ja as T,Ka as n,La as a,Ma as f,Nb as D,Sa as _,Wa as o,Xa as m,Y as S,Ya as g,bb as y,db as v,eb as w,fb as p,gb as c,hb as C,na as E,ua as i,va as d}from"./chunk-BQDP6H23.js";var N=(t,r)=>({"width.px":t,"height.px":r}),k=t=>({"img-fluid":t});function L(t,r){if(t&1&&(n(0,"div")(1,"slide")(2,"div",13),f(3,"img",14),a()()()),t&2){let b=r.$implicit,e=_();i(3),u("src",b,E)("ngStyle",w(3,N,e.getWidth(),e.getHeight()))("ngClass",v(6,k,e.isResponsive()))}}var H=t=>({years:t}),te=(()=>{let r=class r{constructor(e,s,l,x){this.titleService=e,this.projectService=s,this.ngxBootstrapModule=l,this.translationService=x,this.featureProject={},this.startDate=new Date(2011,11,28),this.titleService.setTitle("Home"),this.years=this.calculateYears(new Date(this.startDate))}ngOnInit(){this.featureProject=this.projectService.GetProjectById(0)}changeLanguage(e){this.translationService.changeLanguage(e)}calculateYears(e){let l=Math.abs(new Date().getTime()-e.getTime());return Math.floor(l/(1e3*3600*24*365.25))}getWidth(){let e=window.innerWidth;return e>=768?600:e>=480?400:300}getHeight(){let e=window.innerWidth;return e>=768?220:(e>=480,150)}isResponsive(){return window.innerWidth<768}};r.\u0275fac=function(s){return new(s||r)(d(D),d(W),d(h),d(R))},r.\u0275cmp=S({type:r,selectors:[["app-home"]],standalone:!0,features:[y],decls:31,vars:24,consts:[[1,"container"],[1,"row"],[1,"col-lg","shadow","border","m-1"],[1,"text-center"],[1,"mt-2"],["src","assets/imgs/home/profile.jpg","alt","profile picture","width","256","height","256",1,"rounded-circle","mt-2"],[2,"text-align","left","margin-top","18px"],[2,"text-align","left","margin-top","10px"],[1,"text-center","mt-2"],[1,"d-block","carousel","carousel-dark","slide"],[4,"ngFor","ngForOf"],["aria-current","page",3,"routerLink"],[1,"bi","bi-briefcase-fill"],[1,"text-center","py-2"],["alt","slide",3,"src","ngStyle","ngClass"]],template:function(s,l){s&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),o(5),p(6,"translate"),a(),f(7,"img",5),n(8,"p",6),o(9),p(10,"translate"),a(),n(11,"p",7),o(12),p(13,"translate"),a()()(),n(14,"div",2)(15,"div",8)(16,"h2"),o(17),p(18,"translate"),a(),n(19,"h4"),o(20),a()(),n(21,"carousel",9),T(22,L,4,8,"div",10),a(),n(23,"p",4),o(24),p(25,"translate"),a(),n(26,"p"),o(27),p(28,"translate"),n(29,"a",11),f(30,"i",12),a()()()()()),s&2&&(i(5),m(c(6,9,"ABOUT_ME")),i(4),g(" ",C(10,11,"ABOUT_ME_TEXT_1",v(22,H,l.years.toString()))," "),i(3),g(" ",c(13,14,"ABOUT_ME_TEXT_2")," "),i(5),m(c(18,16,"FEATURED_PROJECT")),i(3),m(l.featureProject.name),i(2),u("ngForOf",l.featureProject.pictures),i(2),m(c(25,18,"FEATURED_PROJECT_SUMMARY")),i(3),g(" ",c(28,20,"FEATURED_PROJECT_INFO")," "),i(2),u("routerLink","/portfolio"))},dependencies:[B,I,M,j,P,O,h,A,U,F],encapsulation:2});let t=r;return t})();export{te as default};
