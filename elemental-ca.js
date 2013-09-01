var w = 600,
    gens = 800;

var c = document.getElementById('cs');
var ctx = c.getContext('2d');

var ruleset = [0,1,0,1,1,0,1,0].reverse();

var cells = [];
for (var i=0; i<w; i++) {
  cells[i] = 0;
}
cells[Math.ceil(w/2)] = 1;

function rules(l,c,r) {
  var rule = '' + l + c + r;
  return ruleset[parseInt(rule, 2)];
}

function draw(h) {
  var size=1;
  for (var i =0; i < cells.length; i++) {
    if (cells[i] === 0) {
      ctx.fillStyle = 'rgb(100,200,200)';
    } else {
      ctx.fillStyle = 'rgb(100,55,100)';
    }

    ctx.fillRect(i*size,h*size,size,size);
  }
}

function generate() {
  var newgen = [];
  for(var i=0; i < cells.length; i++) {
    l = cells[i-1];
    c = cells[i];
    r = cells[i+1];
    newgen[i] = rules(l, c, r);
  }
  cells = newgen;
}

for (var i=0; i < gens; i++) {
  draw(i);
  generate();  
}

