$(function() {

  var image_code_prefix = '<div data-image-index="1" data-displayer-width="1334" data-displayer-height="890" data-displayer-uri="f30f25_84c80b530a64490ebae85de6337862b9~mv2.jpg" data-height-diff="0" data-width-diff="0" data-bottom-gap="0" data-image-wrapper-right="0" data-image-wrapper-left="0" data-image-wrapper-top="0" data-image-wrapper-bottom="0" data-margin-to-container="0" style="position: absolute; left: 0px; top: 0px; height: 551px; width: 980px;" class="s9imageItem" data-state="notShowPanel desktopView alignLeft unselected clipImage noTransition normal noLink" id="comp-ixp2s56adataItem-ixp2tqal1" ><div style="height: 551px; width: 980px; margin: 0px;" id="comp-ixp2s56adataItem-ixp2tqal1imageWrapper" class="s9imageItemimageWrapper" ><div style="cursor:pointer;" id="comp-ixp2s56adataItem-ixp2tqal1zoom" class="s9imageItemzoom" ><div style="position: relative; overflow: hidden; width: 980px; height: 551px;" id="comp-ixp2s56adataItem-ixp2tqal1image" class="s9imageItemimage" ><div class="s9imageItemimagepreloader" id="comp-ixp2s56adataItem-ixp2tqal1imagepreloader" ></div><img id="comp-ixp2s56adataItem-ixp2tqal1imageimage" alt="" src="';
  var image_code_postfix = '" style="width: 980px; height: 551px; object-fit: cover;" ></div><a draggable="false" style="cursor:pointer;height:100%;display:block;width:100%;position:absolute;top:0px;left:0px;background-color:#ffffff;filter:alpha(opacity=0);opacity:0;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-modify:read-only;-webkit-user-modify:read-only;-moz-user-modify:read-only;-ms-user-modify:read-only;" data-page-item-context="galleryId:comp-ixp2s56a" data-gallery-id="comp-ixp2s56a"></a></div></div><div id="comp-ixp2s56adataItem-ixp2tqal1panel" class="s9imageItem_pnl s9imageItempanel" ><h3 style="text-align:left;" id="comp-ixp2s56adataItem-ixp2tqal1title" class="s9imageItemtitle" ></h3><p style="text-align:left;" id="comp-ixp2s56adataItem-ixp2tqal1description" class="s9imageItemdescription" ></p><a style="display:none;" id="comp-ixp2s56adataItem-ixp2tqal1link" class="s9imageItemlink" ></a></div></div>';
  var image_url_prefix = 'photos/main/';

  var bCheckEnabled = true;
  var bFinishCheck = false;

  var img;
  var imgArray = new Array();
  var i = 0;
  var index = 1;

  alert("HELLO");

  var myInterval = setInterval(loadImage, 1);

  function loadImage() {
    if (bFinishCheck) {
      clearInterval(myInterval);
      buildImages();
      return;
    }
    if (bCheckEnabled) {
      bCheckEnabled = false;
      img = new Image();
      img.onload = fExists;
      img.onerror = fDoesntExist;
      img.src = 'photos/main/' + i + '.jpg';
    }
  }
  function fExists() {
    imgArray.push(img);
    i++;
    bCheckEnabled = true;
  }
  function fDoesntExist() {
    bFinishCheck = true;
    console.log(imgArray);
  }

  function buildImages() {
    $(".s9imageItem").remove();
    $.each(imgArray, function(index, image) {
      $(".s9itemsContainer").prepend(
        image_code_prefix+image.src+image_code_postfix
      );
    });
    updateCounter();
  }

  function updateCounter() {
    $('.s9counter').html(index+"/"+i);
  }

  $(".s9buttonNext").click(function() {
    nextImage();
    clearInterval(autoplay);
  });

  $(".s9buttonPrev").click(function() {
    prevImage();
    clearInterval(autoplay);
  });

  function nextImage() {
    var image_code = $(".s9imageItem:last-child")[0].outerHTML;
    $(".s9itemsContainer").prepend(image_code);
    index = (index+1)%(i+1) == 0 ? 1 : (index+1)%(i+1);
    updateCounter();
    $(".s9imageItem:last-child").remove();
  }

  function prevImage() {
    var image_code = $(".s9imageItem:first-child")[0].outerHTML;
    $(".s9itemsContainer").append(image_code);
    index = (index-1)%(i+1) == 0 ? i : (index-1)%(i+1);
    updateCounter();
    $(".s9imageItem:first-child").remove();
  }

  var autoplay = setInterval(nextImage, 3000);

});
