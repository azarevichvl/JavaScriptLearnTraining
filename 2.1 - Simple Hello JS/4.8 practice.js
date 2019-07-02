var obj = { className: 'open mymenu' };

addClass(obj, "open");
alert(obj.className);

function addClass(obj, clsStr){
    if ( Object.keys(obj).indexOf("className") == -1) return;
    var splitedClasses = obj.className.split(" ");
    if (splitedClasses.indexOf(clsStr) != -1) return;
    splitedClasses.push(clsStr);
    obj.className = splitedClasses.join(" ");
}