import{b as C}from"./chunk-276CPRJT.js";import{a as U,b,c as A,i as f}from"./chunk-3XCXO5KJ.js";import"./chunk-TZGOZA7C.js";import{b as I,c as j,d as y}from"./chunk-7WS2LAMM.js";import{b as D}from"./chunk-RGHKIGQX.js";import{Cb as O,Ea as c,Fb as _,Ja as h,Ka as e,La as i,Ma as u,Nb as B,Xa as a,Y as g,Ya as T,Za as v,cb as S,fb as d,gb as p,na as M,ua as t,va as s}from"./chunk-SHQCE5PX.js";function F(n,r){if(n&1&&(e(0,"div")(1,"p"),a(2),i()()),n&2){let E=r.$implicit;t(2),T(E)}}function R(n,r){if(n&1&&(e(0,"div")(1,"slide")(2,"div",17),u(3,"img",18),i()()()),n&2){let E=r.$implicit;t(3),c("src",E,M)}}var q=(()=>{let r=class r{constructor(o,l,m,x){this.titleService=o,this.projectService=l,this.ngxBootstrapModule=m,this.translate=x,this.project={},this.startDate=new Date(2012,11,16),this.aboutMeTexts=["ABOUT_ME.TEXT[0]","ABOUT_ME.TEXT[1]","ABOUT_ME.TEXT[2]","ABOUT_ME.TEXT[3]","ABOUT_ME.TEXT[4]"],this.titleService.setTitle("Home"),this.years=this.calculateYears(new Date(this.startDate))}ngOnInit(){this.project=this.projectService.GetProjectById(0),this.translate.get("ABOUT_ME.TEXT").subscribe(o=>{this.aboutMeTexts=o})}calculateYears(o){let m=Math.abs(new Date().getTime()-o.getTime());return Math.floor(m/(1e3*3600*24*365.25))}};r.\u0275fac=function(l){return new(l||r)(s(B),s(C),s(f),s(I))},r.\u0275cmp=g({type:r,selectors:[["app-home"]],standalone:!0,features:[S],decls:41,vars:22,consts:[[1,"container"],[1,"row"],[1,"col-sm-6"],[1,"card","h-100"],[1,"card-header","text-center"],[1,"text-center","mx-auto","d-none","d-md-block"],["src","assets/imgs/home/profile.jpg","alt","Profile picture","width","250","height","250",1,"img-fluid","rounded-circle","mt-4"],[1,"card-body"],[1,"card-text","mt-3",2,"text-align","justify"],[4,"ngFor","ngForOf"],[1,"mx-auto","d-md-none"],["aria-current","page",3,"routerLink"],[1,"bi","bi-briefcase-fill"],[1,"col-sm-6","mx-auto","d-none","d-md-block"],[1,"d-block","carousel","carousel-dark","slide"],[1,"card-title","mt-5"],[1,"card-text","mt-2",2,"text-align","justify"],[1,"text-center","py-2"],["alt","Project introduction","width","300","height","300",1,"img-fluid",3,"src"]],template:function(l,m){l&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2"),a(6),d(7,"translate"),i()(),e(8,"div",5),u(9,"img",6),i(),e(10,"div",7)(11,"div",8),h(12,F,3,1,"div",9),d(13,"translate"),e(14,"div",10)(15,"p"),a(16),d(17,"translate"),e(18,"a",11),u(19,"i",12),i()()()()()()(),e(20,"div",13)(21,"div",3)(22,"div",4)(23,"h2"),a(24),d(25,"translate"),i()(),e(26,"div",7)(27,"carousel",14),h(28,R,4,1,"div",9),i(),e(29,"div",15)(30,"h5"),a(31),i()(),e(32,"div",16)(33,"p"),a(34),d(35,"translate"),i(),e(36,"p"),a(37),d(38,"translate"),e(39,"a",11),u(40,"i",12),i()()()()()()()()),l&2&&(t(6),T(p(7,10,"ABOUT_ME.TITLE")),t(6),c("ngForOf",p(13,12,"ABOUT_ME.TEXT")),t(4),v(" ",p(17,14,"FEATURED_PROJECT_INFO")," "),t(2),c("routerLink","/portfolio"),t(6),T(p(25,16,"FEATURED_PROJECT.TITLE")),t(4),c("ngForOf",m.project.pictures),t(3),v(" ",m.project.name," "),t(3),v(" ",p(35,18,"FEATURED_PROJECT.SUMMARY")," "),t(3),v(" ",p(38,20,"FEATURED_PROJECT.INFO")," "),t(2),c("routerLink","/portfolio"))},dependencies:[_,O,y,j,f,b,U,D,A],encapsulation:2});let n=r;return n})();export{q as default};
