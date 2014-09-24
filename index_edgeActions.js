/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

    //Edge symbol: 'stage'
    (function (symbolName) {

    })("stage");
   //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'btn_video1'
    (function (symbolName) {

    })("btn_video11");
   //Edge symbol end:'btn_video11'

    //=========================================================

    //Edge symbol: 'btn_video2'
    (function (symbolName) {

    })("btn_video21");
   //Edge symbol end:'btn_video21'

    //=========================================================

    //Edge symbol: 'btn_video3'
    (function (symbolName) {

    })("btn_video31");
   //Edge symbol end:'btn_video31'

    //=========================================================

    //Edge symbol: 'app'
    (function (symbolName) {
        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function (sym, e) {
            sym.stop();
            AdobeEdge.index.getStage().getSymbol("app").getSymbol("video_viewer").stop("video1");

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function (sym, e) {
            sym.play();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_btn_video3}", "click", function (sym, e) {
            AdobeEdge.Controller.click("video3");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_btn_video2}", "click", function (sym, e) {
            AdobeEdge.Controller.click("video2");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_btn_video1}", "click", function (sym, e) {
            AdobeEdge.Controller.click("video1");

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function (sym, e) {
            sym.play();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function (sym, e) {
            sym.play();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function (sym, e) {
            sym.stop();
            AdobeEdge.Controller.playVideo("2");

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function (sym, e) {
            sym.stop();
            AdobeEdge.Controller.playVideo("3");

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${_btn_back}", "click", function (sym, e) {
            AdobeEdge.Controller.click("back");

        });
        //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.stop("home");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.stop("home");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.stop("home");

      });
      //Edge binding end

    })("app");
   //Edge symbol end:'app'

   //=========================================================
   
   //Edge symbol: 'video_viewer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49616, function(sym, e) {
         sym.stop();
         AdobeEdge.index.getStage().getSymbol("app").stop("menu1");

      });
      //Edge binding end

   })("video_viewer");
   //Edge symbol end:'video_viewer'

})(jQuery, AdobeEdge, "Index");