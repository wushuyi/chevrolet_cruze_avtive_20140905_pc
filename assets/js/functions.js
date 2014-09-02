(function ($) {
    $cache = {};
    $(document).ready(function () {
        // 禁止拖动img元素
        $(document.images).on('dragstart', function(e){
            return false;
        });
        // 输入框 提示信息 兼容性处理
        $("input[tipMsg]").each(function() {
            var $self = $(this);
            if ($self.val() == "") {
                var oldVal = $self.attr("tipMsg");
                if ($self.val() == "") {
                    $self.attr("value", oldVal).addClass('tip');
                }
                $self.addClass('tip').focus(function() {
                    if ($self.val() != oldVal) {
                        $self.removeClass('noTip');
                    } else {
                        $self.val("").addClass('tip');
                    }
                }).blur(function() {
                    if ($self.val() == "") {
                        $self.val(oldVal).addClass('tip');
                    }
                }).keydown(function() {
                    $self.removeClass('tip');
                });
            }
        });

        $cache.loading = $('#loading');
        $cache.run1 = $('#run1');
        $cache.run2 = $('#run2');
        $cache.run3 = $('#run3');

        $cache.run1.css({
            right: '-200px',
            opacity: '0'
        });
        $cache.run2.css({
            right: '250px',
            opacity: '0'
        });
        $cache.run3.css({
            right: '-100px',
            opacity: '0'
        });
    });
     $(window).load(function() {
         $cache.loading.hide();
         $cache.run1.animate({
             right: '0',
             opacity: '1'
         }, 200 , function(){
             $cache.run2.animate({
                 right: '0',
                 opacity: '1'
             }, 200, function(){
                 $cache.run3.animate({
                     right: '0',
                     opacity: '1'
                 }, 200);
             });
         });
     });
     $(window).resize(function() {

     });
})(window.jQuery);