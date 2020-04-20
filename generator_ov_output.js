      function getCords() {
        //Prepend出力リセット
        document.getElementById("prepend_output").value = "";
        //Append出力リセット
        document.getElementById("append_output").value = "";
        //アドソース タグ欄出力リセット
        document.getElementById("ad_source_output").value = "";
        document.getElementById("directly_pasted_output").value = "";

        //isZone = document.getElementsByName("zone_type")[0],
        let isCloseBtn = document.getElementsByName("close_btn_set")[0],
            isZoom = document.getElementsByName("width_zoom")[0],
            isBannerSize = document.getElementsByName("banner_size_type")[0],
            isPRBar = document.getElementsByName("pr_bar")[0],
            isUpShift = document.getElementsByName("up_shift")[0],
            isUnderSpace = document.getElementsByName("under_space")[0],
            isBakcGroundColor = document.getElementsByName("background_color")[0],
            isInstHidden = document.getElementsByName("with_inst_hidden")[0],
            isPreScrollHidden = document.getElementsByName("pre_scroll_hidden")[0],
            isAdSourceIndividualHeight = document.getElementsByName("adsource_individual_height")[0],
            isAdSourcePRDelete = document.getElementsByName("adsource_pr_bar_delete")[0],
            isOVaddXbutton = document.getElementsByName("ov_add_x_button")[0]
            isOVaddXbuttonImgUrl = document.getElementsByName("ov_add_x_button_img_url")[0]

        let isDoubleOV = false;
        if (isBannerSize.selectedIndex == 3) isDoubleOV = true;

        let zt = "";
        switch (isBannerSize.selectedIndex) {
          case 0:
            zt = "SPオーバーレイ";
            break;
          case 1:
            zt = "SPオーバーレイ";
            break;
          case 2:
            zt = "スタンダードバナー";
            break;
          case 3:
            zt = "スタンダードバナー";
            break;
          default:
            break;
        }
        document.getElementById("zone_output").value = zt;

        //ゾーンタイプ確認・出力
        /*if((isBannerSize.selectedIndex == 2 || isBannerSize.selectedIndex == 3) && isZoom.selectedIndex == 2){
          //let zoom_target = 'display:block'
          //let zoom_rep = new RegExp( zoom_target, "g" );
          pre_text = pre_text.replace('display:block', 'display:none');
        }*/

        let BANNER_WIDTH = 0,
          BANNER_HEIGHT = 0,
          PR_TEXT = "",
          PR_HEIGHT = 0,
          PR_FONTSIZE = 0,
          PR_BACKGROUND = "",
          PR_FONTCOLOR = "",
          INST_AREA_ID = "",
          INST_CLOSEBTN_ID = "",
          PRE_SCROLL_HEIGHT = 0,
          AD_SOURCE_INDIVIDUAL_HEIGHT = 0,
          LEFT_ADSOURCE = "",
          RIGHT_ADSOURCE = "";

        ////////////Prependの設定 デフォルトから条件に応じて置換・追加////////////////////////////////////////////////////
        let pre_text = "";
        let pre_pcOV = (function () {
          /*<div id="geniee_overlay" style="position: fixed; bottom: 0px; height: 60px; left: 0; right: 0; z-index: 100; ">
          <div style="width: 468px; height: 60px; margin: auto; position: relative;">
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];
        let pre_pcOV_close = '<img src="http://media.gssp.asia/img/icon_close_WhiteBg.png" width="16" height="16" id="gn_overlay_close_icon" style="height: 29px; width: 29px; display: block; position: absolute; top: 0px; right: -29px; margin: 0px auto; z-index: 999999;">';

        if (isBannerSize.selectedIndex >= 2) pre_text += pre_pcOV;
        if (isBannerSize.selectedIndex >= 2 && isCloseBtn.checked == true) pre_text += pre_pcOV_close;

        ////////////Appendの設定 デフォルトから条件に応じて追加 オプション並べて条件ごとに使用判断////////////////////////////
        //デフォルト
        let app_default = (function () {
          /*<div id="gnov_cancel_area">
          <script>
          (function(window, document) {
          var a = document.getElementById('geniee_overlay').getElementsByTagName('div')[0];
          var b = document.getElementById('gnov_cancel_area');
          if(!a || !b) return;

          var searchHTML = createSearchHTML(a.innerHTML, b.innerHTML);
          if(disableActiveOV(searchHTML)) {
          window.__gn_ov_yads_params = true;
          }

          function isBidSwitch(html) {
          if(html.indexOf("/gce-jp.bidswitch.net/imp") !== -1) return true;
          return false;
          }

          function isDBM(html) {
          if(html.indexOf('gen_204?id=xbid&amp;dbm_b=') !== -1) return true;
          if(html.indexOf('gen_204?id=xbid&dbm_b=') !== -1) return true;

          return false;
          }

          function disableActiveOV(searchHTML) {
          if(isBidSwitch(searchHTML)) return true;
          if(isDBM(searchHTML)) return true;
          return false;
          }
          function createSearchHTML(base, needle) {
          return base.replace(needle, '');
          }
          })(window, document);
          </script>
          </div>
          <!-- BidSwitch等対応部分 ここまで -->

          */
        }).toString().match(/\/\*([^]*)\*\//)[1];
        switch (isBannerSize.selectedIndex) {
          case 0:
            BANNER_WIDTH = 320;
            BANNER_HEIGHT = 50;
            break;
          case 1:
            BANNER_WIDTH = 320;
            BANNER_HEIGHT = 100;
            break;
          case 2:
            BANNER_WIDTH = 468;
            BANNER_HEIGHT = 60;
            break;
          case 3:
            BANNER_WIDTH = 941;
            BANNER_HEIGHT = 60;
            break;
          default:
            break;
        }

        if (isPRBar.checked == true) {
          PR_TEXT = document.getElementsByName("pr_text")[0].value;
          PR_HEIGHT = document.getElementsByName("pr_height")[0].value;
          PR_FONTSIZE = document.getElementsByName("pr_font_size")[0].value;
          PR_BACKGROUND = document.getElementsByName("pr_background")[0].value;
          PR_FONTCOLOR = document.getElementsByName("pr_font_color")[0].value;
        }
        //if(isZoom.checked == true)

        //YDNでは行わない(拡大設定)
        let skip_in_ydn = (function () {
          /*if(typeof window.__gn_ov_yads_params != "undefined") return;
           */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        //横幅拡大（拡大設定）
        let app_zoom_pre = (function () {
          /*
          <script type="text/javascript">
          (function(d) {
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_zoom_post = (function () {
          /*var s = window.innerWidth / */ }).toString().match(/\/\*([^]*)\*\//)[1] + BANNER_WIDTH + (function () {
          /*,
          BOOTS_HEIGHT = */
        }).toString().match(/\/\*([^]*)\*\//)[1] + PR_HEIGHT + (function () {
          /*;

          d.getElementById("geniee_overlay").style.webkitTransform = "scale(" + s + ")";
          d.getElementById("geniee_overlay").style.webkitTransformOrigin = "bottom";
          d.getElementById("geniee_overlay").style.transform = "scale(" + s + ")";
          d.getElementById("geniee_overlay").style.transformOrigin = "bottom";

          if(d.getElementById("gn_expand_area") !== null) {
          d.getElementById("geniee_overlay").style.bottom = BOOTS_HEIGHT * s + "px";
          }
          })(document);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        let app_zoom_pc_close = (function () {
          /*<script>
          (function(window, document){
            var x = document.getElementById("gn_overlay_close_icon");
            x.style.right = "0px";
            x.style.top = "-29px";
          })(window, document);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        let app_zoom = app_zoom_pre;
        if (document.getElementsByName("width_zoom_ydncheck")[0].checked == true) app_zoom += skip_in_ydn;
        app_zoom += app_zoom_post;
        if (isBannerSize.selectedIndex >= 2 && isCloseBtn.checked == true) app_zoom += app_zoom_pc_close;

        //PRバー設定
        let app_pr_pre = (function () {
          /*
                    <script type="text/javascript">
          (function(d) {
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_pr_post = (function () {
          /*var AD_STR = "*/ }).toString().match(/\/\*([^]*)\*\//)[1] + PR_TEXT + (function () {
          /*",
          BOTTOM_HEIGHT = "*/
        }).toString().match(/\/\*([^]*)\*\//)[1] + PR_HEIGHT + (function () {
          /*px",
          t = d.getElementById("geniee_overlay");
          t.style.bottom = BOTTOM_HEIGHT;
          createAdInfo();

          function createAdInfo() {
          var div = d.createElement("div");
          div.setAttribute("style", "background-color:*/
        }).toString().match(/\/\*([^]*)\*\//)[1] + PR_BACKGROUND + (function () {
          /*;text-align:center;width:*/ }).toString().match(/\/\*([^]*)\*\//)[1] + BANNER_WIDTH + (function () {
          /*px;color:*/ }).toString().match(/\/\*([^]*)\*\//)[1] + PR_FONTCOLOR + (function () {
          /* !important;margin: 0 auto; font-size:*/ }).toString().match(/\/\*([^]*)\*\//)[1] + PR_FONTSIZE + (function () {
          /*px;");
          div.setAttribute("id", "gn_expand_area");
          div.style.height = BOTTOM_HEIGHT;
          div.innerHTML = AD_STR;
          t.appendChild(div);
          }
          })(document);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        let app_pr = app_pr_pre;
        if (document.getElementsByName("pr_bar_ydncheck")[0].checked == true) app_pr += skip_in_ydn;
        app_pr += app_pr_post;


        //ページ下部での設定(ページ下部での上部移行)
        let app_up_shift1_pre = (function () {
          /*<script type="text/javascript"> 
          (function(global) { 
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_up_shift1_post = (function () {
          /*var d = global.document, 
          w = global.window, 
          h = 0, 
          banner_height = */
        }).toString().match(/\/\*([^]*)\*\//)[1] + BANNER_HEIGHT + (function () {
          /*,
          boots_height = */
        }).toString().match(/\/\*([^]*)\*\//)[1] + PR_HEIGHT + (function () {
          /*,*/ }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_up_shift_zoom1 = (function () {
          /*
          s = window.innerWidth / */
        }).toString().match(/\/\*([^]*)\*\//)[1] + BANNER_WIDTH + (function () {
          /*,*/ }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_up_shift2 = (function () {
          /*
          ov_base = d.getElementById("geniee_overlay");
          w.addEventListener("load", function() {
          if(!d.getElementById("gn_expand_area"))  boots_height = 0;
          w.addEventListener("scroll", function() { 
          h = Math.max.apply( null, [d.body.clientHeight , d.body.scrollHeight, d.documentElement.scrollHeight, d.documentElement.clientHeight]);
          var sc_top = d.body.scrollTop || d.documentElement.scrollTop,
          scr_h = w.innerHeight;
          if(h <= sc_top + scr_h + banner_height + boots_height) {
          ov_base.style.bottom = "";
          ov_base.style.top = "0px";
          ov_base.style.webkitTransformOrigin = "top";
          ov_base.style.transformOrigin = "top";
          }else { 
          ov_base.style.bottom = boots_height*/
        }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_up_shift_zoom2 = (function () {
          /* * s*/ }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_up_shift3 = (function () {
          /* + "px";
          ov_base.style.top = "";
          ov_base.style.webkitTransformOrigin = "bottom";
          ov_base.style.transformOrigin = "bottom";
          }
          }, false); 
          }, false); 
          })(this);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        let app_up_shift1 = app_up_shift1_pre;
        if (document.getElementsByName("up_shift_ydncheck")[0].checked == true) app_up_shift1 += skip_in_ydn;
        app_up_shift1 += app_up_shift1_post;

        let app_up_shift = app_up_shift1;
        if (isZoom.checked == true) app_up_shift += app_up_shift_zoom1;
        app_up_shift += app_up_shift2;
        if (isZoom.checked == true) app_up_shift += app_up_shift_zoom2;
        app_up_shift += app_up_shift3;

        //ページ下部にオーバーレイ分のスペースをつける
        let app_under_space_pre = (function () {
          /*<script> 
          (function(window, document) { 
          window.addEventListener('DOMContentLoaded', function() { 
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_under_space_post1 = (function () {
          /*var a = document.getElementById("geniee_overlay");
          var b = document.getElementById("gn_expand_area");
          var d = document.createElement('div');
          var t = parseFloat(a.style.height);
          var BANNER_WIDTH = parseFloat(a.getElementsByTagName("div")[0].style.width);
          var BANNER_HEIGHT = t;
          if(b) t += parseFloat(b.style.height);
          d.setAttribute("id", "bottom_space");
          d.style.width = '100%';
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_under_space_post_zoom = (function () {
          /*var s =  window.innerWidth / BANNER_WIDTH;
          t = parseFloat(a.style.height) * s;
          if(b) t += parseFloat(b.style.height) * s;
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_under_space_post2 = (function () {
          /*d.style.height = t + 'px';
          document.body.appendChild(d); }); 
          })(window, document);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_under_space_post = app_under_space_post1;
        if (isZoom.checked == true) app_under_space_post += app_under_space_post_zoom;
        app_under_space_post += app_under_space_post2;

        let app_under_space = app_under_space_pre;
        if (document.getElementsByName("under_space_ydncheck")[0].checked == true) app_under_space += skip_in_ydn;
        app_under_space += app_under_space_post;

        //オーバーレイ背景色設定
        let bg_color = document.getElementsByName("background_color_style")[0].value;
        let app_bg_change_color = (function () {
          /*
          <script> 
            (function(window, document) { 
              var a = document.getElementById("geniee_overlay");
              var COLOR = "*/
        }).toString().match(/\/\*([^]*)\*\//)[1] + bg_color + (function () {
          /*";
              a.style.backgroundColor = COLOR;
            })(window, document);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        //インステ閉じるまでの間非表示にする設定
        if (isInstHidden.checked == true) {
          INST_AREA_ID = document.getElementsByName("inst_area_id")[0].value;
          INST_CLOSEBTN_ID = document.getElementsByName("inst_close_id")[0].value;
        }

        let inst_hidden = (function () {
          /*<script>
            (function(window, document){
              window.addEventListener("load", function(){
                var a = document.getElementById("geniee_overlay");
                var b = document.getElementById("*/
        }).toString().match(/\/\*([^]*)\*\//)[1] + INST_AREA_ID + (function () {
          /*");
                var c = document.getElementById("*/
        }).toString().match(/\/\*([^]*)\*\//)[1] + INST_CLOSEBTN_ID + (function () {
          /*");
                if(c){
                    a.style.opacity = "0";
                    c.addEventListener("click", function(){
                        a.style.opacity = "1";
                    }, false);
                }
                if(b && b.style.display == "none") a.style.opacity = "1";
              }, false);
            })(window, document);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        //一定距離スクロールするまで表示させない設定
        if (isPreScrollHidden.checked == true) {
          PRE_SCROLL_HEIGHT = document.getElementsByName("pre_scroll_height")[0].value;
        }

        let pre_scroll_hidden = (function () {
          /*<script type="text/javascript"> 
          (function(window, document) { 
          var a = document.getElementById("geniee_overlay");
          window.addEventListener("load", function() { 
          a.style.opacity = 0;
          window.addEventListener("scroll", function() { 
          var sc_top = document.body.scrollTop || document.documentElement.scrollTop;
          if(sc_top > */
        }).toString().match(/\/\*([^]*)\*\//)[1] + PRE_SCROLL_HEIGHT + (function () {
          /* && a.style.opacity == "0") a.style.opacity = 1;
          }, false); 
          }, false); 
          })(window, document);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        let app_forPC = (function () {
          /*</div>
          </div>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];
        let app_forPC_isCloseBtn = (function () {
          /*<script>
          (function(window, document) {
              var a = document.getElementById("gn_overlay_close_icon");
              var b = document.getElementById("geniee_overlay");
              a.onclick = function() {
                  b.style.display = "none";
                  b.style.height = "0px";
              };
          })(window, document);
          </script>*/
        }).toString().match(/\/\*([^]*)\*\//)[1];

        //ダブルオーバーレイ時の追加記述
        let app_double_setting = (function () {
          /*<script>
          (function(window, document) {
              var a = document.getElementById('geniee_overlay').getElementsByTagName('div')[0];
              a.style.width = '941px';
              a.style.margin = 'auto';
          })(window, document);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        var closeButtonTextAlign = document.getElementById('ov-x-button-direction-list').value;
        var xButtonImageUrl = "https://media.gssp.asia/img/48b/745/48b74539718e589da886d66e9524d1ec.png";
        if(isOVaddXbuttonImgUrl.checked && document.getElementsByName("ov_x_button_img_url")[0].value !== ""){
           xButtonImageUrl = document.getElementsByName("ov_x_button_img_url")[0].value;
        }
        let ov_add_x_button = (function () {
          /*<script>
          var geniee_overlay = document.getElementById("geniee_overlay");
          geniee_overlay.style.height = "66px";
          geniee_overlay.style.bottom = "0px";
          geniee_overlay.style.textAlign = "*/
          }).toString().match(/\/\*([^]*)\*\//)[1] + closeButtonTextAlign + (function () {/*";
          var closeIcon = document.createElement("img");
          closeIcon.src = "*/
          }).toString().match(/\/\*([^]*)\*\//)[1] + xButtonImageUrl + (function () {/*";
          closeIcon.style.width = "16px";
          var gnDelivery = geniee_overlay.getElementsByTagName("div")[0].getElementsByTagName("div")[0];
          geniee_overlay.getElementsByTagName("div")[0].insertBefore(closeIcon, gnDelivery);
          closeIcon.addEventListener("click",function(){
              geniee_overlay.style.display = "none";
              var geniee_overlay_outer = window.top.document.getElementById("geniee_overlay_outer");
              if(geniee_overlay_outer) geniee_overlay_outer.style.display = "none";
          });
          
          var MAX_RETRY_COUNT_FIND_DIFF_CONTAINER = 45;
          var retry_counter = 0;
          set_interval_id = setInterval(getWaitingToBeDisplayedElement, 100);

          function getWaitingToBeDisplayedElement() {
              retry_counter++;
              if(retry_counter > MAX_RETRY_COUNT_FIND_DIFF_CONTAINER) {
                  clearInterval(set_interval_id);
                  delete set_interval_id;
              }
              var gnDelivery = geniee_overlay.getElementsByTagName("div")[0].getElementsByTagName("div")[0];
              if(gnDelivery.clientHeight > 0) {
                  if(typeof(set_interval_id) != 'undefined') { 
                      clearInterval(set_interval_id);
                      delete set_interval_id; 
                      changeHeight(gnDelivery);
                  }else { 
                      return gnDelivery;
                  }
              }
          }

          function changeHeight(gnDelivery) {
              var prBarHeight = document.getElementById("gn_expand_area") ? document.getElementById("gn_expand_area").clientHeight : 0;
              geniee_overlay.style.fontSize = "0px";
              gnDelivery.style.fontSize = "0px";
              var height = gnDelivery.clientHeight + parseInt(closeIcon.style.width) + prBarHeight;
              geniee_overlay.style.height = height + "px";
              geniee_overlay.getElementsByTagName("div")[0].style.height = "auto";
          }          
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];


        let app_text = "";
        if (isBannerSize.selectedIndex >= 2) app_text += app_forPC;
        app_text += app_default;
        if (isBannerSize.selectedIndex >= 2 && isCloseBtn.checked == true) app_text += app_forPC_isCloseBtn;
        if (isPRBar.checked == true) app_text += app_pr;
        if (isZoom.checked == true) app_text += app_zoom;
        if (isUpShift.checked == true) app_text += app_up_shift;
        if (isUnderSpace.checked == true) app_text += app_under_space;
        if (isBakcGroundColor.checked == true) app_text += app_bg_change_color;
        if (isInstHidden.checked == true) app_text += inst_hidden;
        if (isPreScrollHidden.checked == true) app_text += pre_scroll_hidden;
        if (isDoubleOV) app_text += app_double_setting;
        if (isOVaddXbutton.checked == true) app_text += ov_add_x_button;
        //app_text += app_text_end;

        ////////////アドソース-タグ欄の設定////////////////////////////////////////////////////////////////////////////
        let ad_tag_text = "";

        //YDNの場合
        let ad_tag_ydn = (function () {
          /*<!-- YDNアドソースのタグ欄にのみ記入する箇所 ここから -->
          <script type="text/javascript">
          window.__gn_ov_yads_params = true;
          </script>
          <!-- YDNアドソースのタグ欄にのみ記入する箇所 ここまで -->
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        //高さ変更
        if (isAdSourceIndividualHeight.checked == true) {
          AD_SOURCE_INDIVIDUAL_HEIGHT = document.getElementsByName("adsource_height")[0].value;
        }
        let ad_tag_height = (function () {
          /*<script>
          (function(window,document){
            var BANNER_WIDTH = 320;
            var a = document.getElementById("geniee_overlay");
            if(!a) a = parent.document.getElementById("geniee_overlay");
            var b = a.getElementsByTagName("iframe")[0];
            a.style.height = "*/
        }).toString().match(/\/\*([^]*)\*\//)[1] + AD_SOURCE_INDIVIDUAL_HEIGHT + (function () {
          /*px";
            if(b){
              b.height = */
        }).toString().match(/\/\*([^]*)\*\//)[1] + AD_SOURCE_INDIVIDUAL_HEIGHT + (function () {
          /*;
              b.style.height = "*/
        }).toString().match(/\/\*([^]*)\*\//)[1] + AD_SOURCE_INDIVIDUAL_HEIGHT + (function () {
          /*px";
            }
          })(window,document);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        //PRバー削除
        let ad_tag_prbar_delete = (function () {
          /*<script>
            (function(window, document){
              window.addEventListener('load', function(){
               var e = document.getElementById("gn_expand_area");
               if(!e) e = parent.document.getElementById("gn_expand_area");
               if(e) e.remove();
               var a = document.getElementById("geniee_overlay");
               if(!a) a = parent.document.getElementById("geniee_overlay");
               a.style.bottom = "0px";
              },false);
            })(window, document);
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        //ダブルオーバーレイ時の記述
        if (isDoubleOV) {
          LEFT_ADSOURCE = document.getElementsByName("double_left_adsource")[0].value;
          RIGHT_ADSOURCE = document.getElementsByName("double_right_adsource")[0].value;
        }
        let ad_tag_double_setting = (function () {
          /*<div style="float:left; clear:none; width:468px; height:60px; text-align:center; margin-right:5px;">
           */
        }).toString().match(/\/\*([^]*)\*\//)[1] + LEFT_ADSOURCE + (function () {
          /*
          </div>
          <div style="float:right; clear:none; width:468px; height:60px; text-align:center;">
          */
        }).toString().match(/\/\*([^]*)\*\//)[1] + RIGHT_ADSOURCE + (function () {
          /*
          </div>
          <script type="text/javascript">
          window.__gn_ov_pc_double_params = true;
          </script>
          */
        }).toString().match(/\/\*([^]*)\*\//)[1];

        //ad_tag_text += ad_tag_ydn;
        if (isAdSourceIndividualHeight.checked == true) ad_tag_text += ad_tag_height;
        if (isAdSourcePRDelete.checked == true) ad_tag_text += ad_tag_prbar_delete;
        if (isDoubleOV) ad_tag_text += ad_tag_double_setting;

        ////////////出力設定/////////////////////////////////////////////////////////////////////////////////////////////

        //入力不備系
        let inputError = false;

        omission_byname_custom(isDoubleOV, "double_left_adsource", "left_adsource_caution");
        omission_byname_custom(isDoubleOV, "double_right_adsource", "right_adsource_caution");

        omission_byname(isPRBar, "pr_text", "pr_text_caution");
        omission_byname(isPRBar, "pr_height", "pr_height_caution");
        omission_byname(isPRBar, "pr_font_size", "pr_font_size_caution");
        omission_byname(isPRBar, "pr_background", "pr_background_caution");
        omission_byname(isPRBar, "pr_font_color", "pr_font_color_caution");

        omission_byname(isInstHidden, "inst_area_id", "inst_area_caution");
        omission_byname(isInstHidden, "inst_close_id", "inst_close_caution");
        omission_byname(isPreScrollHidden, "pre_scroll_height", "pre_scroll_caution");
        omission_byname(isAdSourceIndividualHeight, "adsource_height", "height_setting_caution");

        omission(isBakcGroundColor, "background_color_style", "background_color_caution");

        let caution_length = document.getElementsByClassName("input_caution").length;
        for (let i = 0; i < caution_length; i++) {
          if (document.getElementsByClassName("input_caution")[i].style.display == "block") {
            inputError = true;
            break;
          }
        }

        if (inputError == true) {
          pre_text = "";
          app_text = "";
          ad_tag_text = "";
        }

        //Prepend出力
        document.getElementById("prepend_output").value = pre_text;
        //Append出力
        document.getElementById("append_output").value = app_text;
        //アドソース タグ欄出力
        document.getElementById("ad_source_output").value = ad_tag_text;

      }

      function omission(target, form, caution) {
        if (target.checked == true && document.getElementsByName(form)[0].value == "") {
          document.getElementById(caution).style.display = "block";
        } else {
          document.getElementById(caution).style.display = "none";
        }
      }

      function omission_byname(target, form, caution) {
        if (target.checked == true && document.getElementsByName(form)[0].value == "") {
          document.getElementById(caution).style.display = "block";
        } else {
          document.getElementById(caution).style.display = "none";
        }
      }

      function omission_byname_custom(target, form, caution) {
        if (target == true && document.getElementsByName(form)[0].value == "") {
          document.getElementById(caution).style.display = "block";
        } else {
          document.getElementById(caution).style.display = "none";
        }
      }

      function omission_check(target, check, caution) {
        let a = true;
        if (target.checked == true) {
          a = false;
          for (let i = 0; i < 3; i++) {
            if (document.getElementsByClassName(check)[i].checked == true) a = true;
          }
          if (a == true) document.getElementById(caution).style.display = "none";
          else document.getElementById(caution).style.display = "block";
        }
      }