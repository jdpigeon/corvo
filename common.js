//Copyright 2016 Christian Battista, PhD
//Stanford Cognitive and Systems Neuroscience Lab

//UTILITY FUNCTIONS
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}

function makeSVG(circles){
	output = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"350\" height=\"600\">";
	for (i=0;i<circles.length;i++)  {
		output += "<circle cx=" + circles[i][0]/2 + " cy=" + circles[i][1]/2 + " r=" + circles[i][2]/2 + " fill=blue />";
	}
	output += "</svg>";
	return output;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function jsonToHTML(data) {
	output = "";
	for (var key in data) {
		output += key + ": " + data[key] + "<br/>";
	}
	return output;
}

function clamp(value, mi, ma) {
	if ((value >= mi) && (value >= ma)) {
		return value;
	}
	else {
		return Math.floor((Math.random()* ma)+1);
	}

}

function range(i) {
	var r = Array.apply(null, Array(i)).map(function (_, i) {return i;});;
	return r;
}

window.mobileAndTabletcheck = function() {
  var check = true;
  return check;
};
