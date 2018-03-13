function randomPalette() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    return [R, G, B];
}


function generateRules() {

    var elementsArray = document.getElementsByClassName("color-view");
    var randomRGBArray = randomPalette();
    var hsvArray = rgbToHsv(randomRGBArray[0], randomRGBArray[1], randomRGBArray[2]);
    var hue = Math.random();

    var colorCodesArray = [];

    for (var i = 0; i < elementsArray.length; i++) {
        hue = hue + (1 / elementsArray.length);
        (hue >= 1) ? hue = (Math.random() / elementsArray.length) : hue = hue;
        var rgbMod = hsvToRgb(hue, hsvArray[1], hsvArray[2])
        elementsArray[i].style.backgroundColor = colorArrayToString(rgbMod);
        colorCodesArray.push(colorArrayToString(rgbMod));
    }
    
    writeCSSRules(colorCodesArray);
}

function clearPalette() {
    location.reload();
}

function writeCSSRules(colorArray) {
    var textArea = document.getElementById('css-rules');
    var code = "\n.website-background{ color: " + colorArray[0] + ";} \n";
    code = code + "\n.element-text{ color: " + colorArray[1] + ";} \n";
    code = code + "\n.element-border{ border-color: " + colorArray[2] + ";} \n";
    code = code + "\n.element-background{ background-color: " + colorArray[3] + ";} \n";
    code = code + "\n.header{ color: " + colorArray[4] + ";}";
    textArea.innerText = code;
}

function colorArrayToString(colorArray) {
    return "#" + Math.round(colorArray[0]).toString(16).toUpperCase()
        + Math.round(colorArray[1]).toString(16).toUpperCase()
        + Math.round(colorArray[2]).toString(16).toUpperCase();
}

