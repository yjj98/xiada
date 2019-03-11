(function(window){var svgSprite='<svg><symbol id="icon-caidan-2" viewBox="0 0 1024 1024"><path d="M210.847 152.64h748.594c15.804 0 28.609 12.814 28.609 28.62v27.575c0 15.805-12.803 28.619-28.609 28.619h-748.594c-15.834 0-28.649-12.814-28.649-28.619v-27.575c0.001-15.806 12.815-28.62 28.649-28.62v0z"  ></path><path d="M210.847 470.723h748.594c15.804 0 28.609 12.815 28.609 28.646v27.55c0 15.804-12.803 28.646-28.609 28.646h-748.594c-15.834 0-28.649-12.843-28.649-28.646v-27.55c0.001-15.831 12.815-28.646 28.649-28.646v0z"  ></path><path d="M210.847 788.823h748.594c15.804 0 28.609 12.826 28.609 28.629v27.586c0 15.804-12.803 28.608-28.609 28.608h-748.594c-15.834 0-28.649-12.803-28.649-28.608v-27.586c0.001-15.804 12.815-28.629 28.649-28.629v0z"  ></path><path d="M62.374 152.64h27.584c15.804 0 28.619 12.814 28.619 28.62v27.575c0 15.805-12.815 28.619-28.619 28.619h-27.584c-15.805 0-28.61-12.814-28.61-28.619v-27.575c0-15.806 12.804-28.62 28.61-28.62v0z"  ></path><path d="M62.374 470.723h27.584c15.804 0 28.619 12.815 28.619 28.646v27.55c0 15.804-12.815 28.646-28.619 28.646h-27.584c-15.805 0-28.61-12.843-28.61-28.646v-27.55c0-15.831 12.804-28.646 28.61-28.646v0z"  ></path><path d="M62.374 789.916h27.584c15.804 0 28.619 12.826 28.619 28.629v27.586c0 15.804-12.815 28.608-28.619 28.608h-27.584c-15.805 0-28.61-12.803-28.61-28.608v-27.586c0-15.804 12.804-28.629 28.61-28.629v0z"  ></path></symbol><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M739.555556 341.333333H455.111111c-22.755556 0-56.888889-34.133333-56.888889-56.888889s34.133333-56.888889 56.888889-56.888888h284.444445c22.755556 0 56.888889 34.133333 56.888888 56.888888s-34.133333 56.888889-56.888888 56.888889m0 227.555556H455.111111c-22.755556 0-56.888889-34.133333-56.888889-56.888889s34.133333-56.888889 56.888889-56.888889h284.444445c22.755556 0 56.888889 34.133333 56.888888 56.888889s-34.133333 56.888889-56.888888 56.888889m0 227.555555H455.111111c-22.755556 0-56.888889-34.133333-56.888889-56.888888s34.133333-56.888889 56.888889-56.888889h284.444445c22.755556 0 56.888889 34.133333 56.888888 56.888889s-34.133333 56.888889-56.888888 56.888888M284.444444 341.333333c-39.822222 0-56.888889-34.133333-56.888888-56.888889s17.066667-56.888889 56.888888-56.888888c51.2 0 56.888889 34.133333 56.888889 56.888888 0 51.2-34.133333 56.888889-56.888889 56.888889m0 227.555556c-34.133333 0-56.888889-17.066667-56.888888-56.888889 0-22.755556 0-56.888889 56.888888-56.888889 45.511111 0 56.888889 34.133333 56.888889 56.888889 0 34.133333-34.133333 56.888889-56.888889 56.888889m0 227.555555c-45.511111 0-56.888889-34.133333-56.888888-56.888888 0-39.822222 5.688889-56.888889 56.888888-56.888889 45.511111 0 56.888889 34.133333 56.888889 56.888889 0 45.511111-22.755556 56.888889-56.888889 56.888888M881.777778 56.888889H136.533333C91.022222 56.888889 56.888889 91.022222 56.888889 136.533333v745.244445c0 45.511111 39.822222 85.333333 79.644444 85.333333h745.244445c45.511111 0 79.644444-34.133333 79.644444-79.644444V136.533333c5.688889-45.511111-34.133333-79.644444-79.644444-79.644444"  ></path></symbol><symbol id="icon-dayu" viewBox="0 0 1024 1024"><path d="M724.422866 629.25558L173.306063 118.91508 298.235987 0l552.45795 511.641006zM298.235987 1024L173.306063 905.08492 724.422866 394.893437l126.257524 117.58748z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)