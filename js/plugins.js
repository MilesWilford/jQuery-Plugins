// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// The following plugins were all made by Miles Wilford

/*
 * This plugin checks a grouping of anchor tags and adds the css class
 * "currentPage" to any anchor tags that represent the current page
 *
 * Make sure you define .currentPage appropriately in your CSS
 */
(function( $ ) {
  $.fn.markCurrentPage = function() {
    var pageUrl = window.location.pathname;
    return this.each(function() {
        var $this = $(this);

        // If it's not an anchor, we aren't interested
        if (!$this.is('a')) {
            return false;
        }

        // Get our anchor's href
        var link = this.href;

        // If the URL has /'s in it, we only want the last piece
        var filename = link.split('/').pop();

        /*
         * If window.location.pathname ends in a '/' or contains a /? we can assume this
         * is an index page.  If filename represents an index page, then go ahead and add
         * filename to pageUrl so things pan out nicely.
         */
        if ((pageUrl.substr(pageUrl.length - 1, 1) == '/' || pageUrl.indexOf('/?') != -1)
            && filename.indexOf('index') != -1) {
                pageUrl += filename;
        }

        // Now check if the current pageUrl contains the filename from the link's href
        if (pageUrl.indexOf(filename) != -1) {
            $this.addClass('currentPage');
        }
    });
  };
})( jQuery );

// Same as above, but packed with Packer 3.0
(function($){$.fn.markCurrentPage=function(){var d=window.location.pathname;return this.each(function(){var a=$(this);if(!a.is('a')){return false}var b=this.href;var c=b.split('/').pop();if((d.substr(d.length-1,1)=='/'||d.indexOf('/?')!=-1)&&c.indexOf('index')!=-1){d+=c}if(d.indexOf(c)!=-1){a.addClass('currentPage')}})}})(jQuery);

