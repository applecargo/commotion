// --> http://sketch.paperjs.org/#S/dVI9T8MwEP0rVpaAmkKLVIqMmNiYEAwMbQfjHHWU1Ea2QxKq/nfOcewmCLI477378DvfMZHsAAlNXkuwXCRZwlXu8BfThKtKafJA0kYUFtKtdKQ2xTcgeXt37wneIlouFgF2E2gbB5cRCoTriFpjmbZIYZE5xl7fRAVk7vnZhBcxo8OMVaSH8M6Fi5Gipy3628dqetzllzRt1ItRCs2QkNCQZ2bFxXErCX4G9geQ1lAPN/7ofwe3WTCxy0YibzPvYsL2YzgneCVE8EoZyCmxuoaB+iiq6tG9GvWPN9DGalXCW5FbQcl6Qv4b/aQKSUmqVS3zFJXT5dns1Qtwy+S+gmBbs7yoDSWrocYnZltKNjp4DvOc424EA26mLsad2bBYs5H+hxt3C1zSdw2s7HuYhG52px8=

var color = 'white'
var rsize = 68;
var cx = 100;
var cy = 100;
var tw = 110;
var th = 70;
var txstart = cx - tw/2;
var txend = cx + tw/2;
var thstart = cy - 5;
var thend = cy + th - 5;
var rxstart = cx - rsize/2;
var rxend = cx + rsize/2;
var rhstart = cy - rsize;
var rhend = cy;
new Path({
    segments:
    [
        [txstart, thstart],
        [cx, thend],
        [txend, thstart]
    ],
    closed: true,
    fillColor: color,
    strokeWidth: 7,
    strokeColor: color,
    strokeJoin: 'round',
})
new Path.Rectangle({
    radius: 5,
    point: [rxstart, rhstart - 10],
    size: [rsize, rsize + 10],
    fillColor: color,
})
