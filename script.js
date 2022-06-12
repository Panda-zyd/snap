$(document).ready(function(){
    $(".features").click(function(){
      $(this).find(".fea").slideToggle();
      $(this).find(".features-image").toggleClass("img-rot");
    });
});

$(document).ready(function(){
    $(".company").click(function(){
      $(this).find(".s").slideToggle();
      $(this).find(".company-image").toggleClass("img-rot");
    });
});

$(document).on("click", function(event){
    var $trigger1 = $(".features");
    if($trigger1 !== event.target && !$trigger1.has(event.target).length){
        $(".fea").slideUp();
        $(this).find(".features-image").removeClass("img-rot");
    }            
});

$(document).on("click", function(event){
    var $trigger2 = $(".company");
    if($trigger2 !== event.target && !$trigger2.has(event.target).length){
        $(this).find(".company-image").removeClass("img-rot");
        $(".s").slideUp();
    }            
});

