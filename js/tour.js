$(function(){
    $('.gd').click(function(){
        $('.popup-gd').show()
    })









    /*밑에 슬라이드 */
    let currentIndex = 0;
    $(".hotelWrap").append($(".hotelList").first().clone(true));

    setInterval(function(){
        currentIndex ++;
        $('.hotelWrap').animate({marginLeft : -currentIndex * 100 +'%'}, 600)

        if(currentIndex == 1){
            setTimeout(function(){
                $('.hotelWrap').animate({marginLeft : 0}, 0)
                currentIndex = 0
            },700)
        }
    },10000)



})