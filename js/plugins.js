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
 * This plugin checks a pile of anchor tags and adds the css class
 * "currentPage" to any anchor tags that represent the current page
 *
 * Make sure you define .currentPage appropriately in your CSS
 */
(function( $ ) {
  $.fn.markCurrentPage = function() {
    var pageUrl = window.location.pathname;
    return this.each(function() {
        var $this = $(this);
        if (!$this.is('a')) {
            return false;
        }
        var link = this.href;
        // If the URL has /'s in it, we only want the last piece
        var filename = link.split('/').pop();

        /*
         * If window.location.pathname ends in a '/' or contains a /? we can assume this
         * is an index page.  If filename represents an index page, then go ahead and add
         * filename to pageUrl so things pan out nicely.
         */
        if ((pageUrl.substr(pageUrl.length - 1, 1) == '/'
        || pageUrl.indexOf('/?') != -1)
        && filename.indexOf('index') != -1) {
                pageUrl += filename;
        }

        if (pageUrl.indexOf(filename) != -1) {
            $this.addClass('currentPage');
        }
    });
  };
})( jQuery );