$(function() {

  var image_code_prefix = '<div data-image-index="1" data-displayer-width="1334" data-displayer-height="890" data-displayer-uri="f30f25_84c80b530a64490ebae85de6337862b9~mv2.jpg" data-height-diff="0" data-width-diff="0" data-bottom-gap="0" data-image-wrapper-right="0" data-image-wrapper-left="0" data-image-wrapper-top="0" data-image-wrapper-bottom="0" data-margin-to-container="0" style="position: absolute; left: 0px; top: 0px; height: 551px; width: 980px;" class="s9imageItem" data-state="notShowPanel desktopView alignLeft unselected clipImage noTransition normal noLink" id="comp-ixp2s56adataItem-ixp2tqal1" ><div style="height: 551px; width: 980px; margin: 0px;" id="comp-ixp2s56adataItem-ixp2tqal1imageWrapper" class="s9imageItemimageWrapper" ><div style="cursor:pointer;" id="comp-ixp2s56adataItem-ixp2tqal1zoom" class="s9imageItemzoom" ><div style="position: relative; overflow: hidden; width: 980px; height: 551px;" id="comp-ixp2s56adataItem-ixp2tqal1image" class="s9imageItemimage" ><div class="s9imageItemimagepreloader" id="comp-ixp2s56adataItem-ixp2tqal1imagepreloader" ></div><img id="comp-ixp2s56adataItem-ixp2tqal1imageimage" alt="" src="';
  var image_code_postfix = '" style="width: 980px; height: 551px; object-fit: cover;" ></div><a draggable="false" style="cursor:pointer;height:100%;display:block;width:100%;position:absolute;top:0px;left:0px;background-color:#ffffff;filter:alpha(opacity=0);opacity:0;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-modify:read-only;-webkit-user-modify:read-only;-moz-user-modify:read-only;-ms-user-modify:read-only;" data-page-item-context="galleryId:comp-ixp2s56a" data-gallery-id="comp-ixp2s56a" id="imageItemAnchor"></a></div></div><div id="comp-ixp2s56adataItem-ixp2tqal1panel" class="s9imageItem_pnl s9imageItempanel" ><h3 style="text-align:left;" id="comp-ixp2s56adataItem-ixp2tqal1title" class="s9imageItemtitle" ></h3><p style="text-align:left;" id="comp-ixp2s56adataItem-ixp2tqal1description" class="s9imageItemdescription" ></p><a style="display:none;" id="comp-ixp2s56adataItem-ixp2tqal1link" class="s9imageItemlink" ></a></div></div>';
  var image_url_prefix = 'photos/main/';

  var portfolio_image_code_prefix = '<a href="';
  // file src
  var portfolio_image_code_prefix2 = '" data-size="';
  // file width x height
  var portfolio_image_code_prefix3 = '" class="demo-gallery__img--main"><img src="';
  // file src
  var portfolio_image_code_prefix4 = '" alt="" height="';
  // height
  var portfolio_image_code_prefix5 = '" width="';
  // width
  var portfolio_image_code_prefix6 = '"></a>';

  $(".s9imageItem").remove();
  var bCheckEnabled; var bCheckEnabled2; var bCheckEnabled3; var bCheckEnabled4; var bCheckEnabled5; var bCheckEnabled6;
  var bFinishCheck; var bFinishCheck2; var bFinishCheck3; var bFinishCheck4; var bFinishCheck5; var bFinishCheck6;
  var img; var img2; var img3; var img4; var img5; var img6;
  var i; var j; var k; var l; var m; var n;
  var myInterval; var myInterval2; var myInterval3; var myInterval4; var myInterval5; var myInterval6;

  function loadAllImages() {
    bCheckEnabled = true;
    bFinishCheck = false;
    img = null;
    i = 0;
    myInterval = setInterval(loadImage, 1);

    bCheckEnabled2 = true;
    bFinishCheck2 = false;
    img2 = null;
    j = 0;
    myInterval2 = setInterval(loadUrbanImage, 1);

    bCheckEnabled3 = true;
    bFinishCheck3 = false;
    img3 = null;
    k = 0;
    myInterval3 = setInterval(loadNatureImage, 1);

    bCheckEnabled4 = true;
    bFinishCheck4 = false;
    img4 = null;
    l = 0;
    myInterval4 = setInterval(loadEventsImage, 1);

    bCheckEnabled5 = true;
    bFinishCheck5 = false;
    img5 = null;
    m = 0;
    myInterval5 = setInterval(loadPeopleImage, 1);

    bCheckEnabled6 = true;
    bFinishCheck6 = false;
    img6 = null;
    n = 0;
    myInterval6 = setInterval(loadDarkroomImage, 1);
  }

  loadAllImages();

  function loadImage() {
    if (bFinishCheck) {
      clearInterval(myInterval);
      $(".s10imageItem").find("img").attr("src", $(".s9imageItem:last-child").find("img").attr("src"));
      return;
    }
    if (bCheckEnabled) {
      bCheckEnabled = false;
      img = new Image();
      img.onload = fExists;
      img.onerror = fDoesntExist;
      img.src = 'photos/main/' + i + '.JPG';
    }
  }
  function fExists() {
    buildImage(img.src);
    i++;
    bCheckEnabled = true;
  }
  function fDoesntExist() {
    bFinishCheck = true;
  }

  function buildImage(url) {
    $(".s9itemsContainer").prepend(
      image_code_prefix+url+image_code_postfix
    );
  }

  function loadUrbanImage() {
    if (bFinishCheck2) {
      clearInterval(myInterval2);
      return;
    }
    if (bCheckEnabled2) {
      bCheckEnabled2 = false;
      img2 = new Image();
      img2.onload = function() {
        console.log("Hello");
        $(".demo-gallery-urban").append(
          portfolio_image_code_prefix+img2.src+portfolio_image_code_prefix2+img2.width+"x"+img2.height+portfolio_image_code_prefix3+
          img2.src+portfolio_image_code_prefix4+img2.height/4+portfolio_image_code_prefix5+img2.width/4+portfolio_image_code_prefix6
        );
        j++;
        bCheckEnabled2 = true;
      };
      img2.onerror = function() {
        bFinishCheck2 = true;
        var initPhotoSwipeFromDOM = function(gallerySelector) {
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    el,
                    childElements,
                    thumbnailEl,
                    size,
                    item;
                for(var i = 0; i < numNodes; i++) {
                    el = thumbElements[i];
                    // include only element nodes
                    if(el.nodeType !== 1) {
                      continue;
                    }
                    childElements = el.children;
                    size = el.getAttribute('data-size').split('x');
                    // create slide object
                    item = {
                        src: el.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10),
                        author: el.getAttribute('data-author')
                    };
                    item.el = el; // save link to element for getThumbBoundsFn
                    if(childElements.length > 0) {
                      item.msrc = childElements[0].getAttribute('src'); // thumbnail url
                      if(childElements.length > 1) {
                          item.title = childElements[1].innerHTML; // caption (contents of figure)
                      }
                    }
                    var mediumSrc = el.getAttribute('data-med');
                    if(mediumSrc) {
                        size = el.getAttribute('data-med-size').split('x');
                        // "medium-sized" image
                        item.m = {
                            src: mediumSrc,
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };
                    }
                    // original image
                    item.o = {
                        src: item.src,
                        w: item.w,
                        h: item.h
                    };
                    items.push(item);
                }
                return items;
            };
            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && ( fn(el) ? el : closest(el.parentNode, fn) );
            };
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                var eTarget = e.target || e.srcElement;
                var clickedListItem = closest(eTarget, function(el) {
                    return el.tagName === 'A';
                });
                if(!clickedListItem) {
                    return;
                }
                var clickedGallery = clickedListItem.parentNode;
                var childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
                for (var i = 0; i < numChildNodes; i++) {
                    if(childNodes[i].nodeType !== 1) {
                        continue;
                    }
                    if(childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
                if(index >= 0) {
                    openPhotoSwipe( index, clickedGallery );
                }
                return false;
            };
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                params = {};
                if(hash.length < 5) { // pid=1
                    return params;
                }
                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if(!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if(pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }
                if(params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }
                return params;
            };
            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;
                items = parseThumbnailElements(galleryElement);
                // define options (if needed)
                options = {
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    getThumbBoundsFn: function(index) {
                        // See Options->getThumbBoundsFn section of docs for more info
                        var thumbnail = items[index].el.children[0],
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();
                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    },
                    addCaptionHTMLFn: function(item, captionEl, isFake) {
                        if(!item.title) {
                            captionEl.children[0].innerText = '';
                            return false;
                        }
                        captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
                        return true;
                    },
                    shareEl: false

                };
                if(fromURL) {
                    if(options.galleryPIDs) {
                        // parse real index when custom PIDs are used
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for(var j = 0; j < items.length; j++) {
                            if(items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }
                // exit if index not found
                if( isNaN(options.index) ) {
                    return;
                }
                var radios = document.getElementsByName('gallery-style');
                for (var i = 0, length = radios.length; i < length; i++) {
                    if (radios[i].checked) {
                        if(radios[i].id == 'radio-all-controls') {
                        } else if(radios[i].id == 'radio-minimal-black') {
                            options.mainClass = 'pswp--minimal--dark';
                            options.barsSize = {top:0,bottom:0};
                            options.captionEl = false;
                            options.fullscreenEl = false;
                            options.shareEl = false;
                            options.bgOpacity = 0.85;
                            options.tapToClose = true;
                            options.tapToToggleControls = false;
                        }
                        break;
                    }
                }
                if(disableAnimation) {
                    options.showAnimationDuration = 0;
                }
                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                // see: http://photoswipe.com/documentation/responsive-images.html
                var realViewportWidth,
                    useLargeImages = false,
                    firstResize = true,
                    imageSrcWillChange;
                gallery.listen('beforeResize', function() {
                    var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
                    dpiRatio = Math.min(dpiRatio, 2.5);
                    realViewportWidth = gallery.viewportSize.x * dpiRatio;
                    if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
                        if(!useLargeImages) {
                            useLargeImages = true;
                            imageSrcWillChange = true;
                        }

                    } else {
                        if(useLargeImages) {
                            useLargeImages = false;
                            imageSrcWillChange = true;
                        }
                    }
                    if(imageSrcWillChange && !firstResize) {
                        gallery.invalidateCurrItems();
                    }
                    if(firstResize) {
                        firstResize = false;
                    }
                    imageSrcWillChange = false;
                });
                gallery.listen('gettingData', function(index, item) {
                    if( useLargeImages ) {
                        item.src = item.o.src;
                        item.w = item.o.w;
                        item.h = item.o.h;
                    } else {
                        item.src = item.m.src;
                        item.w = item.m.w;
                        item.h = item.m.h;
                    }
                });
                gallery.init();
            };
            // select all gallery elements
            var galleryElements = document.querySelectorAll( gallerySelector );
            for(var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i+1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if(hashData.pid && hashData.gid) {
                openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
            }
        };
        initPhotoSwipeFromDOM('.demo-gallery-urban');
      };
      img2.src = 'photos/urban/' + j + '.JPG';
    }
  }

  function loadNatureImage() {
    if (bFinishCheck3) {
      clearInterval(myInterval3);
      return;
    }
    if (bCheckEnabled3) {
      bCheckEnabled3 = false;
      img3 = new Image();
      img3.onload = function() {
        console.log("Hello");
        $(".demo-gallery-nature").append(
          portfolio_image_code_prefix+img3.src+portfolio_image_code_prefix2+img3.width+"x"+img3.height+portfolio_image_code_prefix3+
          img3.src+portfolio_image_code_prefix4+img3.height/4+portfolio_image_code_prefix5+img3.width/4+portfolio_image_code_prefix6
        );
        k++;
        bCheckEnabled3 = true;
      };
      img3.onerror = function() {
        bFinishCheck3 = true;
        var initPhotoSwipeFromDOM = function(gallerySelector) {
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    el,
                    childElements,
                    thumbnailEl,
                    size,
                    item;
                for(var i = 0; i < numNodes; i++) {
                    el = thumbElements[i];
                    // include only element nodes
                    if(el.nodeType !== 1) {
                      continue;
                    }
                    childElements = el.children;
                    size = el.getAttribute('data-size').split('x');
                    // create slide object
                    item = {
                        src: el.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10),
                        author: el.getAttribute('data-author')
                    };
                    item.el = el; // save link to element for getThumbBoundsFn
                    if(childElements.length > 0) {
                      item.msrc = childElements[0].getAttribute('src'); // thumbnail url
                      if(childElements.length > 1) {
                          item.title = childElements[1].innerHTML; // caption (contents of figure)
                      }
                    }
                    var mediumSrc = el.getAttribute('data-med');
                    if(mediumSrc) {
                        size = el.getAttribute('data-med-size').split('x');
                        // "medium-sized" image
                        item.m = {
                            src: mediumSrc,
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };
                    }
                    // original image
                    item.o = {
                        src: item.src,
                        w: item.w,
                        h: item.h
                    };
                    items.push(item);
                }
                return items;
            };
            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && ( fn(el) ? el : closest(el.parentNode, fn) );
            };
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                var eTarget = e.target || e.srcElement;
                var clickedListItem = closest(eTarget, function(el) {
                    return el.tagName === 'A';
                });
                if(!clickedListItem) {
                    return;
                }
                var clickedGallery = clickedListItem.parentNode;
                var childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
                for (var i = 0; i < numChildNodes; i++) {
                    if(childNodes[i].nodeType !== 1) {
                        continue;
                    }
                    if(childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
                if(index >= 0) {
                    openPhotoSwipe( index, clickedGallery );
                }
                return false;
            };
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                params = {};
                if(hash.length < 5) { // pid=1
                    return params;
                }
                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if(!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if(pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }
                if(params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }
                return params;
            };
            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;
                items = parseThumbnailElements(galleryElement);
                // define options (if needed)
                options = {
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    getThumbBoundsFn: function(index) {
                        // See Options->getThumbBoundsFn section of docs for more info
                        var thumbnail = items[index].el.children[0],
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();
                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    },
                    addCaptionHTMLFn: function(item, captionEl, isFake) {
                        if(!item.title) {
                            captionEl.children[0].innerText = '';
                            return false;
                        }
                        captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
                        return true;
                    },
                    shareEl: false

                };
                if(fromURL) {
                    if(options.galleryPIDs) {
                        // parse real index when custom PIDs are used
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for(var j = 0; j < items.length; j++) {
                            if(items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }
                // exit if index not found
                if( isNaN(options.index) ) {
                    return;
                }
                var radios = document.getElementsByName('gallery-style');
                for (var i = 0, length = radios.length; i < length; i++) {
                    if (radios[i].checked) {
                        if(radios[i].id == 'radio-all-controls') {
                        } else if(radios[i].id == 'radio-minimal-black') {
                            options.mainClass = 'pswp--minimal--dark';
                            options.barsSize = {top:0,bottom:0};
                            options.captionEl = false;
                            options.fullscreenEl = false;
                            options.shareEl = false;
                            options.bgOpacity = 0.85;
                            options.tapToClose = true;
                            options.tapToToggleControls = false;
                        }
                        break;
                    }
                }
                if(disableAnimation) {
                    options.showAnimationDuration = 0;
                }
                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                // see: http://photoswipe.com/documentation/responsive-images.html
                var realViewportWidth,
                    useLargeImages = false,
                    firstResize = true,
                    imageSrcWillChange;
                gallery.listen('beforeResize', function() {
                    var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
                    dpiRatio = Math.min(dpiRatio, 2.5);
                    realViewportWidth = gallery.viewportSize.x * dpiRatio;
                    if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
                        if(!useLargeImages) {
                            useLargeImages = true;
                            imageSrcWillChange = true;
                        }

                    } else {
                        if(useLargeImages) {
                            useLargeImages = false;
                            imageSrcWillChange = true;
                        }
                    }
                    if(imageSrcWillChange && !firstResize) {
                        gallery.invalidateCurrItems();
                    }
                    if(firstResize) {
                        firstResize = false;
                    }
                    imageSrcWillChange = false;
                });
                gallery.listen('gettingData', function(index, item) {
                    if( useLargeImages ) {
                        item.src = item.o.src;
                        item.w = item.o.w;
                        item.h = item.o.h;
                    } else {
                        item.src = item.m.src;
                        item.w = item.m.w;
                        item.h = item.m.h;
                    }
                });
                gallery.init();
            };
            // select all gallery elements
            var galleryElements = document.querySelectorAll( gallerySelector );
            for(var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i+1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if(hashData.pid && hashData.gid) {
                openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
            }
        };
        initPhotoSwipeFromDOM('.demo-gallery-nature');
      };
      img3.src = 'photos/nature/' + k + '.JPG';
    }
  }

  function loadEventsImage() {
    if (bFinishCheck4) {
      clearInterval(myInterval4);
      return;
    }
    if (bCheckEnabled4) {
      bCheckEnabled4 = false;
      img4 = new Image();
      img4.onload = function() {
        console.log("Hello");
        $(".demo-gallery-events").append(
          portfolio_image_code_prefix+img4.src+portfolio_image_code_prefix2+img4.width+"x"+img4.height+portfolio_image_code_prefix3+
          img4.src+portfolio_image_code_prefix4+img4.height/4+portfolio_image_code_prefix5+img4.width/4+portfolio_image_code_prefix6
        );
        l++;
        bCheckEnabled4 = true;
      };
      img4.onerror = function() {
        bFinishCheck4 = true;
        var initPhotoSwipeFromDOM = function(gallerySelector) {
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    el,
                    childElements,
                    thumbnailEl,
                    size,
                    item;
                for(var i = 0; i < numNodes; i++) {
                    el = thumbElements[i];
                    // include only element nodes
                    if(el.nodeType !== 1) {
                      continue;
                    }
                    childElements = el.children;
                    size = el.getAttribute('data-size').split('x');
                    // create slide object
                    item = {
                        src: el.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10),
                        author: el.getAttribute('data-author')
                    };
                    item.el = el; // save link to element for getThumbBoundsFn
                    if(childElements.length > 0) {
                      item.msrc = childElements[0].getAttribute('src'); // thumbnail url
                      if(childElements.length > 1) {
                          item.title = childElements[1].innerHTML; // caption (contents of figure)
                      }
                    }
                    var mediumSrc = el.getAttribute('data-med');
                    if(mediumSrc) {
                        size = el.getAttribute('data-med-size').split('x');
                        // "medium-sized" image
                        item.m = {
                            src: mediumSrc,
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };
                    }
                    // original image
                    item.o = {
                        src: item.src,
                        w: item.w,
                        h: item.h
                    };
                    items.push(item);
                }
                return items;
            };
            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && ( fn(el) ? el : closest(el.parentNode, fn) );
            };
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                var eTarget = e.target || e.srcElement;
                var clickedListItem = closest(eTarget, function(el) {
                    return el.tagName === 'A';
                });
                if(!clickedListItem) {
                    return;
                }
                var clickedGallery = clickedListItem.parentNode;
                var childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
                for (var i = 0; i < numChildNodes; i++) {
                    if(childNodes[i].nodeType !== 1) {
                        continue;
                    }
                    if(childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
                if(index >= 0) {
                    openPhotoSwipe( index, clickedGallery );
                }
                return false;
            };
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                params = {};
                if(hash.length < 5) { // pid=1
                    return params;
                }
                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if(!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if(pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }
                if(params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }
                return params;
            };
            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;
                items = parseThumbnailElements(galleryElement);
                // define options (if needed)
                options = {
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    getThumbBoundsFn: function(index) {
                        // See Options->getThumbBoundsFn section of docs for more info
                        var thumbnail = items[index].el.children[0],
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();
                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    },
                    addCaptionHTMLFn: function(item, captionEl, isFake) {
                        if(!item.title) {
                            captionEl.children[0].innerText = '';
                            return false;
                        }
                        captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
                        return true;
                    },
                    shareEl: false

                };
                if(fromURL) {
                    if(options.galleryPIDs) {
                        // parse real index when custom PIDs are used
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for(var j = 0; j < items.length; j++) {
                            if(items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }
                // exit if index not found
                if( isNaN(options.index) ) {
                    return;
                }
                var radios = document.getElementsByName('gallery-style');
                for (var i = 0, length = radios.length; i < length; i++) {
                    if (radios[i].checked) {
                        if(radios[i].id == 'radio-all-controls') {
                        } else if(radios[i].id == 'radio-minimal-black') {
                            options.mainClass = 'pswp--minimal--dark';
                            options.barsSize = {top:0,bottom:0};
                            options.captionEl = false;
                            options.fullscreenEl = false;
                            options.shareEl = false;
                            options.bgOpacity = 0.85;
                            options.tapToClose = true;
                            options.tapToToggleControls = false;
                        }
                        break;
                    }
                }
                if(disableAnimation) {
                    options.showAnimationDuration = 0;
                }
                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                // see: http://photoswipe.com/documentation/responsive-images.html
                var realViewportWidth,
                    useLargeImages = false,
                    firstResize = true,
                    imageSrcWillChange;
                gallery.listen('beforeResize', function() {
                    var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
                    dpiRatio = Math.min(dpiRatio, 2.5);
                    realViewportWidth = gallery.viewportSize.x * dpiRatio;
                    if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
                        if(!useLargeImages) {
                            useLargeImages = true;
                            imageSrcWillChange = true;
                        }

                    } else {
                        if(useLargeImages) {
                            useLargeImages = false;
                            imageSrcWillChange = true;
                        }
                    }
                    if(imageSrcWillChange && !firstResize) {
                        gallery.invalidateCurrItems();
                    }
                    if(firstResize) {
                        firstResize = false;
                    }
                    imageSrcWillChange = false;
                });
                gallery.listen('gettingData', function(index, item) {
                    if( useLargeImages ) {
                        item.src = item.o.src;
                        item.w = item.o.w;
                        item.h = item.o.h;
                    } else {
                        item.src = item.m.src;
                        item.w = item.m.w;
                        item.h = item.m.h;
                    }
                });
                gallery.init();
            };
            // select all gallery elements
            var galleryElements = document.querySelectorAll( gallerySelector );
            for(var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i+1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if(hashData.pid && hashData.gid) {
                openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
            }
        };
        initPhotoSwipeFromDOM('.demo-gallery-events');
      };
      img4.src = 'photos/events/' + l + '.JPG';
    }
  }

  function loadPeopleImage() {
    if (bFinishCheck5) {
      clearInterval(myInterval5);
      return;
    }
    if (bCheckEnabled5) {
      bCheckEnabled5 = false;
      img5 = new Image();
      img5.onload = function() {
        console.log("Hello");
        $(".demo-gallery-people").append(
          portfolio_image_code_prefix+img5.src+portfolio_image_code_prefix2+img5.width+"x"+img5.height+portfolio_image_code_prefix3+
          img5.src+portfolio_image_code_prefix4+img5.height/4+portfolio_image_code_prefix5+img5.width/4+portfolio_image_code_prefix6
        );
        m++;
        bCheckEnabled5 = true;
      };
      img5.onerror = function() {
        bFinishCheck5 = true;
        var initPhotoSwipeFromDOM = function(gallerySelector) {
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    el,
                    childElements,
                    thumbnailEl,
                    size,
                    item;
                for(var i = 0; i < numNodes; i++) {
                    el = thumbElements[i];
                    // include only element nodes
                    if(el.nodeType !== 1) {
                      continue;
                    }
                    childElements = el.children;
                    size = el.getAttribute('data-size').split('x');
                    // create slide object
                    item = {
                        src: el.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10),
                        author: el.getAttribute('data-author')
                    };
                    item.el = el; // save link to element for getThumbBoundsFn
                    if(childElements.length > 0) {
                      item.msrc = childElements[0].getAttribute('src'); // thumbnail url
                      if(childElements.length > 1) {
                          item.title = childElements[1].innerHTML; // caption (contents of figure)
                      }
                    }
                    var mediumSrc = el.getAttribute('data-med');
                    if(mediumSrc) {
                        size = el.getAttribute('data-med-size').split('x');
                        // "medium-sized" image
                        item.m = {
                            src: mediumSrc,
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };
                    }
                    // original image
                    item.o = {
                        src: item.src,
                        w: item.w,
                        h: item.h
                    };
                    items.push(item);
                }
                return items;
            };
            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && ( fn(el) ? el : closest(el.parentNode, fn) );
            };
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                var eTarget = e.target || e.srcElement;
                var clickedListItem = closest(eTarget, function(el) {
                    return el.tagName === 'A';
                });
                if(!clickedListItem) {
                    return;
                }
                var clickedGallery = clickedListItem.parentNode;
                var childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
                for (var i = 0; i < numChildNodes; i++) {
                    if(childNodes[i].nodeType !== 1) {
                        continue;
                    }
                    if(childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
                if(index >= 0) {
                    openPhotoSwipe( index, clickedGallery );
                }
                return false;
            };
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                params = {};
                if(hash.length < 5) { // pid=1
                    return params;
                }
                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if(!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if(pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }
                if(params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }
                return params;
            };
            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;
                items = parseThumbnailElements(galleryElement);
                // define options (if needed)
                options = {
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    getThumbBoundsFn: function(index) {
                        // See Options->getThumbBoundsFn section of docs for more info
                        var thumbnail = items[index].el.children[0],
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();
                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    },
                    addCaptionHTMLFn: function(item, captionEl, isFake) {
                        if(!item.title) {
                            captionEl.children[0].innerText = '';
                            return false;
                        }
                        captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
                        return true;
                    },
                    shareEl: false

                };
                if(fromURL) {
                    if(options.galleryPIDs) {
                        // parse real index when custom PIDs are used
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for(var j = 0; j < items.length; j++) {
                            if(items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }
                // exit if index not found
                if( isNaN(options.index) ) {
                    return;
                }
                var radios = document.getElementsByName('gallery-style');
                for (var i = 0, length = radios.length; i < length; i++) {
                    if (radios[i].checked) {
                        if(radios[i].id == 'radio-all-controls') {
                        } else if(radios[i].id == 'radio-minimal-black') {
                            options.mainClass = 'pswp--minimal--dark';
                            options.barsSize = {top:0,bottom:0};
                            options.captionEl = false;
                            options.fullscreenEl = false;
                            options.shareEl = false;
                            options.bgOpacity = 0.85;
                            options.tapToClose = true;
                            options.tapToToggleControls = false;
                        }
                        break;
                    }
                }
                if(disableAnimation) {
                    options.showAnimationDuration = 0;
                }
                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                // see: http://photoswipe.com/documentation/responsive-images.html
                var realViewportWidth,
                    useLargeImages = false,
                    firstResize = true,
                    imageSrcWillChange;
                gallery.listen('beforeResize', function() {
                    var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
                    dpiRatio = Math.min(dpiRatio, 2.5);
                    realViewportWidth = gallery.viewportSize.x * dpiRatio;
                    if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
                        if(!useLargeImages) {
                            useLargeImages = true;
                            imageSrcWillChange = true;
                        }

                    } else {
                        if(useLargeImages) {
                            useLargeImages = false;
                            imageSrcWillChange = true;
                        }
                    }
                    if(imageSrcWillChange && !firstResize) {
                        gallery.invalidateCurrItems();
                    }
                    if(firstResize) {
                        firstResize = false;
                    }
                    imageSrcWillChange = false;
                });
                gallery.listen('gettingData', function(index, item) {
                    if( useLargeImages ) {
                        item.src = item.o.src;
                        item.w = item.o.w;
                        item.h = item.o.h;
                    } else {
                        item.src = item.m.src;
                        item.w = item.m.w;
                        item.h = item.m.h;
                    }
                });
                gallery.init();
            };
            // select all gallery elements
            var galleryElements = document.querySelectorAll( gallerySelector );
            for(var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i+1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if(hashData.pid && hashData.gid) {
                openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
            }
        };
        initPhotoSwipeFromDOM('.demo-gallery-people');
      };
      img5.src = 'photos/people/' + m + '.JPG';
    }
  }

  function loadDarkroomImage() {
    if (bFinishCheck6) {
      clearInterval(myInterval6);
      return;
    }
    if (bCheckEnabled6) {
      bCheckEnabled6 = false;
      img6 = new Image();
      img6.onload = function() {
        console.log("Hello");
        $(".demo-gallery-darkroom").append(
          portfolio_image_code_prefix+img6.src+portfolio_image_code_prefix2+img6.width+"x"+img6.height+portfolio_image_code_prefix3+
          img6.src+portfolio_image_code_prefix4+img6.height/4+portfolio_image_code_prefix5+img6.width/4+portfolio_image_code_prefix6
        );
        n++;
        bCheckEnabled6 = true;
      };
      img6.onerror = function() {
        bFinishCheck6 = true;
        var initPhotoSwipeFromDOM = function(gallerySelector) {
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    el,
                    childElements,
                    thumbnailEl,
                    size,
                    item;
                for(var i = 0; i < numNodes; i++) {
                    el = thumbElements[i];
                    // include only element nodes
                    if(el.nodeType !== 1) {
                      continue;
                    }
                    childElements = el.children;
                    size = el.getAttribute('data-size').split('x');
                    // create slide object
                    item = {
                        src: el.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10),
                        author: el.getAttribute('data-author')
                    };
                    item.el = el; // save link to element for getThumbBoundsFn
                    if(childElements.length > 0) {
                      item.msrc = childElements[0].getAttribute('src'); // thumbnail url
                      if(childElements.length > 1) {
                          item.title = childElements[1].innerHTML; // caption (contents of figure)
                      }
                    }
                    var mediumSrc = el.getAttribute('data-med');
                    if(mediumSrc) {
                        size = el.getAttribute('data-med-size').split('x');
                        // "medium-sized" image
                        item.m = {
                            src: mediumSrc,
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };
                    }
                    // original image
                    item.o = {
                        src: item.src,
                        w: item.w,
                        h: item.h
                    };
                    items.push(item);
                }
                return items;
            };
            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && ( fn(el) ? el : closest(el.parentNode, fn) );
            };
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                var eTarget = e.target || e.srcElement;
                var clickedListItem = closest(eTarget, function(el) {
                    return el.tagName === 'A';
                });
                if(!clickedListItem) {
                    return;
                }
                var clickedGallery = clickedListItem.parentNode;
                var childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
                for (var i = 0; i < numChildNodes; i++) {
                    if(childNodes[i].nodeType !== 1) {
                        continue;
                    }
                    if(childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
                if(index >= 0) {
                    openPhotoSwipe( index, clickedGallery );
                }
                return false;
            };
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                params = {};
                if(hash.length < 5) { // pid=1
                    return params;
                }
                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if(!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if(pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }
                if(params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }
                return params;
            };
            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;
                items = parseThumbnailElements(galleryElement);
                // define options (if needed)
                options = {
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    getThumbBoundsFn: function(index) {
                        // See Options->getThumbBoundsFn section of docs for more info
                        var thumbnail = items[index].el.children[0],
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();
                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    },
                    addCaptionHTMLFn: function(item, captionEl, isFake) {
                        if(!item.title) {
                            captionEl.children[0].innerText = '';
                            return false;
                        }
                        captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
                        return true;
                    },
                    shareEl: false

                };
                if(fromURL) {
                    if(options.galleryPIDs) {
                        // parse real index when custom PIDs are used
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for(var j = 0; j < items.length; j++) {
                            if(items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }
                // exit if index not found
                if( isNaN(options.index) ) {
                    return;
                }
                var radios = document.getElementsByName('gallery-style');
                for (var i = 0, length = radios.length; i < length; i++) {
                    if (radios[i].checked) {
                        if(radios[i].id == 'radio-all-controls') {
                        } else if(radios[i].id == 'radio-minimal-black') {
                            options.mainClass = 'pswp--minimal--dark';
                            options.barsSize = {top:0,bottom:0};
                            options.captionEl = false;
                            options.fullscreenEl = false;
                            options.shareEl = false;
                            options.bgOpacity = 0.85;
                            options.tapToClose = true;
                            options.tapToToggleControls = false;
                        }
                        break;
                    }
                }
                if(disableAnimation) {
                    options.showAnimationDuration = 0;
                }
                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                // see: http://photoswipe.com/documentation/responsive-images.html
                var realViewportWidth,
                    useLargeImages = false,
                    firstResize = true,
                    imageSrcWillChange;
                gallery.listen('beforeResize', function() {
                    var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
                    dpiRatio = Math.min(dpiRatio, 2.5);
                    realViewportWidth = gallery.viewportSize.x * dpiRatio;
                    if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
                        if(!useLargeImages) {
                            useLargeImages = true;
                            imageSrcWillChange = true;
                        }

                    } else {
                        if(useLargeImages) {
                            useLargeImages = false;
                            imageSrcWillChange = true;
                        }
                    }
                    if(imageSrcWillChange && !firstResize) {
                        gallery.invalidateCurrItems();
                    }
                    if(firstResize) {
                        firstResize = false;
                    }
                    imageSrcWillChange = false;
                });
                gallery.listen('gettingData', function(index, item) {
                    if( useLargeImages ) {
                        item.src = item.o.src;
                        item.w = item.o.w;
                        item.h = item.o.h;
                    } else {
                        item.src = item.m.src;
                        item.w = item.m.w;
                        item.h = item.m.h;
                    }
                });
                gallery.init();
            };
            // select all gallery elements
            var galleryElements = document.querySelectorAll( gallerySelector );
            for(var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i+1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if(hashData.pid && hashData.gid) {
                openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
            }
        };
        initPhotoSwipeFromDOM('.demo-gallery-darkroom');
      };
      img6.src = 'photos/darkroom/' + n + '.JPG';
    }
  }

  $(".s9buttonNext").click(function() {
    nextImage();
    clearInterval(autoplay);
  });

  $(".s9buttonPrev").click(function() {
    prevImage();
    clearInterval(autoplay);
  });

  $(".s10mediaZoombuttonNext").click(function() {
    nextImage();
    clearInterval(autoplay);
  });

  $(".s10mediaZoombuttonPrev").click(function() {
    prevImage();
    clearInterval(autoplay);
  });

  $(".s10mediaZoomxButton").click(function() {
    $("#imageZoom").fadeOut();
  });

  $("#about_me_button").click(function() {
    $("#urban").hide();
    $("#people").hide();
    $("#events").hide();
    $("#darkroom").hide();
    $("#nature").hide();
    $("#mainPage").fadeIn();
    $("#mainpage").fadeOut();
    $("#contact").fadeOut();
    $("#about_me").fadeIn();
  });

  $("#mainpage_button").click(function() {
    $("#urban").hide();
    $("#people").hide();
    $("#events").hide();
    $("#darkroom").hide();
    $("#nature").hide();
    $("#mainPage").fadeIn();
    $("#about_me").fadeOut();
    $("#contact").fadeOut();
    $("#mainpage").fadeIn();
  });

  $("#contact_button").click(function() {
    $("#urban").hide();
    $("#people").hide();
    $("#events").hide();
    $("#darkroom").hide();
    $("#nature").hide();
    $("#mainPage").fadeIn();
    $("#about_me").fadeOut();
    $("#mainpage").fadeOut();
    $("#contact").fadeIn();
  });

  $('body').click(function(e) {
    if(e.target == $("a#imageItemAnchor").html()) {
      clearInterval(autoplay);
      $("#imageZoom").fadeIn();
    }
  });

  $("#portfolioLabel").hover(function() {
    $("#dropdown2").fadeIn();
  }, function() {
  });

  $("#dropdown2").hover(function() {
    $("#dropdown2").fadeIn();
  }, function() {
    $("#dropdown2").fadeOut();
  });

  $("#urban_button").click(function() {
    $("#people").hide();
    $("#events").hide();
    $("#darkroom").hide();
    $("#nature").hide();
    $("#mainPage").fadeOut();
    $("#about_me").fadeOut();
    $("#mainpage").fadeOut();
    $("#contact").fadeOut();
    $("#urban").fadeIn();
  });

  $("#nature_button").click(function() {
    $("#people").hide();
    $("#events").hide();
    $("#darkroom").hide();
    $("#urban").hide();
    $("#mainPage").fadeOut();
    $("#about_me").fadeOut();
    $("#mainpage").fadeOut();
    $("#contact").fadeOut();
    $("#nature").fadeIn();
  });

  $("#people_button").click(function() {
    $("#nature").hide();
    $("#events").hide();
    $("#darkroom").hide();
    $("#urban").hide();
    $("#mainPage").fadeOut();
    $("#about_me").fadeOut();
    $("#mainpage").fadeOut();
    $("#contact").fadeOut();
    $("#people").fadeIn();
  });

  $("#events_button").click(function() {
    $("#people").hide();
    $("#nature").hide();
    $("#darkroom").hide();
    $("#urban").hide();
    $("#mainPage").fadeOut();
    $("#about_me").fadeOut();
    $("#mainpage").fadeOut();
    $("#contact").fadeOut();
    $("#events").fadeIn();
  });

  $("#darkroom_button").click(function() {
    $("#people").hide();
    $("#events").hide();
    $("#nature").hide();
    $("#urban").hide();
    $("#mainPage").fadeOut();
    $("#about_me").fadeOut();
    $("#mainpage").fadeOut();
    $("#contact").fadeOut();
    $("#darkroom").fadeIn();
  });

  window.addEventListener("resize", function() {
    updateImageSize();
  }, false);

  updateImageSize();

  function updateImageSize() {
    var $div = $(".s10mediaZoomdialogBox");
    var $img = $div.find("img");
    var gap;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      gap = 200;
    } else {
      gap = 100;
    }
    if(jQuery(this).height() < jQuery(this).width()) {
      // landscape
      $div.css({"width": jQuery(this).width()-gap});
      $div.css({"height": jQuery(this).height()-gap});
      $img.css({"width": $div.width()});
      $img.css({"height": $div.height()});
      $img.parent().css({"width": "100%"});
    } else {
      // portrait
      $div.css({"width": jQuery(this).width()-gap});
      $div.css({"height": jQuery(this).height()-gap});
      $img.css({"width": $div.width()});
      $img.css({"height": $div.height()});
      $img.parent().css({"width": "100%"});
    }
    $div.css({"margin-top": Math.abs(jQuery(this).height()-$img.height())/2-40});
  }

  function nextImage() {
    var image_code = $(".s9imageItem:last-child")[0].outerHTML;
    $(".s9itemsContainer").prepend(image_code);
    $(".s9imageItem:last-child").remove();
    $(".s10imageItem").find("img").attr("src", $(".s9imageItem:last-child").find("img").attr("src"));
  }

  function prevImage() {
    var image_code = $(".s9imageItem:first-child")[0].outerHTML;
    $(".s9itemsContainer").append(image_code);
    $(".s9imageItem:first-child").remove();
    $(".s10imageItem").find("img").attr("src", $(".s9imageItem:last-child").find("img").attr("src"));
  }

  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          prevImage();
          break;

          case 38: // up
          break;

          case 39: // right
          nextImage();
          break;

          case 40: // down
          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  var autoplay = setInterval(nextImage, 3000);

});
