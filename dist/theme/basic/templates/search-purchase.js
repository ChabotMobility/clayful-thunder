window.Thunder.components["search-purchase"].template=function(e){var t='<div class="thunder--search-purchase-form-wrapper"><h2>'+e.m(e.camelCase(["search",e.options.type]))+'</h2><form class="thunder--search-purchase-form thunder--form"><div class="thunder--subject"><label for="subject">'+e.m(e.options.type+"Id")+'</label><input type="text" name="subject" placeholder="'+e.m(e.options.type+"Id")+'" required></div>',r=e.authFields;if(r)for(var s,a=-1,o=r.length-1;a<o;)s=r[a+=1],t+='<div class="thunder--'+e.kebabCase(s.key)+'"><label for="'+s.key+'">'+e.m(s.translationKey)+'</label><input type="'+("email"===s.key?"email":"text")+'" name="'+s.key+'" placeholder="'+e.m(s.translationKey)+'"></div>';return t+='<div class="thunder--form-actions"><button type="submit" class="thunder--search-purchase thunder--button">'+e.m("doSearch")+'</button></div></form><ul class="thunder--form-useful-actions"><li>',"subscription"===e.options.type&&e.showLinks.order&&(t+='<a class="thunder--go-to-search-purchase" data-type="order">'+e.m("goToSearchOrder")+"</a>"),"order"===e.options.type&&e.showLinks.subscription&&(t+='<a class="thunder--go-to-search-purchase" data-type="subscription">'+e.m("goToSearchSubscription")+"</a>"),t+="</li></ul></div>"};