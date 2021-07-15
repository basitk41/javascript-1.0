const isLanscape = (width, height)=>{
    if(width>height) return true;
    return false;
}
document.write(isLanscape(10,30))