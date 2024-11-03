/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "G Music (OG)", this.version = "2", this.date = "2013", this.folder = "asset-v2/", this.looptime = 4800, this.bpm = 139, this.totalframe = 232, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 38, this.recminloop = 5, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#5c5c5c", this.col0 = "#919191", this.col1 = "#cccccc", this.col2 = "#4f4f4f", this.col3 = "#d9d9d9", this.col4 = "#666666", this.animearray = [{
        name: "b0-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "b1-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "b2-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "b3-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "b4-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "b5-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "b6-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "b7-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "b8-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "e0-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "e1-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "e2-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "e3-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "v0-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "v1-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "v2-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "v3-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "v4-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "v5-og",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "v6-og",
        color: "828282",
        uniqsnd: !0
    }], this.bonusarray = [/*G MUSIC has no bonuses at all */];
    for (var o = 0, n = this.animearray.length; o < n; o++) {
        var i = this.animearray[o].name;
        this.animearray[o].soundA = i + "_a", this.animearray[o].soundB = this.animearray[o].uniqsnd ? i + "_a" : i + "_b", this.animearray[o].anime = i + "-sprite.png", this.animearray[o].animeData = i + ".json"
    }
};