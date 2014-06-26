/**
 * @fileoverview This is the custom form elelemt library for Adobe Muse.
 *     MIT (http://www.opensource.org/licenses/mit-license.php) licensed.
 * @author toumai
 */
(function($){
  $.fn.CustomFormItems = function(items){
    var target = $(this);
    var items = $.extend({}, items);
    var utiles = createUtiles();

    // set hidden mode
    $.each(items,  function(){
      $(this.id+" input").css('display', 'none');
    });

    // set type
    $.each(items,  function(){
      if(this.id) { // for legacy IE
        var item = $("*[name="+this.name+"]")[0];
        if(item.tagName == 'SELECT') {
           this.type = "select";
        } else if (item.tagName == 'INPUT') {
          this.type = item.type;
        }
      }
    });

    // change default submit event
    setTimeout(function(){
      // unbind submit event of the form
      var submit = jQuery._data(target.get(0)).events.submit[0].handler;
      jQuery(target).unbind("submit", submit);

      // submit button event
      target.bind("submit", function(e) {
        // set value on hidden text node
        $.each(items,  function(){
          if(this.id) { // for legacy IE
            $(this.id+" input").val(utiles[this.type].val(this));
          }
        });

        // call submit event of form
        submit.apply(target, arguments);

        // set items color of input label
        $.each(items,  function(){
          if(this.id) { // for legacy IE
            utiles[this.type].label(this).css('color', $(this.id+" input").css('color'));
          }
        });
      });
    }, 0);

    // items change event
    $.each(items,  function(){
      if(this.id) { // for legacy IE
        var hidden_item = $(this.id+" input");
        var events = { 1:"keydown", 2:"keyup" };
        var that = this;
        utiles[this.type].get(this).change( function() {
          hidden_item.val(utiles[that.type].val(that));
          var args = arguments;
          $.each(events,  function(i, val){
            var e = jQuery._data(hidden_item.get(0)).events[val];
            if(e && e.length) {
               e[0].handler.apply(hidden_item, args);
            }
          });
          utiles[that.type].label(that).css('color', $(that.id+" input").css('color'));
        });
      }
    });

    /**************************************************
     * function createUtiles
     **************************************************/
    function createUtiles() {
      var utiles = {};

      utiles.radio          = function(item) { return 'input[name="'+item.name+'"]:radio'; };
      utiles.radio.get      = function(item) { return $(utiles.radio(item)); };
      utiles.radio.val      = function(item) { return $(utiles.radio(item)+':checked').val(); };
      utiles.radio.label    = function(item) { return $(utiles.radio(item)).next(); };

      utiles.select         = function(item) { return 'select[name="'+item.name+'"]'; };
      utiles.select.get     = function(item) { return $(utiles.select(item)); };
      utiles.select.val     = function(item) { return $(utiles.select(item)).val(); };
      utiles.select.label   = function(item) { return $(utiles.select(item)); };

      utiles.checkbox       = function(item) { return 'input[name="'+item.name+'"]:checkbox'; };
      utiles.checkbox.get   = function(item) { return $(utiles.checkbox(item)); };
      utiles.checkbox.val   = function(item) {
        var ret = [];
        $(utiles.checkbox(item)+':checked').each(function(){ ret.push($(this).val()); });
        return ret;
      };
      utiles.checkbox.label = function(item) { return $(utiles.checkbox(item)).next(); };

      return utiles;
    }

    return this;
  }
})(jQuery);