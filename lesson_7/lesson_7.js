(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.quizBtn_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.008)").s().p("Eg1aAJYIAAyvMBq1AAAIAASvg");
	this.shape.setTransform(341.875,59.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,683.8,120);


(lib.quizBtn_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.008)").s().p("EgkOAZdMAAAgy6MBIdAAAMAAAAy6g");
	this.shape.setTransform(373.85,162.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142,0,463.79999999999995,325.9);


(lib.quizBtn_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.008)").s().p("EgkOAZeMAAAgy7MBIdAAAMAAAAy7g");
	this.shape.setTransform(243.3,172.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.4,9.9,463.8,325.90000000000003);


(lib.quizBtn_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.quizBtn_21 = new lib.quizBtn_21();
	this.quizBtn_21.name = "quizBtn_21";
	this.quizBtn_21.setTransform(373.95,68.1,1.0935,1.1329,0,0,0,342,60.1);
	new cjs.ButtonHelper(this.quizBtn_21, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.quizBtn_21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,747.7,135.9);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		canvas.style.zIndex = "1";
		root = this;
		
		const el = {
			buttons: {
				quiz: {
					quizBtn_11       : this.quizBtn_11,
					quizBtn_12       : this.quizBtn_12,
					quizBtn_21       : this.quizBtn_21,
					quizBtn_22       : this.quizBtn_22,
				}
			},
			vid: {
				mainVideo :     null,
				popupVideo:     null,
			},
			obj: {
				quizBtn_11           : this.quizBtn_11,
				quizBtn_12           : this.quizBtn_12,
				quizBtn_21           : this.quizBtn_21,
				quizBtn_22           : this.quizBtn_22,
				popup                : this.popupVideo,
			},
		};
		
		
		const params = {
			currentFrameIndex 		: 0,
			currentFrame 			: {},
			minZIndex 				: -1,
			maxZIndex 				: 1,
			frames					: [],
		};
		
		
		
		const handlers = {
			handlerDuration : function(event) {
				params.frames.forEach(elm => {
					if(event.currentTarget.currentTime > elm.pause - 1 &&  event.currentTarget.currentTime < elm.pause ){
							params.currentFrame  = elm;
		                    el.vid.mainVideo.pause();  
		                    methods.showSection();				
						}
				})
			},
			checkAnswer : function (evt) {
				const currentIdx = params.currentFrame.btns.findIndex(e => e.name === evt.currentTarget.name);
				if(params.currentFrame.correctIndex === currentIdx){
					[...params.currentFrame.btns].forEach((btn) => {
		                     btn.visible = false;				
						})
					methods.playVideo();
				}else {
					if(params.currentFrame.popupPos) {
						el.vid.popupVideo.parentElement.style.left = "10%";
					}
					methods.showPopup(el.vid.popupVideo);
					
					setTimeout(() => {
						methods.closePopup(el.vid.popupVideo)
					},2500)
					params.currentFrame.btns.forEach((e) => {
						e.visible = false;
					})		
				}
			}
		}
		
		
		const methods = {
			setUnvisibleAll: function (){
				el.obj.popup.visible = false;
				el.obj.quizBtn_11.visible = false;
				el.obj.quizBtn_12.visible = false;
				el.obj.quizBtn_21.visible = false;
				el.obj.quizBtn_22.visible = false;
			},
			showPopup(element) {
				if (!element) {
					return;
				}
			   console.log("===", element)
				element.currentTime = 0;
				element.parentElement.style.zIndex = params.maxZIndex;
			    element.style.display = 'block'
				element.play();
			},
		    closePopup: function(elment) {
				elment.style.display = "none";
				elment.parentElement.style.zIndex = params.minZIndex;
				params.currentFrame.btns.forEach((e) => {
		              e.visible = true;			
					})
			},
			playVideo() {
				el.vid.mainVideo.currentTime = params.currentFrame.play;
				el.vid.mainVideo.play();
			},
			showSection() {
				if(params.currentFrame.vid){
					methods.showPopup(el.vid.popupVideo)
					setTimeout(() => {
						methods.closePopup(el.vid.popupVideo)
					},2500)
				} else{
					params.currentFrame.btns.forEach((e) => {
						e.visible = true
					})
				}
			},
		}
		
		const setProperty = function() {
			methods.setUnvisibleAll();
			setTimeout(() => {
				const vid = document.querySelector("#mainVideo");
				if(vid){
					el.vid.mainVideo = vid;
					//vid.currentTime = 245;
				}
			params.frames = [
						            { pause : 27.5, play : 28, btns:[el.buttons.quiz.quizBtn_11, el.buttons.quiz.quizBtn_12], correctIndex: 0 },
								    { pause : 111.5, play : 112, btns:[el.buttons.quiz.quizBtn_11, el.buttons.quiz.quizBtn_12] , correctIndex: 0 },
								    { pause : 188.5, play : 189, btns:[el.buttons.quiz.quizBtn_21, el.buttons.quiz.quizBtn_22] , correctIndex: 1 , popupPos : true},
								    { pause : 218.5, play : 219, btns:[el.buttons.quiz.quizBtn_21, el.buttons.quiz.quizBtn_22] , correctIndex: 1 , popupPos : true},
								    { pause : 249.5, play : 251, btns:[el.buttons.quiz.quizBtn_21, el.buttons.quiz.quizBtn_22] , correctIndex: 1 , popupPos : true},
					        ];
			el.obj.popup.visible = true;
			setTimeout(() => {
					const popup = document.querySelector('#popupVideo');
					if (popup || img_popup) {
						popup.style.display = 'none';
						el.vid.popupVideo = popup;
					}		
				},100)
						
			bind();
			},100)
			
		}
		
		const bind = function() {
			if(el.vid.mainVideo){
				el.vid.mainVideo.addEventListener("timeupdate", handlers.handlerDuration);
			}
		    el.buttons.quiz.quizBtn_11.addEventListener("click", handlers.checkAnswer);
		    el.buttons.quiz.quizBtn_12.addEventListener("click", handlers.checkAnswer);
		    el.buttons.quiz.quizBtn_21.addEventListener("click", handlers.checkAnswer);
		    el.buttons.quiz.quizBtn_22.addEventListener("click", handlers.checkAnswer);
		}
		
		
		const init = function() {
			setProperty();
		}
		
		init();
		this.pointerEvents = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.popupVideo = new lib.an_Video({'id': 'popupVideo', 'src':'videos/Comp%202(1).webm', 'autoplay':false, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.popupVideo.name = "popupVideo";
	this.popupVideo.setTransform(771.3,544.9,2.7742,2.1794,0,0,0,200.2,150.1);

	this.timeline.addTween(cjs.Tween.get(this.popupVideo).wait(1));

	// button2
	this.quizBtn_22 = new lib.quizBtn_22();
	this.quizBtn_22.name = "quizBtn_22";
	this.quizBtn_22.setTransform(1355.55,832.85,1,1,0,0,0,373.8,68);
	new cjs.ButtonHelper(this.quizBtn_22, 0, 1, 1);

	this.quizBtn_21 = new lib.quizBtn_21();
	this.quizBtn_21.name = "quizBtn_21";
	this.quizBtn_21.setTransform(1355.7,646.05,1.0935,1.1329,0,0,0,342,60.1);
	new cjs.ButtonHelper(this.quizBtn_21, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.quizBtn_21},{t:this.quizBtn_22}]}).wait(1));

	// buttons
	this.quizBtn_12 = new lib.quizBtn_12();
	this.quizBtn_12.name = "quizBtn_12";
	this.quizBtn_12.setTransform(1653.7,763.8,0.8929,0.8221,0,0,0,395.2,163);
	new cjs.ButtonHelper(this.quizBtn_12, 0, 1, 1);

	this.quizBtn_11 = new lib.quizBtn_11();
	this.quizBtn_11.name = "quizBtn_11";
	this.quizBtn_11.setTransform(1621.6,417.8,0.8793,0.8222,0,0,0,232,163);
	new cjs.ButtonHelper(this.quizBtn_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.quizBtn_11},{t:this.quizBtn_12}]}).wait(1));

	// mainVideo
	this.mainVideo = new lib.an_Video({'id': 'mainVideo', 'src':'videos/국어-3-1-1-1-감각적표현1208-re.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.mainVideo.name = "mainVideo";
	this.mainVideo.setTransform(960,540,4.8,3.6,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.mainVideo).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(957.6,538.2,964.8000000000001,543.5999999999999);
// library properties:
lib.properties = {
	id: 'A266BF5DB622694BA8659CC35DADC2AC',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#323232",
	opacity: 0.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1670488745512", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1670488745512", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1670488745512", id:"an.Video"}
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
an.compositions['A266BF5DB622694BA8659CC35DADC2AC'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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