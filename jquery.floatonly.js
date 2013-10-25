(function($) {                                                                                                                                                                                  
  $.fn.floatonly = function(options) {                                                                                                                                                          
    if (!this.is('input[type="text"]'))                                                                                                                                                         
      return;                                                                                                                                                                                   
                                                                                                                                                                                                
    this.on('keypress', function(event) {                                                                                                                                                       
      if ((event.which != 46 || $(this).val().indexOf('.') != -1) &&                                                                                                                            
          (event.which < 48 || event.which > 57) &&                                                                                                                                             
          event.which != 13) {                                                                                                                                                                  
        event.preventDefault();                                                                                                                                                                 
      }                                                                                                                                                                                         
    });                                                                                                                                                                                         
  };                                                                                                                                                                                            
})(jQuery);
