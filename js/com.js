$(function () {
    var index = 0;
    $(".banner em:eq(0)").on("click", function () {
        index--
        if (index == -1) {
            index = 3
        }
        $(".pic li").eq(index).stop().show().siblings("li").stop().hide()
    })
    $(".banner em:eq(1)").on("click", function () {
        index++
        if (index == 4) {
            index = 0
        }
        $(".pic li").eq(index).stop().show().siblings("li").stop().hide()
    })
    var timer = setInterval(function () {
        $(".banner em:eq(1)").click()
    }, 3000)
})