function pullRefresh(ele,cb,endCb) {
  let startY;
  let moveY;
  let beginY = ele.offsetTop;
  function move(e) {
    moveY = e.touches[0].pageY-startY;
    cb(beginY+moveY);
  }
  function end() {
    ele.style.transition="all .3s";
    cb(0);
    if(moveY>=80){
      endCb();
    }
    ele.removeEventListener("touchmove",move);
    ele.removeEventListener("touchend",end);
  }
  function start(e) {
    startY = e.touches[0].pageY;
    ele.addEventListener("touchmove",move,false);
    ele.addEventListener("touchend",end,false)
  }

  ele.addEventListener("touchstart",start,false)
}
export {pullRefresh};