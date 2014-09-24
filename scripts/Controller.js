function Controller () {
    var loadedComps = {};
    var loadCount = 1;
    var first;

    function GetURLParameter(key) {
        var pageURL = window.location.search.substring(1);
        var props = pageURL.split('&');
        for (var i = 0; i < props.length; i++) {
            var keyPair = props[i].split('=');
            if (keyPair[0] == key) {
                return keyPair[1];
            }
        }
    }

    function playVideo(videoIndex) {
        AdobeEdge.index.getStage().getSymbol("app").$("video_viewer").show();
        switch (videoIndex) {
            case 1:
                AdobeEdge.index.getStage().getSymbol("app").stop("video1");
                break;
            case 2:
                AdobeEdge.index.getStage().getSymbol("app").stop("video2");
                break;
            case 3:
                AdobeEdge.index.getStage().getSymbol("app").stop("video3");
                break;
            default:
                console.error("NO VIDEO WITH THIS INDEX: " + videoIndex);
                break;
        }
    }
    
    return {
        init: function () {
            AdobeEdge.debug = true;

            first = (GetURLParameter("first") == "true") ? true : false;

            AdobeEdge.bootstrapCallback(function (compId) {

                loadedComps[compId] = AdobeEdge.getComposition(compId);

                switch (compId.toString()) {

                    case "Index":
                        AdobeEdge.index = AdobeEdge.getComposition(compId);
                        --loadCount;
                        break;
                    default:
                        break;
                }
            });
        },

        click: function (_request, _data) {
            if (AdobeEdge.debug){
                console.log("-----REQUEST: " + _request);
            }
            switch (_request){
                case "video1":
                    playVideo(1);
                    break;
                case "video2":
                    playVideo(2);
                    break;
                case "video3":
                    playVideo(3);
                    break;
                case "back":
                    AdobeEdge.index.getStage().getSymbol("app").stop("home");
                    break;
                default:
                    console.error("NO REQUEST TYPE: " + _request);
                    break;
            }
        },

        playVideo: function (_video) {
            var vid = AdobeEdge.index.getStage().getSymbol("app").$("video_viewer");
            vid.css('text-align', 'center');
            var htmlStr = "<video width='100%' height='100%' controls id='videoPlayer'>";
            htmlStr += "<source src='media/" + _video + "' type='video/mp4'>";
            htmlStr += "Your browser does not support the video tag.</video>";
            vid.html(htmlStr);

            if (AdobeEdge.debug){
                console.log(vid);
                console.log(htmlStr);
            }
        }
    }
}