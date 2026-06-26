/* === SCRIPT BLOCK 1 === */
{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://brunastacke.com.br/verde-mais-postura-menos-barriga-alteracao-dia/","url":"https://brunastacke.com.br/verde-mais-postura-menos-barriga-alteracao-dia/","name":"Verde | Mais Postura, Menos Barriga (Alteração Dia) - Bruna Stacke","isPartOf":{"@id":"https://brunastacke.com.br/#website"},"primaryImageOfPage":{"@id":"https://brunastacke.com.br/verde-mais-postura-menos-barriga-alteracao-dia/#primaryimage"},"image":{"@id":"https://brunastacke.com.br/verde-mais-postura-menos-barriga-alteracao-dia/#primaryimage"},"thumbnailUrl":"https://brunastacke.com.br/wp-content/uploads/2026/03/031033.webp","datePublished":"2026-05-11T19:53:31+00:00","dateModified":"2026-05-21T17:12:41+00:00","breadcrumb":{"@id":"https://brunastacke.com.br/verde-mais-postura-menos-barriga-alteracao-dia/#breadcrumb"},"inLanguage":"pt-BR","potentialAction":[{"@type":"ReadAction","target":["https://brunastacke.com.br/verde-mais-postura-menos-barriga-alteracao-dia/"]}]},{"@type":"ImageObject","inLanguage":"pt-BR","@id":"https://brunastacke.com.br/verde-mais-postura-menos-barriga-alteracao-dia/#primaryimage","url":"https://brunastacke.com.br/wp-content/uploads/2026/03/031033.webp","contentUrl":"https://brunastacke.com.br/wp-content/uploads/2026/03/031033.webp","width":1021,"height":1069},{"@type":"BreadcrumbList","@id":"https://brunastacke.com.br/verde-mais-postura-menos-barriga-alteracao-dia/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"https://brunastacke.com.br/"},{"@type":"ListItem","position":2,"name":"Verde | Mais Postura, Menos Barriga (Alteração Dia)"}]},{"@type":"WebSite","@id":"https://brunastacke.com.br/#website","url":"https://brunastacke.com.br/","name":"Bruna Stacke","description":"","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://brunastacke.com.br/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"pt-BR"}]}

/* === SCRIPT BLOCK 2 === */
var handl_utm = {"utm_source":"ig","utm_medium":"social","utm_content":"link_in_bio"};
//# sourceURL=handl-utm-grabber-js-extra

/* === SCRIPT BLOCK 3 === */
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NS74KM4B');

/* === SCRIPT BLOCK 4 === */
(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "w1sqcp4j76");

/* === SCRIPT BLOCK 5 === */
document.addEventListener("DOMContentLoaded", function() {
  const carrosseis = document.querySelectorAll('.carrossel .elementor-icon-list-items');

  carrosseis.forEach((carrossel) => {
    if (carrossel) {
      const novoContainer = document.createElement('div');

      novoContainer.className = carrossel.className;
      [...carrossel.attributes].forEach(attr => {
        novoContainer.setAttribute(attr.name, attr.value);
      });

      const conteudo = carrossel.innerHTML;
      const containerCarrossel = document.createElement('div');
      containerCarrossel.classList.add('carrossel-ativo');

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = conteudo;

      tempDiv.querySelectorAll('li').forEach(li => {
        const span = document.createElement('span');

        span.className = li.className;
        [...li.attributes].forEach(attr => {
          span.setAttribute(attr.name, attr.value);
        });

        span.innerHTML = li.innerHTML;

        li.replaceWith(span);
      });

      containerCarrossel.innerHTML = tempDiv.innerHTML;

      novoContainer.appendChild(containerCarrossel);

      carrossel.replaceWith(novoContainer);

      const larguraCarrossel = novoContainer.offsetWidth;
      const larguraConteudos = containerCarrossel.scrollWidth;
      const copias = Math.ceil(larguraCarrossel / larguraConteudos);

      for (let i = 0; i < copias; i++) {
        containerCarrossel.innerHTML += tempDiv.innerHTML;
      }

      containerCarrossel.innerHTML += tempDiv.innerHTML;
    }
  });
});

/* === SCRIPT BLOCK 6 === */
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/hello-elementor/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}

