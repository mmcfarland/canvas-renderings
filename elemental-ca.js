Cell = function(opts) {
    this.opts = opts || {};
    this._w = this.opts.width || 600;
    this._gens = this.opts.width ||800;

    this.c = document.getElementById('cs');
    this.ctx = c.getContext('2d');

    this._ruleset = [0,1,0,1,1,0,1,0].reverse();
    this._cells = [];

    for (var i=0; i<this._w; i++) {
      this._cells[i] = 0;
    }
    this._cells[Math.ceil(this._w/2)] = 1;
};

Cell.prototype.rules = function(l,c,r) {
     var rule = '' + l + c + r;
     return ruleset[parseInt(rule, 2)];
}

Cell.prototype.draw = function(h) {
    var size = this.opts.size || 1;
    for (var i =0; i < this._cells.length; i++) {
      if (this._cells[i] === 0) {
        this.ctx.fillStyle = 'rgb(100,200,200)';
      } else {
        this.ctx.fillStyle = 'rgb(100,55,100)';
      }

      this.ctx.fillRect(i*size,h*size,size,size);
  }
}

Cell.prototype.generate = function() {
    var newgen = [],
        end = this._cells.length -1;
    
    for(var i=0; i <= end ; i++) {
      l = i === 0 ? 0 : this._cells[i-1];
      c = cells[i];
      r = i === end ? end : this._cells[i+1];
      newgen[i] = this.rules(l, c, r);
    }
    this._cells = newgen;
}

Cell.prototype.renderComplete = function() {
    for (var g=0; g < this._gens; g++) {
      this.draw(g);
      this.generate();  
    }
}
