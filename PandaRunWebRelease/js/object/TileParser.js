var TileParser=function(){function t(){this.startX=0,this.hasMagnent=!1,this.hasShield=!1}return t.prototype.start=function(t){this.itemPlace=t},t.prototype.parse=function(t,e){this.hasMagnent=!1,this.hasShield=!1,this.startX=e;for(var a=0;a<t.layers.length;a++)this.parseLayer(t.layers[a]);return e+64*t.width},t.prototype.parseLayer=function(t){"tilelayer"==t.type?this.parseTileLayer(t):"objectgroup"==t.type&&this.parseObjectLayer(t)},t.prototype.parseTileLayer=function(t){for(var e=t.data,a=t.width,r=0;r<e.length;r++){var s=e[r];if(0!=s){var o=Math.floor(r%Math.floor(a)),l=Math.floor(r/a),i=this.createItemById(s);null!=i&&(i.pos(this.startX+64*o,64*l),$game.itemManager.append(i))}}},t.prototype.parseObjectLayer=function(t){for(var e=0;e<t.objects.length;e++){var a=t.objects[e],r=this.createItemById(a.gid);if(null!=r){$game.itemManager.append(r);var s=this.startX+a.x,o=a.y-a.height;r.pos(s,o)}}},t.prototype.createItemById=function(t){var e;if(t<=8)Math.floor(t)%2==1&&Math.random()<.2&&(t+=1),(e=Pool.getItemByClass("Floor",Floor)).start(t);else if(9==t){var a=Math.random();a<.005&&!this.hasMagnent?(e=Pool.getItemByClass("Magnent",Magnent),this.hasMagnent=!0):a<.01&&!this.hasShield?(e=Pool.getItemByClass("Shield",Shield),this.hasShield=!0):e=Pool.getItemByClass("Coin",Coin)}else 11==t?e=Pool.getItemByClass("Stab",Stab):10==t&&(e=Math.random()<.5?Pool.getItemByClass("Ball1",Ball1):Pool.getItemByClass("Ball2",Ball2));return e},t}();