(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"春燈_atlas_1", frames: [[0,489,333,317],[335,489,82,233],[513,0,79,433],[0,0,511,487]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["春燈_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈籠, new cjs.Rectangle(0,0,166.5,158.5), null);


(lib.流蘇 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 流蘇
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.流蘇, new cjs.Rectangle(0,0,41,116.5), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,39.5,216.5), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.7,-280.1,0.9996,0.9996,16.6773,0,0,39,-0.5);

	this.ikNode_2 = new lib.燈籠();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-169.7,-84.05,0.9996,0.9996,11.4499,0,0,86,3.5);

	this.ikNode_4 = new lib.流蘇();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-203.25,67.5,0.9997,0.9997,-5.4823,0,0,18.9,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9997,scaleY:0.9997,rotation:-5.4823,x:-203.25,y:67.5}},{t:this.ikNode_2,p:{rotation:11.4499,x:-169.7,y:-84.05,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:16.6773,y:-280.1,regX:39,x:-69.7,regY:-0.5}}]}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.3554,x:-199.55,y:69}},{t:this.ikNode_2,p:{rotation:11.047,x:-167,y:-82.75,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:15.9166,y:-279.95,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.228,x:-195.85,y:70.5}},{t:this.ikNode_2,p:{rotation:10.6418,x:-164.4,y:-81.5,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:15.156,y:-279.95,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.0997,x:-192.15,y:71.9}},{t:this.ikNode_2,p:{rotation:10.2371,x:-161.7,y:-80.2,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:14.3971,y:-280,regX:38.9,x:-69.9,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.9725,x:-188.4,y:73.3}},{t:this.ikNode_2,p:{rotation:9.8329,x:-159.1,y:-79,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:13.6353,y:-279.95,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.8443,x:-184.65,y:74.65}},{t:this.ikNode_2,p:{rotation:9.4284,x:-156.4,y:-77.95,regY:3.4,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:12.8751,y:-280,regX:39,x:-69.7,regY:-0.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.7171,x:-180.85,y:75.95}},{t:this.ikNode_2,p:{rotation:9.0252,x:-153.7,y:-76.65,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:12.1162,y:-280.05,regX:38.9,x:-69.8,regY:-0.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.589,x:-177.1,y:77.25}},{t:this.ikNode_2,p:{rotation:8.6207,x:-150.95,y:-75.55,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:11.355,y:-279.95,regX:39,x:-69.8,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.4626,x:-173.25,y:78.5}},{t:this.ikNode_2,p:{rotation:8.2157,x:-148.25,y:-74.45,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.5948,y:-279.95,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.3344,x:-169.45,y:79.65}},{t:this.ikNode_2,p:{rotation:7.8129,x:-145.6,y:-73.45,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.8359,y:-279.9,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.2072,x:-165.6,y:80.8}},{t:this.ikNode_2,p:{rotation:7.4071,x:-142.8,y:-72.4,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.0751,y:-279.9,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.0793,x:-161.8,y:81.9}},{t:this.ikNode_2,p:{rotation:7.0042,x:-140.05,y:-71.5,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.315,y:-280,regX:38.9,x:-69.85,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9521,x:-157.95,y:82.95}},{t:this.ikNode_2,p:{rotation:6.5999,x:-137.25,y:-70.5,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.5546,y:-279.9,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.825,x:-154.1,y:84}},{t:this.ikNode_2,p:{rotation:6.1958,x:-134.5,y:-69.65,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:6.7947,y:-279.9,regX:39,x:-69.8,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.6961,x:-150.25,y:84.95}},{t:this.ikNode_2,p:{rotation:5.7904,x:-131.8,y:-68.85,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.0351,y:-279.9,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.5682,x:-146.3,y:85.85}},{t:this.ikNode_2,p:{rotation:5.3861,x:-128.85,y:-68.05,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.273,y:-279.9,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.442,x:-142.45,y:86.75}},{t:this.ikNode_2,p:{rotation:4.9831,x:-126,y:-67.25,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.5136,y:-279.9,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.3141,x:-138.5,y:87.55}},{t:this.ikNode_2,p:{rotation:4.5784,x:-123.2,y:-66.5,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.7541,y:-279.85,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.1853,x:-134.55,y:88.35}},{t:this.ikNode_2,p:{rotation:4.174,x:-120.35,y:-65.75,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.9936,y:-279.85,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.0583,x:-130.65,y:89.1}},{t:this.ikNode_2,p:{rotation:3.7707,x:-117.5,y:-65.15,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.2327,y:-279.9,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.9305,x:-126.7,y:89.8}},{t:this.ikNode_2,p:{rotation:3.365,x:-114.65,y:-64.45,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.4731,y:-279.85,regX:38.9,x:-69.9,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.8026,x:-122.75,y:90.45}},{t:this.ikNode_2,p:{rotation:2.9611,x:-111.8,y:-63.9,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.7129,y:-279.85,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.6756,x:-118.8,y:91.05}},{t:this.ikNode_2,p:{rotation:2.5575,x:-108.9,y:-63.35,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.042,y:-279.85,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.5487,x:-114.85,y:91.6}},{t:this.ikNode_2,p:{rotation:2.1539,x:-106.05,y:-62.85,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.803,y:-279.85,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.4209,x:-110.85,y:92.15}},{t:this.ikNode_2,p:{rotation:1.7496,x:-103.2,y:-62.4,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.5641,y:-279.8,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.2922,x:-106.8,y:92.6}},{t:this.ikNode_2,p:{rotation:1.3445,x:-100.25,y:-61.95,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.3228,y:-279.85,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.1653,x:-102.85,y:93.05}},{t:this.ikNode_2,p:{rotation:0.9403,x:-97.35,y:-61.6,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.0838,y:-279.8,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.0375,x:-98.85,y:93.45}},{t:this.ikNode_2,p:{rotation:0.5353,x:-94.65,y:-61.25,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.8444,y:-279.8,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.9097,x:-94.85,y:93.75}},{t:this.ikNode_2,p:{rotation:0.1321,x:-91.55,y:-60.9,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.604,y:-279.85,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.7828,x:-90.85,y:94.05}},{t:this.ikNode_2,p:{rotation:-0.2668,x:-88.8,y:-60.6,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.3644,y:-279.75,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.6559,x:-86.85,y:94.3}},{t:this.ikNode_2,p:{rotation:-0.6717,x:-85.75,y:-60.35,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-6.1247,y:-279.8,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.5282,x:-82.9,y:94.5}},{t:this.ikNode_2,p:{rotation:-1.0767,x:-82.85,y:-60.1,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.8845,y:-279.8,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.3995,x:-78.85,y:94.6}},{t:this.ikNode_2,p:{rotation:-1.4809,x:-79.85,y:-59.95,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-7.6446,y:-279.8,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.2718,x:-74.85,y:94.7}},{t:this.ikNode_2,p:{rotation:-1.8843,x:-77.1,y:-59.85,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-8.4052,y:-279.8,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.145,x:-70.9,y:94.7}},{t:this.ikNode_2,p:{rotation:-2.2896,x:-74.05,y:-59.85,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-9.1655,y:-279.8,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.1117,x:-72.65,y:94.75}},{t:this.ikNode_2,p:{rotation:-2.3351,x:-76.05,y:-59.8,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-8.6537,y:-279.75,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.0776,x:-74.5,y:94.6}},{t:this.ikNode_2,p:{rotation:-2.3841,x:-77.95,y:-59.9,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-8.1436,y:-279.75,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.0444,x:-76.35,y:94.5}},{t:this.ikNode_2,p:{rotation:-2.4314,x:-79.9,y:-59.95,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-7.6313,y:-279.8,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.0094,x:-78.15,y:94.45}},{t:this.ikNode_2,p:{rotation:-2.4786,x:-81.95,y:-60.1,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-7.1197,y:-279.8,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.9762,x:-80,y:94.3}},{t:this.ikNode_2,p:{rotation:-2.525,x:-83.85,y:-60.2,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-6.6088,y:-279.8,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.942,x:-81.85,y:94.15}},{t:this.ikNode_2,p:{rotation:-2.5741,x:-85.8,y:-60.35,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.0984,y:-279.8,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.9088,x:-83.7,y:94.05}},{t:this.ikNode_2,p:{rotation:-2.6213,x:-87.95,y:-60.5,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.5866,y:-279.75,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.8755,x:-85.5,y:93.8}},{t:this.ikNode_2,p:{rotation:-2.6677,x:-89.85,y:-60.7,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.0745,y:-279.75,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.8423,x:-87.4,y:93.6}},{t:this.ikNode_2,p:{rotation:-2.7159,x:-91.8,y:-60.8,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.5636,y:-279.75,regX:39,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.8091,x:-89.15,y:93.45}},{t:this.ikNode_2,p:{rotation:-2.7632,x:-93.8,y:-61.1,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.0523,y:-279.75,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.775,x:-91,y:93.2}},{t:this.ikNode_2,p:{rotation:-2.8113,x:-95.7,y:-61.25,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.5421,y:-279.75,regX:38.9,x:-69.8,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.7417,x:-92.8,y:92.9}},{t:this.ikNode_2,p:{rotation:-2.8578,x:-97.65,y:-61.55,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.0304,y:-279.75,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.7067,x:-94.6,y:92.7}},{t:this.ikNode_2,p:{rotation:-2.906,x:-99.55,y:-61.75,regY:3.5,regX:85.9}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.5181,y:-279.75,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.6735,x:-96.4,y:92.4}},{t:this.ikNode_2,p:{rotation:-2.9533,x:-101.4,y:-62.1,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.0078,y:-279.75,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.6394,x:-98.25,y:92.1}},{t:this.ikNode_2,p:{rotation:-3.0006,x:-103.35,y:-62.3,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.4967,y:-279.7,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.6061,x:-100.05,y:91.8}},{t:this.ikNode_2,p:{rotation:-3.0487,x:-105.25,y:-62.65,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.9849,y:-279.7,regX:39,x:-69.6,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.5729,x:-101.85,y:91.4}},{t:this.ikNode_2,p:{rotation:-3.0951,x:-107.2,y:-62.95,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.4732,y:-279.7,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.5397,x:-103.65,y:91.05}},{t:this.ikNode_2,p:{rotation:-3.1424,x:-109.2,y:-63.3,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.0332,y:-279.75,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.5055,x:-105.45,y:90.8}},{t:this.ikNode_2,p:{rotation:-3.1906,x:-111.05,y:-63.65,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.544,y:-279.75,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.4723,x:-107.25,y:90.35}},{t:this.ikNode_2,p:{rotation:-3.2379,x:-113.05,y:-64.05,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.0558,y:-279.75,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.4382,x:-109.05,y:89.9}},{t:this.ikNode_2,p:{rotation:-3.2852,x:-114.95,y:-64.4,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.5676,y:-279.75,regX:38.9,x:-69.75,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.4041,x:-110.85,y:89.55}},{t:this.ikNode_2,p:{rotation:-3.3334,x:-116.85,y:-64.9,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.0796,y:-279.75,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.3709,x:-112.6,y:89.1}},{t:this.ikNode_2,p:{rotation:-3.3807,x:-118.85,y:-65.25,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.5899,y:-279.75,regX:39,x:-69.65,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.3376,x:-114.45,y:88.6}},{t:this.ikNode_2,p:{rotation:-3.4272,x:-120.7,y:-65.7,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.1014,y:-279.7,regX:39,x:-69.7,regY:-0.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:-0.3044,x:-116.2,y:88.2}},{t:this.ikNode_2,p:{rotation:-3.4753,x:-122.6,y:-66.15,regY:3.5,regX:86}},{t:this.ikNode_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.6131,y:-279.7,regX:39,x:-69.6,regY:-0.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.7,-290.8,297.3,497.9);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-69.8,-280,0.9988,0.9988,-38.8363,0,0,39.5,-0.5);

	this.ikNode_2 = new lib.燈籠();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(33.85,-86.6,0.9987,0.9987,-29.384,0,0,85,2.8);

	this.ikNode_4 = new lib.流蘇();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(109.4,49.95,0.999,0.999,-14.8231,0,0,19.9,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{scaleX:0.999,scaleY:0.999,rotation:-14.8231,x:109.4,y:49.95,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-29.384,x:33.85,y:-86.6,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9988,scaleY:0.9988,rotation:-38.8363,y:-280,x:-69.8,regY:-0.5,regX:39.5}}]}).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.6905,x:105.35,y:52.15,regY:4.5}},{t:this.ikNode_2,p:{regY:2.7,rotation:-28.8058,x:31.3,y:-85.25,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-38.0327,y:-279.95,x:-69.8,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.5582,x:101.2,y:54.25,regY:4.5}},{t:this.ikNode_2,p:{regY:2.7,rotation:-28.2292,x:28.65,y:-83.85,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-37.2262,y:-279.95,x:-69.7,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.4254,x:96.95,y:56.3,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-27.6508,x:25.85,y:-82.3,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-36.4213,y:-279.8,x:-69.7,regY:-0.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.2925,x:92.75,y:58.35,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-27.074,x:23.15,y:-81.05,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-35.6158,y:-279.85,x:-69.7,regY:-0.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.1592,x:88.5,y:60.3,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-26.4954,x:20.35,y:-79.75,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-34.8106,y:-279.85,x:-69.7,regY:-0.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.0273,x:84.3,y:62.25,regY:4.5}},{t:this.ikNode_2,p:{regY:2.7,rotation:-25.9183,x:17.6,y:-78.55,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-34.0064,y:-279.85,x:-69.65,regY:-0.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.8955,x:80,y:64.1,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-25.3403,x:14.8,y:-77.25,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-33.1996,y:-279.9,x:-69.65,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.7622,x:75.65,y:65.85,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-24.7611,x:12.05,y:-76.1,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-32.3951,y:-279.9,x:-69.7,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.6291,x:71.35,y:67.6,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-24.1836,x:9.25,y:-74.95,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-31.5897,y:-279.9,x:-69.65,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.4966,x:66.95,y:69.3,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-23.6078,x:6.3,y:-73.85,regX:85,scaleX:0.9986,scaleY:0.9986}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-30.7845,y:-279.9,x:-69.65,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.3633,x:62.65,y:70.95,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-23.0282,x:3.45,y:-72.75,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-29.9794,y:-279.9,x:-69.7,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.231,x:58.25,y:72.65,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-22.4507,x:0.55,y:-71.8,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-29.1733,y:-279.95,x:-69.5,regY:-0.5,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.0992,x:53.85,y:74.3,regY:4.6}},{t:this.ikNode_2,p:{regY:2.8,rotation:-21.8723,x:-2.3,y:-70.75,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-28.3694,y:-279.95,x:-69.65,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.9663,x:49.35,y:75.65,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-21.2958,x:-5.25,y:-69.85,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-27.5638,y:-279.85,x:-69.65,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.8334,x:44.95,y:77.2,regY:4.6}},{t:this.ikNode_2,p:{regY:2.8,rotation:-20.7164,x:-8.1,y:-69.05,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-26.7592,y:-279.85,x:-69.65,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.7005,x:40.5,y:78.5,regY:4.6}},{t:this.ikNode_2,p:{regY:2.8,rotation:-20.1394,x:-11.05,y:-68.1,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-25.9531,y:-279.85,x:-69.65,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.5677,x:36,y:79.7,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-19.5612,x:-14,y:-67.25,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-25.1473,y:-279.85,x:-69.55,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.4359,x:31.45,y:80.9,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-18.9842,x:-17,y:-66.45,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-24.3424,y:-279.8,x:-69.6,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.3025,x:26.95,y:82.1,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-18.4056,x:-19.95,y:-65.75,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-23.537,y:-279.85,x:-69.6,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.1698,x:22.45,y:83.25,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-17.8276,x:-22.95,y:-65.1,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-22.7314,y:-279.85,x:-69.5,regY:-0.5,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.0374,x:18.05,y:84.3,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-17.2508,x:-26,y:-64.4,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-21.9263,y:-279.8,x:-69.55,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.904,x:13.45,y:85.35,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-16.6734,x:-28.95,y:-63.8,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-21.1214,y:-279.75,x:-69.55,regY:-0.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.7717,x:8.85,y:86.3,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-16.0956,x:-31.95,y:-63.25,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-20.315,y:-279.8,x:-69.55,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.6385,x:4.3,y:87.2,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-15.5169,x:-34.85,y:-62.7,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-19.5097,y:-279.7,x:-69.5,regY:-0.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.5063,x:-0.25,y:88.05,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-14.9393,x:-38.1,y:-62.2,regX:84.9,scaleX:0.9986,scaleY:0.9986}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-18.706,y:-279.75,x:-69.55,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.3741,x:-4.85,y:88.85,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-14.3611,x:-40.9,y:-61.8,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-17.9004,y:-279.8,x:-69.5,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.2411,x:-9.45,y:89.55,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-13.7842,x:-44,y:-61.4,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-17.0944,y:-279.8,x:-69.5,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.1082,x:-14.1,y:90.2,regY:4.5}},{t:this.ikNode_2,p:{regY:2.7,rotation:-13.2054,x:-47,y:-61.1,regX:85,scaleX:0.9986,scaleY:0.9986}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-16.2901,y:-279.75,x:-69.55,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-10.9752,x:-18.75,y:90.85,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-12.6286,x:-50.05,y:-60.65,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-15.4848,y:-279.8,x:-69.55,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-10.8425,x:-23.35,y:91.4,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-12.0506,x:-53.15,y:-60.4,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-14.6796,y:-279.75,x:-69.45,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-10.7095,x:-27.95,y:91.85,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-11.473,x:-56.15,y:-60.2,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-13.8738,y:-279.75,x:-69.4,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-10.5778,x:-32.65,y:92.25,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-10.8946,x:-59.2,y:-60,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-13.0672,y:-279.75,x:-69.4,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-10.4453,x:-37.3,y:92.6,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-10.3174,x:-62.25,y:-59.85,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-12.2633,y:-279.75,x:-69.45,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-10.3126,x:-41.95,y:92.95,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-9.7395,x:-65.45,y:-59.75,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-11.4574,y:-279.75,x:-69.45,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-10.5208,x:-37.75,y:92.6,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-10.3157,x:-62.6,y:-59.85,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-12.1522,y:-279.75,x:-69.4,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-10.7284,x:-33.55,y:92.25,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-10.892,x:-60,y:-59.95,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-12.8461,y:-279.7,x:-69.4,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-10.9369,x:-29.35,y:91.9,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-11.4667,x:-57.35,y:-60,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-13.5422,y:-279.75,x:-69.4,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.1448,x:-25.15,y:91.45,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-12.0434,x:-54.7,y:-60.2,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-14.2365,y:-279.8,x:-69.3,regY:-0.5,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.3535,x:-20.95,y:90.9,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-12.6205,x:-52,y:-60.4,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-14.9303,y:-279.7,x:-69.45,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.5607,x:-16.8,y:90.35,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-13.1961,x:-49.3,y:-60.7,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-15.6246,y:-279.75,x:-69.3,regY:-0.5,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.77,x:-12.65,y:89.75,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-13.7723,x:-46.7,y:-60.95,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-16.3192,y:-279.75,x:-69.45,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-11.9784,x:-8.4,y:89.15,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-14.3481,x:-43.95,y:-61.2,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-17.013,y:-279.75,x:-69.4,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.1859,x:-4.25,y:88.45,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-14.9244,x:-41.45,y:-61.5,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-17.7083,y:-279.75,x:-69.35,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.3947,x:-0.1,y:87.8,regY:4.6}},{t:this.ikNode_2,p:{regY:2.8,rotation:-15.5019,x:-38.75,y:-61.95,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-18.4023,y:-279.7,x:-69.4,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.6028,x:4.05,y:86.95,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-16.0776,x:-36.25,y:-62.25,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-19.0966,y:-279.65,x:-69.3,regY:-0.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-12.8107,x:8.15,y:86.2,regY:4.6}},{t:this.ikNode_2,p:{regY:2.8,rotation:-16.653,x:-33.4,y:-62.7,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-19.7913,y:-279.7,x:-69.4,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.019,x:12.25,y:85.2,regY:4.5}},{t:this.ikNode_2,p:{regY:2.7,rotation:-17.2298,x:-30.8,y:-63.2,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-20.4847,y:-279.6,x:-69.4,regY:-0.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.2274,x:16.35,y:84.35,regY:4.5}},{t:this.ikNode_2,p:{regY:2.7,rotation:-17.8054,x:-28.25,y:-63.7,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-21.1799,y:-279.6,x:-69.3,regY:-0.4,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.4353,x:20.45,y:83.3,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-18.3826,x:-25.55,y:-64.1,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-21.8736,y:-279.7,x:-69.35,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.6433,x:24.45,y:82.25,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-18.9585,x:-22.95,y:-64.7,regX:85,scaleX:0.9986,scaleY:0.9986}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-22.5686,y:-279.75,x:-69.3,regY:-0.5,regX:39.6}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-13.8524,x:28.6,y:81.2,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-19.5335,x:-20.5,y:-65.2,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-23.2625,y:-279.7,x:-69.35,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.0596,x:32.65,y:80.05,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-20.1092,x:-17.8,y:-65.85,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-23.958,y:-279.65,x:-69.4,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.2691,x:36.65,y:79,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-20.6876,x:-15.3,y:-66.5,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-24.6515,y:-279.7,x:-69.35,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.4761,x:40.7,y:77.75,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-21.2632,x:-12.6,y:-67.2,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-25.347,y:-279.7,x:-69.3,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.6848,x:44.8,y:76.45,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-21.8388,x:-10.05,y:-67.9,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-26.0404,y:-279.65,x:-69.35,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-14.8932,x:48.75,y:75.2,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-22.4149,x:-7.5,y:-68.6,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-26.7346,y:-279.7,x:-69.3,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-15.1001,x:52.75,y:73.85,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-22.9906,x:-4.9,y:-69.4,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-27.4283,y:-279.65,x:-69.4,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-15.3083,x:56.75,y:72.45,regY:4.5}},{t:this.ikNode_2,p:{regY:2.8,rotation:-23.5683,x:-2.35,y:-70.25,regX:85,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-28.1234,y:-279.7,x:-69.35,regY:-0.5,regX:39.5}}]},1).to({state:[{t:this.ikNode_4,p:{scaleX:0.9989,scaleY:0.9989,rotation:-15.5164,x:60.75,y:71.15,regY:4.6}},{t:this.ikNode_2,p:{regY:2.8,rotation:-24.1425,x:0.1,y:-71,regX:84.9,scaleX:0.9987,scaleY:0.9987}},{t:this.ikNode_1,p:{scaleX:0.9987,scaleY:0.9987,rotation:-28.8179,y:-279.7,x:-69.35,regY:-0.5,regX:39.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.4,-279.6,330.5,486.20000000000005);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-70.05,-280.85,0.9988,0.9988,3.3825,0,0,38.7,-1.4);

	this.ikNode_2 = new lib.燈籠();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-122.55,-66.75,0.9987,0.9987,-7.2627,0,0,85.2,2.9);

	this.ikNode_4 = new lib.流蘇();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-105.95,88.6,0.9987,0.9987,-12.7259,0,0,17.9,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{regY:5.1,scaleX:0.9987,scaleY:0.9987,rotation:-12.7259,x:-105.95,y:88.6}},{t:this.ikNode_2,p:{regY:2.9,scaleX:0.9987,scaleY:0.9987,rotation:-7.2627,x:-122.55,y:-66.75,regX:85.2}},{t:this.ikNode_1,p:{regX:38.7,scaleX:0.9988,scaleY:0.9988,rotation:3.3825,x:-70.05,y:-280.85,regY:-1.4}}]}).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:-11.8731,x:-103.7,y:89.5}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-6.9536,x:-119.5,y:-66.1,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:2.5745,x:-70.25,y:-280.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:-11.0189,x:-101.45,y:90.25}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-6.6432,x:-116.55,y:-65.4,regX:85.1}},{t:this.ikNode_1,p:{regX:38.7,scaleX:0.9987,scaleY:0.9987,rotation:1.7659,x:-70.05,y:-280.8,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:-10.1648,x:-99.25,y:90.9}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-6.3338,x:-113.45,y:-64.75,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:0.9577,x:-70.25,y:-280.75,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:-9.3112,x:-97,y:91.5}},{t:this.ikNode_2,p:{regY:2.9,scaleX:0.9986,scaleY:0.9986,rotation:-6.0229,x:-110.3,y:-64.1,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:0.1488,x:-70.2,y:-280.75,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:-8.458,x:-94.8,y:92.15}},{t:this.ikNode_2,p:{regY:2.9,scaleX:0.9986,scaleY:0.9986,rotation:-5.7149,x:-107.2,y:-63.45,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-0.6548,x:-70.2,y:-280.7,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:-7.6029,x:-92.55,y:92.7}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-5.4045,x:-104.15,y:-63.05,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-1.462,x:-70.2,y:-280.65,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:-6.7496,x:-90.3,y:93.2}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-5.095,x:-101.05,y:-62.55,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-2.2696,x:-70.2,y:-280.7,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:-5.897,x:-88,y:93.6}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-4.7848,x:-98,y:-62.15,regX:85.2}},{t:this.ikNode_1,p:{regX:38.7,scaleX:0.9987,scaleY:0.9987,rotation:-3.0784,x:-70.1,y:-280.65,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:-5.043,x:-85.8,y:94.05}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-4.4756,x:-95,y:-61.8,regX:85.1}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-3.8862,x:-70.2,y:-280.6,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:-4.1875,x:-83.45,y:94.4}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-4.1657,x:-91.8,y:-61.45,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-4.6956,x:-70.15,y:-280.55,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:-3.3347,x:-81.2,y:94.7}},{t:this.ikNode_2,p:{regY:2.9,scaleX:0.9986,scaleY:0.9986,rotation:-3.8559,x:-88.65,y:-61,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-5.5033,x:-70.2,y:-280.55,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:-2.4809,x:-79,y:95}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-3.5453,x:-85.7,y:-60.85,regX:85.1}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-6.3111,x:-70.1,y:-280.5,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:-1.6268,x:-76.7,y:95.15}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-3.2366,x:-82.45,y:-60.65,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-7.1203,x:-70.1,y:-280.45,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:-0.7722,x:-74.45,y:95.3}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-2.9262,x:-79.3,y:-60.5,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-7.9282,x:-70.05,y:-280.4,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:0.0762,x:-72.1,y:95.4}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-2.6177,x:-76.15,y:-60.4,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-8.736,x:-70.1,y:-280.35,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:0.9306,x:-69.9,y:95.5}},{t:this.ikNode_2,p:{regY:2.9,scaleX:0.9986,scaleY:0.9986,rotation:-2.3075,x:-73.2,y:-60.15,regX:85.1}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-9.5438,x:-70.15,y:-280.4,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:1.7844,x:-67.55,y:95.5}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-1.9965,x:-69.95,y:-60.25,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-10.3526,x:-70.1,y:-280.4,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:2.6387,x:-65.3,y:95.45}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-1.6864,x:-66.8,y:-60.25,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-11.1616,x:-70.1,y:-280.15,regY:-1.3}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:3.4917,x:-63,y:95.4}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-1.3764,x:-63.85,y:-60.25,regX:85.1}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-11.9695,x:-70.1,y:-280.2,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:4.3455,x:-60.7,y:95.25}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-1.0681,x:-60.6,y:-60.4,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-12.7771,x:-70.05,y:-280.2,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.1,scaleX:0.9986,scaleY:0.9986,rotation:5.1995,x:-58.45,y:94.9}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-0.7582,x:-57.45,y:-60.45,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-13.5859,x:-70,y:-280.05,regY:-1.3}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:6.0528,x:-56.15,y:94.85}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-0.4483,x:-54.35,y:-60.7,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-14.3942,x:-70.05,y:-280.15,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:6.9075,x:-53.8,y:94.55}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:-0.1383,x:-51.25,y:-60.9,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-15.2024,x:-70,y:-280.1,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:7.761,x:-51.6,y:94.25}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:0.1663,x:-48.15,y:-61.2,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-16.0098,x:-70.05,y:-280.1,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:8.6154,x:-49.35,y:93.9}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:0.4763,x:-45,y:-61.55,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-16.8178,x:-69.95,y:-280.1,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:9.4674,x:-47.05,y:93.45}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:0.7862,x:-42.15,y:-61.85,regX:85.1}},{t:this.ikNode_1,p:{regX:38.7,scaleX:0.9987,scaleY:0.9987,rotation:-17.6271,x:-69.9,y:-280.05,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:10.3225,x:-44.8,y:92.95}},{t:this.ikNode_2,p:{regY:2.9,scaleX:0.9986,scaleY:0.9986,rotation:1.0962,x:-38.9,y:-62.15,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-18.4341,x:-70.05,y:-280,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:11.1769,x:-42.55,y:92.45}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.4053,x:-35.85,y:-62.7,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-19.243,x:-70,y:-279.85,regY:-1.3}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:12.0306,x:-40.3,y:91.95}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.7153,x:-32.75,y:-63.2,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-20.0518,x:-70,y:-279.9,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:11.6568,x:-42.3,y:92.25}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.6855,x:-34.8,y:-62.85,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-19.5024,x:-69.9,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:11.2825,x:-44.3,y:92.55}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.6557,x:-36.9,y:-62.55,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-18.9543,x:-69.95,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:10.9092,x:-46.35,y:92.85}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.626,x:-38.95,y:-62.25,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-18.4037,x:-69.9,y:-279.95,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:10.5369,x:-48.35,y:93.1}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.5971,x:-41.1,y:-61.95,regX:85.2}},{t:this.ikNode_1,p:{regX:38.7,scaleX:0.9987,scaleY:0.9987,rotation:-17.8558,x:-69.85,y:-280,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:10.1623,x:-50.35,y:93.35}},{t:this.ikNode_2,p:{regY:2.9,scaleX:0.9986,scaleY:0.9986,rotation:1.5673,x:-43.15,y:-61.55,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-17.306,x:-69.95,y:-279.9,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:9.7896,x:-52.35,y:93.55}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9987,scaleY:0.9987,rotation:1.5384,x:-45.35,y:-61.4,regX:85.1}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-16.7558,x:-69.9,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.1,scaleX:0.9987,scaleY:0.9987,rotation:9.4141,x:-54.35,y:93.7}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.5077,x:-47.25,y:-61.15,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-16.2076,x:-69.95,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:9.0415,x:-56.4,y:94.05}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.478,x:-49.35,y:-60.95,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-15.659,x:-69.95,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:8.6696,x:-58.45,y:94.25}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.4482,x:-51.45,y:-60.8,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-15.1098,x:-69.9,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:8.2951,x:-60.35,y:94.4}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.4184,x:-53.55,y:-60.6,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-14.5598,x:-69.85,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:7.922,x:-62.4,y:94.5}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.3886,x:-55.65,y:-60.5,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-14.0108,x:-69.85,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:7.5474,x:-64.45,y:94.65}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9987,scaleY:0.9987,rotation:1.3597,x:-57.75,y:-60.35,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-13.4611,x:-69.9,y:-279.8,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:7.174,x:-66.45,y:94.75}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9987,scaleY:0.9987,rotation:1.3291,x:-59.85,y:-60.25,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-12.9124,x:-69.85,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:6.8008,x:-68.5,y:94.8}},{t:this.ikNode_2,p:{regY:2.9,scaleX:0.9986,scaleY:0.9986,rotation:1.3002,x:-61.95,y:-60,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-12.3626,x:-69.85,y:-279.75,regY:-1.3}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:6.4271,x:-70.5,y:94.8}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.2704,x:-64.05,y:-60.05,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9988,scaleY:0.9988,rotation:-11.8145,x:-69.8,y:-279.8,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:6.0537,x:-72.55,y:94.9}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9987,scaleY:0.9987,rotation:1.2406,x:-66.15,y:-60,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-11.2644,x:-69.85,y:-279.8,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.1,scaleX:0.9986,scaleY:0.9986,rotation:5.6806,x:-74.5,y:94.8}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.2109,x:-68.3,y:-60,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-10.7168,x:-69.75,y:-279.8,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:5.3067,x:-76.6,y:94.9}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.1811,x:-70.4,y:-59.95,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9988,scaleY:0.9988,rotation:-10.1665,x:-69.85,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:4.9333,x:-78.6,y:94.85}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.1513,x:-72.45,y:-59.95,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-9.6166,x:-69.85,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:4.5607,x:-80.6,y:94.85}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9987,scaleY:0.9987,rotation:1.1215,x:-74.6,y:-60,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-9.069,x:-69.8,y:-279.9,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:4.1858,x:-82.65,y:94.8}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.0918,x:-76.7,y:-60.05,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-8.5201,x:-69.85,y:-279.8,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:3.8137,x:-84.65,y:94.75}},{t:this.ikNode_2,p:{regY:2.9,scaleX:0.9986,scaleY:0.9986,rotation:1.0629,x:-78.8,y:-60,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-7.969,x:-69.8,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:3.44,x:-86.7,y:94.6}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9987,scaleY:0.9987,rotation:1.0331,x:-80.9,y:-60.2,regX:85.2}},{t:this.ikNode_1,p:{regX:38.7,scaleX:0.9987,scaleY:0.9987,rotation:-7.4213,x:-69.7,y:-279.85,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:3.0664,x:-88.7,y:94.5}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:1.0034,x:-83,y:-60.35,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-6.8726,x:-69.8,y:-279.75,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:2.693,x:-90.8,y:94.35}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:0.9744,x:-85.1,y:-60.5,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-6.3226,x:-69.75,y:-279.8,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:2.3197,x:-92.8,y:94.15}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:0.9438,x:-87.25,y:-60.65,regX:85.1}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-5.7733,x:-69.75,y:-279.8,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:1.9456,x:-94.8,y:94}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:0.914,x:-89.35,y:-60.85,regX:85.1}},{t:this.ikNode_1,p:{regX:38.7,scaleX:0.9987,scaleY:0.9987,rotation:-5.2236,x:-69.6,y:-279.75,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:1.5725,x:-96.8,y:93.8}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:0.8851,x:-91.45,y:-61.05,regX:85.1}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-4.6754,x:-69.75,y:-279.8,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9987,scaleY:0.9987,rotation:1.1995,x:-98.85,y:93.55}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:0.8545,x:-93.6,y:-61.25,regX:85.1}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-4.1267,x:-69.75,y:-279.75,regY:-1.4}}]},1).to({state:[{t:this.ikNode_4,p:{regY:5.2,scaleX:0.9986,scaleY:0.9986,rotation:0.8256,x:-100.85,y:93.3}},{t:this.ikNode_2,p:{regY:2.8,scaleX:0.9986,scaleY:0.9986,rotation:0.8247,x:-95.55,y:-61.5,regX:85.2}},{t:this.ikNode_1,p:{regX:38.6,scaleX:0.9987,scaleY:0.9987,rotation:-3.5774,x:-69.65,y:-279.7,regY:-1.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.3,-281.7,255.8,489.6);


// stage content:
(lib.春燈 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.instance = new lib.小燈籠();
	this.instance.setTransform(109.95,125.55,0.4843,0.4843,1.7079,0,0,-128.6,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 中
	this.instance_1 = new lib.中燈籠();
	this.instance_1.setTransform(244.4,160.75,0.6342,0.6342,-14.9975,0,0,-209.7,-78.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 大
	this.instance_2 = new lib.大燈籠();
	this.instance_2.setTransform(196.85,246.95,0.9704,0.9704,24.4892,0,0,25.2,-50.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 春
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AA+FGQgHAAgHgMQgPgZgLgPIgLABIhbAIQgIAAgGgBIgFAMQgEAKgGAAQgFAAgHgOQgGgLAAgGIACgMIAAgaQAAgvgDgyQgBgYgGgaIgBgLQAAgJAHAAQAEAAAPAEQAygFBHgSQAggMAHAAQAFAAARAMQAcANAAANQAAAEgGAIQgEAJgBBEQAAASANBKQAAAbgOAXQgOAUgLAAgAhdEAQAsgDAmgHIAdgEQAJAAAVAKIABAAIABgGQACgNAAg6IAAgJQgFADgKACIhLALQgUAEgLAAQgOAAgKgDgAhdCjIAIgBQAwgHAlgKIANgDQAIAAAUAFIALAFQAAgugBgTQAAgKgNgBIgUAAQgeAAg3AMQgOAEgIAAIgDAAgAlRCuQAAgGASgIQBdg5AigjQAmgkAig6QggAGghALQgVAHgEAAQgMAAgYgLQgZgLAAgHQAAgIAQgCQBQAAAngKIAfgEQALgYAKgdQgoAFgSAAQgOAAgLgDQgOgFAAgGQAAgIAXgBIBTgLIADgKQAGgYAEgXQg1AFgWAAQgaAAgLgGQgKgHAAgFQAAgFAbgBQAxgEAzgHIADgmQAAgYgFgPQgDgJAAgEQAEgLAKAAQAKAAAXANQAWANAAAJQAAAHgHAKQgFAOgIAcQAzgHAhgJQALgDAFAAQALAAASAJQALAFAAAHQAAAHgTADQgVAHhMAKIgfAEIgOA3IBGgNIAfgEQAHAAAUAEQATAHAAAFQAAAIgWAEQgnAEgTADIhMALQgIAdgKAYQAogEAogDQBUgKAogLQASgEAEAAQAFAAAgAMQAbAPAAALQAAALglAAQgugCg0AAQgXAAgfACQALAIAOALQBUBIAqAXQAnAWBgAhQAMADAAAFQAAAGgMADQhGAQgZAAQgQAAgTgKQgUgOhWhgQgagegYgVQgWgTgTgJIgwAFIgXACQggBBg2A3Qg7A8hKAUQgZAJgOACQgHAAAAgDg");
	this.shape.setTransform(432.7792,453.2492,3.7318,3.7318);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 潑墨
	this.instance_3 = new lib.Image();
	this.instance_3.setTransform(1,575.35,1.1239,1.1477,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 底稿顏色
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape_1.setTransform(279.925,288.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,288.2,280.5,287.2);
// library properties:
lib.properties = {
	id: 'C839C18C5259A049841C66BE2BDE0DFC',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/春燈_atlas_1.png?1639967632900", id:"春燈_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C839C18C5259A049841C66BE2BDE0DFC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;