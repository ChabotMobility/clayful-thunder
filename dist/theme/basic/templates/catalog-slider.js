window.Thunder.components["catalog-slider"].template=function(e){var i='<div class="thunder--catalog-slider-wrapper"><ul class="thunder--catlaog-slider">',l=e.catalogSlider.items;if(l)for(var t,r=-1,a=l.length-1;r<a;)t=l[r+=1],i+='<li class="thunder--slider-item">',t.link&&(i+='<a href="'+t.link+'" target="'+e.targetCheck(t.link)+'"><img class="thunder--slider-item-image" src="'+t.image.url+'" /></a>'),t.link||(i+='<img class="thunder--slider-item-image" src="'+t.image.url+'" />'),e.options.showCaption&&t.title&&(i+='<div class="thunder--slider-title-wrap">'+t.title+"</div>"),i+="</li>";return i+="</ul></div>"};