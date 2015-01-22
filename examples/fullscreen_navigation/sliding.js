$(document).ready(function () {

    $("ul").initslide({
        oneItem: true //Set this for proper full screen navigation
    }); //initialize itemslide

    $(window).resize(function () {
        $("ul").reload();

    }); //Recalculate width and center positions and sizes when window is resized
});
