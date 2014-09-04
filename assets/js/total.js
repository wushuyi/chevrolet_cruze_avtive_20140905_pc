$(document).ready(function(){
    window.totalE = window.totalE || {};
    mz.pgName = "PC端-经典科鲁兹官网";
    mz.pv(mz.pgName + '-首页');
    $('#top .cruzeLogo').on('click', function(e){
        mz.event(mz.pgName + '-科鲁兹logo');
    });
    $('#top .chevroletLogo').on('click', function(e){
        mz.event(mz.pgName + '-雪佛兰logo');
    });
    $('#run3').on('click', function(e){
        mz.event(mz.pgName + '-首页-配置价格');
    });
    $('#bt .nav1').on('click', function(e){
        mz.event(mz.pgName + '-新款科鲁兹');
    });
    $('#bt .nav2').on('click', function(e){
        mz.event(mz.pgName + '-科鲁兹掀背车');
    });
    $(window.totalE).bind('tryBefore', function(e, data){
        mz.event(mz.pgName + '-立即申请');
    });
    $(window.totalE).bind('trySuccess', function(e, data){
        mz.event(mz.pgName + '-立即申请-成功页面');
        mz.trycar(data.name, data.phone , data.record_id);
    });
});