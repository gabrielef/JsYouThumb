function JsYouThumb(id) {
    var id = id;

    var class_prefix = 'jsyouthumb';
    var class_glue = '_';

    var youTubePath = 'http://img.youtube.com/vi';
    var youTubeThumbExt = 'jpg';

    var defaultQualityKey = 'normal';
    var qualityArray = {
                        "normal" : "default",
                        "high" : "hqdefault",
                        "middle" : "mqdefault",
                        "standard" : "sddefault",
                        "max" : "maxresdefault",
                        "player" : "0",
                        "start" : "1",
                        "middle" : "2",
                        "end" : "3"
                        };

    /* getter setter */
    this.setId = function(id) {
        id = id;
        return this;
    }

    this.getId = function() {
        return id;
    }

    /* default thumbnail */
    this.getUrl = function (format){
        return getYouTubeThumbUrl(getQuality(format));
    }

    this.getImg = function (format){
        return getYouTubeThumbImage(getQuality(format));
    }

    /* private method */
    function getQuality(key){
        var quality = qualityArray[key];
        if(!(typeof quality != 'undefined')){
            quality = qualityArray[defaultQualityKey];
        }
        return quality;
    }

    function getThumbClass(format){
        return class_prefix + class_glue + id + class_glue + format;
    }

    function getYouTubeThumbUrl(format){
        return youTubePath + '/' + id + '/' + format + '.' + youTubeThumbExt;
    }

    function getYouTubeThumbImage(format){
        return '<img class="' + class_prefix + ' ' + getThumbClass(format) + '" src="' + getYouTubeThumbUrl(format) + '" />';
    }
}