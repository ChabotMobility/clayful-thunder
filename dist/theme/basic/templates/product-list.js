window.Thunder.components["product-list"].template=function(t){var r='<div class="thunder--product-list-wrapper"><div class="thunder--product-list thunder--columns-'+t.options.columns+'">',a=t.products;if(a)for(var i,e=-1,n=a.length-1;e<n;)i=a[e+=1],r+='<div class="thunder--product" data-product="'+i._id+'" data-mh="'+t.id+'"><div class="thunder--product-thumbnail-wrapper"><img src="'+t.imageURL(i.thumbnail,t.options.imageWidth,t.options.imageHeight)+'"></div><div class="thunder--product-info"><h3 class="thunder--product-name">'+i.name+"</h3>",t.options.showRating&&(r+='<p class="thunder--product-rating" data-rating="'+i.rating.average.raw+'" data-rating-count="'+i.rating.count.raw+'">'+t.ui["review-stars"](i.rating.average.raw)+'<span class="thunder--product-rating-count">('+i.rating.count.converted+")</span></p>"),r+='<p class="thunder--product-sale-price">'+i.price.sale.converted+"</p>",t.options.showComparePrice&&i.price.sale.converted!==i.price.original.converted&&(r+='<p class="thunder--product-compare-price">'+i.price.original.converted+"</p>"),t.options.showSummary&&(r+='<p class="thunder--product-summary">'+i.summary+"</p>"),r+="</div>",i.label&&(r+='<div class="thunder--product-label"><div class="thunder--product-label-'+i.label+'">'+t.m(t.camelCase(["label",i.label]))+"</div></div>"),r+="</div>";return r+="</div>",t.options.usePagination&&(r+='<div class="thunder--product-list-pagination"></div>'),r+="</div>"};