(function () {

 // forEach function
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
  }
}

// select all slider parent div.tartist-tiny-slider
var sliders = document.querySelectorAll('.tartist-tiny-slider');

// chunk function to make groups for every slider's childrens
var chunk = function ( array, size ) {
  let arr = [];
  for ( let i = 0; i < array.length; i += size ) {
      let newSlicedArray = Array.prototype.slice.call( array, i, i + size );
      arr.push(newSlicedArray);
  }
  return arr;
}

// applying foreach function to the sliders
forEach(sliders, function (index, value) {

  //selecting childrens
  let childrens = value.querySelectorAll(".tartist-tiny-slider__item");

  //getting chunksize from the parent
  let chunkSize = value.dataset.chunksize;

  //making final arrays for the children with chunk size
  let final = chunk( childrens, parseInt(chunkSize) );

  //wrapping the chunks with div.wrap
  let newHTML = final.map( towrap => towrap.reduce( (acc, el) => (acc.appendChild(el),acc) , document.createElement('div') ) ).forEach( el => {
      el.className ="wrap";
      value.appendChild(el)
  })

  //initialize tiny slider    
  let slider = tns({
      container: value,
      items: 1,
      slideBy: "page",
      autoplay: true,
      autoplayButtonOutput: false,
      loop: true,
      mouseDrag: true,
      gutter: 20,
      controls: false,
      navPosition: "bottom",
      nav: false,
      responsive: {
              350: {
                items: 1
              },
            },
  });

});
})();