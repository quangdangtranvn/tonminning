System.register("chunks:///_virtual/ContentHandler.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,r,o,a,s,p,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,s=e.Prefab,p=e.Node,c=e.Toggle,u=e.Component}],execute:function(){var l,f,g,h,v,y,b,d,m;o._RF.push({},"74154RxbyVLCJvaW3hFyuEb","ContentHandler",void 0);var C=a.ccclass,P=a.property;e("ContentHandler",(l=C("ContentHandler"),f=P({type:s}),g=P({type:p}),h=P({type:c}),l((b=t((y=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).pageNum=void 0,n(t,"boxprefab2",b,r(t)),n(t,"pages",d,r(t)),n(t,"toggles",m,r(t)),t}i(t,e);var o=t.prototype;return o.onEnable=function(){},o.onLoad=function(){},o.start=function(){},o.update=function(e){},o.OpenPageOne=function(){this.pages[0].active=!0,this.pages[1].active=!1,this.pages[2].active=!1},o.OpenPageTwo=function(){this.pages[0].active=!1,this.pages[1].active=!0,this.pages[2].active=!1},o.OpenPageThree=function(){this.pages[0].active=!1,this.pages[1].active=!1,this.pages[2].active=!0},t}(u)).prototype,"boxprefab2",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=t(y.prototype,"pages",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=t(y.prototype,"toggles",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),v=y))||v)),e("List",function(){function e(e,t){this.items=void 0,this.items=void 0===e?[]:e&&t?Array(e).fill(t):Array(e)}var t=e.prototype;return t.push=function(e){this.items.push(e)},t.pop=function(e){return this.items.pop()},t.get=function(e){return this.items[e]},t.set=function(e,t){this.items[e]=t},t.getItems=function(){return this.items},e}());o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/LockPos.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,s,r,n,c,a;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,s=t.assertThisInitialized},function(t){r=t.cclegacy,n=t._decorator,c=t.Vec2,a=t.Component}],execute:function(){var f,p,u,l,h;r._RF.push({},"1fbc8g+OkNPeaz1sFuYrLND","LockPos",void 0);var y=n.ccclass,d=n.property;t("LockPos",(f=y("LockPos"),p=d({type:c}),f((h=e((l=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r))||this,i(e,"offset",h,s(e)),e}o(e,t);var r=e.prototype;return r.start=function(){this.node.position.set(this.offset.x,this.offset.y,0)},r.update=function(t){this.node.position.set(this.offset.x,this.offset.y,0)},e}(a)).prototype,"offset",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=l))||u));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./ContentHandler.ts","./LockPos.ts","./OpenPage.ts","./PriceTag.ts","./SpinEvent.ts","./User.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/OpenPage.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,i,r,a,o,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,c=e.Component}],execute:function(){var p,u,l;a._RF.push({},"c846aU+HhNDZ4Q8+hjvMXsh","OpenPage",void 0);var s=o.ccclass,g=o.property;e("OpenPage",s("OpenPage")((l=t((u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).selected=!1,i(t,"pageView",l,r(t)),t}n(t,e);var a=t.prototype;return a.start=function(){},a.update=function(e){},a.onClick=function(e){e.getButton(),this.pageView.active=!0},a.SwitchPage=function(){},t}(c)).prototype,"pageView",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=u))||p);a._RF.pop()}}}));

System.register("chunks:///_virtual/PriceTag.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,o,a,c,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,c=e.Label,l=e.Component}],execute:function(){var u,p,s,f,h,y,g;o._RF.push({},"bc56aoMxMhJZ6Zocy5Era6G","PriceTag",void 0);var b=a.ccclass,d=a.property;e("PriceTag",(u=b("PriceTag"),p=d({type:Number}),s=d({type:c}),u((y=t((h=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"price",y,n(t)),r(t,"textCoin",g,n(t)),t}i(t,e);var o=t.prototype;return o.onLoad=function(){},o.start=function(){this.showUI()},o.update=function(){},o.showUI=function(){this.textCoin.string=this.price.toString()},t}(l)).prototype,"price",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(h.prototype,"textCoin",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=h))||f));o._RF.pop()}}}));

System.register("chunks:///_virtual/SpinEvent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PriceTag.ts"],(function(t){var n,o,e,i,r,c;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,i=t.randomRange,r=t.Component},function(t){c=t.PriceTag}],execute:function(){var s;o._RF.push({},"625c9FthUxOv55BwV8SxLeX","SpinEvent",void 0);var p=e.ccclass;e.property,t("SpinEvent",p("SpinEvent")(s=function(t){function o(){for(var n,o=arguments.length,e=new Array(o),i=0;i<o;i++)e[i]=arguments[i];return(n=t.call.apply(t,[this].concat(e))||this).curUser=void 0,n.stopSpin=!1,n.audio=void 0,n}n(o,t);var e=o.prototype;return e.start=function(){},e.update=function(t){},e.onCollisionEnter=function(t,n){1===t.tag&&!0===this.stopSpin&&(this.curUser.addCoinToUser(t.getComponent(c).price),this.stopSpin=!1),1===t.tag&&console.log("hitted!")},e.StartSpin=function(){this.node.angle+=i(1,720),this.stopSpin=!0},o}(r))||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/User.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,e,r,n,o,a,l,u,c;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,r=i.initializerDefineProperty,n=i.assertThisInitialized},function(i){o=i.cclegacy,a=i._decorator,l=i.Label,u=i.EventMouse,c=i.Component}],execute:function(){var p,s,f,b,y,h,g,m,C,d,P,w,x,v,z,L,k,U,D,S,N;o._RF.push({},"3d561LQnZJOf6ebrkZyfF0s","User",void 0);var F=a.ccclass,T=a.property;i("User",(p=F("User"),s=T({type:Number}),f=T({type:Number}),b=T({type:Number}),y=T({type:Number}),h=T({type:Number}),g=T({type:Boolean}),m=T({type:l}),C=T({type:l}),d=T({type:l}),p((x=t((w=function(i){function t(){for(var t,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(t=i.call.apply(i,[this].concat(o))||this).coin=0,r(t,"timeSince",x,n(t)),r(t,"profitPerClick",v,n(t)),r(t,"profitPerHour",z,n(t)),r(t,"profitPerDayLog",L,n(t)),r(t,"profitPerEvent",k,n(t)),r(t,"dailyCheckin",U,n(t)),r(t,"textCoin",D,n(t)),r(t,"textCoin1",S,n(t)),r(t,"textCoin2",N,n(t)),t}e(t,i);var o=t.prototype;return o.start=function(){},o.update=function(i){this.showUI(),this.timeSince+=i},o.showUI=function(){this.textCoin1.string=this.textCoin.string,this.textCoin2.string=this.textCoin.string;var i=this.coin.toLocaleString("en-us",{minimumFractionDigits:1});this.textCoin.string=i.toString()},o.onMouseUp=function(i){i.getButton()===u.BUTTON_LEFT&&this.timeSince<=20&&(this.coin+=this.profitPerClick)},o.addCoin=function(){this.coin+=this.profitPerClick},o.addCoinToUser=function(i){this.coin+=i},o.dailyLogin=function(){!0!==this.dailyCheckin&&(this.coin+=this.profitPerDayLog)},t}(c)).prototype,"timeSince",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),v=t(w.prototype,"profitPerClick",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.1}}),z=t(w.prototype,"profitPerHour",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 11}}),L=t(w.prototype,"profitPerDayLog",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),k=t(w.prototype,"profitPerEvent",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),U=t(w.prototype,"dailyCheckin",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),D=t(w.prototype,"textCoin",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=t(w.prototype,"textCoin1",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=t(w.prototype,"textCoin2",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=w))||P));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});