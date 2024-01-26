import{b as _}from"./chunk-DA5CXJQ4.js";import{i as v}from"./chunk-XVUBX5TR.js";import"./chunk-3Z3KZBFV.js";import{a as y,b as M}from"./chunk-AVH3CAYE.js";import{c as D}from"./chunk-WH4WJ3MS.js";import{b as I}from"./chunk-6SUOUDTY.js";import{Ea as f,Gb as j,Ka as e,La as t,Ma as u,Ob as B,Xa as n,Y as x,Ya as h,Za as l,cb as E,eb as S,fb as r,gb as s,hb as T,ua as i,va as m}from"./chunk-VKUZALPZ.js";var O=c=>({years:c}),J=(()=>{let d=class d{constructor(a,o,p,g){this.titleService=a,this.projectService=o,this.ngxBootstrapModule=p,this.translationService=g,this.featureProjects={},this.startDate=new Date(2011,11,28),this.showOnLargeDevices=!1,this.titleService.setTitle("Home"),this.years=this.calculateYears(new Date(this.startDate))}ngOnInit(){this.featureProjects=this.projectService.GetProjectById(0)}changeLanguage(a){this.translationService.changeLanguage(a)}calculateYears(a){let p=Math.abs(new Date().getTime()-a.getTime());return Math.floor(p/(1e3*3600*24*365.25))}};d.\u0275fac=function(o){return new(o||d)(m(B),m(_),m(v),m(M))},d.\u0275cmp=x({type:d,selectors:[["app-home"]],standalone:!0,features:[E],decls:45,vars:26,consts:[[1,"container"],[1,"row"],[1,"col-sm-6"],[1,"card","h-100"],[1,"card-header","text-center"],[1,"text-center","mx-auto","d-none","d-md-block"],["src","assets/imgs/home/profile.jpg","alt","Profile picture","width","250","height","250",1,"img-fluid","rounded-circle","mt-4"],[1,"card-body"],[1,"card-text","mt-3",2,"text-align","justify"],[1,"mx-auto","d-md-none"],["aria-current","page",3,"routerLink"],[1,"bi","bi-briefcase-fill"],[1,"col-sm-6","mx-auto","d-none","d-md-block"],[1,"text-center"],["src","assets/imgs/projects/eshop/rest.png","alt","Project introduction","width","310","height","310",1,"img-fluid","rounded","mt-4"],[1,"card-title","mt-5"],[1,"card-text","mt-2",2,"text-align","justify"]],template:function(o,p){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2"),n(6),r(7,"translate"),t()(),e(8,"div",5),u(9,"img",6),t(),e(10,"div",7)(11,"div",8)(12,"p"),n(13),r(14,"translate"),t(),e(15,"p"),n(16),r(17,"translate"),t(),e(18,"div",9)(19,"p"),n(20),r(21,"translate"),e(22,"a",10),u(23,"i",11),t()()()()()()(),e(24,"div",12)(25,"div",3)(26,"div",4)(27,"h2"),n(28),r(29,"translate"),t()(),e(30,"div",7)(31,"div",13),u(32,"img",14),t(),e(33,"div",15)(34,"h5"),n(35," E-Shop (Backend) "),t()(),e(36,"div",16)(37,"p"),n(38),r(39,"translate"),t(),e(40,"p"),n(41),r(42,"translate"),e(43,"a",10),u(44,"i",11),t()()()()()()()()),o&2&&(i(6),h(s(7,9,"ABOUT_ME")),i(7),l(" ",T(14,11,"ABOUT_ME_TEXT_1",S(24,O,p.years.toString()))," "),i(3),l(" ",s(17,14,"ABOUT_ME_TEXT_2")," "),i(4),l(" ",s(21,16,"FEATURED_PROJECT_INFO")," "),i(2),f("routerLink","/portfolio"),i(6),h(s(29,18,"FEATURED_PROJECT")),i(10),l(" ",s(39,20,"FEATURED_PROJECT_SUMMARY")," "),i(3),l(" ",s(42,22,"FEATURED_PROJECT_INFO")," "),i(2),f("routerLink","/portfolio"))},dependencies:[j,y,D,v,I],encapsulation:2});let c=d;return c})();export{J as default};
