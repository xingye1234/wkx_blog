"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3181],{63181:function(e,i,t){t.d(i,{LifeUpdater:function(){return l}});var n=t(37866);class a extends n.SW{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class s extends n.SW{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class o{constructor(){this.count=0,this.delay=new a,this.duration=new s}load(e){e&&(void 0!==e.count&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}class l{constructor(e){this.container=e}init(e){let i=this.container,t=e.options.life;t&&(e.life={delay:i.retina.reduceFactor?(0,n.Gu)(t.delay.value)*(t.delay.sync?1:(0,n.sZ)())/i.retina.reduceFactor*n.X5:0,delayTime:0,duration:i.retina.reduceFactor?(0,n.Gu)(t.duration.value)*(t.duration.sync?1:(0,n.sZ)())/i.retina.reduceFactor*n.X5:0,time:0,count:t.count},e.life.duration<=0&&(e.life.duration=-1),e.life.count<=0&&(e.life.count=-1),e.life&&(e.spawning=e.life.delay>0))}isEnabled(e){return!e.destroyed}loadOptions(e,...i){for(let t of(e.life||(e.life=new o),i))e.life.load(t?.life)}update(e,i){this.isEnabled(e)&&e.life&&function(e,i,t){if(!e.life)return;let a=e.life,s=!1;if(e.spawning){if(a.delayTime+=i.value,!(a.delayTime>=e.life.delay))return;s=!0,e.spawning=!1,a.delayTime=0,a.time=0}if(-1===a.duration||e.spawning||(s?a.time=0:a.time+=i.value,a.time<a.duration))return;if(a.time=0,e.life.count>0&&e.life.count--,0===e.life.count){e.destroy();return}let o=(0,n.Cs)(0,t.width),l=(0,n.Cs)(0,t.width);e.position.x=(0,n.vd)(o),e.position.y=(0,n.vd)(l),e.spawning=!0,a.delayTime=0,a.time=0,e.reset();let u=e.options.life;u&&(a.delay=(0,n.Gu)(u.delay.value)*n.X5,a.duration=(0,n.Gu)(u.duration.value)*n.X5)}(e,i,this.container.canvas.size)}}}}]);