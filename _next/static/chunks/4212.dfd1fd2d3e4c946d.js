"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4212],{84212:function(e,t,o){o.d(t,{StrokeColorUpdater:function(){return n}});var i=o(37866);class n{constructor(e){this.container=e}init(e){let t=this.container,o=e.options,n=(0,i.wA)(o.stroke,e.id,o.reduceDuplicates);e.strokeWidth=(0,i.Gu)(n.width)*t.retina.pixelRatio,e.strokeOpacity=(0,i.Gu)(n.opacity??1),e.strokeAnimation=n.color?.animation;let r=(0,i.lN)(n.color)??e.getFillColor();r&&(e.strokeColor=(0,i.bS)(r,e.strokeAnimation,t.retina.reduceFactor))}isEnabled(e){let t=e.strokeAnimation,{strokeColor:o}=e;return!e.destroyed&&!e.spawning&&!!t&&(o?.h.value!==void 0&&o.h.enable||o?.s.value!==void 0&&o.s.enable||o?.l.value!==void 0&&o.l.enable)}update(e,t){this.isEnabled(e)&&(0,i.PB)(e.strokeColor,t)}}}}]);