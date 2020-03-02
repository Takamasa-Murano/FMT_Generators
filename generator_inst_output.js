      function getCords(){
          //出力リセット
          //Prepend
          document.getElementById("prepend_output").value = "";
          //Append
          document.getElementById("append_output").value = "";
          //アドソース　タグ欄
          document.getElementById("ad_source_output").value = "";
          
          let isZone = document.getElementsByName("zone_type")[0],
              isZoom = document.getElementsByName("zoom_type")[0],
              isCloseBtnSizeKeepInZoom = document.getElementsByName("close_btn_size_keep_in_zoom")[0],
              isZoomOnlySP = document.getElementsByName("zoom_only_sp")[0],
              isBakcGroundColor = document.getElementsByName("background_color")[0],
              isBakcGroundSize = document.getElementsByName("background_size")[0],
              isAfst = document.getElementsByName("afst_exist")[0],
              isBackInst = document.getElementsByName("back_inst_translate")[0],
              isBtnSize = document.getElementsByName("close_size")[0],
              isBtnPic = document.getElementsByName("close_pic")[0],
              isBtnLit = document.getElementsByName("close_lit")[0],
              isScrollStop = document.getElementsByName("scroll_stop")[0],
              isRotate = document.getElementsByName("rotate_reaction_use")[0],
              isRotateSingle = document.getElementsByName("rotate_single_type")[0],
              isRotateDouble = document.getElementsByName("rotate_double_type")[0],
              isDouble = document.getElementsByName("double_inst_use")[0],
              isDoubleButton = document.getElementsByName("double_inst_close_btn")[0],
              isDoubleBtnXPosRandom = document.getElementsByName("double_inst_close_btn_Xrandom")[0],
              isArrangeVertical = document.getElementsByName("vertical_arrange_type")[0],
              isArrangeHorizontal = document.getElementsByName("horizontal_arrange_type")[0],
              isDoubleWidthFree = document.getElementsByName("double_inst_width_free")[0],
              isRotateArrangeVertical = document.getElementsByName("rotate_single_vertical_arrange_type")[0],
              isRotateArrangeHorizontal = document.getElementsByName("rotate_single_horizontal_arrange_type")[0],
              isTimingAdjust = document.getElementsByName("timing_exist")[0],
              isHeaderSpace = document.getElementsByName("header_space_use")[0],
              isAvoidGoogleAdBlock = document.getElementsByName("avoid_google_ad_block")[0];
          
          let zt = "";
          switch(isZone.selectedIndex){
              case 0:
                  zt = "インタースティシャル";
                  break;
              case 1:
                  zt = "スタンダードバナー";
                  break;
              default:
                  break;
          }
          document.getElementById("zone_output").value = zt;
          
////////////Prependの設定　デフォルトから条件に応じて置換・追加////////////////////////////////////////////////////
          let pre_text = "";
          let pre_default = (function(){/*<div id="gn_interstitial_area" style="width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.5);z-index:1000000000000; display:block;">
<div style="top:0;bottom:0;left:0;right:0;margin:auto;width:300px;height:250px;position:absolute;">
<img src="http://media.gssp.asia/img/icon_close_WhiteBg.png" width="29" height="29" id="gn_interstitial_close_icon" style="height:29px;width:29px;">*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let pre_zoom_nomoveA = (function(){/*
<script>
(function(window,document){
        var a = document.getElementById("gn_interstitial_area").getElementsByTagName('div')[0];
a.style.display = "none";
        setTimeout(function(){
            a.style.display = "block";
        },1000);  //このコードを追記しても表示タイミングがずれる場合は、ここの数値を増やす（1500, 2000など）
})(window, document); 
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          if(isZone.selectedIndex == 1) pre_text += pre_default;
          if((isZone.selectedIndex == 0 && isZoom.selectedIndex == 2) || isTimingAdjust.checked == true) pre_text += pre_zoom_nomoveA;
          
          //ゾーンタイプ確認・出力
          //if(isZone.selectedIndex == 1 && isZoom.selectedIndex == 2){
            //let zoom_target = 'display:block'
            //let zoom_rep = new RegExp( zoom_target, "g" );
          //  pre_text = pre_text.replace('display:block', 'display:none');
          //}
          
          //Xボタンデザイン変更（ゾーンタイプ：インタースティシャルの時のみ）
          let clSize = document.getElementsByName("close_btn_size")[0].value;
          let pre_close_size = (function(){/*<script>
  (function(window,document) {
      var target = document.getElementById('gn_interstitial_close_icon');
      target.style.height =  */}).toString().match(/\/\*([^]*)\*\//)[1] + clSize + (function(){/* + "px";
      target.style.width =  */}).toString().match(/\/\*([^]*)\*\//)[1] + clSize + (function(){/* + "px";
  }) (window, document); 
  </script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let clPic = document.getElementsByName("close_btn_picture")[0].value;
          let pre_close_pic = (function(){/*<script>
(function(window, document) {
    var img_src = '*/}).toString().match(/\/\*([^]*)\*\//)[1] + clPic + (function(){/*';

    var target = document.getElementById('gn_interstitial_close_icon');
    target.src = img_src;
})(window, document);
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let clLit = document.getElementsByName("close_btn_lit")[0].value;
          let pre_close_lit = (function(){/*
<script>
  (function(window,document) {
      document.getElementById("gn_interstitial_close_icon").remove();
      var a = document.getElementById("gn_interstitial_area").getElementsByTagName("div")[0];
      var b = document.createElement("span");
      b.setAttribute("id", "gn_interstitial_close_icon");
      b.setAttribute("style", "height:*/}).toString().match(/\/\*([^]*)\*\//)[1] + clSize + (function(){/*px;width:*/}).toString().match(/\/\*([^]*)\*\//)[1] + clSize + (function(){/*px;");
      b.innerHTML = "*/}).toString().match(/\/\*([^]*)\*\//)[1] + clLit + (function(){/*";
      a.insertBefore(b, a.firstChild);
  }) (window, document);
  </script>*/}).toString().match(/\/\*([^]*)\*\//)[1] + (function(){/*
<script>
  (function(window,document) {
      var a = document.getElementById("gn_interstitial_close_icon");
      var b = document.getElementById("gn_interstitial_area");
      a.onclick = function(){
b.style.display = "none";
}
  }) (window, document); 
  </script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          //Xボタンのサイズ・デザイン変更（ゾーンタイプ：スタンダードバナー時）
          if(isZone.selectedIndex == 1 && isBtnLit.checked == true){
              let cLit = document.getElementsByName("close_btn_lit")[0].value;
              let forLit = '';
              forLit = replaceSearch(pre_text, '<img', 'px;">');
              if(forLit == '') forLit = replaceSearch(pre_text, '<span', '</span>');
              if(!cLitPre) pre_text = pre_text.replace(forLit, '<span width="29" height="29" id="gn_interstitial_close_icon" style="height:29px;width:29px;">' + cLit + '</span>');
              let cLitPre = cLit;
          }
          if(isZone.selectedIndex == 1 && isBtnSize.checked == true){
              let cSize = document.getElementsByName("close_btn_size")[0].value;
              let forSize = replaceSearch(pre_text, 'style="height', 'px;"');
              pre_text = pre_text.replace(forSize, 'style="height:' + cSize + 'px;width:' + cSize + 'px;"');
              let cSizePre = cSize;
          }
          if(isZone.selectedIndex == 1 && isBtnPic.checked == true){
              let cPic = document.getElementsByName("close_btn_picture")[0].value;
              let forPic = replaceSearch(pre_text, 'src=', '" width');
              pre_text = pre_text.replace(forPic, 'src="' + cPic + '" width');
              let cPicPre = cPic;
          }
          //Xボタンのサイズ・デザイン変更（ゾーンタイプ：インタースティシャル時）
          if(isZone.selectedIndex == 0){
              if(isBtnSize.checked == true) pre_text += pre_close_size;
              if(isBtnPic.checked == true) pre_text += pre_close_pic;
              if(isBtnLit.checked == true) pre_text += pre_close_lit;
          }
          
////////////Appendの設定　デフォルトから条件に応じて追加　オプション並べて条件ごとに使用判断////////////////////////////
          //デフォルト
          let app_default = (function(){/*</div>
</div>
<script>
  (function(window, document) {
      var a = document.getElementById("gn_interstitial_close_icon");
      var b = document.getElementById("gn_interstitial_area");
      a.onclick = function() {
        b.style.display = "none";
      };
})(window, document); 
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          //ズームと拡大
          let app_zoom_move = (function(){/*
<script>
(function(window, document) {
if(typeof window.__gn_yads_params != "undefined") return;
if(typeof window.__gn_double_params != "undefined") return;
var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;
var a = document.getElementById('gn_interstitial_area');
var b = a.getElementsByTagName('div')[0];
var c = screen.width < screen.height ? screen.width : screen.height;
var s = c / BANNER_WIDTH;
*/}).toString().match(/\/\*([^]*)\*\//)[1];
if(isZoomOnlySP.checked == true) app_zoom_move += (function(){/*
if(!isMobile()) s = 1;
*/}).toString().match(/\/\*([^]*)\*\//)[1];
app_zoom_move += (function(){/*
b.style.transform = 'scale(' + s + ')';
b.style.webkitTransform = 'scale(' + s + ')';
a.style.top = '0px'
*/}).toString().match(/\/\*([^]*)\*\//)[1];
if(isZoomOnlySP.checked == true) app_zoom_move += (function(){/*
function isMobile(){
var ua = navigator.userAgent;
if(ua.indexOf('iPhone') >= 0
|| (ua.indexOf('Android') >= 0 && ua.indexOf('Mobile') >= 0)
|| (ua.indexOf('Windows') >= 0 && ua.indexOf('Phone') >= 0)
|| (ua.indexOf('Firefox') >= 0 && ua.indexOf('Mobile') >= 0)
|| ua.indexOf('Blackberry') >= 0
) return true;
else return false;
}
*/}).toString().match(/\/\*([^]*)\*\//)[1];
app_zoom_move += (function(){/*
})(window, document); 
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          //let app_zoom_nomoveA = (function(){/*
//<script>
//(function(window,document){
//document.getElementById("gn_interstitial_area").style.display = "none";
//})(window, document); 
//          </script> */}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_zoom_nomoveB = (function(){/*
<script>
(function(window, document) {
if(typeof window.__gn_double_params != "undefined"){
document.getElementById('gn_interstitial_area').getElementsByTagName('div')[0].style.display = 'block';
return;
}
var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;
var a = document.getElementById('gn_interstitial_area');
var b = a.getElementsByTagName('div')[0];
var c = screen.width < screen.height ? screen.width : screen.height;
var s = c / BANNER_WIDTH;
*/}).toString().match(/\/\*([^]*)\*\//)[1];
if(isZoomOnlySP.checked == true) app_zoom_nomoveB += (function(){/*
if(!isMobile()) s = 1;
*/}).toString().match(/\/\*([^]*)\*\//)[1];
app_zoom_nomoveB += (function(){/*
b.style.transform = 'scale(' + s + ')';
b.style.webkitTransform = 'scale(' + s + ')';
a.style.top = '0px';
b.style.display = 'block';
*/}).toString().match(/\/\*([^]*)\*\//)[1];
if(isZoomOnlySP.checked == true) app_zoom_nomoveB += (function(){/*
function isMobile(){
var ua = navigator.userAgent;
if(ua.indexOf('iPhone') >= 0
|| (ua.indexOf('Android') >= 0 && ua.indexOf('Mobile') >= 0)
|| (ua.indexOf('Windows') >= 0 && ua.indexOf('Phone') >= 0)
|| (ua.indexOf('Firefox') >= 0 && ua.indexOf('Mobile') >= 0)
|| ua.indexOf('Blackberry') >= 0
) return true;
else return false;
}
*/}).toString().match(/\/\*([^]*)\*\//)[1];
app_zoom_nomoveB += (function(){/*
})(window, document); 
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];

          let default_btn_size = document.getElementsByName("close_btn_size")[0].value;
          let app_close_btn_size_keep_in_zoom = (function(){/*
<script>
(function(window, document) {
    var a = document.getElementById("gn_interstitial_close_icon");
    var BANNER_WIDTH = 300;
    var BUTTON_SIZE = */}).toString().match(/\/\*([^]*)\*\//)[1] + default_btn_size + (function(){/*;
    var rs = BANNER_WIDTH / window.innerWidth;
    if(screen.width < 329) rs = 1;
    a.style.width = BUTTON_SIZE * rs + "px";
    a.style.height = BUTTON_SIZE * rs + "px";
})(window, document);
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          //背景設定
          let bg_color = document.getElementsByName("background_color_style")[0].value;
          let bg_width = document.getElementsByName("background_width_style")[0].value;
          let bg_height = document.getElementsByName("background_height_style")[0].value;
          let app_bg_change_pre = (function(){/*<script> 
(function(window, document) { 
var a = document.getElementById("gn_interstitial_area");
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_bg_change_post = (function(){/*})(window, document);
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_bg_change_color = (function(){/*var COLOR = "*/}).toString().match(/\/\*([^]*)\*\//)[1] + bg_color + (function(){/*";
a.style.backgroundColor = COLOR;
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_bg_change_size = (function(){/*var AREA_WIDTH = "*/}).toString().match(/\/\*([^]*)\*\//)[1] + bg_width + (function(){/*";
var AREA_HEIGHT = "*/}).toString().match(/\/\*([^]*)\*\//)[1] + bg_height + (function(){/*";
a.style.width = AREA_WIDTH + "px";
a.style.height = AREA_HEIGHT + "px";
a.style.right = "0px";
a.style.bottom = "0px";
a.style.margin = "auto";
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let app_bg_change = app_bg_change_pre;
          if(isBakcGroundColor.checked == true) app_bg_change += app_bg_change_color;
          if(isBakcGroundSize.checked == true) app_bg_change += app_bg_change_size;
          app_bg_change += app_bg_change_post;
          
          
          //スクロール停止対応
          let app_scroll_stop_sc = (function(){/*<script>
(function(window, document) {
var a = document.getElementById('gn_interstitial_close_icon');
document.getElementsByTagName("html")[0].classList.add('gn_inst_scroll_cancel');
a.addEventListener('click', function() {
document.getElementsByTagName("html")[0].classList.remove('gn_inst_scroll_cancel');
});
})(window, document);
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];

let app_scroll_stop_st = (function(){/*<style>
.gn_inst_scroll_cancel {
position:fixed;
width:100%;
}
</style>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_scroll_stop = "";
          if(isBackInst.checked == false) app_scroll_stop += app_scroll_stop_sc;
          //if(isZone.selectedIndex == 1 && isBackInst.checked == false) app_scroll_stop += app_scroll_stop_sc;
          app_scroll_stop += app_scroll_stop_st;
          
          
          let app_arrange_vertical_common_early = (function(){/*
          <script>
(function(window, document){ */}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_arrange_vertical_common_late = (function(){/*
          })(window, document); 
          </script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let app_arrange_horizontal_common_early = (function(){/*
          <script>
(function(window, document){ */}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_arrange_horizontal_common_late = (function(){/*
          })(window, document); 
          </script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          //バックインステ（ブラウザバック押された時に表示するインステ）にする
          let app_back_inst1 = (function(){/*<script type="text/javascript">
  (function (window,  document) {
    // History API が使えるブラウザかどうかをチェック
   if ( window.history && window.history.pushState ) {
      history.pushState(null, null);
      var strage = sessionStorage;
      if(strage.backCheck){
        strage.removeItem('backCheck');
        return;
      }else{
      console.log("setshow");
      window.addEventListener('popstate', function(e) {
        console.log("adshow");
        //広告#gn_back-interstitial_areaを非表示な状態でHTMLに差し込んでくれれば行けそう。
        var a = document.getElementById("gn_back-interstitial_close_icon");
        var b = document.getElementById("gn_back-interstitial_area");
        b.style.display = 'block';
        strage.backCheck = true;
*/}).toString().match(/\/\*([^]*)\*\//)[1];
        let app_back_inst_zoom1 = (function(){/*document.getElementsByTagName('html')[0].classList.add('gn_inst_scroll_cancel');
*/}).toString().match(/\/\*([^]*)\*\//)[1];
        let app_back_inst2 = (function(){/*a.addEventListener('click', function() {
*/}).toString().match(/\/\*([^]*)\*\//)[1];
        let app_back_inst_zoom2 = (function(){/*document.getElementsByTagName('html')[0].classList.remove('gn_inst_scroll_cancel');
*/}).toString().match(/\/\*([^]*)\*\//)[1];
        let app_back_inst3 = (function(){/*b.style.display = "none";
          history.back();
        });
        window.addEventListener('popstate', function(e) {
*/}).toString().match(/\/\*([^]*)\*\//)[1];
        let app_back_inst_zoom3 = (function(){/*document.getElementsByTagName('html')[0].classList.remove('gn_inst_scroll_cancel');
*/}).toString().match(/\/\*([^]*)\*\//)[1];
        let app_back_inst4 = (function(){/*b.style.display = "none";
          history.back();
        });
      }, false);
      }
   }
  })(window, document);
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_back_inst = app_back_inst1;
          if(isScrollStop.checked == true) app_back_inst += app_back_inst_zoom1;
          app_back_inst += app_back_inst2;
          if(isScrollStop.checked == true) app_back_inst += app_back_inst_zoom2;
          app_back_inst += app_back_inst3;
          if(isScrollStop.checked == true) app_back_inst += app_back_inst_zoom3;
          app_back_inst += app_back_inst4;
          //画面サイズ小さい場合（縦650px未満）にシングルっぽい表示にする
          let app_double_in_small_window = (function(){/*
<script>
(function(window, document) {
   if(typeof window.__gn_double_params != "undefined") { 
     var a = document.getElementById("gn_interstitial_close_icon");
     var b = document.getElementById("gn_interstitial_area").getElementsByTagName("div")[0];
     if(screen.height < 650){
       if(document.getElementById("gn_bottom_banner")) document.getElementById("gn_bottom_banner").style.display = "none";
       b.style.top = "100px";
       b.style.bottom = "";
     }
   }
})(window, document);
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          //表示位置の変更（回転対応無し）
          let app_arrange_vertical_up = (function(){/*
if(typeof window.__gn_double_params != "undefined"){
document.getElementById('gn_interstitial_area').getElementsByTagName('div')[0].style.display = 'block';
return;
}
var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;
var a = document.getElementById('gn_interstitial_area');
var b = a.getElementsByTagName('div')[0];*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_arrange_vertical_up_zoomOP = (function(){/*
var c = screen.width < screen.height ? screen.width : screen.height;
var s = c / BANNER_WIDTH;
var t = BANNER_HEIGHT * (s - 1) * 0.5;
b.style.top = t + 'px';*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_arrange_vertical_up_end = (function(){/*
b.style.display = 'block';
b.style.bottom = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
          if(isZoom.selectedIndex != 0) app_arrange_vertical_up += app_arrange_vertical_up_zoomOP;
          app_arrange_vertical_up += app_arrange_vertical_up_end;
          
          let app_arrange_vertical_bottom = (function(){/*
if(typeof window.__gn_double_params != "undefined"){
document.getElementById('gn_interstitial_area').getElementsByTagName('div')[0].style.display = 'block';
return;
}
var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;
var a = document.getElementById('gn_interstitial_area');
var b = a.getElementsByTagName('div')[0];*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_arrange_vertical_bottom_zoomOP = (function(){/*
var c = screen.width < screen.height ? screen.width : screen.height;
var s = c / BANNER_WIDTH;
var t = BANNER_HEIGHT * (s - 1) * 0.5;
b.style.bottom = t + 'px';*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_arrange_vertical_bottom_end = (function(){/*
b.style.display = 'block';
b.style.top = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
          if(isZoom.selectedIndex != 0) app_arrange_vertical_bottom += app_arrange_vertical_bottom_zoomOP;
          app_arrange_vertical_bottom += app_arrange_vertical_bottom_end;
          
          let app_arrange_horizontal_left = (function(){/*
if(typeof window.__gn_double_params != "undefined"){
document.getElementById('gn_interstitial_area').getElementsByTagName('div')[0].style.display = 'block';
return;
}
var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;
var a = document.getElementById('gn_interstitial_area');
var b = a.getElementsByTagName('div')[0];*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_arrange_horizontal_left_zoomOP = (function(){/*
var c = screen.width < screen.height ? screen.width : screen.height;
var s = c / BANNER_WIDTH;
var t = BANNER_WIDTH * (s - 1) * 0.5;
b.style.left = t + 'px';*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_arrange_horizontal_left_end = (function(){/*
b.style.display = 'block';
b.style.right = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
          if(isZoom.selectedIndex != 0) app_arrange_horizontal_left += app_arrange_horizontal_left_zoomOP;
          app_arrange_horizontal_left += app_arrange_horizontal_left_end;
          
          let app_arrange_horizontal_right = (function(){/*
if(typeof window.__gn_double_params != "undefined"){
document.getElementById('gn_interstitial_area').getElementsByTagName('div')[0].style.display = 'block';
return;
}
var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;
var a = document.getElementById('gn_interstitial_area');
var b = a.getElementsByTagName('div')[0];*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_arrange_horizontal_right_zoomOP = (function(){/*
var c = screen.width < screen.height ? screen.width : screen.height;
var s = c / BANNER_WIDTH;
var t = BANNER_WIDTH * (s - 1) * 0.5;
b.style.right = t + 'px';*/}).toString().match(/\/\*([^]*)\*\//)[1];
          let app_arrange_horizontal_right_end = (function(){/*
b.style.display = 'block';
b.style.left = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
          if(isZoom.selectedIndex != 0) app_arrange_horizontal_right += app_arrange_horizontal_right_zoomOP;
          app_arrange_horizontal_right += app_arrange_horizontal_right_end;
          
          //SP画面回転対応
          let app_rotate_common_early = (function(){/*<script>
(function(window, document){
setAdsArrangement();  //ロード時に画面向き判別→向きに応じた対応を実行
window.addEventListener('orientationchange', setAdsArrangement, false);
window.addEventListener('resize', setAdsArrangement, false);
})(window, document);

function setAdsArrangement(){
if(isHorizontal()) adToHorizontal();
else adToVertical();
}
function isHorizontal(){
if(typeof screen.orientation === "undefined"){
if(window.orientation != 0) return true;
}else{
if(screen.orientation.angle != 0) return true;
}
} */}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let app_rotate_common_late1 = (function(){/*
function adToVertical(){  //縦向き時
var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;
var a = document.getElementById('gn_interstitial_area');
var b = a.getElementsByTagName('div')[0]; 
*/}).toString().match(/\/\*([^]*)\*\//)[1];

          let app_rotate_common_late2 = (function(){/*
b.style.display = 'block';
} 
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let app_rotate_common_late_zoomOP = (function(){/*
var c = screen.width < screen.height ? screen.width : screen.height;
var s = c / BANNER_WIDTH;
var t = BANNER_HEIGHT * (s - 1) * 0.5;
b.style.transform = 'scale(' + s + ')';
b.style.webkitTransform = 'scale(' + s + ')';*/}).toString().match(/\/\*([^]*)\*\//)[1];

          let single_rotate_vertical_y_arrange = "";
          switch(isArrangeVertical.selectedIndex){
              case 0:  //まんなか
                  single_rotate_vertical_y_arrange = (function(){/*
          b.style.top = "0px";
          b.style.bottom = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
                  
              case 1:  //うえより
                  single_rotate_vertical_y_arrange = (function(){/*
          b.style.top = "0px";
          b.style.bottom = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              
              case 2: //したより
                  single_rotate_vertical_y_arrange = (function(){/*
          b.style.top = "";
          b.style.bottom = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              default:
                  break;
          }
          let single_rotate_vertical_x_arrange = "";
          switch(isArrangeHorizontal.selectedIndex){
              case 0:  //まんなか
                  single_rotate_vertical_x_arrange = (function(){/*
          b.style.left = "0px";
          b.style.right = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
                  
              case 1:  //ひだりより
                  single_rotate_vertical_x_arrange = (function(){/*
          b.style.left = "0px";
          b.style.right = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              
              case 2: //みぎより
                  single_rotate_vertical_x_arrange = (function(){/*
          b.style.left = "";
          b.style.right = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              default:
                  break;
          }
          
          let app_rotate_common_late = app_rotate_common_late1;
          if(isZoom.selectedIndex != 0) app_rotate_common_late += app_rotate_common_late_zoomOP;
          app_rotate_common_late += single_rotate_vertical_y_arrange;
          app_rotate_common_late += single_rotate_vertical_x_arrange;
          app_rotate_common_late += app_rotate_common_late2;
          if(isZoom.selectedIndex != 0){
              let deal_target = '"0px"';
              let deal_rep = new RegExp(deal_target, "g" );
              app_rotate_common_late = app_rotate_common_late.replace(deal_rep, 't + "px"');
          }
          
          let app_rotate_same1 = (function(){/*
function adToHorizontal(){  //横向き時
var a = document.getElementById('gn_interstitial_area');
var b = a.getElementsByTagName('div')[0];
b.style.transform = 'scale(1)';
b.style.webkitTransform = 'scale(1)'; */}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let app_rotate_same2 = (function(){/*
b.style.display = 'block';
} */}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let app_rotate_zoom1 = (function(){/*
function adToHorizontal(){  //横向き時
var BANNER_WIDTH = 300;
var BANNER_HEIGHT = 250;
var a = document.getElementById('gn_interstitial_area');
var b = a.getElementsByTagName('div')[0]; */}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let app_rotate_zoom2 = (function(){/*
b.style.display = 'block';
} */}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let app_rotate_zoompart_zoomOP = (function(){/*
var c = screen.width < screen.height ? screen.width : screen.height;
var s = (c - 120) / BANNER_WIDTH;
if(s < 1) s = 1;
var t = BANNER_HEIGHT * (s - 1) * 0.5;
b.style.transform = 'scale(' + s + ')';
b.style.webkitTransform = 'scale(' + s + ')';*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let single_rotate_horizontal_y_arrange = "";
          switch(isRotateArrangeVertical.selectedIndex){
              case 0:  //まんなか
                  single_rotate_horizontal_y_arrange = (function(){/*
          b.style.top = "0px";
          b.style.bottom = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
                  
              case 1:  //うえより
                  single_rotate_horizontal_y_arrange = (function(){/*
          b.style.top = "0px";
          b.style.bottom = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              
              case 2: //したより
                  single_rotate_horizontal_y_arrange = (function(){/*
          b.style.top = "";
          b.style.bottom = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              default:
                  break;
          }
          let single_rotate_horizontal_x_arrange = "";
          switch(isRotateArrangeHorizontal.selectedIndex){
              case 0:  //まんなか
                  single_rotate_horizontal_x_arrange = (function(){/*
          b.style.left = "0px";
          b.style.right = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
                  
              case 1:  //ひだりより
                  single_rotate_horizontal_x_arrange = (function(){/*
          b.style.left = "0px";
          b.style.right = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              
              case 2: //みぎより
                  single_rotate_horizontal_x_arrange = (function(){/*
          b.style.left = "";
          b.style.right = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              default:
                  break;
          }
          if(isZoom.selectedIndex != 0) single_rotate_horizontal_x_arrange = (function(){/*
          b.style.left = "0px";
          b.style.right = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let app_rotate_same = app_rotate_same1;
          app_rotate_same += single_rotate_horizontal_y_arrange;
          app_rotate_same += single_rotate_horizontal_x_arrange;
          app_rotate_same += app_rotate_same2;
          
          let app_rotate_zoom = app_rotate_zoom1;
          if(isZoom.selectedIndex != 0  || isRotateSingle.selectedIndex == 1) app_rotate_zoom += app_rotate_zoompart_zoomOP;
          app_rotate_zoom += single_rotate_horizontal_y_arrange;
          app_rotate_zoom += single_rotate_horizontal_x_arrange;
          app_rotate_zoom += app_rotate_zoom2;
              let rotate_deal_target = '"0px"';
              let rotate_deal_rep = new RegExp(rotate_deal_target, "g" );
              app_rotate_zoom = app_rotate_zoom.replace(rotate_deal_rep, 't + "px"');
          
          //インステ表示時のみ、ページ上部に一画面分の空白追加
          let app_header_space = (function(){/*
<script> 
  (function(window, document) { 
    var a = document.getElementById("gn_interstitial_area");
    var c = document.getElementById("gn_interstitial_close_icon");
    var di = document.createElement('div');
    var t = screen.height;
    var BANNER_HEIGHT = t;
    di.setAttribute("id", "vInst_top_space");
    di.style.width = '100%';
    di.style.height = t + 'px';
    document.body.insertBefore(di, document.body.children[0]);
    var d = document.getElementById("vInst_top_space");
    c.addEventListener("click", function(){
      d.style.display = "none";
      a.style.display = "none";
    },false);
  })(window, document);
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          //GoogleAdBlock回避フォーマット（ヘッダインライン）への変換（後でid名変換あるのでゾーンタイプ気にしなくてOK）
          let app_avoid_adblock = (function(){/*
<script>
(function(window,document){
  window.addEventListener("DOMContentLoaded", function(){
    if(!isChrome()) return;
    if(document.getElementsByTagName("html")[0].className.indexOf("gn_inst_scroll_cancel") >= 0) document.getElementsByTagName("html")[0].classList.remove("gn_inst_scroll_cancel");
    if(document.body.className.indexOf("gn_inst_scroll_cancel") >= 0) document.body.classList.remove("gn_inst_scroll_cancel");
 
    var a = document.getElementById("gn_interstitial_area");
    var b = a.getElementsByTagName("div")[0];
    var c = document.getElementById("gn_interstitial_close_icon");
 
    var t = screen.height - 100;
 
    a.style.position = "absolute";
    a.style.backgroundColor = "transparent";
    a.style.height = t + "px";
 
    var di = document.createElement('div');
    di.setAttribute("id", "Inst_area_top_space");
    di.style.width = '100%';
    di.style.height = t + 'px';
    di.style.margin = "0";
    document.body.insertBefore(di, document.body.children[0]);
    var d = document.getElementById("Inst_area_top_space");
    b.style.bottom = "";
    b.style.transformOrigin = "top";
    c.addEventListener("click", function(){
      d.style.display = "none";
      a.style.display = "none";
    },false);
  },false);
 
function isChrome(){
        var ua = navigator.userAgent.toLowerCase();
        if(((ua.indexOf('crios') !== -1) || (ua.indexOf('chrome') !== -1)) && (ua.indexOf('edg') === -1)  && (ua.indexOf('opr') === -1)) return true;
        else return false;
      }
})(window,document);
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          
          let app_text = "";
          if(isZone.selectedIndex == 1) app_text = app_default;
          if(isZoom.selectedIndex == 1  && isRotate.checked == false) app_text += app_zoom_move;
          //if(isZoom.selectedIndex == 2) app_text = app_text + app_zoom_nomoveA + app_zoom_nomoveB;
          if(isZoom.selectedIndex == 2  && isRotate.checked == false) app_text = app_text + app_zoom_nomoveB;
          if(isZoom.selectedIndex >= 1 && isCloseBtnSizeKeepInZoom.checked == true && isBtnSize.checked == true) app_text += app_close_btn_size_keep_in_zoom;

          if(isBakcGroundColor.checked == true || isBakcGroundSize.checked == true) app_text += app_bg_change;
          if(isZone.selectedIndex == 1 && isScrollStop.checked == true) app_text += app_scroll_stop;
          
          if(isRotate.checked == false){
          let app_arrange_vertical = app_arrange_vertical_common_early;
          if(isArrangeVertical.selectedIndex == 1) app_arrange_vertical += app_arrange_vertical_up;
          if(isArrangeVertical.selectedIndex == 2) app_arrange_vertical += app_arrange_vertical_bottom;
          app_arrange_vertical += app_arrange_vertical_common_late;
          let app_arrange_horizontal = app_arrange_horizontal_common_early;
          if(isArrangeHorizontal.selectedIndex == 1) app_arrange_horizontal += app_arrange_horizontal_left;
          if(isArrangeHorizontal.selectedIndex == 2) app_arrange_horizontal += app_arrange_horizontal_right;
          app_arrange_horizontal += app_arrange_horizontal_common_late;
          
          let app_arrange = "";
          if(isArrangeVertical.selectedIndex != 0) app_arrange += app_arrange_vertical;
          if(isArrangeHorizontal.selectedIndex != 0) app_arrange += app_arrange_horizontal;
          
          app_text += app_arrange;
          }
          
          if(isRotate.checked == true && isDouble.checked == false){
              app_text += app_rotate_common_early;
              if(isRotateSingle.selectedIndex == 0) app_text += app_rotate_same;
              //if(isRotateSingle.selectedIndex == 1) app_text += app_rotate_zoom_up;
              if(isRotateSingle.selectedIndex == 1) app_text += app_rotate_zoom;
              app_text += app_rotate_common_late;
          }
          
          if(isDouble.checked == true){
             let th = parseFloat(document.getElementsByName("double_inst_height_top")[0].value),
                 bh = parseFloat(document.getElementsByName("double_inst_height_bottom")[0].value);
             let double_border = 400;
             if(isZoom.selectedIndex != 0) double_border = 330;
             if(th + bh > double_border) app_text += app_double_in_small_window;
          }
          
          if(isBackInst.checked == true){
             app_text += app_back_inst;
          }
          
          if(isHeaderSpace.checked == true){
             app_text += app_header_space;
          }else if(isAvoidGoogleAdBlock.checked == true){
             app_text += app_avoid_adblock;
          }
          
          
////////////アドソース-タグ欄の設定////////////////////////////////////////////////////////////////////////////
          let top_ds = document.getElementsByName("double_inst_ds_top")[0].value,
              bottom_ds = document.getElementsByName("double_inst_ds_bottom")[0].value,
              top_width = document.getElementsByName("double_inst_width_top")[0].value,
              top_height = document.getElementsByName("double_inst_height_top")[0].value,
              bottom_width = document.getElementsByName("double_inst_width_bottom")[0].value,
              bottom_height = document.getElementsByName("double_inst_height_bottom")[0].value;
          
          let top_x_margin = (300 - top_width) * 0.5,
              bottom_x_margin = (300 - bottom_width) * 0.5;
          let double_inst_top_div = "",
              double_inst_bottom_div = "";
          let double_inst_vertical_y_arrange = document.getElementsByName("vertical_arrange_type")[0],
              double_inst_vertical_x_arrange= document.getElementsByName("horizontal_arrange_type")[0],
              double_inst_horizontal_y_arrange = document.getElementsByName("rotate_double_vertical_arrange_type")[0],
              double_inst_horizontal_x_arrange= document.getElementsByName("rotate_double_horizontal_arrange_type")[0];
          
          if(document.getElementsByName("double_inst_dummypic_top")[0].checked == true) top_ds = (function(){/*<img src="Dummy_300-250.png" id="dummyAd" onclick="alert('ぐえっ')">*/}).toString().match(/\/\*([^]*)\*\//)[1];
          if(document.getElementsByName("double_inst_dummypic_bottom")[0].checked == true) bottom_ds = (function(){/*<img src="DummyRed_300-250.png" id="dummyAd" onclick="alert('ぐえっ')">*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let judge_ydn_adsource = (function(){/*
<!-- YDNアドソースのタグ欄にのみ記入する箇所　ここから -->
<script>
   window.__gn_yads_params = true;
</script>
<script>
(function(window, document) {
    var a = document.getElementById("gn_interstitial_close_icon");
    a.style.width = "29px";
    a.style.height = "29px";
})(window, document);
</script>
<!-- YDNアドソースのタグ欄にのみ記入する箇所　ここまで -->
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          if(isDouble.checked == true){
              double_inst_top_div = (function(){/*
<div style="position:absolute; top:0px; left:*/}).toString().match(/\/\*([^]*)\*\//)[1] + top_x_margin + (function(){/*px; right:*/}).toString().match(/\/\*([^]*)\*\//)[1] + top_x_margin + (function(){/*px; width:*/}).toString().match(/\/\*([^]*)\*\//)[1] + top_width + (function(){/*px; height:*/}).toString().match(/\/\*([^]*)\*\//)[1] + top_height + (function(){/*px;" id="gn_top_banner">
*/}).toString().match(/\/\*([^]*)\*\//)[1] + top_ds + (function(){/*
</div>*/}).toString().match(/\/\*([^]*)\*\//)[1];
              double_inst_bottom_div = (function(){/*
<div style="position:absolute; bottom:0px; left:*/}).toString().match(/\/\*([^]*)\*\//)[1] + bottom_x_margin + (function(){/*px; right:*/}).toString().match(/\/\*([^]*)\*\//)[1] + bottom_x_margin + (function(){/*px;width:*/}).toString().match(/\/\*([^]*)\*\//)[1] + bottom_width + (function(){/*px; height:*/}).toString().match(/\/\*([^]*)\*\//)[1] + bottom_height + (function(){/*px;" id="gn_bottom_banner">
*/}).toString().match(/\/\*([^]*)\*\//)[1] + bottom_ds + (function(){/*
</div>*/}).toString().match(/\/\*([^]*)\*\//)[1];
          }
          
          let double_inst_tag_common = (function(){/*
<script>
(function(window, document) {
document.getElementById('gn_interstitial_close_icon').style.zIndex = 999999;
})(window, document);
</script>

<script>
(function(window, document){
setAdsArrangement();
window.addEventListener('orientationchange', setAdsArrangement, false);
window.addEventListener('resize', setAdsArrangement, false);
})(window, document);

function setAdsArrangement(){
if(isHorizontal()) adToHorizontal();
else adToVertical();
}
function isHorizontal(){  //画面向きが縦か横か
if(typeof screen.orientation === "undefined"){
if(window.orientation != 0) return true;
}else{
if(screen.orientation.angle != 0) return true;
}
}

function isTablet(){
var ua = navigator.userAgent;
if(ua.indexOf('iPad') >= 0
|| ((ua.indexOf('Android') >= 0) && (ua.indexOf('Mobile') < 0) )
) return true;
else return false;
}
*/}).toString().match(/\/\*([^]*)\*\//)[1];

          let double_inst_tag_horizontal = (function(){/*
function adToHorizontal(){  //横向き時
var a = document.getElementById("gn_interstitial_area").getElementsByTagName("div")[0];
var b1 = document.getElementById("gn_top_banner");
var b2 = document.getElementById("gn_bottom_banner"); 
var c = document.getElementById("gn_interstitial_close_icon");
var BUTTON_HEIGHT = */}).toString().match(/\/\*([^]*)\*\//)[1] + clSize + (function(){/*;
var BANNER_HEIGHT_TOP = */}).toString().match(/\/\*([^]*)\*\//)[1] + top_height + (function(){/*;
var BANNER_WIDTH_TOP = */}).toString().match(/\/\*([^]*)\*\//)[1] + top_width + (function(){/*;
var BANNER_HEIGHT_BOTTOM = */}).toString().match(/\/\*([^]*)\*\//)[1] + bottom_height + (function(){/*;
var BANNER_WIDTH_BOTTOM = */}).toString().match(/\/\*([^]*)\*\//)[1] + bottom_width + (function(){/*;

 a.style.height = BANNER_HEIGHT_TOP + BANNER_HEIGHT_BOTTOM + BUTTON_HEIGHT + "px";
 a.style.width = "300px";
 b1.style.width = */}).toString().match(/\/\*([^]*)\*\//)[1] + top_width + (function(){/*;
 b2.style.width = */}).toString().match(/\/\*([^]*)\*\//)[1] + bottom_width + (function(){/*;
    
    c.style.width = BUTTON_HEIGHT + "px";
    c.style.height = BUTTON_HEIGHT + "px";
    c.style.position = "absolute";
    c.style.top = BANNER_HEIGHT_TOP + "px";
    c.style.left = "0px";
    c.style.right = "0px";
    c.style.margin = "auto";
    if(isTablet()) a.style.top = "200px";

    var s1 = 1;
    var s2 = 1;
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let double_inst_tag_horizontal_zoom = (function(){/*
    if(navigator.userAgent.indexOf("Android 4.0") < 0){
        if(isTablet()){  //Tablet
           s1 = 2;
           s2 = 2;
        }
     }

            b1.style.transform = "scale(" + s1 + ")";
            b1.style.webkitTransform = "scale(" + s1 + ")";
            b1.style.transformOrigin = "bottom";
            b1.style.webkitTransformOrigin = "bottom"
            b2.style.transform = "scale(" + s2 + ")";
            b2.style.webkitTransform = "scale(" + s2 + ")";
            b2.style.transformOrigin = "top";
            b2.style.webkitTransformOrigin = "top"
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let double_inst_tag_horizontal_y_arrange = "";
          switch(double_inst_horizontal_y_arrange.selectedIndex){
              case 0:  //まんなか
                  double_inst_tag_horizontal_y_arrange = (function(){/*
          a.style.top = "0px";
          a.style.bottom = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
                  
              case 1:  //うえより
                  double_inst_tag_horizontal_y_arrange = (function(){/*
          a.style.top = "0px";
          a.style.bottom = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              
              case 2: //したより
                  double_inst_tag_horizontal_y_arrange = (function(){/*
          a.style.top = "";
          a.style.bottom = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              default:
                  break;
          }
          let double_inst_tag_horizontal_x_arrange = "";
          switch(double_inst_horizontal_x_arrange.selectedIndex){
              case 0:  //まんなか
                  double_inst_tag_horizontal_x_arrange = (function(){/*
          a.style.left = "0px";
          a.style.right = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
                  
              case 1:  //ひだりより
                  double_inst_tag_horizontal_x_arrange = (function(){/*
          a.style.left = "0px";
          a.style.right = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              
              case 2: //みぎより
                  double_inst_tag_horizontal_x_arrange = (function(){/*
          a.style.left = "";
          a.style.right = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              default:
                  break;
          }
          
          let double_inst_tag_horizontal_end = (function(){/*
}
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let double_inst_tag_vertical = (function(){/*
function adToVertical(){  //縦向き時
var a = document.getElementById("gn_interstitial_area").getElementsByTagName("div")[0];
var b1 = document.getElementById("gn_top_banner");
var b2 = document.getElementById("gn_bottom_banner"); 
var c = document.getElementById("gn_interstitial_close_icon");
var BUTTON_HEIGHT = */}).toString().match(/\/\*([^]*)\*\//)[1] + clSize + (function(){/*;
var BANNER_HEIGHT_TOP = */}).toString().match(/\/\*([^]*)\*\//)[1] + top_height + (function(){/*;
var BANNER_WIDTH_TOP = */}).toString().match(/\/\*([^]*)\*\//)[1] + top_width + (function(){/*;
var BANNER_HEIGHT_BOTTOM = */}).toString().match(/\/\*([^]*)\*\//)[1] + bottom_height + (function(){/*;
var BANNER_WIDTH_BOTTOM = */}).toString().match(/\/\*([^]*)\*\//)[1] + bottom_width + (function(){/*;

a.style.width = "300px";
a.style.height = "529px";
b1.style.top = "0px";
b2.style.bottom = "0px";
b1.style.display = "block";
b2.style.display = "block";

 a.style.height = BANNER_HEIGHT_TOP + BANNER_HEIGHT_BOTTOM + BUTTON_HEIGHT + "px";
    
    c.style.width = BUTTON_HEIGHT + "px";
    c.style.height = BUTTON_HEIGHT + "px";
    c.style.position = "absolute";
    c.style.top = BANNER_HEIGHT_TOP + "px";
    c.style.left = "0px";
    c.style.right = "0px";
    c.style.margin = "auto";
    if(isTablet()) a.style.top = "200px";

    var s1 = 1;
    var s2 = 1;
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let double_inst_tag_vertical_zoom = (function(){/*
    if(navigator.userAgent.indexOf("Android 4.0") < 0){
      if(screen.height >= BANNER_HEIGHT_TOP + BANNER_HEIGHT_BOTTOM + BUTTON_HEIGHT) {
        s1 = screen.width / BANNER_WIDTH_TOP;
        s2 = screen.width / BANNER_WIDTH_BOTTOM;
        //s1 = window.innerWidth / BANNER_WIDTH_TOP_;
        //s2 = window.innerWidth / BANNER_WIDTH_BOTTOM_;
      }

        if(isTablet()){  //Tablet
           s1 = 2;
           s2 = 2;
        }
      }

            b1.style.transform = "scale(" + s1 + ")";
            b1.style.webkitTransform = "scale(" + s1 + ")";
            b1.style.transformOrigin = "bottom";
            b1.style.webkitTransformOrigin = "bottom"
            b2.style.transform = "scale(" + s2 + ")";
            b2.style.webkitTransform = "scale(" + s2 + ")";
            b2.style.transformOrigin = "top";
            b2.style.webkitTransformOrigin = "top"
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let double_inst_tag_vertical_y_arrange = "";
          switch(double_inst_vertical_y_arrange.selectedIndex){
              case 0:  //まんなか
                  double_inst_tag_vertical_y_arrange = (function(){/*
          a.style.top = "0px";
          a.style.bottom = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
                  
              case 1:  //うえより
                  if(isZoom.selectedIndex != 0){
                      double_inst_tag_vertical_y_arrange = (function(){/*
          a.style.top = BANNER_HEIGHT_TOP * (s1 - 1) + "px";
          a.style.bottom = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  }else{
                  double_inst_tag_vertical_y_arrange = (function(){/*
          a.style.top = "0px";
          a.style.bottom = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  }
                  break;
              
              case 2: //したより
                  if(isZoom.selectedIndex != 0){
                  double_inst_tag_vertical_y_arrange = (function(){/*
          a.style.top = "";
          a.style.bottom = BANNER_HEIGHT_BOTTOM * (s2 - 1) + "px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  }else{
                  double_inst_tag_vertical_y_arrange = (function(){/*
          a.style.top = "";
          a.style.bottom = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  }
                  break;
              default:
                  break;
          }
          let double_inst_tag_vertical_x_arrange = "";
          switch(double_inst_vertical_x_arrange.selectedIndex){
              case 0:  //まんなか
                  double_inst_tag_vertical_x_arrange = (function(){/*
          a.style.left = "0px";
          a.style.right = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
                  
              case 1:  //ひだりより
                  double_inst_tag_vertical_x_arrange = (function(){/*
          a.style.left = "0px";
          a.style.right = "";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              
              case 2: //みぎより
                  double_inst_tag_vertical_x_arrange = (function(){/*
          a.style.left = "";
          a.style.right = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
                  break;
              default:
                  break;
          }
          if(isZoom.selectedIndex != 0) double_inst_tag_vertical_x_arrange = (function(){/*
          a.style.left = "0px";
          a.style.right = "0px";
          */}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let double_inst_tag_width_free = (function(){/*a.style.width = "100%";
b1.style.width = "100%";
b2.style.width = "100%";
if(b1.getElementsByTagName("iframe")[0]) b1.getElementsByTagName("iframe")[0].style.width = "100%";
if(b2.getElementsByTagName("iframe")[0]) b2.getElementsByTagName("iframe")[0].style.width = "100%";
if(b1.getElementsByTagName("img")[0] && b1.getElementsByTagName("img")[0].clientWidth > 200){
  if(b1.getElementsByClassName("yads_ydn_frame_image")[0]) b1.getElementsByClassName("yads_ydn_frame_image")[0].style.width = "100%";
  b1.getElementsByTagName("img")[0].style.width = "100%";
}
if(b2.getElementsByTagName("img")[0] && b2.getElementsByTagName("img")[0].clientWidth > 200){
  if(b2.getElementsByClassName("yads_ydn_frame_image")[0]) b2.getElementsByClassName("yads_ydn_frame_image")[0].style.width = "100%";
  b2.getElementsByTagName("img")[0].style.width = "100%";
}
if(window.frameElement){
   window.frameElement.style.height = BANNER_HEIGHT_TOP + BANNER_HEIGHT_BOTTOM + BUTTON_HEIGHT + "px";
   window.frameElement.style.width = "100%";
   window.frameElement.parentNode.style.width = "100%";
   window.frameElement.parentNode.parentNode.style.width = "100%";
}
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let double_inst_tag_vertical_end = (function(){/*}
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];

          
          let double_inst_tag_rotate_common = (function(){/*
          <script>
(function(window, document){
setAdsArrangement();
window.addEventListener('orientationchange', setAdsArrangement, false);
})(window, document);

function setAdsArrangement(){
if(isHorizontal()) adToHorizontal();
else adToVertical();
}
function isHorizontal(){
if(typeof screen.orientation === "undefined"){
if(window.orientation != 0) return true;
}else{
if(screen.orientation.angle != 0) return false;
}
}*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let double_inst_tag_rotate_single = (function(){/*
document.getElementById("gn_bottom_banner").style.display = "none";
a.style.height = BANNER_HEIGHT_TOP + BUTTON_HEIGHT + "px";
*/}).toString().match(/\/\*([^]*)\*\//)[1];

          let double_inst_tag_rotate_horizontal = (function(){/*
if(screen.width > 600){ 
document.getElementById("gn_interstitial_area").getElementsByTagName("div")[0].style.width = "600px";
document.getElementById("gn_interstitial_area").getElementsByTagName("div")[0].style.height = "279px";
document.getElementById("gn_top_banner").setAttribute("style","position:absolute; left:0px;");
document.getElementById("gn_bottom_banner").setAttribute("style","position:absolute; right:0px;");
}
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let double_inst_tag_setButtonLeft = (function(){/*
c.style.top = 0 + 'px';
c.style.position = '';
c.style.margin = '';
b1.setAttribute('style', '');
b2.setAttribute('style', '');
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          //Xボタン横位置ランダム
          let double_inst_tag_XbtnPos_random = (function(){/*<script>
window.addEventListener('DOMContentLoaded', function() {
    var a = document.getElementById('gn_interstitial_close_icon');
    var hr = Math.floor(Math.random() * 100) + 1;

if(hr <= 33){
    a.style.left = "0px";
    a.style.right = "";
}else if(hr > 33 && hr <= 67){
    a.style.left = "0px";
    a.style.right = "0px";
}else{
    a.style.left = "";
    a.style.right = "0px";
}
});
</script>
*/}).toString().match(/\/\*([^]*)\*\//)[1];
          
          let ad_tag_text =  "";
          let ad_tag_text_double =  (function(){/*
<script>
window.__gn_double_params = true;
</script>
          */}).toString().match(/\/\*([^]*)\*\//)[1];
        
          //if(isZoom.selectedIndex == 1 || isBtnSize.checked == true || isBtnPic.checked == true || isBtnLit.checked == true) ad_tag_text += judge_ydn_adsource;
          //if(isDouble.checked == false) ad_tag_text += judge_ydn_adsource;
          if(isDouble.checked == true){
              ad_tag_text += ad_tag_text_double
              ad_tag_text += double_inst_top_div + double_inst_bottom_div + double_inst_tag_common + double_inst_tag_horizontal;
              if(isZoom.selectedIndex != 0) ad_tag_text += double_inst_tag_horizontal_zoom;
              ad_tag_text += double_inst_tag_horizontal_y_arrange + double_inst_tag_horizontal_x_arrange;
              if(isRotate.checked == true){
                  if(isRotateDouble.selectedIndex == 0) ad_tag_text += double_inst_tag_rotate_single;
                  if(isRotateDouble.selectedIndex == 1) ad_tag_text += double_inst_tag_rotate_horizontal;
              }
              ad_tag_text += double_inst_tag_horizontal_end;
              ad_tag_text += double_inst_tag_vertical;
              if(isZoom.selectedIndex != 0) ad_tag_text += double_inst_tag_vertical_zoom;
              ad_tag_text += double_inst_tag_vertical_y_arrange + double_inst_tag_vertical_x_arrange;
              if(isDoubleButton.selectedIndex == 1) ad_tag_text += double_inst_tag_setButtonLeft;
              if((isZoom.selectedIndex == 0 && isDoubleButton.selectedIndex == 0) && isDoubleWidthFree.checked == true) ad_tag_text += double_inst_tag_width_free;
              ad_tag_text += double_inst_tag_vertical_end;
              if(isDoubleButton.selectedIndex == 0 &&isDoubleBtnXPosRandom.checked == true) ad_tag_text += double_inst_tag_XbtnPos_random;
            }

          
          //アフステがある場合のid名変更対応
          if(isZone.selectedIndex == 1 && isAfst.checked == true){
              let afst_deal_target = 'gn_interstitial';
              let afst_deal_rep = new RegExp( afst_deal_target, "g" );
              pre_text = pre_text.replace(afst_deal_rep, 'gn_normal-interstitial');
              app_text = app_text.replace(afst_deal_rep, 'gn_normal-interstitial');
              ad_tag_text = ad_tag_text.replace(afst_deal_rep, 'gn_normal-interstitial');
          }
          //バックインステにする場合のid名変更対応
          if(isZone.selectedIndex == 1 && isBackInst.checked == true){
              let backinst_deal_target = 'gn_interstitial';
              let backinst_deal_rep = new RegExp( backinst_deal_target, "g" );
              pre_text = pre_text.replace(backinst_deal_rep, 'gn_back-interstitial');
              app_text = app_text.replace(backinst_deal_rep, 'gn_back-interstitial');
              ad_tag_text = ad_tag_text.replace(backinst_deal_rep, 'gn_back-interstitial');
              
              let back_afst_deal_target = 'gn_normal-interstitial';  //念のため
              let back_afst_deal_rep = new RegExp( back_afst_deal_target, "g" );
              pre_text = pre_text.replace(back_afst_deal_rep, 'gn_back-interstitial');
              app_text = app_text.replace(back_afst_deal_rep, 'gn_back-interstitial');
              ad_tag_text = ad_tag_text.replace(back_afst_deal_rep, 'gn_back-interstitial');
              
              let back_afst_display_target = 'z-index:1000000000000; display:block;';
              let back_afst_display_rep = new RegExp( back_afst_display_target, "g" );
              pre_text = pre_text.replace(back_afst_display_rep, 'z-index:1000000000000; display:none;');
          }
          
          //入力不備系
          let inputError = false;
          not_ydn_double();
          omission(isBakcGroundColor, "background_color_style", "background_color_caution");
          omission(isBakcGroundSize, "background_width_style", "background_width_caution");
          omission(isBakcGroundSize, "background_height_style", "background_height_caution");
          omission(isBtnSize, "close_btn_size", "btn_size_caution");
          omission(isBtnPic, "close_btn_picture", "btn_picture_caution");
          omission(isBtnLit, "close_btn_lit", "btn_lit_caution");
          //omission(isDouble, "double_inst_ds_top", "ds_top_caution");
          w_omission(isDouble, "double_inst_ds_top", "double_inst_dummypic_top", "ds_top_caution");
          omission(isDouble, "double_inst_width_top", "banner_top_caution");
          omission(isDouble, "double_inst_height_top", "banner_top_caution");
          //omission(isDouble, "double_inst_ds_bottom", "ds_bottom_caution");
          w_omission(isDouble, "double_inst_ds_bottom", "double_inst_dummypic_bottom", "ds_bottom_caution");
          omission(isDouble, "double_inst_width_bottom", "banner_bottom_caution");
          omission(isDouble, "double_inst_height_bottom", "banner_bottom_caution");
          
          let caution_length = document.getElementsByClassName("input_caution").length;
          for(let i = 0;i < caution_length;i++){
              if(document.getElementsByClassName("input_caution")[i].style.display == "block"){
                  inputError = true;
                  break;
              }
          }
          if(inputError == true){
              pre_text = "";
              app_text = "";
              ad_tag_text = "";
          }
      
          //Prepend出力
          document.getElementById("prepend_output").value = pre_text;
          
          //Append出力
          document.getElementById("append_output").value = app_text;
          
          //アドソース　タグ欄出力
          document.getElementById("ad_source_output").value = ad_tag_text;
      }
        
      function replaceSearch(target, start, end){
          let s = target.indexOf(start),
              el = end.length,
              e = target.indexOf(end, s + 1) + el,
              result = target.slice(s, e);
          return result;
      }
      function omission(target, form, caution){
          if(target.checked == true && document.getElementsByName(form)[0].value == ""){
              document.getElementById(caution).style.display = "block";
          }else{
              document.getElementById(caution).style.display = "none";
          }
      }

      function w_omission(target, form1, form2, caution){  //特定対象のみ
          if(target.checked == true && (document.getElementsByName(form1)[0].value == "" && document.getElementsByName(form2)[0].checked == false)){
              document.getElementById(caution).style.display = "block";
          }else{
              document.getElementById(caution).style.display = "none";
          }
      }

      function not_ydn_double(){
          if(document.getElementsByName("double_inst_ds_top")[0].value.indexOf("yads_ad_ds") >= 0) document.getElementById("ds_top_ydn_caution").style.display = "block";
          if(document.getElementsByName("double_inst_ds_bottom")[0].value.indexOf("yads_ad_ds") >= 0) document.getElementById("ds_bottom_ydn_caution").style.display = "block";
      }