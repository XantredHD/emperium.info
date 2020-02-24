/*HAHA FUNNY*/
console.log("Emperium On Top");


/*When you scroll on rhe page these functions are called*/
window.onscroll = function()
{
    onScroll();
};



function onScroll()
{

    /* Emperium Icon Animation
     * We need to size of the page to display the icon correctly
     * The rate at which it disappears is based on a quadratic equation
     *
     */
    var scrollTop = document.documentElement.scrollTop;
    var viewHeight = document.documentElement.clientHeight;
    var maxIconSize = viewHeight * 0.75;
    var animationCutOff = viewHeight * 0.50;
    if (document.documentElement.scrollTop < 10)
    {
        document.getElementById("mainIcon").style.height = "" + maxIconSize + "px";
    }

    if (document.documentElement.scrollTop < animationCutOff && document.documentElement.scrollTop > 10)
    {
        /*Follows the equation -0.015x^2 + maxSize*/
        var calcHeight = -0.0015 * Math.pow(document.documentElement.scrollTop, 2);
        calcHeight += maxIconSize;
        console.log(calcHeight);
        document.getElementById("mainIcon").style.height = "" + calcHeight + "px";
    }

    if (document.documentElement.scrollTop > animationCutOff)
    {
        document.getElementById("mainIcon").style.height = "" + 0 + "px";
    }

};