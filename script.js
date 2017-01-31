$(function() {

  var image_code_prefix = '<div data-image-index="1" data-displayer-width="1334" data-displayer-height="890" data-displayer-uri="f30f25_84c80b530a64490ebae85de6337862b9~mv2.jpg" data-height-diff="0" data-width-diff="0" data-bottom-gap="0" data-image-wrapper-right="0" data-image-wrapper-left="0" data-image-wrapper-top="0" data-image-wrapper-bottom="0" data-margin-to-container="0" style="position: absolute; left: 0px; top: 0px; height: 551px; width: 980px;" class="s9imageItem" data-state="notShowPanel desktopView alignLeft unselected clipImage noTransition normal noLink" id="comp-ixp2s56adataItem-ixp2tqal1" ><div style="height: 551px; width: 980px; margin: 0px;" id="comp-ixp2s56adataItem-ixp2tqal1imageWrapper" class="s9imageItemimageWrapper" ><div style="cursor:pointer;" id="comp-ixp2s56adataItem-ixp2tqal1zoom" class="s9imageItemzoom" ><div style="position: relative; overflow: hidden; width: 980px; height: 551px;" id="comp-ixp2s56adataItem-ixp2tqal1image" class="s9imageItemimage" ><div class="s9imageItemimagepreloader" id="comp-ixp2s56adataItem-ixp2tqal1imagepreloader" ></div><img id="comp-ixp2s56adataItem-ixp2tqal1imageimage" alt="" src="';
  var image_code_postfix = '" style="width: 980px; height: 551px; object-fit: cover;" ></div><a draggable="false" style="cursor:pointer;height:100%;display:block;width:100%;position:absolute;top:0px;left:0px;background-color:#ffffff;filter:alpha(opacity=0);opacity:0;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-modify:read-only;-webkit-user-modify:read-only;-moz-user-modify:read-only;-ms-user-modify:read-only;" data-page-item-context="galleryId:comp-ixp2s56a" data-gallery-id="comp-ixp2s56a" id="imageItemAnchor"></a></div></div><div id="comp-ixp2s56adataItem-ixp2tqal1panel" class="s9imageItem_pnl s9imageItempanel" ><h3 style="text-align:left;" id="comp-ixp2s56adataItem-ixp2tqal1title" class="s9imageItemtitle" ></h3><p style="text-align:left;" id="comp-ixp2s56adataItem-ixp2tqal1description" class="s9imageItemdescription" ></p><a style="display:none;" id="comp-ixp2s56adataItem-ixp2tqal1link" class="s9imageItemlink" ></a></div></div>';
  var image_url_prefix = 'photos/main/';

  $(".s9imageItem").remove();
  var bCheckEnabled = true;
  var bFinishCheck = false;

  var img;
  var imgArray = new Array();
  var i = 0;

  var myInterval = setInterval(loadImage, 1);
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
    $("#mainPage").fadeIn();
    $("#mainpage").fadeOut();
    $("#contact").fadeOut();
    $("#urban").fadeOut();
    $("#about_me").fadeIn();
  });

  $("#mainpage_button").click(function() {
    $("#mainPage").fadeIn();
    $("#about_me").fadeOut();
    $("#contact").fadeOut();
    $("#urban").fadeOut();
    $("#mainpage").fadeIn();
  });

  $("#contact_button").click(function() {
    $("#mainPage").fadeIn();
    $("#about_me").fadeOut();
    $("#mainpage").fadeOut();
    $("#urban").fadeOut();
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
    $("#mainPage").fadeOut();
    $("#about_me").fadeOut();
    $("#mainpage").fadeOut();
    $("#contact").fadeOut();
    $("#urban").fadeIn();
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

  var pswpElement = document.querySelectorAll('.demo-gallery')[0];
  // build items array
  var items = [
      {
          src: 'photos/main/0.JPG',
          w: 600,
          h: 400
      },
      {
          src: 'photos/main/1.JPG',
          w: 1200,
          h: 900
      }
  ];
  // define options (if needed)
  var options = {
      index: 0 // start at first slide
  };
  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();

});
