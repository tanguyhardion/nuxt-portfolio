import{d as G,r as st,o as Q,c as K,a as p,b as v,t as it,u as ut,F as at,_ as R,e as ot}from"./index-CrSM3JfL.js";var ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ct(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var X={exports:{}};(function(g,A){(function(S,a){g.exports=a()})(ft,function(){var S=1e3,a=6e4,E=36e5,V="millisecond",k="second",T="minute",x="hour",M="day",L="week",y="month",J="quarter",D="year",H="date",P="Invalid Date",tt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,et=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,nt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},U=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},rt={s:U,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+U(r,2,"0")+":"+U(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,y),i=t-e<0,u=n.clone().add(r+(i?-1:1),y);return+(-(r+(t-e)/(i?e-u:u-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:y,y:D,w:L,d:M,D:H,h:x,m:T,s:k,ms:V,Q:J}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},Y="en",w={};w[Y]=nt;var Z="$isDayjsObject",B=function(s){return s instanceof F||!(!s||!s[Z])},W=function s(n,t,r){var e;if(!n)return Y;if(typeof n=="string"){var i=n.toLowerCase();w[i]&&(e=i),t&&(w[i]=t,e=i);var u=n.split("-");if(!e&&u.length>1)return s(u[0])}else{var f=n.name;w[f]=n,e=f}return!r&&e&&(Y=e),e||!r&&Y},l=function(s,n){if(B(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new F(t)},o=rt;o.l=W,o.i=B,o.w=function(s,n){return l(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var F=function(){function s(t){this.$L=W(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[Z]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(o.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var u=e.match(tt);if(u){var f=u[2]-1||0,c=(u[7]||"0").substring(0,3);return i?new Date(Date.UTC(u[1],f,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)):new Date(u[1],f,u[3]||1,u[4]||0,u[5]||0,u[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return o},n.isValid=function(){return this.$d.toString()!==P},n.isSame=function(t,r){var e=l(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return l(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<l(t)},n.$g=function(t,r,e){return o.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!o.u(r)||r,u=o.p(t),f=function(O,$){var b=o.w(e.$u?Date.UTC(e.$y,$,O):new Date(e.$y,$,O),e);return i?b:b.endOf(M)},c=function(O,$){return o.w(e.toDate()[O].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice($)),e)},d=this.$W,h=this.$M,m=this.$D,I="set"+(this.$u?"UTC":"");switch(u){case D:return i?f(1,0):f(31,11);case y:return i?f(1,h):f(0,h+1);case L:var _=this.$locale().weekStart||0,j=(d<_?d+7:d)-_;return f(i?m-j:m+(6-j),h);case M:case H:return c(I+"Hours",0);case x:return c(I+"Minutes",1);case T:return c(I+"Seconds",2);case k:return c(I+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=o.p(t),u="set"+(this.$u?"UTC":""),f=(e={},e[M]=u+"Date",e[H]=u+"Date",e[y]=u+"Month",e[D]=u+"FullYear",e[x]=u+"Hours",e[T]=u+"Minutes",e[k]=u+"Seconds",e[V]=u+"Milliseconds",e)[i],c=i===M?this.$D+(r-this.$W):r;if(i===y||i===D){var d=this.clone().set(H,1);d.$d[f](c),d.init(),this.$d=d.set(H,Math.min(this.$D,d.daysInMonth())).$d}else f&&this.$d[f](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[o.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var u=o.p(r),f=function(h){var m=l(i);return o.w(m.date(m.date()+Math.round(h*t)),i)};if(u===y)return this.set(y,this.$M+t);if(u===D)return this.set(D,this.$y+t);if(u===M)return f(1);if(u===L)return f(7);var c=(e={},e[T]=a,e[x]=E,e[k]=S,e)[u]||1,d=this.$d.getTime()+t*c;return o.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||P;var i=t||"YYYY-MM-DDTHH:mm:ssZ",u=o.z(this),f=this.$H,c=this.$m,d=this.$M,h=e.weekdays,m=e.months,I=e.meridiem,_=function($,b,C,N){return $&&($[b]||$(r,i))||C[b].slice(0,N)},j=function($){return o.s(f%12||12,$,"0")},O=I||function($,b,C){var N=$<12?"AM":"PM";return C?N.toLowerCase():N};return i.replace(et,function($,b){return b||function(C){switch(C){case"YY":return String(r.$y).slice(-2);case"YYYY":return o.s(r.$y,4,"0");case"M":return d+1;case"MM":return o.s(d+1,2,"0");case"MMM":return _(e.monthsShort,d,m,3);case"MMMM":return _(m,d);case"D":return r.$D;case"DD":return o.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return _(e.weekdaysMin,r.$W,h,2);case"ddd":return _(e.weekdaysShort,r.$W,h,3);case"dddd":return h[r.$W];case"H":return String(f);case"HH":return o.s(f,2,"0");case"h":return j(1);case"hh":return j(2);case"a":return O(f,c,!0);case"A":return O(f,c,!1);case"m":return String(c);case"mm":return o.s(c,2,"0");case"s":return String(r.$s);case"ss":return o.s(r.$s,2,"0");case"SSS":return o.s(r.$ms,3,"0");case"Z":return u}return null}($)||u.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,u=this,f=o.p(r),c=l(t),d=(c.utcOffset()-this.utcOffset())*a,h=this-c,m=function(){return o.m(u,c)};switch(f){case D:i=m()/12;break;case y:i=m();break;case J:i=m()/3;break;case L:i=(h-d)/6048e5;break;case M:i=(h-d)/864e5;break;case x:i=h/E;break;case T:i=h/a;break;case k:i=h/S;break;default:i=h}return e?i:o.a(i)},n.daysInMonth=function(){return this.endOf(y).$D},n.$locale=function(){return w[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=W(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return o.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),z=F.prototype;return l.prototype=z,[["$ms",V],["$s",k],["$m",T],["$H",x],["$W",M],["$M",y],["$y",D],["$D",H]].forEach(function(s){z[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),l.extend=function(s,n){return s.$i||(s(n,F,l),s.$i=!0),l},l.locale=W,l.isDayjs=B,l.unix=function(s){return l(1e3*s)},l.en=w[Y],l.Ls=w,l.p={},l})})(X);var lt=X.exports;const q=ct(lt),dt={class:"profile"},ht={class:"info"},$t=G({__name:"ProfileInfo",setup(g){let A=st("");return setInterval(()=>{const S=q().diff(q(104480196e4),"year",!0);A.value=S.toString().substring(0,12)},50),(S,a)=>(Q(),K(at,null,[p("div",dt,[a[8]||(a[8]=p("h1",{class:"name"},"Tanguy Hardion",-1)),p("p",ht,[a[0]||(a[0]=v(" I'm a ")),p("b",null,it(ut(A)),1),a[1]||(a[1]=v(" year-old computer engineering student, majoring in ")),a[2]||(a[2]=p("b",null," AI ",-1)),a[3]||(a[3]=v(" and ")),a[4]||(a[4]=p("b",null," Data Science ",-1)),a[5]||(a[5]=v(" at ")),a[6]||(a[6]=p("b",null," UTC",-1)),a[7]||(a[7]=v(". "))]),a[9]||(a[9]=p("p",{class:"info"},[v(" Currently, I'm looking for a "),p("b",null," 6-month internship "),v(" in "),p("b",null," AI,"),v(" starting in "),p("b",null,"February 2025"),v(". ")],-1))]),a[10]||(a[10]=p("div",null,null,-1))],64))}}),mt=R($t,[["__scopeId","data-v-51c4e3ae"]]),pt={class:"profile-info"},yt=G({__name:"HomeView",setup(g){return(A,S)=>(Q(),K("div",pt,[ot(mt)]))}}),vt=R(yt,[["__scopeId","data-v-f63db12c"]]);export{vt as default};
