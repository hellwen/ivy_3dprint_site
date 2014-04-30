/*
 jQuery Easing v1.3: Copyright (c) 2008 George McGinley Smith | BSD License: http://www.opensource.org/licenses/bsd-license.php
 json2: Douglas Crockford | Public domain
 jquery.transloadit2.js: Copyright (c) 2010 Felix Geisendörfer | MIT License: http://www.opensource.org/licenses/mit-license.php

 Fork this on Github: http://github.com/transloadit/jquery-sdk

 Transloadit servers allow browsers to cache jquery.transloadit2.js for 1 hour.
 keep this in mind when rolling out fixes.
 jQuery Tools 1.2.3: Tero Piirainen | Public domain
*/
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(d,a,e,c,b){return jQuery.easing[jQuery.easing.def](d,a,e,c,b)},easeInQuad:function(d,a,e,c,b){return c*(a/=b)*a+e},easeOutQuad:function(d,a,e,c,b){return-c*(a/=b)*(a-2)+e},easeInOutQuad:function(d,a,e,c,b){return 1>(a/=b/2)?c/2*a*a+e:-c/2*(--a*(a-2)-1)+e},easeInCubic:function(d,a,e,c,b){return c*(a/=b)*a*a+e},easeOutCubic:function(d,a,e,c,b){return c*((a=a/b-1)*a*a+1)+e},easeInOutCubic:function(d,a,e,c,b){return 1>(a/=b/2)?c/2*a*a*a+e:
c/2*((a-=2)*a*a+2)+e},easeInQuart:function(d,a,e,c,b){return c*(a/=b)*a*a*a+e},easeOutQuart:function(d,a,e,c,b){return-c*((a=a/b-1)*a*a*a-1)+e},easeInOutQuart:function(d,a,e,c,b){return 1>(a/=b/2)?c/2*a*a*a*a+e:-c/2*((a-=2)*a*a*a-2)+e},easeInQuint:function(d,a,e,c,b){return c*(a/=b)*a*a*a*a+e},easeOutQuint:function(d,a,e,c,b){return c*((a=a/b-1)*a*a*a*a+1)+e},easeInOutQuint:function(d,a,e,c,b){return 1>(a/=b/2)?c/2*a*a*a*a*a+e:c/2*((a-=2)*a*a*a*a+2)+e},easeInSine:function(d,a,e,c,b){return-c*Math.cos(a/
b*(Math.PI/2))+c+e},easeOutSine:function(d,a,e,c,b){return c*Math.sin(a/b*(Math.PI/2))+e},easeInOutSine:function(d,a,e,c,b){return-c/2*(Math.cos(Math.PI*a/b)-1)+e},easeInExpo:function(d,a,e,c,b){return 0==a?e:c*Math.pow(2,10*(a/b-1))+e},easeOutExpo:function(d,a,e,c,b){return a==b?e+c:c*(-Math.pow(2,-10*a/b)+1)+e},easeInOutExpo:function(d,a,e,c,b){return 0==a?e:a==b?e+c:1>(a/=b/2)?c/2*Math.pow(2,10*(a-1))+e:c/2*(-Math.pow(2,-10*--a)+2)+e},easeInCirc:function(d,a,e,c,b){return-c*(Math.sqrt(1-(a/=b)*
a)-1)+e},easeOutCirc:function(d,a,e,c,b){return c*Math.sqrt(1-(a=a/b-1)*a)+e},easeInOutCirc:function(d,a,e,c,b){return 1>(a/=b/2)?-c/2*(Math.sqrt(1-a*a)-1)+e:c/2*(Math.sqrt(1-(a-=2)*a)+1)+e},easeInElastic:function(d,a,e,c,b){d=1.70158;var f=0,g=c;if(0==a)return e;if(1==(a/=b))return e+c;f||(f=0.3*b);g<Math.abs(c)?(g=c,d=f/4):d=f/(2*Math.PI)*Math.asin(c/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*b-d)*2*Math.PI/f))+e},easeOutElastic:function(d,a,e,c,b){d=1.70158;var f=0,g=c;if(0==a)return e;if(1==
(a/=b))return e+c;f||(f=0.3*b);g<Math.abs(c)?(g=c,d=f/4):d=f/(2*Math.PI)*Math.asin(c/g);return g*Math.pow(2,-10*a)*Math.sin((a*b-d)*2*Math.PI/f)+c+e},easeInOutElastic:function(d,a,e,c,b){d=1.70158;var f=0,g=c;if(0==a)return e;if(2==(a/=b/2))return e+c;f||(f=b*0.3*1.5);g<Math.abs(c)?(g=c,d=f/4):d=f/(2*Math.PI)*Math.asin(c/g);return 1>a?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*b-d)*2*Math.PI/f)+e:0.5*g*Math.pow(2,-10*(a-=1))*Math.sin((a*b-d)*2*Math.PI/f)+c+e},easeInBack:function(d,a,e,c,b,f){void 0==
f&&(f=1.70158);return c*(a/=b)*a*((f+1)*a-f)+e},easeOutBack:function(d,a,e,c,b,f){void 0==f&&(f=1.70158);return c*((a=a/b-1)*a*((f+1)*a+f)+1)+e},easeInOutBack:function(d,a,e,c,b,f){void 0==f&&(f=1.70158);return 1>(a/=b/2)?c/2*a*a*(((f*=1.525)+1)*a-f)+e:c/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+e},easeInBounce:function(d,a,e,c,b){return c-jQuery.easing.easeOutBounce(d,b-a,0,c,b)+e},easeOutBounce:function(d,a,e,c,b){return(a/=b)<1/2.75?c*7.5625*a*a+e:a<2/2.75?c*(7.5625*(a-=1.5/2.75)*a+0.75)+e:a<2.5/2.75?
c*(7.5625*(a-=2.25/2.75)*a+0.9375)+e:c*(7.5625*(a-=2.625/2.75)*a+0.984375)+e},easeInOutBounce:function(d,a,e,c,b){return a<b/2?0.5*jQuery.easing.easeInBounce(d,2*a,0,c,b)+e:0.5*jQuery.easing.easeOutBounce(d,2*a-b,0,c,b)+0.5*c+e}});
(function(d){function a(){}function e(a){D=[a]}function c(a,f,g){return a&&a.apply(f.context||f,g)}function b(b){function K(a){y++||(z(),A&&(F[m]={s:[a]}),L&&(a=L.apply(b,[a])),c(G,b,[a,M,b]),c(N,b,[b,M]))}function E(a){y++||(z(),A&&a!=O&&(F[m]=a),c(H,b,[b,a]),c(N,b,[b,a]))}b=d.extend({},P,b);var G=b.success,H=b.error,N=b.complete,L=b.dataFilter,B=b.callbackParameter,Q=b.callback,W=b.cache,A=b.pageCache,R=b.charset,m=b.url,s=b.data,S=b.timeout,C,y=0,z=a,l,w,I;T&&T(function(a){a.done(G).fail(H);G=
a.resolve;H=a.reject}).promise(b);b.abort=function(){!y++&&z()};if(!1===c(b.beforeSend,b,[b])||y)return b;m=m||h;s=s?"string"==typeof s?s:d.param(s,b.traditional):h;m+=s?(/\?/.test(m)?"&":"?")+s:h;B&&(m+=(/\?/.test(m)?"&":"?")+encodeURIComponent(B)+"=?");!W&&!A&&(m+=(/\?/.test(m)?"&":"?")+"_"+(new Date).getTime()+"=");m=m.replace(/=\?(&|$)/,"="+Q+"$1");A&&(C=F[m])?C.s?K(C.s[0]):E(C):(U[Q]=e,l=d(k)[0],l.id=r+X++,R&&(l[g]=R),V&&11.6>V.version()?(w=d(k)[0]).text="document.getElementById('"+l.id+"')."+
J+"()":l[f]=f,Y&&(l.htmlFor=l.id,l.event=v),l[q]=l[J]=l[t]=function(a){if(!l[u]||!/i/.test(l[u])){try{l[v]&&l[v]()}catch(f){}a=D;D=0;a?K(a[0]):E(n)}},l.src=m,z=function(){I&&clearTimeout(I);l[t]=l[q]=l[J]=null;x[p](l);w&&x[p](w)},x[j](l,B=x.firstChild),w&&x[j](w,B),I=0<S&&setTimeout(function(){E(O)},S));return b}var f="async",g="charset",h="",n="error",j="insertBefore",r="_jqjsp",v="onclick",J="on"+n,q="onload",t="onreadystatechange",u="readyState",p="removeChild",k="<script>",M="success",O="timeout",
U=window,T=d.Deferred,x=d("head")[0]||document.documentElement,F={},X=0,D,P={callback:r,url:location.href},V=U.opera,Y=!!d("<div>").html("\x3c!--[if IE]><i><![endif]--\x3e").find("i").length;b.setup=function(a){d.extend(P,a)};d.jsonp=b})(jQuery);this.JSON||(this.JSON={});
(function(){function d(a){return 10>a?"0"+a:a}function a(a){b.lastIndex=0;return b.test(a)?'"'+a.replace(b,function(a){var f=h[a];return"string"===typeof f?f:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function e(b,d){var c,h,q,t,u=f,p,k=d[b];k&&("object"===typeof k&&"function"===typeof k.toJSON)&&(k=k.toJSON(b));"function"===typeof n&&(k=n.call(d,b,k));switch(typeof k){case "string":return a(k);case "number":return isFinite(k)?String(k):"null";case "boolean":case "null":return String(k);
case "object":if(!k)return"null";f+=g;p=[];if("[object Array]"===Object.prototype.toString.apply(k)){t=k.length;for(c=0;c<t;c+=1)p[c]=e(c,k)||"null";q=0===p.length?"[]":f?"[\n"+f+p.join(",\n"+f)+"\n"+u+"]":"["+p.join(",")+"]";f=u;return q}if(n&&"object"===typeof n){t=n.length;for(c=0;c<t;c+=1)h=n[c],"string"===typeof h&&(q=e(h,k))&&p.push(a(h)+(f?": ":":")+q)}else for(h in k)Object.hasOwnProperty.call(k,h)&&(q=e(h,k))&&p.push(a(h)+(f?": ":":")+q);q=0===p.length?"{}":f?"{\n"+f+p.join(",\n"+f)+"\n"+
u+"}":"{"+p.join(",")+"}";f=u;return q}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+d(this.getUTCMonth()+1)+"-"+d(this.getUTCDate())+"T"+d(this.getUTCHours())+":"+d(this.getUTCMinutes())+":"+d(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var c=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f,g,h={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},n;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,b,d){var c;g=f="";if("number"===typeof d)for(c=0;c<d;c+=1)g+=" ";else"string"===typeof d&&(g=d);if((n=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("JSON.stringify");return e("",{"":a})});
"function"!==typeof JSON.parse&&(JSON.parse=function(a,f){function b(a,g){var d,c,e=a[g];if(e&&"object"===typeof e)for(d in e)Object.hasOwnProperty.call(e,d)&&(c=b(e,d),void 0!==c?e[d]=c:delete e[d]);return f.call(a,g,e)}var g;a=String(a);c.lastIndex=0;c.test(a)&&(a=a.replace(c,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return g=eval("("+a+")"),"function"===typeof f?b({"":g},""):g;throw new SyntaxError("JSON.parse");})})();
(function(d){function a(){if(d.browser.msie){var a=d(document).height(),f=d(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,20>a-f?f:a]}return[d(document).width(),d(document).height()]}function e(a){if(a)return a.call(d.mask)}d.tools=d.tools||{version:"1.2.3"};var c;c=d.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,onClose:null}};
var b,f,g,h,n;d.mask={load:function(j,r){if(g)return this;"string"==typeof j&&(j={color:j});j=j||h;h=j=d.extend(d.extend({},c.conf),j);b=d("#"+j.maskId);b.length||(b=d("<div/>").attr("id",j.maskId),d("body").append(b));var v=a();b.css({position:"absolute",top:0,left:0,width:v[0],height:v[1],display:"none",opacity:j.startOpacity,zIndex:j.zIndex});j.color&&b.css("backgroundColor",j.color);if(!1===e(j.onBeforeLoad))return this;j.closeOnEsc&&d(document).bind("keydown.mask",function(a){27==a.keyCode&&
d.mask.close(a)});j.closeOnClick&&b.bind("click.mask",function(a){d.mask.close(a)});d(window).bind("resize.mask",function(){d.mask.fit()});r&&r.length&&(n=r.eq(0).css("zIndex"),d.each(r,function(){var a=d(this);/relative|absolute|fixed/i.test(a.css("position"))||a.css("position","relative")}),f=r.css({zIndex:Math.max(j.zIndex+1,"auto"==n?0:n)}));b.css({display:"block"}).fadeTo(j.loadSpeed,j.opacity,function(){d.mask.fit();e(j.onLoad)});g=!0;return this},close:function(){if(g){if(!1===e(h.onBeforeClose))return this;
b.fadeOut(h.closeSpeed,function(){e(h.onClose);f&&f.css({zIndex:n})});d(document).unbind("keydown.mask");b.unbind("click.mask");d(window).unbind("resize.mask");g=!1}return this},fit:function(){if(g){var f=a();b.css({width:f[0],height:f[1]})}},getMask:function(){return b},isLoaded:function(){return g},getConf:function(){return h},getExposed:function(){return f}};d.fn.mask=function(a){d.mask.load(a);return this};d.fn.expose=function(a){d.mask.load(a,this);return this}})(jQuery);
(function(d){function a(){this.timer=this.documentTitle=this.instance=this.assemblyId=null;this._options={};this.uploads=[];this.results={};this.pollStarted=this.ended=null;this.seq=this.pollRetries=0;this.started=!1;this.params=this.assembly=null;this.lastPoll=this.bytesReceivedBefore=0;this.$modal=this.$iframe=this.$fileClones=this.$files=this.$form=this.$params=null}var e="https:"==document.location.protocol?"https://":"http://",c={service:e+"api2.transloadit.com/",assets:e+"assets.transloadit.com/",
onStart:function(){},onProgress:function(){},onUpload:function(){},onResult:function(){},onCancel:function(){},onError:function(){},onSuccess:function(){},interval:2500,pollTimeout:8E3,poll404Retries:15,pollConnectionRetries:3,wait:!1,processZeroFiles:!0,autoSubmit:!0,modal:!0,exclude:"",fields:!1,debug:!0},b=!1;d.fn.transloadit=function(){var f=Array.prototype.slice.call(arguments),b,d;(1==f.length&&"object"==typeof f[0]||void 0===f[0])&&f.unshift("init");b=f.shift();"init"==b?(d=new a,f.unshift(this),
this.data("transloadit.uploader",d)):d=this.data("transloadit.uploader");if(!d)throw Error("Element is not initialized for transloadit!");f=d[b].apply(d,f);return void 0===f?this:f};a.prototype.init=function(a,b){this.$form=a;this.options(d.extend({},c,b||{}));var e=this;a.bind("submit.transloadit",function(){e.validate();e.detectFileInputs();!e._options.processZeroFiles&&0===e.$files.length?e.submitForm():e.getBoredInstance();return!1});this.includeCss()};a.prototype.getBoredInstance=function(){var a=
this;this.instance=null;d.jsonp({url:this._options.service+"instances/bored",timeout:a._options.pollTimeout,callbackParameter:"callback",success:function(b){b.error?(a.ended=!0,a.renderError(b),a._options.onError(b)):(a.instance=b.api2_host,a.start())},error:function(b,d){a.ended=!0;var c={error:"CONNECTION_ERROR",message:"There was a problem connecting to the upload server",reason:"JSONP request status: "+d};a.renderError(c);a._options.onError(c)}});this._options.modal&&this.showModal()};a.prototype.start=
function(){var a=this;this.ended=this.started=!1;this.seq=this.pollRetries=this.bytesReceivedBefore=0;this.uploads=[];this.results={};this.assemblyId=this.uuid();this.$fileClones=d().not(document);this.$files.each(function(){var b=d(this).clone(!0);a.$fileClones=a.$fileClones.add(b);b.insertAfter(this)});this.$iframe=d('<iframe id="transloadit-'+this.assemblyId+'" name="transloadit-'+this.assemblyId+'"/>').appendTo("body").hide();this.$uploadForm=d('<form enctype="multipart/form-data" />').attr("action",
e+this.instance+"/assemblies/"+this.assemblyId+"?redirect=false").attr("target","transloadit-"+this.assemblyId).attr("method","POST").append(this.$files).appendTo("body").hide();var b="[name=params], [name=signature]";!0===this._options.fields?b="*":"string"==typeof this._options.fields&&(b+=", "+this._options.fields);var b=this.$form.find(":input[type!=file]").filter(b),c=b.filter("select"),b=b.filter(function(){return!d(this).is("select")});this.clone(b).prependTo(this.$uploadForm);c.each(function(){d('<input type="hidden"/>').attr("name",
d(this).attr("name")).attr("value",d(this).val()).prependTo(a.$uploadForm)});this.$uploadForm.submit();this.lastPoll=+new Date;setTimeout(function(){a._poll()},300)};a.prototype.clone=function(a){var b=a.clone();a=a.filter("textarea");for(var c=b.filter("textarea"),e=0,j=a.length;e<j;++e)d(c[e]).val(d(a[e]).val());return b};a.prototype.detectFileInputs=function(){var a=this.$form.find("input[type=file]").not(this._options.exclude);this._options.processZeroFiles||(a=a.filter(function(){return""!=this.value}));
this.$files=a};a.prototype.validate=function(){var a=this.$form.find("input[name=params]");if(a.length){try{this.params=JSON.parse(a.val())}catch(b){alert("Error: input[name=params] seems to contain invalid JSON.");return}if(this.params.redirect_url)this.$form.attr("action",this.params.redirect_url);else if(this._options.autoSubmit&&this.$form.attr("action")==this._options.service+"assemblies"){alert("Error: input[name=params] does not include a redirect_url");return}this.$params=a}else alert("Could not find input[name=params] in your form.")};
a.prototype._poll=function(a){var b=this;if(!this.ended){var c=/(mozilla)(?:.*? rv:([\w.]+))?/.exec(navigator.userAgent);c&&c[1]&&!this.documentTitle&&(this.documentTitle=document.title,document.title="Loading...");this.pollStarted=+new Date;d.jsonp({url:e+this.instance+"/assemblies/"+this.assemblyId+(a||"?seq="+this.seq),timeout:b._options.pollTimeout,callbackParameter:"callback",success:function(a){if(!b.ended)if(b.assembly=a,"ASSEMBLY_NOT_FOUND"==a.error)b.pollRetries++,b.pollRetries>b._options.poll404Retries?
(document.title=b.documentTitle,b.ended=!0,b.renderError(a),b._options.onError(a)):setTimeout(function(){b._poll()},400);else if(a.error)b.ended=!0,b.renderError(a),document.title=b.documentTitle,b._options.onError(a);else{b.seq=a.last_seq;b.started||(b.started=!0,b._options.onStart(a));b.pollRetries=0;var d="ASSEMBLY_EXECUTING"==a.ok,c="ASSEMBLY_CANCELED"==a.ok,e="ASSEMBLY_COMPLETED"==a.ok;b._options.onProgress(a.bytes_received,a.bytes_expected,a);for(var f=0;f<a.uploads.length;f++)b._options.onUpload(a.uploads[f],
a),b.uploads.push(a.uploads[f]);for(var h in a.results){b.results[h]=b.results[h]||[];for(f=0;f<a.results[h].length;f++)b._options.onResult(h,a.results[h][f],a),b.results[h].push(a.results[h][f])}c?(b.ended=!0,document.title=b.documentTitle,b._options.onCancel(a)):(b.renderProgress(a),e||!b._options.wait&&d?(b.ended=!0,document.title=b.documentTitle,a.uploads=b.uploads,a.results=b.results,b._options.onSuccess(a),b._options.modal&&b.cancel(),b._options.autoSubmit&&b.submitForm()):(a=b.pollStarted-
+new Date,b.timer=setTimeout(function(){b._poll()},a<b._options.interval?b._options.interval:a),b.lastPoll=+new Date))}},error:function(a,d){if(!b.ended)if(b.pollRetries++,b.pollRetries>b._options.pollConnectionRetries){document.title=b.documentTitle;b.ended=!0;var c={error:"CONNECTION_ERROR",message:"There was a problem connecting to the upload server",reason:"JSONP request status: "+d};b.renderError(c);b._options.onError(c)}else setTimeout(function(){b._poll()},350)}})}};a.prototype.stop=function(){document.title=
this.documentTitle;this.ended=!0};a.prototype.cancel=function(){if(!this.ended){var a=this;this.$params.prependTo(this.$form);this.$fileClones.each(function(b){b=d(a.$files[b]);var c=d(this);b.insertAfter(c);c.remove()});clearTimeout(a.timer);this._poll("?method=delete");"Microsoft Internet Explorer"==navigator.appName&&this.$iframe[0].contentWindow.document.execCommand("Stop");setTimeout(function(){a.$iframe.remove()},500)}this._options.modal&&(d.mask.close(),this.$modal.remove())};a.prototype.submitForm=
function(){this.$fileClones&&this.$fileClones.remove();null!==this.assembly&&d("<textarea/>").attr("name","transloadit").text(JSON.stringify(this.assembly)).prependTo(this.$form).hide();this.$form.unbind("submit.transloadit").submit()};a.prototype.showModal=function(){this.$modal=d('<div id="transloadit"><div class="content"><a href="#close" class="close"></a><p class="status"></p><div class="progress"><label>starting upload ...</label><span></span></div><p class="error"></p></div></div>').appendTo("body");
d.extend(this.$modal,{$status:this.$modal.find(".status"),$content:this.$modal.find(".content"),$close:this.$modal.find(".close"),$label:this.$modal.find("label"),$progress:this.$modal.find(".progress"),$progressSpan:this.$modal.find(".progress span"),$error:this.$modal.find(".error")});var a=this;this.$modal.$close.click(function(){a.cancel()});this.$modal.$error.hide();a=this;this.$modal.expose({api:!0,maskId:"transloadit_expose",opacity:0.9,loadSpeed:250,closeOnEsc:!1,closeOnClick:!1});this.$modal.$close.click(function(){a.cancel();
return!1})};a.prototype.renderError=function(a){this._options.modal&&(this.$modal.$content.addClass("content-error"),this.$modal.$progress.hide(),this.$modal.$error.html(this._options.debug?a.error+": "+a.message+"<br><br>"+(a.reason||""):"There was an internal error, please try your upload again.").show())};a.prototype.renderProgress=function(a){if(this._options.modal){var b=a.bytes_received/a.bytes_expected,c=a.bytes_received-this.bytesReceivedBefore,d=+new Date-this.lastPoll,e=1==b?1E3:2*this._options.interval,
c=1==b?"processing ...":(a.bytes_received/1024/1024).toFixed(2)+" MB / "+(a.bytes_expected/1024/1024).toFixed(2)+" MB ("+(c/1024/(d/1E3)).toFixed(1)+" kB / sec)";this.bytesReceivedBefore=a.bytes_received;this.$modal.$label.text(c);this.$modal.$progressSpan.stop().animate({width:100*b+"%"},e,"easeOutCubic")}};a.prototype.includeCss=function(){!b&&this._options.modal&&(b=!0,d('<link rel="stylesheet" type="text/css" href="'+this._options.assets+'css/transloadit2.css" />').appendTo("head"))};a.prototype.uuid=
function(){var a="",b;for(b=0;32>b;b++)a+=Math.floor(16*Math.random()).toString(16);return a};a.prototype.options=function(a){if(0==arguments.length)return this._options;d.extend(this._options,a)};a.prototype.option=function(a,b){if(1==arguments.length)return this._options[a];this._options[a]=b}})(jQuery);