/* === SCRIPT BLOCK 7 === */
;
				(function($, w) {
					'use strict';
					let $window = $(w);

					$(document).ready(function() {

						let isEnable = "";
						let isEnableLazyMove = "";
						let speed = isEnableLazyMove ? '0.7' : '0.2';

						if( !isEnable ) {
							return;
						}

						if (typeof haCursor == 'undefined' || haCursor == null) {
							initiateHaCursorObject(speed);
						}

						setTimeout(function() {
							let targetCursor = $('.ha-cursor');
							if (targetCursor) {
								if (!isEnable) {
									$('body').removeClass('hm-init-default-cursor-none');
									$('.ha-cursor').addClass('ha-init-hide');
								} else {
									$('body').addClass('hm-init-default-cursor-none');
									$('.ha-cursor').removeClass('ha-init-hide');
								}
							}
						}, 500);

					});

				}(jQuery, window));

/* === SCRIPT BLOCK 8 === */
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Compartilhar no Facebook","shareOnTwitter":"Compartilhar no Twitter","pinIt":"Fixar","download":"Baixar","downloadImage":"Baixar imagem","fullscreen":"Tela cheia","zoom":"Zoom","share":"Compartilhar","playVideo":"Reproduzir v\u00eddeo","previous":"Anterior","next":"Pr\u00f3ximo","close":"Fechar","a11yCarouselPrevSlideMessage":"Slide anterior","a11yCarouselNextSlideMessage":"Pr\u00f3ximo slide","a11yCarouselFirstSlideMessage":"Este \u00e9 o primeiro slide","a11yCarouselLastSlideMessage":"Este \u00e9 o \u00faltimo slide","a11yCarouselPaginationBulletMessage":"Ir para o slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Dispositivos m\u00f3veis no modo retrato","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Dispositivos m\u00f3veis no modo paisagem","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet no modo retrato","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet no modo paisagem","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Notebook","value":1366,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Tela ampla (widescreen)","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":true},"version":"4.1.3","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"theme_builder_v2":true,"hello-theme-header-footer":true,"e_pro_free_trial_popup":true,"nested-elements":true,"e_atomic_elements":true,"atomic_widgets_should_enforce_capabilities":true,"editor_mcp":true,"e_bc_migrations":true,"e_editor_design_system_panel":true,"e_classes":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_variables_manager":true,"e_opt_in_v4_page":true,"e_opt_in_v4":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"mega-menu":true,"e_pro_variables":true},"urls":{"assets":"https:\/\/brunastacke.com.br\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/brunastacke.com.br\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/brunastacke.com.br\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"9093c0e82b","atomicFormsSendForm":"8d405bcd26"},"swiperClass":"swiper","settings":{"page":{"ha_cmc_init_switcher":"no"},"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet","viewport_laptop"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","hello_header_logo_type":"title","hello_footer_logo_type":"logo","ha_rpb_enable":"no"},"post":{"id":1478,"title":"Verde%20%7C%20Mais%20Postura%2C%20Menos%20Barriga%20%28Altera%C3%A7%C3%A3o%20Dia%29%20-%20Bruna%20Stacke","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before

/* === SCRIPT BLOCK 9 === */
var HappyLocalize = {"ajax_url":"https://brunastacke.com.br/wp-admin/admin-ajax.php","nonce":"f2d6b5f696","pdf_js_lib":"https://brunastacke.com.br/wp-content/plugins/happy-elementor-addons/assets/vendor/pdfjs/lib"};
//# sourceURL=happy-elementor-addons-js-extra

/* === SCRIPT BLOCK 10 === */
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after

/* === SCRIPT BLOCK 11 === */
var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/brunastacke.com.br\/wp-admin\/admin-ajax.php","nonce":"06d9febc4f","urls":{"assets":"https:\/\/brunastacke.com.br\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/brunastacke.com.br\/wp-json\/"},"settings":{"lazy_load_background_images":false},"popup":{"hasPopUps":false},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"pt_BR","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/brunastacke.com.br\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
//# sourceURL=elementor-pro-frontend-js-before

/* === SCRIPT BLOCK 12 === */
{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://brunastacke.com.br/wp-includes/js/wp-emoji-release.min.js?ver=6.9.4"}}

/* === SCRIPT BLOCK 13 === */
/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://brunastacke.com.br/wp-includes/js/wp-emoji-loader.min.js

