(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="170",$h=0,rl=1,Zh=2,Gc=1,Jh=2,Fn=3,Tn=0,je=1,Ce=2,si=0,Yi=1,al=2,ol=3,ll=4,Qh=5,xi=100,tu=101,eu=102,nu=103,iu=104,su=200,ru=201,au=202,ou=203,Ra=204,Ca=205,lu=206,cu=207,hu=208,uu=209,fu=210,du=211,pu=212,mu=213,gu=214,Ia=0,La=1,Pa=2,Zi=3,Da=4,Na=5,Ua=6,Fa=7,Eo=0,_u=1,xu=2,ri=0,vu=1,yu=2,Mu=3,Vc=4,Su=5,Eu=6,Tu=7,cl="attached",wu="detached",Wc=300,Ji=301,Qi=302,Sr=303,Oa=304,Nr=306,Wn=1e3,Sn=1001,Er=1002,Xe=1003,Xc=1004,Ms=1005,de=1006,mr=1007,We=1008,Xn=1009,Kc=1010,Yc=1011,bs=1012,To=1013,Mi=1014,qe=1015,Hn=1016,wo=1017,Ao=1018,ts=1020,qc=35902,jc=1021,$c=1022,on=1023,Zc=1024,Jc=1025,qi=1026,es=1027,bo=1028,Ro=1029,Qc=1030,Co=1031,Io=1033,gr=33776,_r=33777,xr=33778,vr=33779,za=35840,Ba=35841,ka=35842,Ha=35843,Ga=36196,Va=37492,Wa=37496,Xa=37808,Ka=37809,Ya=37810,qa=37811,ja=37812,$a=37813,Za=37814,Ja=37815,Qa=37816,to=37817,eo=37818,no=37819,io=37820,so=37821,yr=36492,ro=36494,ao=36495,th=36283,oo=36284,lo=36285,co=36286,Au=2200,eh=2201,bu=2202,Rs=2300,Cs=2301,Hr=2302,Vi=2400,Wi=2401,Tr=2402,Lo=2500,Ru=2501,Cu=0,nh=1,ho=2,Iu=3200,Lu=3201,Po=0,Pu=1,Bn="",xe="srgb",ze="srgb-linear",Ur="linear",ae="srgb",wi=7680,hl=519,Du=512,Nu=513,Uu=514,ih=515,Fu=516,Ou=517,zu=518,Bu=519,uo=35044,sh=35048,ul="300 es",Gn=2e3,wr=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fl=1234567;const Ts=Math.PI/180,ns=180/Math.PI;function gn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[s&255]+Ue[s>>8&255]+Ue[s>>16&255]+Ue[s>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Ie(s,t,e){return Math.max(t,Math.min(e,s))}function Do(s,t){return(s%t+t)%t}function ku(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Hu(s,t,e){return s!==t?(e-s)/(t-s):0}function ws(s,t,e){return(1-e)*s+e*t}function Gu(s,t,e,n){return ws(s,t,1-Math.exp(-e*n))}function Vu(s,t=1){return t-Math.abs(Do(s,t*2)-t)}function Wu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Xu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ku(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Yu(s,t){return s+Math.random()*(t-s)}function qu(s){return s*(.5-Math.random())}function ju(s){s!==void 0&&(fl=s);let t=fl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $u(s){return s*Ts}function Zu(s){return s*ns}function Ju(s){return(s&s-1)===0&&s!==0}function Qu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function tf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ef(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nf={DEG2RAD:Ts,RAD2DEG:ns,generateUUID:gn,clamp:Ie,euclideanModulo:Do,mapLinear:ku,inverseLerp:Hu,lerp:ws,damp:Gu,pingpong:Vu,smoothstep:Wu,smootherstep:Xu,randInt:Ku,randFloat:Yu,randFloatSpread:qu,seededRandom:ju,degToRad:$u,radToDeg:Zu,isPowerOfTwo:Ju,ceilPowerOfTwo:Qu,floorPowerOfTwo:tf,setQuaternionFromProperEuler:ef,normalize:se,denormalize:pn};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],y=i[7],R=i[2],w=i[5],A=i[8];return r[0]=a*_+o*M+l*R,r[3]=a*m+o*S+l*w,r[6]=a*p+o*y+l*A,r[1]=c*_+u*M+h*R,r[4]=c*m+u*S+h*w,r[7]=c*p+u*y+h*A,r[2]=f*_+d*M+g*R,r[5]=f*m+d*S+g*w,r[8]=f*p+d*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=e*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gr.makeScale(t,e)),this}rotate(t){return this.premultiply(Gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new Ot;function rh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sf(){const s=Is("canvas");return s.style.display="block",s}const dl={};function Ss(s){s in dl||(dl[s]=!0,console.warn(s))}function rf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function af(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function of(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Ur:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const pl=[.64,.33,.3,.6,.15,.06],ml=[.2126,.7152,.0722],gl=[.3127,.329],_l=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[ze]:{primaries:pl,whitePoint:gl,transfer:Ur,toXYZ:_l,fromXYZ:xl,luminanceCoefficients:ml,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:pl,whitePoint:gl,transfer:ae,toXYZ:_l,fromXYZ:xl,luminanceCoefficients:ml,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});let Ai;class lf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Is("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cf=0;class ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Vr(i[a].image)):r.push(Vr(i[a]))}else r=Vr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hf=0;class we extends Si{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Sn,i=Sn,r=de,a=We,o=on,l=Xn,c=we.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=gn(),this.name="",this.source=new ah(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wn:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case Er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wn:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case Er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Wc;we.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,i=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,y=(d+1)/2,R=(p+1)/2,w=(u+f)/4,A=(h+_)/4,b=(g+m)/4;return S>y&&S>R?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=w/n,r=A/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=b/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=b/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uf extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:de,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ah(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class oh extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),w=Math.atan2(R,p*M);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const y=o*M;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+_*y,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-o*d,t[e+2]=c*g+u*d+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new L,vl=new Qe;class Yn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Os.subVectors(this.max,fs),bi.subVectors(t.a,fs),Ri.subVectors(t.b,fs),Ci.subVectors(t.c,fs),$n.subVectors(Ri,bi),Zn.subVectors(Ci,Ri),li.subVectors(bi,Ci);let e=[0,-$n.z,$n.y,0,-Zn.z,Zn.y,0,-li.z,li.y,$n.z,0,-$n.x,Zn.z,0,-Zn.x,li.z,0,-li.x,-$n.y,$n.x,0,-Zn.y,Zn.x,0,-li.y,li.x,0];return!Xr(e,bi,Ri,Ci,Os)||(e=[1,0,0,0,1,0,0,0,1],!Xr(e,bi,Ri,Ci,Os))?!1:(zs.crossVectors($n,Zn),e=[zs.x,zs.y,zs.z],Xr(e,bi,Ri,Ci,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,Fs=new Yn,bi=new L,Ri=new L,Ci=new L,$n=new L,Zn=new L,li=new L,fs=new L,Os=new L,zs=new L,ci=new L;function Xr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ci.fromArray(s,r);const o=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const df=new Yn,ds=new L,Kr=new L;class wn{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):df.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ds,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Kr)),this.expandByPoint(ds.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new L,Yr=new L,Bs=new L,Jn=new L,qr=new L,ks=new L,jr=new L;class Fr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yr.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Yr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Bs),o=Jn.dot(this.direction),l=-Jn.dot(Bs),c=Jn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Yr).addScaledVector(Bs,f),d}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,i,r){qr.subVectors(e,t),ks.subVectors(n,t),jr.crossVectors(qr,ks);let a=this.direction.dot(jr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);const l=o*this.direction.dot(ks.crossVectors(Jn,ks));if(l<0)return null;const c=o*this.direction.dot(qr.cross(Jn));if(c<0||l+c>a)return null;const u=-o*Jn.dot(jr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(t,e,n,i,r,a,o,l,c,u,h,f,d,g,_,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,h,f,d,g,_,m)}set(t,e,n,i,r,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pf,t,mf)}lookAt(t,e,n){const i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Qn.crossVectors(n,Ze),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Qn.crossVectors(n,Ze)),Qn.normalize(),Hs.crossVectors(Ze,Qn),i[0]=Qn.x,i[4]=Hs.x,i[8]=Ze.x,i[1]=Qn.y,i[5]=Hs.y,i[9]=Ze.y,i[2]=Qn.z,i[6]=Hs.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],y=n[11],R=n[15],w=i[0],A=i[4],b=i[8],v=i[12],x=i[1],C=i[5],O=i[9],N=i[13],B=i[2],W=i[6],H=i[10],j=i[14],X=i[3],st=i[7],rt=i[11],_t=i[15];return r[0]=a*w+o*x+l*B+c*X,r[4]=a*A+o*C+l*W+c*st,r[8]=a*b+o*O+l*H+c*rt,r[12]=a*v+o*N+l*j+c*_t,r[1]=u*w+h*x+f*B+d*X,r[5]=u*A+h*C+f*W+d*st,r[9]=u*b+h*O+f*H+d*rt,r[13]=u*v+h*N+f*j+d*_t,r[2]=g*w+_*x+m*B+p*X,r[6]=g*A+_*C+m*W+p*st,r[10]=g*b+_*O+m*H+p*rt,r[14]=g*v+_*N+m*j+p*_t,r[3]=M*w+S*x+y*B+R*X,r[7]=M*A+S*C+y*W+R*st,r[11]=M*b+S*O+y*H+R*rt,r[15]=M*v+S*N+y*j+R*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+_*(+e*l*d-e*c*f+r*a*f-i*a*d+i*c*u-r*l*u)+m*(+e*c*h-e*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,S=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,y=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,R=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,w=e*M+n*S+i*y+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=M*A,t[1]=(_*f*r-h*m*r-_*i*d+n*m*d+h*i*p-n*f*p)*A,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*A,t[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*A,t[4]=S*A,t[5]=(u*m*r-g*f*r+g*i*d-e*m*d-u*i*p+e*f*p)*A,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*A,t[7]=(a*f*r-u*l*r+u*i*c-e*f*c-a*i*d+e*l*d)*A,t[8]=y*A,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*p-e*h*p)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*A,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*d-e*o*d)*A,t[12]=R*A,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*A,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,_=a*u,m=a*h,p=o*h,M=l*c,S=l*u,y=l*h,R=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+y)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(f+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(g+S)*A,i[9]=(m-M)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ii.set(i[0],i[1],i[2]).length();const a=Ii.set(i[4],i[5],i[6]).length(),o=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);const c=1/r,u=1/a,h=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Gn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(o===Gn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===wr)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Gn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-r),f=(e+t)*c,d=(n+i)*u;let g,_;if(o===Gn)g=(a+r)*h,_=-2*h;else if(o===wr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new L,un=new Dt,pf=new L(0,0,0),mf=new L(1,1,1),Qn=new L,Hs=new L,Ze=new L,yl=new Dt,Ml=new Qe;class en{constructor(t=0,e=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gf=0;const Sl=new L,Li=new Qe,Pn=new Dt,Gs=new L,ps=new L,_f=new L,xf=new Qe,El=new L(1,0,0),Tl=new L(0,1,0),wl=new L(0,0,1),Al={type:"added"},vf={type:"removed"},Pi={type:"childadded",child:null},$r={type:"childremoved",child:null};class pe extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new L,e=new en,n=new Qe,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ot}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(Tl,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(Tl,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ps,Gs,this.up):Pn.lookAt(Gs,ps,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Pn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Al),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vf),$r.child=t,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Al),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new L(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new L,Dn=new L,Zr=new L,Nn=new L,Di=new L,Ni=new L,bl=new L,Jr=new L,Qr=new L,ta=new L,ea=new Jt,na=new Jt,ia=new Jt;class mn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fn.subVectors(t,e),i.cross(fn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){fn.subVectors(i,e),Dn.subVectors(n,e),Zr.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Dn),l=fn.dot(Zr),c=Dn.dot(Dn),u=Dn.dot(Zr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,n),ia.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ea,r.x),a.addScaledVector(na,r.y),a.addScaledVector(ia,r.z),a}static isFrontFacing(t,e,n,i){return fn.subVectors(n,e),Dn.subVectors(t,e),fn.cross(Dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),fn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Di.subVectors(i,n),Ni.subVectors(r,n),Jr.subVectors(t,n);const l=Di.dot(Jr),c=Ni.dot(Jr);if(l<=0&&c<=0)return e.copy(n);Qr.subVectors(t,i);const u=Di.dot(Qr),h=Ni.dot(Qr);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Di,a);ta.subVectors(t,r);const d=Di.dot(ta),g=Ni.dot(ta);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ni,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return bl.subVectors(r,i),o=(h-u)/(h-u+(d-g)),e.copy(i).addScaledVector(bl,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(Di,a).addScaledVector(Ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function sa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class it{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=Do(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=sa(a,r,t+1/3),this.g=sa(a,r,t),this.b=sa(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Wt.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ie(Fe.r*255,0,255))*65536+Math.round(Ie(Fe.g*255,0,255))*256+Math.round(Ie(Fe.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,i=Fe.g,r=Fe.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=xe){Wt.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,i=Fe.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Vs);const n=ws(ti.h,Vs.h,e),i=ws(ti.s,Vs.s,e),r=ws(ti.l,Vs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new it;it.NAMES=ch;let yf=0;class _n extends Si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=gn(),this.name="",this.blending=Yi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oe extends _n{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const kn=Mf();function Mf(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Sf(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ie(s,-65504,65504),kn.floatView[0]=s;const t=kn.uint32View[0],e=t>>23&511;return kn.baseTable[e]+((t&8388607)>>kn.shiftTable[e])}function Ef(s){const t=s>>10;return kn.uint32View[0]=kn.mantissaTable[kn.offsetTable[t]+(s&1023)]+kn.exponentTable[t],kn.floatView[0]}const Ws={toHalfFloat:Sf,fromHalfFloat:Ef},Se=new L,Xs=new kt;class ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uo,this.updateRanges=[],this.gpuType=qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uo&&(t.usage=this.usage),t}}class hh extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uh extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Tf=0;const rn=new Dt,ra=new pe,Ui=new L,Je=new Yn,ms=new Yn,Re=new L;class Be extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rh(t)?uh:hh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Je.min,ms.min),Je.expandByPoint(Re),Re.addVectors(Je.max,ms.max),Je.expandByPoint(Re)):(Je.expandByPoint(ms.min),Je.expandByPoint(ms.max))}Je.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Re.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(t,c),Re.add(Ui)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<n.count;b++)o[b]=new L,l[b]=new L;const c=new L,u=new L,h=new L,f=new kt,d=new kt,g=new kt,_=new L,m=new L;function p(b,v,x){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,x),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),o[b].add(_),o[v].add(_),o[x].add(_),l[b].add(m),l[v].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let b=0,v=M.length;b<v;++b){const x=M[b],C=x.start,O=x.count;for(let N=C,B=C+O;N<B;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new L,y=new L,R=new L,w=new L;function A(b){R.fromBufferAttribute(i,b),w.copy(R);const v=o[b];S.copy(v),S.sub(R.multiplyScalar(R.dot(v))).normalize(),y.crossVectors(w,v);const C=y.dot(l[b])<0?-1:1;a.setXYZW(b,S.x,S.y,S.z,C)}for(let b=0,v=M.length;b<v;++b){const x=M[b],C=x.start,O=x.count;for(let N=C,B=C+O;N<B;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new ye(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new Dt,hi=new Fr,Ks=new wn,Cl=new L,Ys=new L,qs=new L,js=new L,aa=new L,$s=new L,Il=new L,Zs=new L;class Tt extends pe{constructor(t=new Be,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(aa.fromBufferAttribute(h,t),a?$s.addScaledVector(aa,u):$s.addScaledVector(aa.sub(e),u))}e.add($s)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(Ks.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Ks,Cl)===null||hi.origin.distanceToSquared(Cl)>(t.far-t.near)**2))&&(Rl.copy(r).invert(),hi.copy(t.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,R=S;y<R;y+=3){const w=o.getX(y),A=o.getX(y+1),b=o.getX(y+2);i=Js(this,p,t,n,c,u,h,w,A,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);i=Js(this,a,t,n,c,u,h,M,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,R=S;y<R;y+=3){const w=y,A=y+1,b=y+2;i=Js(this,p,t,n,c,u,h,w,A,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,y=m+2;i=Js(this,a,t,n,c,u,h,M,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function wf(s,t,e,n,i,r,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Tn,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:s}}function Js(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ys),s.getVertexPosition(l,qs),s.getVertexPosition(c,js);const u=wf(s,t,e,n,Ys,qs,js,Il);if(u){const h=new L;mn.getBarycoord(Il,Ys,qs,js,h),i&&(u.uv=mn.getInterpolatedAttribute(i,o,l,c,h,new kt)),r&&(u.uv1=mn.getInterpolatedAttribute(r,o,l,c,h,new kt)),a&&(u.normal=mn.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};mn.getNormal(Ys,qs,js,f.normal),u.face=f,u.barycoord=h}return u}class Pe extends Be{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(h,2));function g(_,m,p,M,S,y,R,w,A,b,v){const x=y/A,C=R/b,O=y/2,N=R/2,B=w/2,W=A+1,H=b+1;let j=0,X=0;const st=new L;for(let rt=0;rt<H;rt++){const _t=rt*C-N;for(let Ct=0;Ct<W;Ct++){const Ht=Ct*x-O;st[_]=Ht*M,st[m]=_t*S,st[p]=B,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=w>0?1:-1,u.push(st.x,st.y,st.z),h.push(Ct/A),h.push(1-rt/b),j+=1}}for(let rt=0;rt<b;rt++)for(let _t=0;_t<A;_t++){const Ct=f+_t+W*rt,Ht=f+_t+W*(rt+1),Y=f+(_t+1)+W*(rt+1),nt=f+(_t+1)+W*rt;l.push(Ct,Ht,nt),l.push(Ht,Y,nt),X+=6}o.addGroup(d,X,v),d+=X,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function He(s){const t={};for(let e=0;e<s.length;e++){const n=is(s[e]);for(const i in n)t[i]=n[i]}return t}function Af(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function fh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const bf={clone:is,merge:He};var Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends _n{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dh extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new L,Ll=new kt,Pl=new kt;class Ve extends dh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,Ll,Pl),e.subVectors(Pl,Ll)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class If extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(Fi,Oi,t,e);i.layers=this.layers,this.add(i);const r=new Ve(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const a=new Ve(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const o=new Ve(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const l=new Ve(Fi,Oi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ph extends we{constructor(t,e,n,i,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lf extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ph(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:de}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Pe(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:si});r.uniforms.tEquirect.value=e;const a=new Tt(i,r),o=e.minFilter;return e.minFilter===We&&(e.minFilter=de),new If(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const oa=new L,Pf=new L,Df=new Ot;class gi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=oa.subVectors(n,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Df.getNormalMatrix(t),i=this.coplanarPoint(oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new wn,Qs=new L;class No{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],S=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,m-d,y-p).normalize(),n[1].setComponents(l+r,f+c,m+d,y+p).normalize(),n[2].setComponents(l+a,f+u,m+g,y+M).normalize(),n[3].setComponents(l-a,f-u,m-g,y-M).normalize(),n[4].setComponents(l-o,f-h,m-_,y-S).normalize(),e===Gn)n[5].setComponents(l+o,f+h,m+_,y+S).normalize();else if(e===wr)n[5].setComponents(o,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Qs.x=i.normal.x>0?t.max.x:t.min.x,Qs.y=i.normal.y>0?t.max.y:t.min.y,Qs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Nf(s){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class ne extends Be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-a;for(let S=0;S<c;S++){const y=S*h-r;g.push(y,-M,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const S=M+c*p,y=M+c*(p+1),R=M+1+c*(p+1),w=M+1+c*p;d.push(S,y,w),d.push(y,R,w)}this.setIndex(d),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ff=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Uf,alphahash_pars_fragment:Ff,alphamap_fragment:Of,alphamap_pars_fragment:zf,alphatest_fragment:Bf,alphatest_pars_fragment:kf,aomap_fragment:Hf,aomap_pars_fragment:Gf,batching_pars_vertex:Vf,batching_vertex:Wf,begin_vertex:Xf,beginnormal_vertex:Kf,bsdfs:Yf,iridescence_fragment:qf,bumpmap_pars_fragment:jf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:Jf,clipping_planes_vertex:Qf,color_fragment:td,color_pars_fragment:ed,color_pars_vertex:nd,color_vertex:id,common:sd,cube_uv_reflection_fragment:rd,defaultnormal_vertex:ad,displacementmap_pars_vertex:od,displacementmap_vertex:ld,emissivemap_fragment:cd,emissivemap_pars_fragment:hd,colorspace_fragment:ud,colorspace_pars_fragment:fd,envmap_fragment:dd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:gd,envmap_physical_pars_fragment:bd,envmap_vertex:_d,fog_vertex:xd,fog_pars_vertex:vd,fog_fragment:yd,fog_pars_fragment:Md,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:Ed,lights_lambert_fragment:Td,lights_lambert_pars_fragment:wd,lights_pars_begin:Ad,lights_toon_fragment:Rd,lights_toon_pars_fragment:Cd,lights_phong_fragment:Id,lights_phong_pars_fragment:Ld,lights_physical_fragment:Pd,lights_physical_pars_fragment:Dd,lights_fragment_begin:Nd,lights_fragment_maps:Ud,lights_fragment_end:Fd,logdepthbuf_fragment:Od,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:Bd,logdepthbuf_vertex:kd,map_fragment:Hd,map_pars_fragment:Gd,map_particle_fragment:Vd,map_particle_pars_fragment:Wd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:Kd,morphinstance_vertex:Yd,morphcolor_vertex:qd,morphnormal_vertex:jd,morphtarget_pars_vertex:$d,morphtarget_vertex:Zd,normal_fragment_begin:Jd,normal_fragment_maps:Qd,normal_pars_fragment:tp,normal_pars_vertex:ep,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:op,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:fp,dithering_pars_fragment:dp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:_p,shadowmap_vertex:xp,shadowmask_pars_fragment:vp,skinbase_vertex:yp,skinning_pars_vertex:Mp,skinning_vertex:Sp,skinnormal_vertex:Ep,specularmap_fragment:Tp,specularmap_pars_fragment:wp,tonemapping_fragment:Ap,tonemapping_pars_fragment:bp,transmission_fragment:Rp,transmission_pars_fragment:Cp,uv_pars_fragment:Ip,uv_pars_vertex:Lp,uv_vertex:Pp,worldpos_vertex:Dp,background_vert:Np,background_frag:Up,backgroundCube_vert:Fp,backgroundCube_frag:Op,cube_vert:zp,cube_frag:Bp,depth_vert:kp,depth_frag:Hp,distanceRGBA_vert:Gp,distanceRGBA_frag:Vp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:Kp,linedashed_frag:Yp,meshbasic_vert:qp,meshbasic_frag:jp,meshlambert_vert:$p,meshlambert_frag:Zp,meshmatcap_vert:Jp,meshmatcap_frag:Qp,meshnormal_vert:tm,meshnormal_frag:em,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:am,meshtoon_frag:om,points_vert:lm,points_frag:cm,shadow_vert:hm,shadow_frag:um,sprite_vert:fm,sprite_frag:dm},at={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Mn={basic:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new it(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:He([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:He([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:He([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new it(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:He([at.points,at.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:He([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:He([at.common,at.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:He([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:He([at.sprite,at.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:He([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:He([at.lights,at.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Mn.physical={uniforms:He([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const tr={r:0,b:0,g:0},fi=new en,pm=new Dt;function mm(s,t,e,n,i,r,a){const o=new it(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1;const y=g(M);y===null?p(o,l):y&&y.isColor&&(p(y,1),S=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===Nr)?(u===void 0&&(u=new Tt(new Pe(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:is(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),fi.copy(S.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(fi)),u.material.toneMapped=Wt.getTransfer(y.colorSpace)!==ae,(h!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Tt(new ne(2,2),new Kn({name:"BackgroundMaterial",uniforms:is(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(tr,fh(s)),n.buffers.color.setClear(tr.r,tr.g,tr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m}}function gm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(x,C,O,N,B){let W=!1;const H=h(N,O,C);r!==H&&(r=H,c(r.object)),W=d(x,N,O,B),W&&g(x,N,O,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(x,C,O,N),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function u(x){return s.deleteVertexArray(x)}function h(x,C,O){const N=O.wireframe===!0;let B=n[x.id];B===void 0&&(B={},n[x.id]=B);let W=B[C.id];W===void 0&&(W={},B[C.id]=W);let H=W[N];return H===void 0&&(H=f(l()),W[N]=H),H}function f(x){const C=[],O=[],N=[];for(let B=0;B<e;B++)C[B]=0,O[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:N,object:x,attributes:{},index:null}}function d(x,C,O,N){const B=r.attributes,W=C.attributes;let H=0;const j=O.getAttributes();for(const X in j)if(j[X].location>=0){const rt=B[X];let _t=W[X];if(_t===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),rt===void 0||rt.attribute!==_t||_t&&rt.data!==_t.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function g(x,C,O,N){const B={},W=C.attributes;let H=0;const j=O.getAttributes();for(const X in j)if(j[X].location>=0){let rt=W[X];rt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const _t={};_t.attribute=rt,rt&&rt.data&&(_t.data=rt.data),B[X]=_t,H++}r.attributes=B,r.attributesNum=H,r.index=N}function _(){const x=r.newAttributes;for(let C=0,O=x.length;C<O;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const O=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;O[x]=1,N[x]===0&&(s.enableVertexAttribArray(x),N[x]=1),B[x]!==C&&(s.vertexAttribDivisor(x,C),B[x]=C)}function M(){const x=r.newAttributes,C=r.enabledAttributes;for(let O=0,N=C.length;O<N;O++)C[O]!==x[O]&&(s.disableVertexAttribArray(O),C[O]=0)}function S(x,C,O,N,B,W,H){H===!0?s.vertexAttribIPointer(x,C,O,B,W):s.vertexAttribPointer(x,C,O,N,B,W)}function y(x,C,O,N){_();const B=N.attributes,W=O.getAttributes(),H=C.defaultAttributeValues;for(const j in W){const X=W[j];if(X.location>=0){let st=B[j];if(st===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const rt=st.normalized,_t=st.itemSize,Ct=t.get(st);if(Ct===void 0)continue;const Ht=Ct.buffer,Y=Ct.type,nt=Ct.bytesPerElement,Mt=Y===s.INT||Y===s.UNSIGNED_INT||st.gpuType===To;if(st.isInterleavedBufferAttribute){const lt=st.data,It=lt.stride,Nt=st.offset;if(lt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<X.locationSize;Gt++)p(X.location+Gt,lt.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)m(X.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let Gt=0;Gt<X.locationSize;Gt++)S(X.location+Gt,_t/X.locationSize,Y,rt,It*nt,(Nt+_t/X.locationSize*Gt)*nt,Mt)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)p(X.location+lt,st.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let lt=0;lt<X.locationSize;lt++)S(X.location+lt,_t/X.locationSize,Y,rt,_t*nt,_t/X.locationSize*lt*nt,Mt)}}else if(H!==void 0){const rt=H[j];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(X.location,rt);break;case 3:s.vertexAttrib3fv(X.location,rt);break;case 4:s.vertexAttrib4fv(X.location,rt);break;default:s.vertexAttrib1fv(X.location,rt)}}}}M()}function R(){b();for(const x in n){const C=n[x];for(const O in C){const N=C[O];for(const B in N)u(N[B].object),delete N[B];delete C[O]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const O in C){const N=C[O];for(const B in N)u(N[B].object),delete N[B];delete C[O]}delete n[x.id]}function A(x){for(const C in n){const O=n[C];if(O[x.id]===void 0)continue;const N=O[x.id];for(const B in N)u(N[B].object),delete N[B];delete O[x.id]}}function b(){v(),a=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function _m(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==on&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Xn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==qe&&!b)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:R,maxSamples:w}}function vm(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new gi,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,S=M*4;let y=p.clippingState||null;l.value=y,y=u(g,f,S,d);for(let R=0;R!==S;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=d;S!==_;++S,y+=4)a.copy(h[S]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ym(s){let t=new WeakMap;function e(a,o){return o===Sr?a.mapping=Ji:o===Oa&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sr||o===Oa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lf(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Or extends dh{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,Dl=[.125,.215,.35,.446,.526,.582],vi=20,la=new Or,Nl=new it;let ca=null,ha=0,ua=0,fa=!1;const _i=(1+Math.sqrt(5))/2,zi=1/_i,Ul=[new L(-_i,zi,0),new L(_i,zi,0),new L(-zi,0,_i),new L(zi,0,_i),new L(0,_i,-zi),new L(0,_i,zi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class fo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ha,ua),this._renderer.xr.enabled=fa,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:de,minFilter:de,generateMipmaps:!1,type:Hn,format:on,colorSpace:ze,depthBuffer:!1},i=Fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mm(r)),this._blurMaterial=Sm(r,t,e)}return i}_compileMaterial(t){const e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,i){const o=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Nl),u.toneMapping=ri,u.autoClear=!1;const d=new Oe({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Tt(new Pe,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Nl),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;er(i,M*S,p>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ji||t.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;er(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,la)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ul[(i-r-1)%Ul.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const p=[];let M=0;for(let A=0;A<vi;++A){const b=A/_,v=Math.exp(-b*b/2);p.push(v),A===0?M+=v:A<m&&(M+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const y=this._sizeLods[i],R=3*y*(i>S-Xi?i-S+Xi:0),w=4*(this._cubeSize-y);er(e,R,w,3*y,2*y),l.setRenderTarget(e),l.render(h,la)}}function Mm(s){const t=[],e=[],n=[];let i=s;const r=s-Xi+1+Dl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Xi?l=Dl[a-s+Xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),S=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,b=w>2?0:-1,v=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];M.set(v,_*g*w),S.set(f,m*g*w);const x=[w,w,w,w,w,w];y.set(x,p*g*w)}const R=new Be;R.setAttribute("position",new ye(M,_)),R.setAttribute("uv",new ye(S,m)),R.setAttribute("faceIndex",new ye(y,p)),t.push(R),i>Xi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fl(s,t,e){const n=new ai(s,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Sm(s,t,e){const n=new Float32Array(vi),i=new L(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ol(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function zl(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Em(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sr||l===Oa,u=l===Ji||l===Qi;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new fo(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new fo(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Tm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wm(s,t,e,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let S=0,y=M.length;S<y;S+=3){const R=M[S+0],w=M[S+1],A=M[S+2];f.push(R,w,w,A,A,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const R=S+0,w=S+1,A=S+2;f.push(R,w,w,A,A,R)}}else return;const m=new(rh(f)?uh:hh)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Am(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function bm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Rm(s,t,e){const n=new WeakMap,i=new Jt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let x=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let R=o.attributes.position.count*y,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*w*4*h),b=new oh(A,R,w,h);b.type=qe,b.needsUpdate=!0;const v=y*4;for(let C=0;C<h;C++){const O=p[C],N=M[C],B=S[C],W=R*w*4*C;for(let H=0;H<O.count;H++){const j=H*v;g===!0&&(i.fromBufferAttribute(O,H),A[W+j+0]=i.x,A[W+j+1]=i.y,A[W+j+2]=i.z,A[W+j+3]=0),_===!0&&(i.fromBufferAttribute(N,H),A[W+j+4]=i.x,A[W+j+5]=i.y,A[W+j+6]=i.z,A[W+j+7]=0),m===!0&&(i.fromBufferAttribute(B,H),A[W+j+8]=i.x,A[W+j+9]=i.y,A[W+j+10]=i.z,A[W+j+11]=B.itemSize===4?i.w:1)}}f={count:h,texture:b,size:new kt(R,w)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Cm(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class gh extends we{constructor(t,e,n,i,r,a,o,l,c,u=qi){if(u!==qi&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qi&&(n=Mi),n===void 0&&u===es&&(n=ts),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const _h=new we,Bl=new gh(1,1),xh=new oh,vh=new ff,yh=new ph,kl=[],Hl=[],Gl=new Float32Array(16),Vl=new Float32Array(9),Wl=new Float32Array(4);function os(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=kl[i];if(r===void 0&&(r=new Float32Array(i),kl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function zr(s,t){let e=Hl[t];e===void 0&&(e=new Int32Array(t),Hl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Im(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),be(e,t)}}function Pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),be(e,t)}}function Dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),be(e,t)}}function Nm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ae(e,n))return;Wl.set(n),s.uniformMatrix2fv(this.addr,!1,Wl),be(e,n)}}function Um(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ae(e,n))return;Vl.set(n),s.uniformMatrix3fv(this.addr,!1,Vl),be(e,n)}}function Fm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ae(e,n))return;Gl.set(n),s.uniformMatrix4fv(this.addr,!1,Gl),be(e,n)}}function Om(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),be(e,t)}}function Bm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),be(e,t)}}function km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),be(e,t)}}function Hm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),be(e,t)}}function Vm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),be(e,t)}}function Wm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),be(e,t)}}function Xm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Bl.compareFunction=ih,r=Bl):r=_h,e.setTexture2D(t||r,i)}function Km(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vh,i)}function Ym(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yh,i)}function qm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xh,i)}function jm(s){switch(s){case 5126:return Im;case 35664:return Lm;case 35665:return Pm;case 35666:return Dm;case 35674:return Nm;case 35675:return Um;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return zm;case 35668:case 35672:return Bm;case 35669:case 35673:return km;case 5125:return Hm;case 36294:return Gm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return qm}}function $m(s,t){s.uniform1fv(this.addr,t)}function Zm(s,t){const e=os(t,this.size,2);s.uniform2fv(this.addr,e)}function Jm(s,t){const e=os(t,this.size,3);s.uniform3fv(this.addr,e)}function Qm(s,t){const e=os(t,this.size,4);s.uniform4fv(this.addr,e)}function t0(s,t){const e=os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function e0(s,t){const e=os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function n0(s,t){const e=os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function i0(s,t){s.uniform1iv(this.addr,t)}function s0(s,t){s.uniform2iv(this.addr,t)}function r0(s,t){s.uniform3iv(this.addr,t)}function a0(s,t){s.uniform4iv(this.addr,t)}function o0(s,t){s.uniform1uiv(this.addr,t)}function l0(s,t){s.uniform2uiv(this.addr,t)}function c0(s,t){s.uniform3uiv(this.addr,t)}function h0(s,t){s.uniform4uiv(this.addr,t)}function u0(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||_h,r[a])}function f0(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||vh,r[a])}function d0(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||yh,r[a])}function p0(s,t,e){const n=this.cache,i=t.length,r=zr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||xh,r[a])}function m0(s){switch(s){case 5126:return $m;case 35664:return Zm;case 35665:return Jm;case 35666:return Qm;case 35674:return t0;case 35675:return e0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jm(e.type)}}class _0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m0(e.type)}}class x0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Xl(s,t){s.seq.push(t),s.map[t.id]=t}function v0(s,t,e){const n=s.name,i=n.length;for(da.lastIndex=0;;){const r=da.exec(n),a=da.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Xl(e,c===void 0?new g0(o,s,t):new _0(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new x0(o),Xl(e,h)),e=h}}}class Mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);v0(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Kl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const y0=37297;let M0=0;function S0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Yl=new Ot;function E0(s){Wt._getMatrix(Yl,Wt.workingColorSpace,s);const t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(s)){case Ur:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ql(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+S0(s.getShaderSource(t),a)}else return i}function T0(s,t){const e=E0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function w0(s,t){let e;switch(t){case vu:e="Linear";break;case yu:e="Reinhard";break;case Mu:e="Cineon";break;case Vc:e="ACESFilmic";break;case Eu:e="AgX";break;case Tu:e="Neutral";break;case Su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const nr=new L;function A0(){Wt.getLuminanceCoefficients(nr);const s=nr.x.toFixed(4),t=nr.y.toFixed(4),e=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function R0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Es(s){return s!==""}function jl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $l(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(s){return s.replace(I0,P0)}const L0=new Map;function P0(s,t){let e=Bt[t];if(e===void 0){const n=L0.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return po(e)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(s){return s.replace(D0,N0)}function N0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function U0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function F0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function z0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Eo:t="ENVMAP_BLENDING_MULTIPLY";break;case _u:t="ENVMAP_BLENDING_MIX";break;case xu:t="ENVMAP_BLENDING_ADD";break}return t}function B0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function k0(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=U0(e),c=F0(e),u=O0(e),h=z0(e),f=B0(e),d=b0(e),g=R0(r),_=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Bt.tonemapping_pars_fragment:"",e.toneMapping!==ri?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,T0("linearToOutputTexel",e.outputColorSpace),A0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=po(a),a=jl(a,e),a=$l(a,e),o=po(o),o=jl(o,e),o=$l(o,e),a=Zl(a),o=Zl(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+a,y=M+p+o,R=Kl(i,i.VERTEX_SHADER,S),w=Kl(i,i.FRAGMENT_SHADER,y);i.attachShader(_,R),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(C){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(R).trim(),B=i.getShaderInfoLog(w).trim();let W=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,w);else{const j=ql(i,R,"vertex"),X=ql(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+j+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||B==="")&&(H=!1);H&&(C.diagnostics={runnable:W,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(R),i.deleteShader(w),b=new Mr(i,_),v=C0(i,_)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,y0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let H0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new V0(t),e.set(t,n)),n}}class V0{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}}function W0(s,t,e,n,i,r,a){const o=new lh,l=new G0,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,C,O,N){const B=O.fog,W=N.geometry,H=v.isMeshStandardMaterial?O.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),X=j&&j.mapping===Nr?j.image.height:null,st=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_t=rt!==void 0?rt.length:0;let Ct=0;W.morphAttributes.position!==void 0&&(Ct=1),W.morphAttributes.normal!==void 0&&(Ct=2),W.morphAttributes.color!==void 0&&(Ct=3);let Ht,Y,nt,Mt;if(st){const ie=Mn[st];Ht=ie.vertexShader,Y=ie.fragmentShader}else Ht=v.vertexShader,Y=v.fragmentShader,l.update(v),nt=l.getVertexShaderID(v),Mt=l.getFragmentShaderID(v);const lt=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,Gt=N.isBatchedMesh===!0,me=!!v.map,qt=!!v.matcap,ve=!!j,z=!!v.aoMap,nn=!!v.lightMap,Xt=!!v.bumpMap,Kt=!!v.normalMap,bt=!!v.displacementMap,he=!!v.emissiveMap,At=!!v.metalnessMap,I=!!v.roughnessMap,E=v.anisotropy>0,k=v.clearcoat>0,Z=v.dispersion>0,Q=v.iridescence>0,q=v.sheen>0,St=v.transmission>0,ct=E&&!!v.anisotropyMap,pt=k&&!!v.clearcoatMap,jt=k&&!!v.clearcoatNormalMap,tt=k&&!!v.clearcoatRoughnessMap,mt=Q&&!!v.iridescenceMap,Rt=Q&&!!v.iridescenceThicknessMap,Lt=q&&!!v.sheenColorMap,gt=q&&!!v.sheenRoughnessMap,Yt=!!v.specularMap,zt=!!v.specularColorMap,le=!!v.specularIntensityMap,P=St&&!!v.transmissionMap,ot=St&&!!v.thicknessMap,K=!!v.gradientMap,J=!!v.alphaMap,ft=v.alphaTest>0,ht=!!v.alphaHash,Ut=!!v.extensions;let _e=ri;v.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(_e=s.toneMapping);const Ne={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:Ht,fragmentShader:Y,defines:v.defines,customVertexShaderID:nt,customFragmentShaderID:Mt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Gt,batchingColor:Gt&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ze,alphaToCoverage:!!v.alphaToCoverage,map:me,matcap:qt,envMap:ve,envMapMode:ve&&j.mapping,envMapCubeUVHeight:X,aoMap:z,lightMap:nn,bumpMap:Xt,normalMap:Kt,displacementMap:f&&bt,emissiveMap:he,normalMapObjectSpace:Kt&&v.normalMapType===Pu,normalMapTangentSpace:Kt&&v.normalMapType===Po,metalnessMap:At,roughnessMap:I,anisotropy:E,anisotropyMap:ct,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:jt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:Q,iridescenceMap:mt,iridescenceThicknessMap:Rt,sheen:q,sheenColorMap:Lt,sheenRoughnessMap:gt,specularMap:Yt,specularColorMap:zt,specularIntensityMap:le,transmission:St,transmissionMap:P,thicknessMap:ot,gradientMap:K,opaque:v.transparent===!1&&v.blending===Yi&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ht,combine:v.combine,mapUv:me&&_(v.map.channel),aoMapUv:z&&_(v.aoMap.channel),lightMapUv:nn&&_(v.lightMap.channel),bumpMapUv:Xt&&_(v.bumpMap.channel),normalMapUv:Kt&&_(v.normalMap.channel),displacementMapUv:bt&&_(v.displacementMap.channel),emissiveMapUv:he&&_(v.emissiveMap.channel),metalnessMapUv:At&&_(v.metalnessMap.channel),roughnessMapUv:I&&_(v.roughnessMap.channel),anisotropyMapUv:ct&&_(v.anisotropyMap.channel),clearcoatMapUv:pt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(v.sheenRoughnessMap.channel),specularMapUv:Yt&&_(v.specularMap.channel),specularColorMapUv:zt&&_(v.specularColorMap.channel),specularIntensityMapUv:le&&_(v.specularIntensityMap.channel),transmissionMapUv:P&&_(v.transmissionMap.channel),thicknessMapUv:ot&&_(v.thicknessMap.channel),alphaMapUv:J&&_(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Kt||E),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(me||J),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:It,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ct,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:me&&v.map.isVideoTexture===!0&&Wt.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:he&&v.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ce,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ut&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&v.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)x.push(C),x.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(M(x,v),S(x,v),x.push(s.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function M(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function S(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const x=g[v.type];let C;if(x){const O=Mn[x];C=bf.clone(O.uniforms)}else C=v.uniforms;return C}function R(v,x){let C;for(let O=0,N=u.length;O<N;O++){const B=u[O];if(B.cacheKey===x){C=B,++C.usedTimes;break}}return C===void 0&&(C=new k0(s,x,v,r),u.push(C)),C}function w(v){if(--v.usedTimes===0){const x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function A(v){l.remove(v)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:b}}function X0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function K0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ql(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function tc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,d,g,_,m){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||K0),n.length>1&&n.sort(f||Ql),i.length>1&&i.sort(f||Ql)}function u(){for(let h=t,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Y0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new tc,s.set(n,[a])):i>=r.length?(a=new tc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function q0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new it};break;case"SpotLight":e={position:new L,direction:new L,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new it,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new it,groundColor:new it};break;case"RectAreaLight":e={color:new it,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function j0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let $0=0;function Z0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function J0(s){const t=new q0,e=j0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Dt,a=new Dt;function o(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,S=0,y=0,R=0,w=0,A=0;c.sort(Z0);for(let v=0,x=c.length;v<x;v++){const C=c[v],O=C.color,N=C.intensity,B=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=O.r*N,h+=O.g*N,f+=O.b*N;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],N);A++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,X=e.get(C);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=C.shadow.matrix,M++}n.directional[d]=H,d++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(O).multiplyScalar(N),H.distance=B,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const j=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,j.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=j.matrix,C.castShadow){const X=e.get(C);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=W,y++}_++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(O).multiplyScalar(N),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const j=C.shadow,X=e.get(C);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(N),H.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==d||b.pointLength!==g||b.spotLength!==_||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==M||b.numPointShadows!==S||b.numSpotShadows!==y||b.numSpotMaps!==R||b.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,b.directionalLength=d,b.pointLength=g,b.spotLength=_,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=M,b.numPointShadows=S,b.numSpotShadows=y,b.numSpotMaps=R,b.numLightProbes=A,n.version=$0++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(S.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ec(s){const t=new J0(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Q0(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new ec(s),t.set(i,[o])):r>=a.length?(o=new ec(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class tg extends _n{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eg extends _n{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sg(s,t,e){let n=new No;const i=new kt,r=new kt,a=new Jt,o=new tg({depthPacking:Lu}),l=new eg,c={},u=e.maxTextureSize,h={[Tn]:je,[je]:Tn,[Ce]:Ce},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let p=this.type;this.render=function(w,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const v=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),O=s.state;O.setBlending(si),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=p!==Fn&&this.type===Fn,B=p===Fn&&this.type!==Fn;for(let W=0,H=w.length;W<H;W++){const j=w[W],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const st=X.getFrameExtents();if(i.multiply(st),r.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/st.x),i.x=r.x*st.x,X.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/st.y),i.y=r.y*st.y,X.mapSize.y=r.y)),X.map===null||N===!0||B===!0){const _t=this.type!==Fn?{minFilter:Xe,magFilter:Xe}:{};X.map!==null&&X.map.dispose(),X.map=new ai(i.x,i.y,_t),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const rt=X.getViewportCount();for(let _t=0;_t<rt;_t++){const Ct=X.getViewport(_t);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),O.viewport(a),X.updateMatrices(j,_t),n=X.getFrustum(),y(A,b,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Fn&&M(X,b),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,x,C)};function M(w,A){const b=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ai(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,b,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,b,d,_,null)}function S(w,A,b,v){let x=null;const C=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)x=C;else if(x=b.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=x.uuid,N=A.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let W=B[N];W===void 0&&(W=x.clone(),B[N]=W,A.addEventListener("dispose",R)),x=W}if(x.visible=A.visible,x.wireframe=A.wireframe,v===Fn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=s.properties.get(x);O.light=b}return x}function y(w,A,b,v,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Fn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const N=t.update(w),B=w.material;if(Array.isArray(B)){const W=N.groups;for(let H=0,j=W.length;H<j;H++){const X=W[H],st=B[X.materialIndex];if(st&&st.visible){const rt=S(w,st,v,x);w.onBeforeShadow(s,w,A,b,N,rt,X),s.renderBufferDirect(b,null,N,rt,w,X),w.onAfterShadow(s,w,A,b,N,rt,X)}}}else if(B.visible){const W=S(w,B,v,x);w.onBeforeShadow(s,w,A,b,N,W,null),s.renderBufferDirect(b,null,N,W,w,null),w.onAfterShadow(s,w,A,b,N,W,null)}}const O=w.children;for(let N=0,B=O.length;N<B;N++)y(O[N],A,b,v,x)}function R(w){w.target.removeEventListener("dispose",R);for(const b in c){const v=c[b],x=w.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const rg={[Ia]:La,[Pa]:Ua,[Da]:Fa,[Zi]:Na,[La]:Ia,[Ua]:Pa,[Fa]:Da,[Na]:Zi};function ag(s,t){function e(){let P=!1;const ot=new Jt;let K=null;const J=new Jt(0,0,0,0);return{setMask:function(ft){K!==ft&&!P&&(s.colorMask(ft,ft,ft,ft),K=ft)},setLocked:function(ft){P=ft},setClear:function(ft,ht,Ut,_e,Ne){Ne===!0&&(ft*=_e,ht*=_e,Ut*=_e),ot.set(ft,ht,Ut,_e),J.equals(ot)===!1&&(s.clearColor(ft,ht,Ut,_e),J.copy(ot))},reset:function(){P=!1,K=null,J.set(-1,0,0,0)}}}function n(){let P=!1,ot=!1,K=null,J=null,ft=null;return{setReversed:function(ht){if(ot!==ht){const Ut=t.get("EXT_clip_control");ot?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const _e=ft;ft=null,this.setClear(_e)}ot=ht},getReversed:function(){return ot},setTest:function(ht){ht?lt(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(ht){K!==ht&&!P&&(s.depthMask(ht),K=ht)},setFunc:function(ht){if(ot&&(ht=rg[ht]),J!==ht){switch(ht){case Ia:s.depthFunc(s.NEVER);break;case La:s.depthFunc(s.ALWAYS);break;case Pa:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case Da:s.depthFunc(s.EQUAL);break;case Na:s.depthFunc(s.GEQUAL);break;case Ua:s.depthFunc(s.GREATER);break;case Fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ht}},setLocked:function(ht){P=ht},setClear:function(ht){ft!==ht&&(ot&&(ht=1-ht),s.clearDepth(ht),ft=ht)},reset:function(){P=!1,K=null,J=null,ft=null,ot=!1}}}function i(){let P=!1,ot=null,K=null,J=null,ft=null,ht=null,Ut=null,_e=null,Ne=null;return{setTest:function(ie){P||(ie?lt(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(ie){ot!==ie&&!P&&(s.stencilMask(ie),ot=ie)},setFunc:function(ie,ln,Rn){(K!==ie||J!==ln||ft!==Rn)&&(s.stencilFunc(ie,ln,Rn),K=ie,J=ln,ft=Rn)},setOp:function(ie,ln,Rn){(ht!==ie||Ut!==ln||_e!==Rn)&&(s.stencilOp(ie,ln,Rn),ht=ie,Ut=ln,_e=Rn)},setLocked:function(ie){P=ie},setClear:function(ie){Ne!==ie&&(s.clearStencil(ie),Ne=ie)},reset:function(){P=!1,ot=null,K=null,J=null,ft=null,ht=null,Ut=null,_e=null,Ne=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,y=null,R=null,w=null,A=new it(0,0,0),b=0,v=!1,x=null,C=null,O=null,N=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=j>=2);let st=null,rt={};const _t=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),Ht=new Jt().fromArray(_t),Y=new Jt().fromArray(Ct);function nt(P,ot,K,J){const ft=new Uint8Array(4),ht=s.createTexture();s.bindTexture(P,ht),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<K;Ut++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(ot,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(ot+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return ht}const Mt={};Mt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(s.DEPTH_TEST),a.setFunc(Zi),Xt(!1),Kt(rl),lt(s.CULL_FACE),z(si);function lt(P){u[P]!==!0&&(s.enable(P),u[P]=!0)}function It(P){u[P]!==!1&&(s.disable(P),u[P]=!1)}function Nt(P,ot){return h[P]!==ot?(s.bindFramebuffer(P,ot),h[P]=ot,P===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ot),P===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ot),!0):!1}function Gt(P,ot){let K=d,J=!1;if(P){K=f.get(ot),K===void 0&&(K=[],f.set(ot,K));const ft=P.textures;if(K.length!==ft.length||K[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Ut=ft.length;ht<Ut;ht++)K[ht]=s.COLOR_ATTACHMENT0+ht;K.length=ft.length,J=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,J=!0);J&&s.drawBuffers(K)}function me(P){return g!==P?(s.useProgram(P),g=P,!0):!1}const qt={[xi]:s.FUNC_ADD,[tu]:s.FUNC_SUBTRACT,[eu]:s.FUNC_REVERSE_SUBTRACT};qt[nu]=s.MIN,qt[iu]=s.MAX;const ve={[su]:s.ZERO,[ru]:s.ONE,[au]:s.SRC_COLOR,[Ra]:s.SRC_ALPHA,[fu]:s.SRC_ALPHA_SATURATE,[hu]:s.DST_COLOR,[lu]:s.DST_ALPHA,[ou]:s.ONE_MINUS_SRC_COLOR,[Ca]:s.ONE_MINUS_SRC_ALPHA,[uu]:s.ONE_MINUS_DST_COLOR,[cu]:s.ONE_MINUS_DST_ALPHA,[du]:s.CONSTANT_COLOR,[pu]:s.ONE_MINUS_CONSTANT_COLOR,[mu]:s.CONSTANT_ALPHA,[gu]:s.ONE_MINUS_CONSTANT_ALPHA};function z(P,ot,K,J,ft,ht,Ut,_e,Ne,ie){if(P===si){_===!0&&(It(s.BLEND),_=!1);return}if(_===!1&&(lt(s.BLEND),_=!0),P!==Qh){if(P!==m||ie!==v){if((p!==xi||y!==xi)&&(s.blendEquation(s.FUNC_ADD),p=xi,y=xi),ie)switch(P){case Yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case al:s.blendFunc(s.ONE,s.ONE);break;case ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ll:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case al:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ll:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,S=null,R=null,w=null,A.set(0,0,0),b=0,m=P,v=ie}return}ft=ft||ot,ht=ht||K,Ut=Ut||J,(ot!==p||ft!==y)&&(s.blendEquationSeparate(qt[ot],qt[ft]),p=ot,y=ft),(K!==M||J!==S||ht!==R||Ut!==w)&&(s.blendFuncSeparate(ve[K],ve[J],ve[ht],ve[Ut]),M=K,S=J,R=ht,w=Ut),(_e.equals(A)===!1||Ne!==b)&&(s.blendColor(_e.r,_e.g,_e.b,Ne),A.copy(_e),b=Ne),m=P,v=!1}function nn(P,ot){P.side===Ce?It(s.CULL_FACE):lt(s.CULL_FACE);let K=P.side===je;ot&&(K=!K),Xt(K),P.blending===Yi&&P.transparent===!1?z(si):z(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const J=P.stencilWrite;o.setTest(J),J&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),he(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(P){x!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),x=P)}function Kt(P){P!==$h?(lt(s.CULL_FACE),P!==C&&(P===rl?s.cullFace(s.BACK):P===Zh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),C=P}function bt(P){P!==O&&(H&&s.lineWidth(P),O=P)}function he(P,ot,K){P?(lt(s.POLYGON_OFFSET_FILL),(N!==ot||B!==K)&&(s.polygonOffset(ot,K),N=ot,B=K)):It(s.POLYGON_OFFSET_FILL)}function At(P){P?lt(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function I(P){P===void 0&&(P=s.TEXTURE0+W-1),st!==P&&(s.activeTexture(P),st=P)}function E(P,ot,K){K===void 0&&(st===null?K=s.TEXTURE0+W-1:K=st);let J=rt[K];J===void 0&&(J={type:void 0,texture:void 0},rt[K]=J),(J.type!==P||J.texture!==ot)&&(st!==K&&(s.activeTexture(K),st=K),s.bindTexture(P,ot||Mt[P]),J.type=P,J.texture=ot)}function k(){const P=rt[st];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(P){Ht.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Ht.copy(P))}function gt(P){Y.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Yt(P,ot){let K=c.get(ot);K===void 0&&(K=new WeakMap,c.set(ot,K));let J=K.get(P);J===void 0&&(J=s.getUniformBlockIndex(ot,P.name),K.set(P,J))}function zt(P,ot){const J=c.get(ot).get(P);l.get(ot)!==J&&(s.uniformBlockBinding(ot,J,P.__bindingPointIndex),l.set(ot,J))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},st=null,rt={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,y=null,R=null,w=null,A=new it(0,0,0),b=0,v=!1,x=null,C=null,O=null,N=null,B=null,Ht.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:It,bindFramebuffer:Nt,drawBuffers:Gt,useProgram:me,setBlending:z,setMaterial:nn,setFlipSided:Xt,setCullFace:Kt,setLineWidth:bt,setPolygonOffset:he,setScissorTest:At,activeTexture:I,bindTexture:E,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Rt,updateUBOMapping:Yt,uniformBlockBinding:zt,texStorage2D:jt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Lt,viewport:gt,reset:le}}function nc(s,t,e,n){const i=og(n);switch(e){case jc:return s*t;case Zc:return s*t;case Jc:return s*t*2;case bo:return s*t/i.components*i.byteLength;case Ro:return s*t/i.components*i.byteLength;case Qc:return s*t*2/i.components*i.byteLength;case Co:return s*t*2/i.components*i.byteLength;case $c:return s*t*3/i.components*i.byteLength;case on:return s*t*4/i.components*i.byteLength;case Io:return s*t*4/i.components*i.byteLength;case gr:case _r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xr:case vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ha:return Math.max(s,16)*Math.max(t,8)/4;case za:case ka:return Math.max(s,8)*Math.max(t,8)/2;case Ga:case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case to:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case eo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case no:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case io:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case so:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case yr:case ro:case ao:return Math.ceil(s/4)*Math.ceil(t/4)*16;case th:case oo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case lo:case co:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function og(s){switch(s){case Xn:case Kc:return{byteLength:1,components:1};case bs:case Yc:case Hn:return{byteLength:2,components:1};case wo:case Ao:return{byteLength:2,components:4};case Mi:case To:case qe:return{byteLength:4,components:1};case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function lg(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return d?new OffscreenCanvas(I,E):Is("canvas")}function _(I,E,k){let Z=1;const Q=At(I);if((Q.width>k||Q.height>k)&&(Z=k/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const q=Math.floor(Z*Q.width),St=Math.floor(Z*Q.height);h===void 0&&(h=g(q,St));const ct=E?g(q,St):h;return ct.width=q,ct.height=St,ct.getContext("2d").drawImage(I,0,0,q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+St+")."),ct}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(I,E,k,Z,Q=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let q=E;if(E===s.RED&&(k===s.FLOAT&&(q=s.R32F),k===s.HALF_FLOAT&&(q=s.R16F),k===s.UNSIGNED_BYTE&&(q=s.R8)),E===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.R8UI),k===s.UNSIGNED_SHORT&&(q=s.R16UI),k===s.UNSIGNED_INT&&(q=s.R32UI),k===s.BYTE&&(q=s.R8I),k===s.SHORT&&(q=s.R16I),k===s.INT&&(q=s.R32I)),E===s.RG&&(k===s.FLOAT&&(q=s.RG32F),k===s.HALF_FLOAT&&(q=s.RG16F),k===s.UNSIGNED_BYTE&&(q=s.RG8)),E===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RG8UI),k===s.UNSIGNED_SHORT&&(q=s.RG16UI),k===s.UNSIGNED_INT&&(q=s.RG32UI),k===s.BYTE&&(q=s.RG8I),k===s.SHORT&&(q=s.RG16I),k===s.INT&&(q=s.RG32I)),E===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(q=s.RGB16UI),k===s.UNSIGNED_INT&&(q=s.RGB32UI),k===s.BYTE&&(q=s.RGB8I),k===s.SHORT&&(q=s.RGB16I),k===s.INT&&(q=s.RGB32I)),E===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),k===s.UNSIGNED_INT&&(q=s.RGBA32UI),k===s.BYTE&&(q=s.RGBA8I),k===s.SHORT&&(q=s.RGBA16I),k===s.INT&&(q=s.RGBA32I)),E===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),E===s.RGBA){const St=Q?Ur:Wt.getTransfer(Z);k===s.FLOAT&&(q=s.RGBA32F),k===s.HALF_FLOAT&&(q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(q=St===ae?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(I,E){let k;return I?E===null||E===Mi||E===ts?k=s.DEPTH24_STENCIL8:E===qe?k=s.DEPTH32F_STENCIL8:E===bs&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Mi||E===ts?k=s.DEPTH_COMPONENT24:E===qe?k=s.DEPTH_COMPONENT32F:E===bs&&(k=s.DEPTH_COMPONENT16),k}function R(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Xe&&I.minFilter!==de?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){const E=I.target;E.removeEventListener("dispose",w),b(E),E.isVideoTexture&&u.delete(E)}function A(I){const E=I.target;E.removeEventListener("dispose",A),x(E)}function b(I){const E=n.get(I);if(E.__webglInit===void 0)return;const k=I.source,Z=f.get(k);if(Z){const Q=Z[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(I),Object.keys(Z).length===0&&f.delete(k)}n.remove(I)}function v(I){const E=n.get(I);s.deleteTexture(E.__webglTexture);const k=I.source,Z=f.get(k);delete Z[E.__cacheKey],a.memory.textures--}function x(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let Q=0;Q<E.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[Z]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=I.textures;for(let Z=0,Q=k.length;Z<Q;Z++){const q=n.get(k[Z]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(k[Z])}n.remove(I)}let C=0;function O(){C=0}function N(){const I=C;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),C+=1,I}function B(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function W(I,E){const k=n.get(I);if(I.isVideoTexture&&bt(I),I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){const Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,I,E);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+E)}function H(I,E){const k=n.get(I);if(I.version>0&&k.__version!==I.version){Y(k,I,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+E)}function j(I,E){const k=n.get(I);if(I.version>0&&k.__version!==I.version){Y(k,I,E);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+E)}function X(I,E){const k=n.get(I);if(I.version>0&&k.__version!==I.version){nt(k,I,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+E)}const st={[Wn]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[Er]:s.MIRRORED_REPEAT},rt={[Xe]:s.NEAREST,[Xc]:s.NEAREST_MIPMAP_NEAREST,[Ms]:s.NEAREST_MIPMAP_LINEAR,[de]:s.LINEAR,[mr]:s.LINEAR_MIPMAP_NEAREST,[We]:s.LINEAR_MIPMAP_LINEAR},_t={[Du]:s.NEVER,[Bu]:s.ALWAYS,[Nu]:s.LESS,[ih]:s.LEQUAL,[Uu]:s.EQUAL,[zu]:s.GEQUAL,[Fu]:s.GREATER,[Ou]:s.NOTEQUAL};function Ct(I,E){if(E.type===qe&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===de||E.magFilter===mr||E.magFilter===Ms||E.magFilter===We||E.minFilter===de||E.minFilter===mr||E.minFilter===Ms||E.minFilter===We)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,st[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,st[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,st[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,rt[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,rt[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,_t[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xe||E.minFilter!==Ms&&E.minFilter!==We||E.type===qe&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ht(I,E){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));const Z=E.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const q=B(E);if(q!==I.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[q].usedTimes++;const St=Q[I.__cacheKey];St!==void 0&&(Q[I.__cacheKey].usedTimes--,St.usedTimes===0&&v(E)),I.__cacheKey=q,I.__webglTexture=Q[q].texture}return k}function Y(I,E,k){let Z=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=s.TEXTURE_3D);const Q=Ht(I,E),q=E.source;e.bindTexture(Z,I.__webglTexture,s.TEXTURE0+k);const St=n.get(q);if(q.version!==St.__version||Q===!0){e.activeTexture(s.TEXTURE0+k);const ct=Wt.getPrimaries(Wt.workingColorSpace),pt=E.colorSpace===Bn?null:Wt.getPrimaries(E.colorSpace),jt=E.colorSpace===Bn||ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let tt=_(E.image,!1,i.maxTextureSize);tt=he(E,tt);const mt=r.convert(E.format,E.colorSpace),Rt=r.convert(E.type);let Lt=S(E.internalFormat,mt,Rt,E.colorSpace,E.isVideoTexture);Ct(Z,E);let gt;const Yt=E.mipmaps,zt=E.isVideoTexture!==!0,le=St.__version===void 0||Q===!0,P=q.dataReady,ot=R(E,tt);if(E.isDepthTexture)Lt=y(E.format===es,E.type),le&&(zt?e.texStorage2D(s.TEXTURE_2D,1,Lt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Lt,tt.width,tt.height,0,mt,Rt,null));else if(E.isDataTexture)if(Yt.length>0){zt&&le&&e.texStorage2D(s.TEXTURE_2D,ot,Lt,Yt[0].width,Yt[0].height);for(let K=0,J=Yt.length;K<J;K++)gt=Yt[K],zt?P&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,K,Lt,gt.width,gt.height,0,mt,Rt,gt.data);E.generateMipmaps=!1}else zt?(le&&e.texStorage2D(s.TEXTURE_2D,ot,Lt,tt.width,tt.height),P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Rt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,tt.width,tt.height,0,mt,Rt,tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){zt&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,Lt,Yt[0].width,Yt[0].height,tt.depth);for(let K=0,J=Yt.length;K<J;K++)if(gt=Yt[K],E.format!==on)if(mt!==null)if(zt){if(P)if(E.layerUpdates.size>0){const ft=nc(gt.width,gt.height,E.format,E.type);for(const ht of E.layerUpdates){const Ut=gt.data.subarray(ht*ft/gt.data.BYTES_PER_ELEMENT,(ht+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,ht,gt.width,gt.height,1,mt,Ut)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Lt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?P&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,tt.depth,mt,Rt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,Lt,gt.width,gt.height,tt.depth,0,mt,Rt,gt.data)}else{zt&&le&&e.texStorage2D(s.TEXTURE_2D,ot,Lt,Yt[0].width,Yt[0].height);for(let K=0,J=Yt.length;K<J;K++)gt=Yt[K],E.format!==on?mt!==null?zt?P&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?P&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,K,Lt,gt.width,gt.height,0,mt,Rt,gt.data)}else if(E.isDataArrayTexture)if(zt){if(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ot,Lt,tt.width,tt.height,tt.depth),P)if(E.layerUpdates.size>0){const K=nc(tt.width,tt.height,E.format,E.type);for(const J of E.layerUpdates){const ft=tt.data.subarray(J*K/tt.data.BYTES_PER_ELEMENT,(J+1)*K/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,mt,Rt,ft)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Rt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,tt.width,tt.height,tt.depth,0,mt,Rt,tt.data);else if(E.isData3DTexture)zt?(le&&e.texStorage3D(s.TEXTURE_3D,ot,Lt,tt.width,tt.height,tt.depth),P&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Rt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,tt.width,tt.height,tt.depth,0,mt,Rt,tt.data);else if(E.isFramebufferTexture){if(le)if(zt)e.texStorage2D(s.TEXTURE_2D,ot,Lt,tt.width,tt.height);else{let K=tt.width,J=tt.height;for(let ft=0;ft<ot;ft++)e.texImage2D(s.TEXTURE_2D,ft,Lt,K,J,0,mt,Rt,null),K>>=1,J>>=1}}else if(Yt.length>0){if(zt&&le){const K=At(Yt[0]);e.texStorage2D(s.TEXTURE_2D,ot,Lt,K.width,K.height)}for(let K=0,J=Yt.length;K<J;K++)gt=Yt[K],zt?P&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,mt,Rt,gt):e.texImage2D(s.TEXTURE_2D,K,Lt,mt,Rt,gt);E.generateMipmaps=!1}else if(zt){if(le){const K=At(tt);e.texStorage2D(s.TEXTURE_2D,ot,Lt,K.width,K.height)}P&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Rt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Lt,mt,Rt,tt);m(E)&&p(Z),St.__version=q.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function nt(I,E,k){if(E.image.length!==6)return;const Z=Ht(I,E),Q=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+k);const q=n.get(Q);if(Q.version!==q.__version||Z===!0){e.activeTexture(s.TEXTURE0+k);const St=Wt.getPrimaries(Wt.workingColorSpace),ct=E.colorSpace===Bn?null:Wt.getPrimaries(E.colorSpace),pt=E.colorSpace===Bn||St===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const jt=E.isCompressedTexture||E.image[0].isCompressedTexture,tt=E.image[0]&&E.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!jt&&!tt?mt[J]=_(E.image[J],!0,i.maxCubemapSize):mt[J]=tt?E.image[J].image:E.image[J],mt[J]=he(E,mt[J]);const Rt=mt[0],Lt=r.convert(E.format,E.colorSpace),gt=r.convert(E.type),Yt=S(E.internalFormat,Lt,gt,E.colorSpace),zt=E.isVideoTexture!==!0,le=q.__version===void 0||Z===!0,P=Q.dataReady;let ot=R(E,Rt);Ct(s.TEXTURE_CUBE_MAP,E);let K;if(jt){zt&&le&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Yt,Rt.width,Rt.height);for(let J=0;J<6;J++){K=mt[J].mipmaps;for(let ft=0;ft<K.length;ft++){const ht=K[ft];E.format!==on?Lt!==null?zt?P&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ht.width,ht.height,Lt,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ht.width,ht.height,Lt,gt,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Yt,ht.width,ht.height,0,Lt,gt,ht.data)}}}else{if(K=E.mipmaps,zt&&le){K.length>0&&ot++;const J=At(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ot,Yt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){zt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Lt,gt,mt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,mt[J].width,mt[J].height,0,Lt,gt,mt[J].data);for(let ft=0;ft<K.length;ft++){const Ut=K[ft].image[J].image;zt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Ut.width,Ut.height,Lt,gt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Yt,Ut.width,Ut.height,0,Lt,gt,Ut.data)}}else{zt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,gt,mt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,Lt,gt,mt[J]);for(let ft=0;ft<K.length;ft++){const ht=K[ft];zt?P&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Lt,gt,ht.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Yt,Lt,gt,ht.image[J])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),q.__version=Q.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Mt(I,E,k,Z,Q,q){const St=r.convert(k.format,k.colorSpace),ct=r.convert(k.type),pt=S(k.internalFormat,St,ct,k.colorSpace),jt=n.get(E),tt=n.get(k);if(tt.__renderTarget=E,!jt.__hasExternalTextures){const mt=Math.max(1,E.width>>q),Rt=Math.max(1,E.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,pt,mt,Rt,E.depth,0,St,ct,null):e.texImage2D(Q,q,pt,mt,Rt,0,St,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),Kt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,tt.__webglTexture,0,Xt(E)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,tt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(I,E,k){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const Z=E.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,q=y(E.stencilBuffer,Q),St=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=Xt(E);Kt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,q,E.width,E.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,q,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,q,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,I)}else{const Z=E.textures;for(let Q=0;Q<Z.length;Q++){const q=Z[Q],St=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),pt=S(q.internalFormat,St,ct,q.colorSpace),jt=Xt(E);k&&Kt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,pt,E.width,E.height):Kt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,pt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const Q=Z.__webglTexture,q=Xt(E);if(E.depthTexture.format===qi)Kt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(E.depthTexture.format===es)Kt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Nt(I){const E=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=Z}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");It(E.__webglFramebuffer,I)}else if(k){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=s.createRenderbuffer(),lt(E.__webglDepthbuffer[Z],I,!1);else{const Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),lt(E.__webglDepthbuffer,I,!1);else{const Z=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(I,E,k){const Z=n.get(I);E!==void 0&&Mt(Z.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Nt(I)}function me(I){const E=I.texture,k=n.get(I),Z=n.get(E);I.addEventListener("dispose",A);const Q=I.textures,q=I.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=E.version,a.memory.textures++),q){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let pt=0;pt<E.mipmaps.length;pt++)k.__webglFramebuffer[ct][pt]=s.createFramebuffer()}else k.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<E.mipmaps.length;ct++)k.__webglFramebuffer[ct]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(St)for(let ct=0,pt=Q.length;ct<pt;ct++){const jt=n.get(Q[ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&Kt(I)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const pt=Q[ct];k.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const jt=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),mt=S(pt.internalFormat,jt,tt,pt.colorSpace,I.isXRRenderTarget===!0),Rt=Xt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,mt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,E);for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)Mt(k.__webglFramebuffer[ct][pt],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else Mt(k.__webglFramebuffer[ct],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(E)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,pt=Q.length;ct<pt;ct++){const jt=Q[ct],tt=n.get(jt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Ct(s.TEXTURE_2D,jt),Mt(k.__webglFramebuffer,I,jt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ct=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),Ct(ct,E),E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)Mt(k.__webglFramebuffer[pt],I,E,s.COLOR_ATTACHMENT0,ct,pt);else Mt(k.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,ct,0);m(E)&&p(ct),e.unbindTexture()}I.depthBuffer&&Nt(I)}function qt(I){const E=I.textures;for(let k=0,Z=E.length;k<Z;k++){const Q=E[k];if(m(Q)){const q=M(I),St=n.get(Q).__webglTexture;e.bindTexture(q,St),p(q),e.unbindTexture()}}}const ve=[],z=[];function nn(I){if(I.samples>0){if(Kt(I)===!1){const E=I.textures,k=I.width,Z=I.height;let Q=s.COLOR_BUFFER_BIT;const q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(I),ct=E.length>1;if(ct)for(let pt=0;pt<E.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let pt=0;pt<E.length;pt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);const jt=n.get(E[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,k,Z,0,0,k,Z,Q,s.NEAREST),l===!0&&(ve.length=0,z.length=0,ve.push(s.COLOR_ATTACHMENT0+pt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ve.push(q),z.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<E.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,St.__webglColorRenderbuffer[pt]);const jt=n.get(E[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Xt(I){return Math.min(i.maxSamples,I.samples)}function Kt(I){const E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function bt(I){const E=a.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function he(I,E){const k=I.colorSpace,Z=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==ze&&k!==Bn&&(Wt.getTransfer(k)===ae?(Z!==on||Q!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function At(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=Gt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Kt}function cg(s,t){function e(n,i=Bn){let r;const a=Wt.getTransfer(i);if(n===Xn)return s.UNSIGNED_BYTE;if(n===wo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return s.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return s.BYTE;if(n===Yc)return s.SHORT;if(n===bs)return s.UNSIGNED_SHORT;if(n===To)return s.INT;if(n===Mi)return s.UNSIGNED_INT;if(n===qe)return s.FLOAT;if(n===Hn)return s.HALF_FLOAT;if(n===jc)return s.ALPHA;if(n===$c)return s.RGB;if(n===on)return s.RGBA;if(n===Zc)return s.LUMINANCE;if(n===Jc)return s.LUMINANCE_ALPHA;if(n===qi)return s.DEPTH_COMPONENT;if(n===es)return s.DEPTH_STENCIL;if(n===bo)return s.RED;if(n===Ro)return s.RED_INTEGER;if(n===Qc)return s.RG;if(n===Co)return s.RG_INTEGER;if(n===Io)return s.RGBA_INTEGER;if(n===gr||n===_r||n===xr||n===vr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Ba||n===ka||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Va||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Va)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===Ka||n===Ya||n===qa||n===ja||n===$a||n===Za||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===ro||n===ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yr)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===th||n===oo||n===lo||n===co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class hg extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class re extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ug={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ug)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new we,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:fg,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new ne(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends Si{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new pg,m=e.getContextAttributes();let p=null,M=null;const S=[],y=[],R=new kt;let w=null;const A=new Ve;A.viewport=new Jt;const b=new Ve;b.viewport=new Jt;const v=[A,b],x=new hg;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=S[Y];return nt===void 0&&(nt=new pa,S[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=S[Y];return nt===void 0&&(nt=new pa,S[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=S[Y];return nt===void 0&&(nt=new pa,S[Y]=nt),nt.getHandSpace()};function N(Y){const nt=y.indexOf(Y.inputSource);if(nt===-1)return;const Mt=S[nt];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",W);for(let Y=0;Y<S.length;Y++){const nt=y[Y];nt!==null&&(y[Y]=null,S[Y].disconnect(nt))}C=null,O=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,i=null,M=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ai(d.framebufferWidth,d.framebufferHeight,{format:on,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,Mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?es:qi,Mt=m.stencil?ts:Mi);const It={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(It),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ai(f.textureWidth,f.textureHeight,{format:on,type:Xn,depthTexture:new gh(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(Y){for(let nt=0;nt<Y.removed.length;nt++){const Mt=Y.removed[nt],lt=y.indexOf(Mt);lt>=0&&(y[lt]=null,S[lt].disconnect(Mt))}for(let nt=0;nt<Y.added.length;nt++){const Mt=Y.added[nt];let lt=y.indexOf(Mt);if(lt===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=y.length){y.push(Mt),lt=Nt;break}else if(y[Nt]===null){y[Nt]=Mt,lt=Nt;break}if(lt===-1)break}const It=S[lt];It&&It.connect(Mt)}}const H=new L,j=new L;function X(Y,nt,Mt){H.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(Mt.matrixWorld);const lt=H.distanceTo(j),It=nt.projectionMatrix.elements,Nt=Mt.projectionMatrix.elements,Gt=It[14]/(It[10]-1),me=It[14]/(It[10]+1),qt=(It[9]+1)/It[5],ve=(It[9]-1)/It[5],z=(It[8]-1)/It[0],nn=(Nt[8]+1)/Nt[0],Xt=Gt*z,Kt=Gt*nn,bt=lt/(-z+nn),he=bt*-z;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(he),Y.translateZ(bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const At=Gt+bt,I=me+bt,E=Xt-he,k=Kt+(lt-he),Z=qt*me/I*At,Q=ve*me/I*At;Y.projectionMatrix.makePerspective(E,k,Z,Q,At,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let nt=Y.near,Mt=Y.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),x.near=b.near=A.near=nt,x.far=b.far=A.far=Mt,(C!==x.near||O!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,O=x.far),A.layers.mask=Y.layers.mask|2,b.layers.mask=Y.layers.mask|4,x.layers.mask=A.layers.mask|b.layers.mask;const lt=Y.parent,It=x.cameras;st(x,lt);for(let Nt=0;Nt<It.length;Nt++)st(It[Nt],lt);It.length===2?X(x,A,b):x.projectionMatrix.copy(A.projectionMatrix),rt(Y,x,lt)};function rt(Y,nt,Mt){Mt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ns*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let _t=null;function Ct(Y,nt){if(u=nt.getViewerPose(c||a),g=nt,u!==null){const Mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let lt=!1;Mt.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let Nt=0;Nt<Mt.length;Nt++){const Gt=Mt[Nt];let me=null;if(d!==null)me=d.getViewport(Gt);else{const ve=h.getViewSubImage(f,Gt);me=ve.viewport,Nt===0&&(t.setRenderTargetTextures(M,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),t.setRenderTarget(M))}let qt=v[Nt];qt===void 0&&(qt=new Ve,qt.layers.enable(Nt),qt.viewport=new Jt,v[Nt]=qt),qt.matrix.fromArray(Gt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Gt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(me.x,me.y,me.width,me.height),Nt===0&&(x.matrix.copy(qt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(qt)}const It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){const Nt=h.getDepthInformation(Mt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,i.renderState)}}for(let Mt=0;Mt<S.length;Mt++){const lt=y[Mt],It=S[Mt];lt!==null&&It!==void 0&&It.update(lt,nt,c||a)}_t&&_t(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Ht=new mh;Ht.setAnimationLoop(Ct),this.setAnimationLoop=function(Y){_t=Y},this.dispose=function(){}}}const di=new en,gg=new Dt;function _g(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,di.copy(y),di.x*=-1,di.y*=-1,di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(di)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xg(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const y=S.program;n.uniformBlockBinding(M,y)}function c(M,S){let y=i[M.id];y===void 0&&(g(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(M,R);const w=t.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function u(M){const S=h();M.__bindingPointIndex=S;const y=s.createBuffer(),R=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=i[M.id],y=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let w=0,A=y.length;w<A;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,x=b.length;v<x;v++){const C=b[v];if(d(C,w,v,R)===!0){const O=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let W=0;W<N.length;W++){const H=N[W],j=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,O+B,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,B),B+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,S,y,R){const w=M.value,A=S+"_"+y;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const b=R[A];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return R[A]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function g(M){const S=M.uniforms;let y=0;const R=16;for(let A=0,b=S.length;A<b;A++){const v=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,C=v.length;x<C;x++){const O=v[x],N=Array.isArray(O.value)?O.value:[O.value];for(let B=0,W=N.length;B<W;B++){const H=N[B],j=_(H),X=y%R,st=X%j.boundary,rt=X+st;y+=st,rt!==0&&R-rt<j.storage&&(y+=R-rt),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=j.storage}}}const w=y%R;return w>0&&(y+=R-w),M.__size=y,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class vg{constructor(t={}){const{canvas:e=sf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=ri,this.toneMappingExposure=1;const y=this;let R=!1,w=0,A=0,b=null,v=-1,x=null;const C=new Jt,O=new Jt;let N=null;const B=new it(0);let W=0,H=e.width,j=e.height,X=1,st=null,rt=null;const _t=new Jt(0,0,H,j),Ct=new Jt(0,0,H,j);let Ht=!1;const Y=new No;let nt=!1,Mt=!1;const lt=new Dt,It=new Dt,Nt=new L,Gt=new Jt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function ve(){return b===null?X:1}let z=n;function nn(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${So}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),z===null){const U="webgl2";if(z=nn(U,T),z===null)throw nn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Xt,Kt,bt,he,At,I,E,k,Z,Q,q,St,ct,pt,jt,tt,mt,Rt,Lt,gt,Yt,zt,le,P;function ot(){Xt=new Tm(z),Xt.init(),zt=new cg(z,Xt),Kt=new xm(z,Xt,t,zt),bt=new ag(z,Xt),Kt.reverseDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),he=new bm(z),At=new X0,I=new lg(z,Xt,bt,At,Kt,zt,he),E=new ym(y),k=new Em(y),Z=new Nf(z),le=new gm(z,Z),Q=new wm(z,Z,he,le),q=new Cm(z,Q,Z,he),Lt=new Rm(z,Kt,I),tt=new vm(At),St=new W0(y,E,k,Xt,Kt,le,tt),ct=new _g(y,At),pt=new Y0,jt=new Q0(Xt),Rt=new mm(y,E,k,bt,q,d,l),mt=new sg(y,q,Kt),P=new xg(z,he,Kt,bt),gt=new _m(z,Xt,he),Yt=new Am(z,Xt,he),he.programs=St.programs,y.capabilities=Kt,y.extensions=Xt,y.properties=At,y.renderLists=pt,y.shadowMap=mt,y.state=bt,y.info=he}ot();const K=new mg(y,z);this.xr=K,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=Xt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Xt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(H,j,!1))},this.getSize=function(T){return T.set(H,j)},this.setSize=function(T,U,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,j=U,e.width=Math.floor(T*X),e.height=Math.floor(U*X),G===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(H*X,j*X).floor()},this.setDrawingBufferSize=function(T,U,G){H=T,j=U,X=G,e.width=Math.floor(T*G),e.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(_t)},this.setViewport=function(T,U,G,V){T.isVector4?_t.set(T.x,T.y,T.z,T.w):_t.set(T,U,G,V),bt.viewport(C.copy(_t).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Ct)},this.setScissor=function(T,U,G,V){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,U,G,V),bt.scissor(O.copy(Ct).multiplyScalar(X).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(T){bt.setScissorTest(Ht=T)},this.setOpaqueSort=function(T){st=T},this.setTransparentSort=function(T){rt=T},this.getClearColor=function(T){return T.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(T=!0,U=!0,G=!0){let V=0;if(T){let F=!1;if(b!==null){const et=b.texture.format;F=et===Io||et===Co||et===Ro}if(F){const et=b.texture.type,ut=et===Xn||et===Mi||et===bs||et===ts||et===wo||et===Ao,xt=Rt.getClearColor(),vt=Rt.getClearAlpha(),Pt=xt.r,Ft=xt.g,yt=xt.b;ut?(g[0]=Pt,g[1]=Ft,g[2]=yt,g[3]=vt,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=Pt,_[1]=Ft,_[2]=yt,_[3]=vt,z.clearBufferiv(z.COLOR,0,_))}else V|=z.COLOR_BUFFER_BIT}U&&(V|=z.DEPTH_BUFFER_BIT),G&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),jt.dispose(),At.dispose(),E.dispose(),k.dispose(),q.dispose(),le.dispose(),P.dispose(),St.dispose(),K.dispose(),K.removeEventListener("sessionstart",Zo),K.removeEventListener("sessionend",Jo),oi.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=he.autoReset,U=mt.enabled,G=mt.autoUpdate,V=mt.needsUpdate,F=mt.type;ot(),he.autoReset=T,mt.enabled=U,mt.autoUpdate=G,mt.needsUpdate=V,mt.type=F}function ht(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ut(T){const U=T.target;U.removeEventListener("dispose",Ut),_e(U)}function _e(T){Ne(T),At.remove(T)}function Ne(T){const U=At.get(T).programs;U!==void 0&&(U.forEach(function(G){St.releaseProgram(G)}),T.isShaderMaterial&&St.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,V,F,et){U===null&&(U=me);const ut=F.isMesh&&F.matrixWorld.determinant()<0,xt=Yh(T,U,G,V,F);bt.setMaterial(V,ut);let vt=G.index,Pt=1;if(V.wireframe===!0){if(vt=Q.getWireframeAttribute(G),vt===void 0)return;Pt=2}const Ft=G.drawRange,yt=G.attributes.position;let Zt=Ft.start*Pt,ce=(Ft.start+Ft.count)*Pt;et!==null&&(Zt=Math.max(Zt,et.start*Pt),ce=Math.min(ce,(et.start+et.count)*Pt)),vt!==null?(Zt=Math.max(Zt,0),ce=Math.min(ce,vt.count)):yt!=null&&(Zt=Math.max(Zt,0),ce=Math.min(ce,yt.count));const ue=ce-Zt;if(ue<0||ue===1/0)return;le.setup(F,V,xt,G,vt);let Ke,Qt=gt;if(vt!==null&&(Ke=Z.get(vt),Qt=Yt,Qt.setIndex(Ke)),F.isMesh)V.wireframe===!0?(bt.setLineWidth(V.wireframeLinewidth*ve()),Qt.setMode(z.LINES)):Qt.setMode(z.TRIANGLES);else if(F.isLine){let Et=V.linewidth;Et===void 0&&(Et=1),bt.setLineWidth(Et*ve()),F.isLineSegments?Qt.setMode(z.LINES):F.isLineLoop?Qt.setMode(z.LINE_LOOP):Qt.setMode(z.LINE_STRIP)}else F.isPoints?Qt.setMode(z.POINTS):F.isSprite&&Qt.setMode(z.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Et=F._multiDrawStarts,Cn=F._multiDrawCounts,te=F._multiDrawCount,cn=vt?Z.get(vt).bytesPerElement:1,Ti=At.get(V).currentProgram.getUniforms();for(let $e=0;$e<te;$e++)Ti.setValue(z,"_gl_DrawID",$e),Qt.render(Et[$e]/cn,Cn[$e])}else if(F.isInstancedMesh)Qt.renderInstances(Zt,ue,F.count);else if(G.isInstancedBufferGeometry){const Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Cn=Math.min(G.instanceCount,Et);Qt.renderInstances(Zt,ue,Cn)}else Qt.render(Zt,ue)};function ie(T,U,G){T.transparent===!0&&T.side===Ce&&T.forceSinglePass===!1?(T.side=je,T.needsUpdate=!0,Us(T,U,G),T.side=Tn,T.needsUpdate=!0,Us(T,U,G),T.side=Ce):Us(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),p=jt.get(G),p.init(U),S.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==G&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const et=F.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const xt=et[ut];ie(xt,G,F),V.add(xt)}else ie(et,G,F),V.add(et)}),S.pop(),p=null,V},this.compileAsync=function(T,U,G=null){const V=this.compile(T,U,G);return new Promise(F=>{function et(){if(V.forEach(function(ut){At.get(ut).currentProgram.isReady()&&V.delete(ut)}),V.size===0){F(T);return}setTimeout(et,10)}Xt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ln=null;function Rn(T){ln&&ln(T)}function Zo(){oi.stop()}function Jo(){oi.start()}const oi=new mh;oi.setAnimationLoop(Rn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(T){ln=T,K.setAnimationLoop(T),T===null?oi.stop():oi.start()},K.addEventListener("sessionstart",Zo),K.addEventListener("sessionend",Jo),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,b),p=jt.get(T,S.length),p.init(U),S.push(p),It.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(It),Mt=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,Mt),m=pt.get(T,M.length),m.init(),M.push(m),K.enabled===!0&&K.isPresenting===!0){const et=y.xr.getDepthSensingMesh();et!==null&&kr(et,U,-1/0,y.sortObjects)}kr(T,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(st,rt),qt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,qt&&Rt.addToRenderList(m,T),this.info.render.frame++,nt===!0&&tt.beginShadows();const G=p.state.shadowsArray;mt.render(G,T,U),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const et=U.cameras;if(F.length>0)for(let ut=0,xt=et.length;ut<xt;ut++){const vt=et[ut];tl(V,F,T,vt)}qt&&Rt.render(T);for(let ut=0,xt=et.length;ut<xt;ut++){const vt=et[ut];Qo(m,T,vt,vt.viewport)}}else F.length>0&&tl(V,F,T,U),qt&&Rt.render(T),Qo(m,T,U);b!==null&&(I.updateMultisampleRenderTarget(b),I.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(y,T,U),le.resetDefaultState(),v=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],nt===!0&&tt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function kr(T,U,G,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){V&&Gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(It);const ut=q.update(T),xt=T.material;xt.visible&&m.push(T,ut,xt,G,Gt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const ut=q.update(T),xt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Gt.copy(T.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Gt.copy(ut.boundingSphere.center)),Gt.applyMatrix4(T.matrixWorld).applyMatrix4(It)),Array.isArray(xt)){const vt=ut.groups;for(let Pt=0,Ft=vt.length;Pt<Ft;Pt++){const yt=vt[Pt],Zt=xt[yt.materialIndex];Zt&&Zt.visible&&m.push(T,ut,Zt,G,Gt.z,yt)}}else xt.visible&&m.push(T,ut,xt,G,Gt.z,null)}}const et=T.children;for(let ut=0,xt=et.length;ut<xt;ut++)kr(et[ut],U,G,V)}function Qo(T,U,G,V){const F=T.opaque,et=T.transmissive,ut=T.transparent;p.setupLightsView(G),nt===!0&&tt.setGlobalState(y.clippingPlanes,G),V&&bt.viewport(C.copy(V)),F.length>0&&Ns(F,U,G),et.length>0&&Ns(et,U,G),ut.length>0&&Ns(ut,U,G),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function tl(T,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ai(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Hn:Xn,minFilter:We,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const et=p.state.transmissionRenderTarget[V.id],ut=V.viewport||C;et.setSize(ut.z,ut.w);const xt=y.getRenderTarget();y.setRenderTarget(et),y.getClearColor(B),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),qt&&Rt.render(G);const vt=y.toneMapping;y.toneMapping=ri;const Pt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),nt===!0&&tt.setGlobalState(y.clippingPlanes,V),Ns(T,G,V),I.updateMultisampleRenderTarget(et),I.updateRenderTargetMipmap(et),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let yt=0,Zt=U.length;yt<Zt;yt++){const ce=U[yt],ue=ce.object,Ke=ce.geometry,Qt=ce.material,Et=ce.group;if(Qt.side===Ce&&ue.layers.test(V.layers)){const Cn=Qt.side;Qt.side=je,Qt.needsUpdate=!0,el(ue,G,V,Ke,Qt,Et),Qt.side=Cn,Qt.needsUpdate=!0,Ft=!0}}Ft===!0&&(I.updateMultisampleRenderTarget(et),I.updateRenderTargetMipmap(et))}y.setRenderTarget(xt),y.setClearColor(B,W),Pt!==void 0&&(V.viewport=Pt),y.toneMapping=vt}function Ns(T,U,G){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,et=T.length;F<et;F++){const ut=T[F],xt=ut.object,vt=ut.geometry,Pt=V===null?ut.material:V,Ft=ut.group;xt.layers.test(G.layers)&&el(xt,U,G,vt,Pt,Ft)}}function el(T,U,G,V,F,et){T.onBeforeRender(y,U,G,V,F,et),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(y,U,G,V,T,et),F.transparent===!0&&F.side===Ce&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,y.renderBufferDirect(G,U,V,F,T,et),F.side=Tn,F.needsUpdate=!0,y.renderBufferDirect(G,U,V,F,T,et),F.side=Ce):y.renderBufferDirect(G,U,V,F,T,et),T.onAfterRender(y,U,G,V,F,et)}function Us(T,U,G){U.isScene!==!0&&(U=me);const V=At.get(T),F=p.state.lights,et=p.state.shadowsArray,ut=F.state.version,xt=St.getParameters(T,F.state,et,U,G),vt=St.getProgramCacheKey(xt);let Pt=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?k:E).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Pt===void 0&&(T.addEventListener("dispose",Ut),Pt=new Map,V.programs=Pt);let Ft=Pt.get(vt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===ut)return il(T,xt),Ft}else xt.uniforms=St.getUniforms(T),T.onBeforeCompile(xt,y),Ft=St.acquireProgram(xt,vt),Pt.set(vt,Ft),V.uniforms=xt.uniforms;const yt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(yt.clippingPlanes=tt.uniform),il(T,xt),V.needsLights=jh(T),V.lightsStateVersion=ut,V.needsLights&&(yt.ambientLightColor.value=F.state.ambient,yt.lightProbe.value=F.state.probe,yt.directionalLights.value=F.state.directional,yt.directionalLightShadows.value=F.state.directionalShadow,yt.spotLights.value=F.state.spot,yt.spotLightShadows.value=F.state.spotShadow,yt.rectAreaLights.value=F.state.rectArea,yt.ltc_1.value=F.state.rectAreaLTC1,yt.ltc_2.value=F.state.rectAreaLTC2,yt.pointLights.value=F.state.point,yt.pointLightShadows.value=F.state.pointShadow,yt.hemisphereLights.value=F.state.hemi,yt.directionalShadowMap.value=F.state.directionalShadowMap,yt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,yt.spotShadowMap.value=F.state.spotShadowMap,yt.spotLightMatrix.value=F.state.spotLightMatrix,yt.spotLightMap.value=F.state.spotLightMap,yt.pointShadowMap.value=F.state.pointShadowMap,yt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function nl(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Mr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function il(T,U){const G=At.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Yh(T,U,G,V,F){U.isScene!==!0&&(U=me),I.resetTextureUnits();const et=U.fog,ut=V.isMeshStandardMaterial?U.environment:null,xt=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ze,vt=(V.isMeshStandardMaterial?k:E).get(V.envMap||ut),Pt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),yt=!!G.morphAttributes.position,Zt=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color;let ue=ri;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ue=y.toneMapping);const Ke=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=Ke!==void 0?Ke.length:0,Et=At.get(V),Cn=p.state.lights;if(nt===!0&&(Mt===!0||T!==x)){const sn=T===x&&V.id===v;tt.setState(V,T,sn)}let te=!1;V.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Cn.state.version||Et.outputColorSpace!==xt||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==vt||V.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==Pt||Et.vertexTangents!==Ft||Et.morphTargets!==yt||Et.morphNormals!==Zt||Et.morphColors!==ce||Et.toneMapping!==ue||Et.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Et.__version=V.version);let cn=Et.currentProgram;te===!0&&(cn=Us(V,U,F));let Ti=!1,$e=!1,hs=!1;const fe=cn.getUniforms(),vn=Et.uniforms;if(bt.useProgram(cn.program)&&(Ti=!0,$e=!0,hs=!0),V.id!==v&&(v=V.id,$e=!0),Ti||x!==T){bt.buffers.depth.getReversed()?(lt.copy(T.projectionMatrix),af(lt),of(lt),fe.setValue(z,"projectionMatrix",lt)):fe.setValue(z,"projectionMatrix",T.projectionMatrix),fe.setValue(z,"viewMatrix",T.matrixWorldInverse);const qn=fe.map.cameraPosition;qn!==void 0&&qn.setValue(z,Nt.setFromMatrixPosition(T.matrixWorld)),Kt.logarithmicDepthBuffer&&fe.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,$e=!0,hs=!0)}if(F.isSkinnedMesh){fe.setOptional(z,F,"bindMatrix"),fe.setOptional(z,F,"bindMatrixInverse");const sn=F.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),fe.setValue(z,"boneTexture",sn.boneTexture,I))}F.isBatchedMesh&&(fe.setOptional(z,F,"batchingTexture"),fe.setValue(z,"batchingTexture",F._matricesTexture,I),fe.setOptional(z,F,"batchingIdTexture"),fe.setValue(z,"batchingIdTexture",F._indirectTexture,I),fe.setOptional(z,F,"batchingColorTexture"),F._colorsTexture!==null&&fe.setValue(z,"batchingColorTexture",F._colorsTexture,I));const us=G.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&Lt.update(F,G,cn),($e||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,fe.setValue(z,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(vn.envMap.value=vt,vn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(vn.envMapIntensity.value=U.environmentIntensity),$e&&(fe.setValue(z,"toneMappingExposure",y.toneMappingExposure),Et.needsLights&&qh(vn,hs),et&&V.fog===!0&&ct.refreshFogUniforms(vn,et),ct.refreshMaterialUniforms(vn,V,X,j,p.state.transmissionRenderTarget[T.id]),Mr.upload(z,nl(Et),vn,I)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Mr.upload(z,nl(Et),vn,I),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(z,"center",F.center),fe.setValue(z,"modelViewMatrix",F.modelViewMatrix),fe.setValue(z,"normalMatrix",F.normalMatrix),fe.setValue(z,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const sn=V.uniformsGroups;for(let qn=0,jn=sn.length;qn<jn;qn++){const sl=sn[qn];P.update(sl,cn),P.bind(sl,cn)}}return cn}function qh(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function jh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,U,G){At.get(T.texture).__webglTexture=U,At.get(T.depthTexture).__webglTexture=G;const V=At.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const G=At.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){b=T,w=U,A=G;let V=!0,F=null,et=!1,ut=!1;if(T){const vt=At.get(T);if(vt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(z.FRAMEBUFFER,null),V=!1;else if(vt.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(vt.__hasExternalTextures)I.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const yt=T.depthTexture;if(vt.__boundDepthTexture!==yt){if(yt!==null&&At.has(yt)&&(T.width!==yt.image.width||T.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}const Pt=T.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);const Ft=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?F=Ft[U][G]:F=Ft[U],et=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?F=At.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[G]:F=Ft,C.copy(T.viewport),O.copy(T.scissor),N=T.scissorTest}else C.copy(_t).multiplyScalar(X).floor(),O.copy(Ct).multiplyScalar(X).floor(),N=Ht;if(bt.bindFramebuffer(z.FRAMEBUFFER,F)&&V&&bt.drawBuffers(T,F),bt.viewport(C),bt.scissor(O),bt.setScissorTest(N),et){const vt=At.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,G)}else if(ut){const vt=At.get(T.texture),Pt=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,vt.__webglTexture,G||0,Pt)}v=-1},this.readRenderTargetPixels=function(T,U,G,V,F,et,ut){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){bt.bindFramebuffer(z.FRAMEBUFFER,xt);try{const vt=T.texture,Pt=vt.format,Ft=vt.type;if(!Kt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&G>=0&&G<=T.height-F&&z.readPixels(U,G,V,F,zt.convert(Pt),zt.convert(Ft),et)}finally{const vt=b!==null?At.get(b).__webglFramebuffer:null;bt.bindFramebuffer(z.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(T,U,G,V,F,et,ut){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const vt=T.texture,Pt=vt.format,Ft=vt.type;if(!Kt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&G>=0&&G<=T.height-F){bt.bindFramebuffer(z.FRAMEBUFFER,xt);const yt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,yt),z.bufferData(z.PIXEL_PACK_BUFFER,et.byteLength,z.STREAM_READ),z.readPixels(U,G,V,F,zt.convert(Pt),zt.convert(Ft),0);const Zt=b!==null?At.get(b).__webglFramebuffer:null;bt.bindFramebuffer(z.FRAMEBUFFER,Zt);const ce=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await rf(z,ce,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,yt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,et),z.deleteBuffer(yt),z.deleteSync(ce),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,G=0){T.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const V=Math.pow(2,-G),F=Math.floor(T.image.width*V),et=Math.floor(T.image.height*V),ut=U!==null?U.x:0,xt=U!==null?U.y:0;I.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,ut,xt,F,et),bt.unbindTexture()},this.copyTextureToTexture=function(T,U,G=null,V=null,F=0){T.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let et,ut,xt,vt,Pt,Ft,yt,Zt,ce;const ue=T.isCompressedTexture?T.mipmaps[F]:T.image;G!==null?(et=G.max.x-G.min.x,ut=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,vt=G.min.x,Pt=G.min.y,Ft=G.isBox3?G.min.z:0):(et=ue.width,ut=ue.height,xt=ue.depth||1,vt=0,Pt=0,Ft=0),V!==null?(yt=V.x,Zt=V.y,ce=V.z):(yt=0,Zt=0,ce=0);const Ke=zt.convert(U.format),Qt=zt.convert(U.type);let Et;U.isData3DTexture?(I.setTexture3D(U,0),Et=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),Et=z.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),Et=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);const Cn=z.getParameter(z.UNPACK_ROW_LENGTH),te=z.getParameter(z.UNPACK_IMAGE_HEIGHT),cn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ti=z.getParameter(z.UNPACK_SKIP_ROWS),$e=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ue.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ue.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,vt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ft);const hs=T.isDataArrayTexture||T.isData3DTexture,fe=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const vn=At.get(T),us=At.get(U),sn=At.get(vn.__renderTarget),qn=At.get(us.__renderTarget);bt.bindFramebuffer(z.READ_FRAMEBUFFER,sn.__webglFramebuffer),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let jn=0;jn<xt;jn++)hs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,At.get(T).__webglTexture,F,Ft+jn),T.isDepthTexture?(fe&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,At.get(U).__webglTexture,F,ce+jn),z.blitFramebuffer(vt,Pt,et,ut,yt,Zt,et,ut,z.DEPTH_BUFFER_BIT,z.NEAREST)):fe?z.copyTexSubImage3D(Et,F,yt,Zt,ce+jn,vt,Pt,et,ut):z.copyTexSubImage2D(Et,F,yt,Zt,ce+jn,vt,Pt,et,ut);bt.bindFramebuffer(z.READ_FRAMEBUFFER,null),bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else fe?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Et,F,yt,Zt,ce,et,ut,xt,Ke,Qt,ue.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Et,F,yt,Zt,ce,et,ut,xt,Ke,ue.data):z.texSubImage3D(Et,F,yt,Zt,ce,et,ut,xt,Ke,Qt,ue):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,F,yt,Zt,et,ut,Ke,Qt,ue.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,F,yt,Zt,ue.width,ue.height,Ke,ue.data):z.texSubImage2D(z.TEXTURE_2D,F,yt,Zt,et,ut,Ke,Qt,ue);z.pixelStorei(z.UNPACK_ROW_LENGTH,Cn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,te),z.pixelStorei(z.UNPACK_SKIP_PIXELS,cn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ti),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$e),F===0&&U.generateMipmaps&&z.generateMipmap(Et),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G=null,V=null,F=0){return T.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],F=arguments[4]||0),Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,G,V,F)},this.initRenderTarget=function(T){At.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){w=0,A=0,b=null,bt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class Fo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(t),this.density=e}clone(){return new Fo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mh extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uo,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new L;class Oo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Oo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ic=new L,sc=new Jt,rc=new Jt,Mg=new L,ac=new Dt,ir=new L,ma=new wn,oc=new Dt,ga=new Fr;class Sg extends Tt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cl,this.bindMatrix=new Dt,this.bindMatrixInverse=new Dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ir),this.boundingBox.expandByPoint(ir)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ir),this.boundingSphere.expandByPoint(ir)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),t.ray.intersectsSphere(ma)!==!1&&(oc.copy(i).invert(),ga.copy(t.ray).applyMatrix4(oc),!(this.boundingBox!==null&&ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ga)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Jt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;sc.fromBufferAttribute(i.attributes.skinIndex,t),rc.fromBufferAttribute(i.attributes.skinWeight,t),ic.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=rc.getComponent(r);if(a!==0){const o=sc.getComponent(r);ac.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Mg.copy(ic).applyMatrix4(ac),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Sh extends pe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zo extends we{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Xe,u=Xe,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=new Dt,Eg=new Dt;class Bo{constructor(t=[],e=[]){this.uuid=gn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Dt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Dt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Eg;lc.multiplyMatrices(o,e[r]),lc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Bo(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new zo(e,t,t,on,qe);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Sh),this.bones.push(a),this.boneInverses.push(new Dt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class mo extends ye{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Bi=new Dt,cc=new Dt,sr=[],hc=new Yn,Tg=new Dt,gs=new Tt,_s=new wn;class ko extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),hc.copy(t.boundingBox).applyMatrix4(Bi),this.boundingBox.union(hc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),_s.copy(t.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Bi),cc.multiplyMatrices(n,Bi),gs.matrixWorld=cc,gs.raycast(t,sr);for(let a=0,o=sr.length;a<o;a++){const l=sr[a];l.instanceId=r,l.object=this,e.push(l)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zo(new Float32Array(i*this.count),i,this.count,bo,qe));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Eh extends _n{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ar=new L,br=new L,uc=new Dt,xs=new Fr,rr=new wn,_a=new L,fc=new L;class Ho extends pe{constructor(t=new Be,e=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ar.fromBufferAttribute(e,i-1),br.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ar.distanceTo(br);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;uc.copy(i).invert(),xs.copy(t.ray).applyMatrix4(uc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),S=ar(this,t,xs,l,p,M);S&&e.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=ar(this,t,xs,l,_,m);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=ar(this,t,xs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=ar(this,t,xs,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ar(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(Ar.fromBufferAttribute(a,i),br.fromBufferAttribute(a,r),e.distanceSqToSegment(Ar,br,_a,fc)>n)return;_a.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(_a);if(!(l<t.near||l>t.far))return{distance:l,point:fc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const dc=new L,pc=new L;class wg extends Ho{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)dc.fromBufferAttribute(e,i),pc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+dc.distanceTo(pc);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ag extends Ho{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Go extends _n{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const mc=new Dt,go=new Fr,or=new wn,lr=new L;class Th extends pe{constructor(t=new Be,e=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=r,t.ray.intersectsSphere(or)===!1)return;mc.copy(i).invert(),go.copy(t.ray).applyMatrix4(mc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);lr.fromBufferAttribute(h,m),gc(lr,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)lr.fromBufferAttribute(h,g),gc(lr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function gc(s,t,e,n,i,r,a){const o=go.distanceSqToPoint(s);if(o<e){const l=new L;go.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class bg extends we{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ge extends Be{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function M(){const y=new L,R=new L;let w=0;const A=(e-t)/n;for(let b=0;b<=r;b++){const v=[],x=b/r,C=x*(e-t)+t;for(let O=0;O<=i;O++){const N=O/i,B=N*l+o,W=Math.sin(B),H=Math.cos(B);R.x=C*W,R.y=-x*n+m,R.z=C*H,h.push(R.x,R.y,R.z),y.set(W,A,H).normalize(),f.push(y.x,y.y,y.z),d.push(N,1-x),v.push(g++)}_.push(v)}for(let b=0;b<i;b++)for(let v=0;v<r;v++){const x=_[v][b],C=_[v+1][b],O=_[v+1][b+1],N=_[v][b+1];(t>0||v!==0)&&(u.push(x,C,N),w+=3),(e>0||v!==r-1)&&(u.push(C,O,N),w+=3)}c.addGroup(p,w,0),p+=w}function S(y){const R=g,w=new kt,A=new L;let b=0;const v=y===!0?t:e,x=y===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const C=g;for(let O=0;O<=i;O++){const B=O/i*l+o,W=Math.cos(B),H=Math.sin(B);A.x=v*H,A.y=m*x,A.z=v*W,h.push(A.x,A.y,A.z),f.push(0,x,0),w.x=W*.5+.5,w.y=H*.5*x+.5,d.push(w.x,w.y),g++}for(let O=0;O<i;O++){const N=R+O,B=C+O;y===!0?u.push(B,B+1,N):u.push(B+1,B,N),b+=3}c.addGroup(p,b,y===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vo extends Be{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/i,d=new L,g=new kt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,y=M+n+1,R=M+n+2,w=M+1;o.push(S,y,w),o.push(y,R,w)}}this.setIndex(o),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Le extends Be{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new L,f=new L,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const w=R/e;h.x=-t*Math.cos(i+w*r)*Math.sin(a+S*o),h.y=t*Math.cos(a+S*o),h.z=t*Math.sin(i+w*r)*Math.sin(a+S*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+y,1-S),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const S=u[p][M+1],y=u[p][M],R=u[p+1][M],w=u[p+1][M+1];(p!==0||a>0)&&d.push(S,y,w),(p!==n-1||l<Math.PI)&&d.push(y,R,w)}this.setIndex(d),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Br extends Be{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new L,h=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,M=(i+1)*d+g;a.push(_,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class tn extends _n{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class An extends tn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ge extends _n{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function cr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Rg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Cg(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function _c(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function wh(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class Ls{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ig extends Ls{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vi,endingEnd:Vi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wi:r=t,o=2*e-n;break;case Tr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wi:a=t,l=2*n-e;break;case Tr:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let R=0;R!==o;++R)r[R]=p*a[u+R]+M*a[c+R]+S*a[l+R]+y*a[h+R];return r}}class Ah extends Ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class Lg extends Ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class bn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cr(e,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cr(t.times,Array),values:cr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ah(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ig(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Rs:e=this.InterpolantFactoryMethodDiscrete;break;case Cs:e=this.InterpolantFactoryMethodLinear;break;case Hr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return Hr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Rg(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hr,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Cs;class ls extends bn{constructor(t,e,n){super(t,e,n)}}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Rs;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class bh extends bn{}bh.prototype.ValueTypeName="color";class ss extends bn{}ss.prototype.ValueTypeName="number";class Pg extends Ls{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let u=c+o;c!==u;c+=4)Qe.slerpFlat(r,0,a,c-o,a,c,l);return r}}class rs extends bn{InterpolantFactoryMethodLinear(t){return new Pg(this.times,this.values,this.getValueSize(),t)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends bn{constructor(t,e,n){super(t,e,n)}}cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Rs;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends bn{}as.prototype.ValueTypeName="vector";class _o{constructor(t="",e=-1,n=[],i=Lo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Ng(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Cg(l);l=_c(l,1,u),c=_c(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ss(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];wh(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let M=0;M!==f[g].morphTargets.length;++M){const S=f[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new ss(".morphTargetInfluence["+_+"]",m,p))}l=d.length*a}else{const d=".bones["+e[h].name+"]";n(as,d+".position",f,"pos",i),n(rs,d+".quaternion",f,"rot",i),n(as,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Dg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return bh;case"quaternion":return rs;case"bool":case"boolean":return ls;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ng(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Dg(s.type);if(s.times===void 0){const e=[],n=[];wh(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ii={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ug{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Fg=new Ug;class Ei{constructor(t){this.manager=t!==void 0?t:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class Og extends Error{constructor(t,e){super(t),this.response=e}}class Wo extends Ei{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ii.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Un[t]!==void 0){Un[t].push({onLoad:e,onProgress:n,onError:i});return}Un[t]=[],Un[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:S,value:y})=>{if(S)p.close();else{_+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,A=u.length;w<A;w++){const b=u[w];b.onProgress&&b.onProgress(R)}p.enqueue(y),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Og(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ii.add(t,c);const u=Un[t];delete Un[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Un[t];if(u===void 0)throw this.manager.itemError(t),c;delete Un[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class zg extends Ei{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ii.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Is("img");function l(){u(),ii.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Bg extends Ei{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new zo,o=new Wo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Sn,a.wrapT=c.wrapT!==void 0?c.wrapT:Sn,a.magFilter=c.magFilter!==void 0?c.magFilter:de,a.minFilter=c.minFilter!==void 0?c.minFilter:de,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=We),c.mipmapCount===1&&(a.minFilter=de),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,i),a}}class Rh extends Ei{constructor(t){super(t)}load(t,e,n,i){const r=new we,a=new zg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ps extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new it(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class kg extends Ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xa=new Dt,xc=new L,vc=new L;class Xo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(xc),vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vc),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hg extends Xo{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ns*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Gg extends Ps{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Hg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const yc=new Dt,vs=new L,va=new L;class Vg extends Xo{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(vs),va.copy(n.position),va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(va),n.updateMatrixWorld(),i.makeTranslation(-vs.x,-vs.y,-vs.z),yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc)}}class Rr extends Ps{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wg extends Xo{constructor(){super(new Or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ch extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Wg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xg extends Ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class As{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Kg extends Ei{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ii.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ii.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),ii.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ii.add(t,l),r.manager.itemStart(t)}}class Yg{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){Qe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;Qe.multiplyQuaternionsFlat(t,a,t,e,t,n),Qe.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Ko="\\[\\]\\.:\\/",qg=new RegExp("["+Ko+"]","g"),Yo="[^"+Ko+"]",jg="[^"+Ko.replace("\\.","")+"]",$g=/((?:WC+[\/:])*)/.source.replace("WC",Yo),Zg=/(WCOD+)?/.source.replace("WCOD",jg),Jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yo),Qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yo),t_=new RegExp("^"+$g+Zg+Jg+Qg+"$"),e_=["material","materials","bones","map"];class n_{constructor(t,e,n){const i=n||ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ee{constructor(t,e,n){this.path=e,this.parsedPath=n||ee.parseTrackName(e),this.node=ee.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ee.Composite(t,e,n):new ee(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qg,"")}static parseTrackName(t){const e=t_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);e_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ee.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ee.Composite=n_;ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class i_{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:Vi,endingEnd:Vi};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=eh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ru:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Lo:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===bu;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===Au){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Wi,i.endingEnd=Wi):(t?i.endingStart=this.zeroSlopeAtStart?Wi:Vi:i.endingStart=Tr,e?i.endingEnd=this.zeroSlopeAtEnd?Wi:Vi:i.endingEnd=Tr)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}const s_=new Float32Array(1);class r_ extends Si{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=i[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const _=e&&e._propertyBindings[h].binding.parsedPath;g=new Yg(ee.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;const h=o.actionByRoot,f=(t._localRoot||this._root).uuid;delete h[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Ah(new Float32Array(2),new Float32Array(2),1,s_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?_o.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Lo),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new i_(this,a,e,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?_o.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);const $={pixelScale:1,fov:68,camDist:4.6,camDistCombat:6,chunkSize:48,viewChunks:3,floorHeight:3,walkSpeed:4.2,sprintSpeed:7,crouchSpeed:1.8,playerRadius:.38,playerHeight:1.75,crouchHeight:1.1,stepHeight:.45,gravity:20,jumpVel:6.5,groundAccel:10,airAccel:14,airWishCap:2.4,bhopJumpBoost:1.35,bhopMaxSpeed:16,friction:6,stopSpeed:1.8,coyoteTime:.09,jumpBuffer:.09,flySpeed:8.5,gozeDuration:600,maxHp:100,hpRegenDelay:8,hpRegenRate:1.2,pistol:{damage:34,rpm:240,mag:8,reload:1.4,spread:.012,reserve:56},minigun:{damage:26,rpm:1200,spread:.045},class1MaxShare:.03,class2Damage:1,class3Damage:[3,5],class3Speed:3.3,class3Sight:16,class3Hp:70,ghostBaseSpeed:4.4,ghostSprintSpeed:2.6,ghostIdleSpeed:7.2,ghostRetreatDistance:42,ghostMinSurvive:26,ghostLookBackAngle:110,ghostLookBackHold:.22,ghostInteriorChancePerSec:.012,ghostOutsideChancePerSec:.0015,stalkerSleep:[90,240],stalkerFood:[40,120],stalkerRandomChance:9e-4,stalkerRandomAfter:80,stalkerStealthLag:[5,7],stalkerDamage:22,stalkerDeathmatchLag:1.6,deathmatchInitialMinions:4,minionSpeed:[1.8,2.4],minionDamage:[1.2,2],arenaCount:[80,400],arenaSize:120,arenaMaxAlive:80,arenaEntityHp:28,arenaGruntSpeed:[1.45,2.05],arenaDamage:[.8,1.4],arenaHitCooldown:1.55,arenaSpawnPerSec:3.2,elevatorArenaChance:.35,playerIframes:.55,bombPlantTime:3.2,bombFuse:25};function ki(s,t,e=1337){let n=(s|0)*374761393+(t|0)*668265263+e*2246822519;return n=(n^n>>>13)*1274126177,n=n^n>>>16,n>>>0}function a_(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class yi{constructor(t){this.f=a_(t>>>0)}next(){return this.f()}range(t,e){return t+(e-t)*this.f()}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this.f()<t}pick(t){return t[Math.floor(this.f()*t.length)]}}const dt={range:(s,t)=>s+(t-s)*Math.random(),int:(s,t)=>Math.floor(s+(t-s+1)*Math.random()),chance:s=>Math.random()<s,pick:s=>s[Math.floor(Math.random()*s.length)]};function Ye(s,t,e=!0,n,i){const r=document.createElement("canvas");r.width=n||s,r.height=i||s;const a=r.getContext("2d");t(a,r.width,r.height);const o=new bg(r);return o.magFilter=de,o.minFilter=We,o.generateMipmaps=!0,o.colorSpace=xe,e&&(o.wrapS=o.wrapT=Wn),o}function dn(s,t,e,n,i,r=2){for(let a=0;a<t;a+=r)for(let o=0;o<t;o+=r){const l=n+(e.next()-.5)*i;s.fillStyle=`rgb(${l|0},${l|0},${l+3|0})`,s.fillRect(o,a,r,r)}}function o_(){const s=new yi(777),t={};return t.facade=Ye(128,(e,n)=>{dn(e,n,s,142,22,2),e.fillStyle="#5a5c5e",e.fillRect(0,0,n,2),e.fillRect(0,0,2,n),e.fillStyle="rgba(40,40,44,0.5)";for(let i=0;i<5;i++){const r=s.int(4,n-4);e.fillRect(r,s.int(0,20),1,s.int(10,40))}}),t.facadeLit=Ye(128,(e,n)=>{dn(e,n,s,140,22,2),e.fillStyle="#4a4c4e",e.fillRect(0,0,n,2),e.fillRect(0,0,2,n),e.fillStyle="#8f7a3a",e.fillRect(18,16,28,30),e.fillStyle="#3a3b40",e.fillRect(31,16,2,30),e.fillRect(18,30,28,2),e.fillStyle="#6a6c70",e.fillRect(16,46,32,2)}),t.concrete=Ye(128,(e,n)=>{dn(e,n,s,142,20,2),e.fillStyle="#4a4c4e",e.fillRect(0,0,n,2),e.fillRect(0,0,2,n),e.fillStyle="rgba(30,30,34,0.35)";for(let i=0;i<6;i++)e.fillRect(s.int(0,n),s.int(0,n),s.int(2,10),s.int(1,3))}),t.roof=Ye(128,(e,n)=>{dn(e,n,s,48,14,2),e.fillStyle="rgba(255,255,255,0.08)";for(let i=0;i<20;i++)e.fillRect(s.int(0,n),s.int(0,n),s.int(3,12),1)}),t.ground=Ye(256,(e,n)=>{dn(e,n,s,178,26,2);for(let i=0;i<60;i++){const r=s.int(100,140);e.fillStyle=`rgba(${r},${r-8},${r-16},0.5)`,e.fillRect(s.int(0,n),s.int(0,n),s.int(2,10),s.int(1,4))}e.fillStyle="rgba(90,85,80,0.4)",e.fillRect(0,40,n,5),e.fillRect(0,60,n,5)}),t.wallInt=Ye(128,(e,n)=>{dn(e,n,s,170,24,2);const i=s.pick(["#3f5a4a","#3b4f66","#5a4a3a","#4e5f3f"]);e.fillStyle=i,e.fillRect(0,28,n,36),e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(0,28,n,2),e.fillStyle="rgba(20,20,20,0.5)";for(let r=0;r<8;r++)e.fillRect(s.int(0,n),s.int(30,n),s.int(2,9),s.int(1,2));for(let r=0;r<4;r++)e.fillRect(s.int(0,n),s.int(0,26),s.int(1,3),s.int(4,16))}),t.floorInt=Ye(128,(e,n)=>{dn(e,n,s,78,20,2),e.fillStyle="rgba(0,0,0,0.5)";for(let i=0;i<n;i+=16)e.fillRect(i,0,1,n),e.fillRect(0,i,n,1)}),t.ceilInt=Ye(32,(e,n)=>{dn(e,n,s,120,26,2)}),t.door=Ye(32,(e,n)=>{const i=s.pick(["#4a2a22","#3a2a1a","#2a2a2a","#5a3a2a"]);e.fillStyle=i,e.fillRect(0,0,n,n),e.fillStyle="rgba(0,0,0,0.3)";for(let r=0;r<20;r++)e.fillRect(s.int(0,n),s.int(0,n),1,1);e.fillStyle="#9a8a5a",e.fillRect(22,16,3,2),e.fillStyle="#1a1a1a",e.fillRect(0,0,n,1),e.fillRect(0,0,1,n),e.fillRect(n-1,0,1,n)}),t.elevator=Ye(32,(e,n)=>{dn(e,n,s,95,16,2),e.fillStyle="#222",e.fillRect(15,0,2,n),e.fillStyle="rgba(90,60,40,0.5)";for(let i=0;i<10;i++)e.fillRect(s.int(0,n),s.int(0,n),s.int(1,4),s.int(1,3))}),t.arenaFloor=Ye(64,(e,n)=>{dn(e,n,s,88,18,2),e.fillStyle="rgba(120,20,20,0.35)";for(let i=0;i<12;i++)e.fillRect(s.int(0,n),s.int(0,n),s.int(3,14),s.int(2,8));e.fillStyle="rgba(0,0,0,0.5)";for(let i=0;i<n;i+=32)e.fillRect(i,0,1,n),e.fillRect(0,i,n,1)}),t.signMagma=Ye(64,(e,n,i)=>{e.fillStyle="#c41018",e.fillRect(0,0,n,i),e.fillStyle="rgba(0,0,0,0.18)";for(let r=0;r<18;r++)e.fillRect(s.int(0,n),s.int(0,i),s.int(2,16),1);e.fillStyle="#f4f0ea",e.beginPath(),e.arc(i*.52,i*.5,i*.36,0,Math.PI*2),e.fill(),e.fillStyle="#c41018",e.font=`900 ${Math.floor(i*.52)}px Arial, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText("М",i*.52,i*.54),e.fillStyle="#fff8f2",e.font=`800 ${Math.floor(i*.46)}px Arial, sans-serif`,e.textAlign="left",e.fillText("МАГМА",i*1.05,i*.54)},!1,512,128),t.signKik=Ye(64,(e,n,i)=>{e.fillStyle="#b81414",e.fillRect(0,0,n*.48,i),e.fillStyle="#5a3218",e.fillRect(n*.48,0,n*.52,i),e.fillStyle="#1a0c08",e.fillRect(n*.48-3,0,6,i),e.fillStyle="rgba(0,0,0,0.2)";for(let r=0;r<14;r++)e.fillRect(s.int(0,n),s.int(0,i),s.int(3,18),1);e.fillStyle="#f6f1ea",e.textAlign="center",e.textBaseline="middle",e.font=`800 ${Math.floor(i*.28)}px Arial, sans-serif`,e.fillText("КРАСНОЕ",n*.24,i*.38),e.font=`700 ${Math.floor(i*.18)}px Arial, sans-serif`,e.fillText("и",n*.24,i*.68),e.font=`800 ${Math.floor(i*.22)}px Arial, sans-serif`,e.fillText("КОРИЧНЕВОЕ",n*.74,i*.5)},!1,512,128),t.mosaic=Ye(128,(e,n)=>{dn(e,n,s,110,20,2);const i=["#3a6a7a","#7a4a3a","#3a5a7a","#8a7a3a","#3a6a4a","#5a3a6a","#9a9a9a"];for(let r=8;r<n-8;r+=4)for(let a=8;a<n-8;a+=4)s.chance(.55)&&(e.fillStyle=s.pick(i),e.fillRect(a,r,4,4))}),t}function Cr(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Be;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Mc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<a[u].length;++_)d.push(a[u][_][f]);const g=Mc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Mc(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new ye(a,e,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const _=u.getComponent(f,g);o.setComponent(f+h,g,_)}}else a.set(u.array,l);l+=u.count*e}return i!==void 0&&(o.gpuType=i),o}function Sc(s,t){if(t===Cu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===ho||t===nh){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===ho)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}const D={FACADE:0,CONCRETE:1,ROOF:2,DOOR:3,MOSAIC:4,LAMP:5,DARK:6,WALLINT:7,FLOORINT:8,CEILINT:9,ELEVATOR:10,GROUND:11,ARENA:12,SIGN_MAGMA:13,SIGN_KIK:14};function l_(s){const t=(n,i={})=>new tn({map:n,vertexColors:!0,roughness:.88,metalness:0,envMapIntensity:.5,...i}),e=[];return e[D.FACADE]=t(s.facade),e[D.CONCRETE]=t(s.concrete),e[D.ROOF]=t(s.roof,{roughness:.95}),e[D.DOOR]=t(s.door,{roughness:.72}),e[D.MOSAIC]=t(s.mosaic),e[D.LAMP]=new tn({vertexColors:!0,emissive:16762218,emissiveIntensity:1.35,roughness:1,metalness:0,envMapIntensity:0}),e[D.DARK]=t(null,{color:2763308,roughness:.92}),e[D.WALLINT]=t(s.wallInt,{envMapIntensity:.12}),e[D.FLOORINT]=t(s.floorInt,{envMapIntensity:.12}),e[D.CEILINT]=t(s.ceilInt,{envMapIntensity:.08}),e[D.ELEVATOR]=t(s.elevator,{metalness:.15,roughness:.55}),e[D.GROUND]=t(s.ground,{roughness:.94}),e[D.ARENA]=t(s.arenaFloor),e[D.SIGN_MAGMA]=new Oe({map:s.signMagma}),e[D.SIGN_KIK]=new Oe({map:s.signKik}),e}function $t(s,t){const e=t instanceof it?t:new it(t),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;return s.setAttribute("color",new ye(i,3)),s}function En(s,t,e,n=0,i=0){const r=s.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)*t+n,r.getY(a)*e+i);return s}function hr(s,t,e,n,i,r,a=3,o=16777215){const l=new ne(n,i);return En(l,n/a,i/a),l.rotateY(r),l.translate(s,t,e),$t(l,o)}function De(s,t,e,n,i,r=!0,a=3,o=16777215){const l=e-s,c=n-t,u=new ne(l,c);return En(u,l/a,c/a),u.rotateX(r?-Math.PI/2:Math.PI/2),u.translate((s+e)/2,i,(t+n)/2),$t(u,o)}function wt(s,t,e,n,i,r,a=16777215,o=3){const l=new Pe(n-s,i-t,r-e),c=Math.max(n-s,i-t,r-e)/o;return En(l,c,c),l.translate((s+n)/2,(t+i)/2,(e+r)/2),$t(l,a)}class Ds{constructor(){this.byMat=new Map}add(t,e){let n=this.byMat.get(e);n||(n=[],this.byMat.set(e,n)),n.push(t)}build(t){const e=[],n=[];for(const[a,o]of this.byMat){const l=Cr(o,!1);l&&(e.push(l),n.push(t[a]))}if(!e.length)return null;const i=Cr(e,!0);for(const a of e)a.dispose();const r=new Tt(i,n);return r.frustumCulled=!0,i.computeBoundingSphere(),r}}class c_{constructor(){this.boxes=[],this.defaultGround=0,this.hasDefaultGround=!0,this.cell=16,this.grid=new Map}clear(){this.boxes.length=0,this.grid.clear()}add(t,e,n,i,r,a,o=null){const l={x0:Math.min(t,i),y0:Math.min(e,r),z0:Math.min(n,a),x1:Math.max(t,i),y1:Math.max(e,r),z1:Math.max(n,a),tag:o};this.boxes.push(l);const c=this.cell;for(let u=Math.floor(l.x0/c);u<=Math.floor(l.x1/c);u++)for(let h=Math.floor(l.z0/c);h<=Math.floor(l.z1/c);h++){const f=u+","+h;let d=this.grid.get(f);d||(d=[],this.grid.set(f,d)),d.push(l)}return l}removeTag(t){this.boxes=this.boxes.filter(e=>e.tag!==t);for(const[e,n]of this.grid){const i=n.filter(r=>r.tag!==t);i.length?this.grid.set(e,i):this.grid.delete(e)}}near(t,e,n){const i=this.cell,r=[],a=new Set;for(let o=Math.floor((t-n)/i);o<=Math.floor((t+n)/i);o++)for(let l=Math.floor((e-n)/i);l<=Math.floor((e+n)/i);l++){const c=this.grid.get(o+","+l);if(c)for(const u of c)a.has(u)||(a.add(u),r.push(u))}return r}groundAt(t,e,n,i=.3,r=$.stepHeight){let a=this.hasDefaultGround?this.defaultGround:-1/0;for(const o of this.near(t,e,i+1))t+i<=o.x0||t-i>=o.x1||e+i<=o.z0||e-i>=o.z1||o.y1<=n+r&&o.y1>a&&(a=o.y1);return a}ceilingAt(t,e,n,i=.3){let r=1/0;for(const a of this.near(t,e,i+1))t+i<=a.x0||t-i>=a.x1||e+i<=a.z0||e-i>=a.z1||a.y0>=n-.01&&a.y0<r&&(r=a.y0);return r}move(t,e,n,i,r,a,o=$.stepHeight){const l=r+o,c=r+a,u=this.near(t.x+e,t.z+n,i+Math.abs(e)+Math.abs(n)+1);let h=t.x+e;for(const d of u)d.y1<=l||d.y0>=c||t.z+i<=d.z0||t.z-i>=d.z1||h+i>d.x0&&h-i<d.x1&&(h=e>0?d.x0-i-.001:d.x1+i+.001);t.x=h;let f=t.z+n;for(const d of u)d.y1<=l||d.y0>=c||t.x+i<=d.x0||t.x-i>=d.x1||f+i>d.z0&&f-i<d.z1&&(f=n>0?d.z0-i-.001:d.z1+i+.001);t.z=f}pointInside(t,e,n){for(const i of this.near(t,n,1))if(t>i.x0&&t<i.x1&&e>i.y0&&e<i.y1&&n>i.z0&&n<i.z1)return!0;return!1}segmentHit(t,e,n,i,r,a){const o=i-t,l=r-e,c=a-n;let u=1;const h=Math.max(Math.abs(o),Math.abs(c))+1;for(const f of this.near((t+i)/2,(n+a)/2,h)){let d=0,g=1;const _=[[t,o,f.x0,f.x1],[e,l,f.y0,f.y1],[n,c,f.z0,f.z1]];let m=!0;for(const[p,M,S,y]of _){if(Math.abs(M)<1e-9){if(p<S||p>y){m=!1;break}continue}let R=(S-p)/M,w=(y-p)/M;if(R>w){const A=R;R=w,w=A}if(d=Math.max(d,R),g=Math.min(g,w),d>g){m=!1;break}}m&&d<u&&(u=d)}return u}lineOfSight(t,e,n,i,r,a){const o=i-t,l=r-e,c=a-n,u=Math.hypot(o,l,c),h=Math.ceil(u/.6);for(let f=1;f<h;f++){const d=f/h;if(this.pointInside(t+o*d,e+l*d,n+c*d))return!1}return!0}}const h_=[11908533,11053224,12434872,10462118,11578016,10923445],u_=[8361384,11051130,9414794,11045503,10128040];function f_(s,t){const e=["khrushch","nine","tower","fractal","lshape","wall","fractal"],n=s.pick(e),i=t/2,r=[],a=[];let o;const l=$.floorHeight,c=(u,h,f,d,g,_,m={})=>{const p={x0:u,z0:h,x1:f,z1:d,y0:g,y1:g+_*l,floors:_,...m};return r.push(p),p};if(n==="khrushch"){o=5;const u=s.int(2,3),h=12*u,f=12,d=i-h/2,g=i-f/2,_=c(d,g,d+h,g+f,0,o);for(let m=0;m<u;m++)a.push({x:d+12*m+6,z:g,block:_})}else if(n==="nine"){o=9;const u=s.int(2,3),h=14*u,f=12,d=i-h/2,g=i-f/2,_=c(d,g,d+h,g+f,0,o);for(let m=0;m<u;m++)a.push({x:d+14*m+7,z:g,block:_})}else if(n==="tower"){o=s.int(12,20);const u=s.pick([15,18]),h=i-u/2,f=i-u/2,d=c(h,f,h+u,f+u,0,o);c(h+3,f+3,h+u-3,f+u-3,o*l,1,{tech:!0}),a.push({x:i,z:f,block:d})}else if(n==="wall"){o=s.int(9,12);const u=36,h=10,f=i-u/2,d=i-h/2,g=c(f,d,f+u,d+h,0,o);for(let _=0;_<3;_++)a.push({x:f+12*_+6,z:d,block:g})}else if(n==="lshape"){o=s.int(5,9);const u=c(i-16,i-6,i+10,i+6,0,o);c(i+10,i-6,i+16,i+14,0,o,{noFront:!0}),a.push({x:i-10,z:i-6,block:u},{x:i+2,z:i-6,block:u})}else{o=s.int(6,9);const u=s.int(24,30),h=s.int(14,18),f=i-u/2,d=i-h/2,g=c(f,d,f+u,d+h,0,o),_=s.int(2,3);for(let p=0;p<_;p++)a.push({x:f+u*(p+.5)/_,z:d,block:g});const m=(p,M)=>{if(M<=0)return;const S=s.int(1,2);for(let y=0;y<S;y++){const R=(p.x1-p.x0)*s.range(.35,.65),w=(p.z1-p.z0)*s.range(.4,.75),A=p.x0+s.range(0,p.x1-p.x0-R),b=p.z0+s.range(0,p.z1-p.z0-w),v=s.int(2,5),x=c(A,b,A+R,b+w,p.y1,v,{noFront:!0});m(x,M-1)}};m(g,2),s.chance(.6)&&c(f+u,d+2,f+u+s.int(6,9),d+h-2,0,Math.max(2,o-s.int(2,4)),{noFront:!0})}for(const u of a)u.nx=0,u.nz=-1,u.floors=u.block.floors;return{type:n,blocks:r,entrances:a,floors:o}}function zn(s,t,e,n,i,r,a){const o=s.nx??0,l=s.nz??-1,c=-l,u=o,h=[],f=[];for(const d of[t,e])for(const g of[n,i])h.push(s.x+o*d+c*g),f.push(s.z+l*d+u*g);return{x0:Math.min(...h),z0:Math.min(...f),x1:Math.max(...h),z1:Math.max(...f),y0:r,y1:a}}const ur=3,Ec=3;function fr(s,t,e,n){const i=Math.max(1,t.floors||Math.round((t.y1-t.y0)/Ec));let r,a,o,l,c;e==="s"?(r=t.x0,a=t.x1-t.x0,o="x",l=Math.PI,c=t.z0):e==="n"?(r=t.x0,a=t.x1-t.x0,o="x",l=0,c=t.z1):e==="e"?(r=t.z0,a=t.z1-t.z0,o="z",l=Math.PI/2,c=t.x1):(r=t.z0,a=t.z1-t.z0,o="z",l=-Math.PI/2,c=t.x0);const u=Math.max(1,Math.floor(a/ur)),h=u*ur,f=(a-h)/2;for(let d=0;d<u;d++){const g=f+d*ur+ur/2;for(let _=0;_<i;_++)s.push({name:"panel_wall",x:o==="x"?r+g:c,y:t.y0+_*Ec,z:o==="z"?r+g:c,yaw:l})}return f}function d_(s,t,e,n=e,i=null){const r=$.floorHeight,a=new it(e.pick(h_)),o=new it(e.pick(u_)),l=e.chance(.35),c=[],u=!!i;for(const h of t.blocks){const f=h.y1-h.y0,d=h.x1-h.x0,g=h.z1-h.z0,_=(h.y0+h.y1)/2,m=h.tech?D.CONCRETE:D.FACADE,p=h.tech?9079434:a,M=h.tech?D.CONCRETE:l&&h.y0===0&&g<d*.85?D.MOSAIC:e.chance(.5)?D.CONCRETE:D.FACADE;if(u&&!h.tech?(fr(i,h,"s"),fr(i,h,"n"),M===D.MOSAIC?(s.add($t(En(new ne(g,f),1,1).rotateY(Math.PI/2).translate(h.x1,_,(h.z0+h.z1)/2),16777215),D.MOSAIC),s.add($t(En(new ne(g,f),1,1).rotateY(-Math.PI/2).translate(h.x0,_,(h.z0+h.z1)/2),16777215),D.MOSAIC)):(fr(i,h,"e"),fr(i,h,"w"))):(s.add(hr((h.x0+h.x1)/2,_,h.z0,d,f,Math.PI,3,p),m),s.add(hr((h.x0+h.x1)/2,_,h.z1,d,f,0,3,p),m),M===D.MOSAIC?(s.add($t(En(new ne(g,f),1,1).rotateY(Math.PI/2).translate(h.x1,_,(h.z0+h.z1)/2),16777215),D.MOSAIC),s.add($t(En(new ne(g,f),1,1).rotateY(-Math.PI/2).translate(h.x0,_,(h.z0+h.z1)/2),16777215),D.MOSAIC)):(s.add(hr(h.x1,_,(h.z0+h.z1)/2,g,f,Math.PI/2,3,p),M),s.add(hr(h.x0,_,(h.z0+h.z1)/2,g,f,-Math.PI/2,3,p),M))),s.add(De(h.x0,h.z0,h.x1,h.z1,h.y1,!0,4,7829367),D.ROOF),s.add(wt(h.x0-.1,h.y1,h.z0-.1,h.x1+.1,h.y1+.5,h.z1+.1,10132122),D.CONCRETE),!h.tech&&d>=12){const S=e.int(1,Math.floor(d/8));for(let y=0;y<S;y++){const R=h.x0+3*e.int(1,Math.floor(d/3)-2),w=h.noFront||e.chance(.5)?h.z1:h.z0,A=w===h.z1?h.z1:h.z0-.9,b=w===h.z1?h.z1+.9:h.z0;s.add(wt(R,h.y0+r,A,R+3,h.y1-.5,b,e.chance(.4)?o:10263708),D.CONCRETE)}}if(!h.tech){const S=n.int(3,Math.min(12,Math.floor(d*f/55)));for(let y=0;y<S;y++){const R=n.int(0,Math.max(0,Math.floor(d/3)-1)),w=n.int(0,Math.max(0,h.floors-1)),A=h.x0+R*3+1.5,b=h.y0+w*r+1.55,v=n.chance(.5),x=v?h.z0:h.z1,C=v?Math.PI:0;if(u)i.push({name:"window_lit",x:A,y:b,z:x+(v?-.06:.06),yaw:C});else{const O=new ne(1.45,1.55);O.rotateY(C),O.translate(A,b,v?h.z0-.04:h.z1+.04),s.add($t(O,new it(.95,.72,.28)),D.LAMP)}c.push({x:A,y:b,z:x,nx:0,nz:v?-1:1,floor:w})}}if(e.chance(.7)&&s.add(wt(h.x0+1.5,h.y1,h.z0+1.5,h.x0+3.5,h.y1+1.6,h.z0+3.5,9079434),D.CONCRETE),e.chance(.5)&&s.add(wt((h.x0+h.x1)/2-.08,h.y1,(h.z0+h.z1)/2-.08,(h.x0+h.x1)/2+.08,h.y1+e.range(3,7),(h.z0+h.z1)/2+.08,2236962),D.DARK),!h.tech&&e.chance(.5)&&h.y0===0){const S=h.y0+r*Math.max(1,Math.floor(h.floors*.33));s.add(wt(h.x0-.14,S,h.z0-.14,h.x1+.14,S+.55,h.z1+.14,e.pick([3828344,6969914,4876890])),D.MOSAIC)}}for(const h of t.entrances){const f=h.nx??0,d=h.nz??-1,g=Math.atan2(f,d);if(h.lamp=h.lamp??e.chance(.55),u)i.push({name:"entrance",x:h.x,y:0,z:h.z,yaw:g});else{const _=new ne(1.6,2.4);_.rotateY(g),_.translate(h.x+f*.02,1.2,h.z+d*.02),s.add($t(_,526344),D.DARK);const m=new ne(1.2,2.1);m.rotateY(g),m.translate(h.x+f*.04,1.1,h.z+d*.04),s.add($t(m,16777215),D.DOOR);const p=zn(h,0,1.7,-1.6,1.6,2.55,2.75);s.add(wt(p.x0,p.y0,p.z0,p.x1,p.y1,p.z1,10132122),D.CONCRETE);const M=zn(h,0,1.5,-1.3,1.3,0,.18);s.add(wt(M.x0,M.y0,M.z0,M.x1,M.y1,M.z1,9079434),D.CONCRETE);const S=zn(h,1.4,1.7,-1.6,-1.3,0,2.55),y=zn(h,1.4,1.7,1.3,1.6,0,2.55);s.add(wt(S.x0,S.y0,S.z0,S.x1,S.y1,S.z1,9079434),D.CONCRETE),s.add(wt(y.x0,y.y0,y.z0,y.x1,y.y1,y.z1,9079434),D.CONCRETE);const R=zn(h,.7,1,-.15,.15,2.4,2.55);s.add(wt(R.x0,R.y0,R.z0,R.x1,R.y1,R.z1,h.lamp?new it(1,.82,.45):2236962),D.LAMP);const w=zn(h,.02,.06,.75,1.05,1.9,2.1);s.add(wt(w.x0,w.y0,w.z0,w.x1,w.y1,w.z1,2767466),D.DARK)}}return{windows:c}}function p_(s,t,e){for(const n of t.blocks){if(n.y0>0)continue;s.add(De(n.x0-2,n.z0-2,n.x1+2,n.z1+2,.02,!0,3,1710618),D.DARK);const i=e.int(14,24);for(let r=0;r<i;r++){const a=e.range(n.x0,n.x1-3),o=e.range(n.z0,n.z1-3);s.add(wt(a,0,o,a+e.range(1.5,4),e.range(.5,3.5),o+e.range(1.5,4),6974058),D.CONCRETE)}s.add(wt(n.x0,0,n.z1-.4,n.x0+e.range(4,10),e.range(4,9),n.z1,9079434),D.FACADE)}}function m_(s,t=!1){const e=[];if(t){for(const n of s.blocks)n.y0===0&&e.push({x0:n.x0+2,y0:0,z0:n.z0+2,x1:n.x1-2,y1:1.2,z1:n.z1-2});return e}for(const n of s.blocks)e.push({x0:n.x0,y0:n.y0,z0:n.z0,x1:n.x1,y1:n.y1,z1:n.z1});for(const n of s.entrances){const i=zn(n,0,1.5,-1.3,1.3,0,.18),r=zn(n,1.4,1.7,-1.6,-1.3,0,2.55),a=zn(n,1.4,1.7,1.3,1.6,0,2.55);e.push(i,r,a)}return e}const Ki=12849176,g_=13157564,__=new it(1,.42,.1),Tc=12063764,wc=5911064,x_=7225892;function Ih(s,t,e,n,i){return i==="s"?{yaw:Math.PI,cx:(s+e)/2,cz:t-.16,w:e-s,along:"x"}:i==="n"?{yaw:0,cx:(s+e)/2,cz:n+.16,w:e-s,along:"x"}:i==="w"?{yaw:-Math.PI/2,cx:s-.16,cz:(t+n)/2,w:n-t,along:"z"}:{yaw:Math.PI/2,cx:e+.16,cz:(t+n)/2,w:n-t,along:"z"}}function Ir(s,t,e,n,i,r){return i==="s"?{x:s+(e-s)*r,z:t}:i==="n"?{x:s+(e-s)*r,z:n}:i==="w"?{x:s,z:t+(n-t)*r}:{x:e,z:t+(n-t)*r}}function Lh(s,t,e,n,i,r){const a=new ne(s,t);return a.rotateY(e),a.translate(n,i,r),$t(a,16777215)}function Lr(s,t,e,n,i,r,a){const o=new ne(s,t);return o.rotateY(e),o.translate(n,i,r),$t(o,a)}function Ph(s,t,e,n,i,r){return i==="s"?{x0:s,z0:t-r,x1:e,z1:t}:i==="n"?{x0:s,z0:n,x1:e,z1:n+r}:i==="w"?{x0:s-r,z0:t,x1:s,z1:n}:{x0:e,z0:t,x1:e+r,z1:n}}function v_(s,t,e,n,i,r,a,o){return i==="s"?wt(s,r,t-o,e,a,t+.15,Ki):i==="n"?wt(s,r,n-.15,e,a,n+o,Ki):i==="w"?wt(s-o,r,t,s+.15,a,n,Ki):wt(e-.15,r,t,e+o,a,n,Ki)}function y_(s,t,e,n,i){return i==="s"?{x0:s-.55,z0:t-.7,x1:s+.15,z1:t-.1}:i==="n"?{x0:e-.15,z0:n+.1,x1:e+.55,z1:n+.7}:i==="w"?{x0:s-.7,z0:t-.55,x1:s-.1,z1:t+.15}:{x0:e+.1,z0:n-.15,x1:e+.7,z1:n+.55}}function Pr(s,t,e,n,i,r="s",a=!1){const l=Ih(t,e,n,i,r);a||(s.add(wt(t,0,e,n,3.7-1.15,i,g_),D.DARK),s.add(wt(t-.04,3.7-1.15,e-.04,n+.04,3.7,i+.04,Ki),D.DARK),s.add(De(t-.2,e-.2,n+.2,i+.2,3.7+.04,!0,4,9079434),D.ROOF),s.add(wt(t-.15,3.7,e-.15,n+.15,3.7+.22,i+.15,10132122),D.CONCRETE));const c=Math.min(l.w-.5,12);s.add(Lh(c,1.05,l.yaw,l.cx,3.7-.56,l.cz),D.SIGN_MAGMA);const u=Ir(t,e,n,i,r,.5);if(!a){s.add(Lr(1.6,2.15,l.yaw,u.x+(l.along==="x"?0:r==="w"?-.06:.06),1.15,u.z+(l.along==="z"?0:r==="s"?-.06:.06),1316896),D.DARK);for(const d of[.22,.78]){const g=Ir(t,e,n,i,r,d),_=l.along==="x"?0:r==="w"?-.06:.06,m=l.along==="z"?0:r==="s"?-.06:.06;s.add(Lr(2.4,1.7,l.yaw,g.x+_,1.35,g.z+m,__),D.LAMP),s.add(wt(g.x-.08,2.15,g.z-.08,g.x+.08,2.22,g.z+.08,16777130),D.LAMP)}s.add(v_(t+.4,e+.4,n-.4,i-.4,r,2.45,2.58,1.15),D.DARK)}const h=y_(t,e,n,i,r);if(!a){s.add(wt(h.x0,0,h.z0,h.x1,4.1,h.z1,Ki),D.DARK),s.add(wt(h.x0-.04,2.55,h.z0-.04,h.x1+.04,3.55,h.z1+.04,15920872),D.DARK);const d=(t+n)/2+1.4,g=(e+i)/2;s.add(wt(d,3.7+.22,g,d+1.3,3.7+.7,g+.9,6974058),D.CONCRETE)}const f=Ph(t,e,n,i,r,2.4);return s.add(De(f.x0,f.z0,f.x1,f.z1,.02,!0,3,3815996),D.DARK),{boxes:[{x0:t,y0:0,z0:e,x1:n,y1:3.7,z1:i},{x0:h.x0,y0:0,z0:h.z0,x1:h.x1,y1:4.1,z1:h.z1}],kind:"magma",door:{x:u.x,z:u.z},kit:a?"shop_magma":null,x0:t,z0:e,x1:n,z1:i,front:r}}function Dr(s,t,e,n,i,r="s",a=!1){const l=Ih(t,e,n,i,r);if(!a){const d=[[0,.58,wc],[.58,1.16,Tc],[1.16,1.74,x_],[1.74,2.32,Tc],[2.32,3.2,wc]];for(const[g,_,m]of d)s.add(wt(t,g,e,n,_,i,m),D.DARK);s.add(De(t-.15,e-.15,n+.15,i+.15,3.2+.03,!0,4,4860440),D.ROOF)}const c=Math.min(l.w-.35,11),u=l.cz+(r==="s"?-.08:r==="n"?.08:0)+(r==="w"?-.08:r==="e"?.08:0);s.add(Lh(c,1.05,l.yaw,l.cx,3.2+.42,u),D.SIGN_KIK);const h=Ir(t,e,n,i,r,.5);if(!a){const d=l.along==="x"?0:r==="w"?-.06:.06,g=l.along==="z"?0:r==="s"?-.06:.06;s.add(Lr(1.35,2.05,l.yaw,h.x+d,1.1,h.z+g,1708048),D.DARK);for(const _ of[.2,.8]){const m=Ir(t,e,n,i,r,_);s.add(Lr(1.9,1.35,l.yaw,m.x+d,1.45,m.z+g,new it(.82,.28,.1)),D.LAMP)}}const f=Ph(t,e,n,i,r,1.8);return s.add(De(f.x0,f.z0,f.x1,f.z1,.02,!0,3,3025448),D.DARK),{boxes:[{x0:t,y0:0,z0:e,x1:n,y1:3.2,z1:i}],kind:"kik",door:{x:h.x,z:h.z},kit:a?"shop_kik":null,x0:t,z0:e,x1:n,z1:i,front:r}}function M_(s,t,e,n=!1){const i=e/2,r=[],a=[],o=5913130,l=6974064,c=4864552,u=n?8:16,h=i-6,f=i+(n?2:t.range(-3,3));for(const v of[-1.3,1.3])s.add(wt(h+v-.06,0,f-.6,h+v+.06,2.2,f-.48,o),D.DARK),s.add(wt(h+v-.06,0,f+.48,h+v+.06,2.2,f+.6,o),D.DARK);s.add(wt(h-1.4,2.15,f-.07,h+1.4,2.27,f+.07,o),D.DARK),s.add(wt(h-.03,.55,f-.03,h+.03,2.15,f+.03,l),D.DARK),s.add(wt(h-.03+.5,.55,f-.03,h+.03+.5,2.15,f+.03,l),D.DARK),r.push({x0:h-1.4,y0:0,z0:f-.6,x1:h-1.2,y1:2.2,z1:f+.6},{x0:h+1.2,y0:0,z0:f-.6,x1:h+1.4,y1:2.2,z1:f+.6});const d=i+6,g=i-(n?1:0)+(n?0:t.range(-4,4));s.add(wt(d-.1,0,g-.1,d+.1,.9,g+.1,l),D.DARK),r.push({x0:d-1.4,y0:0,z0:g-1.4,x1:d+1.4,y1:.7,z1:g+1.4});const _=i+t.range(-2,2),m=i-(n?5:9)+t.range(-1,1);for(const[v,x,C,O]of[[-1.5,-1.5,1.5,-1.3],[-1.5,1.3,1.5,1.5],[-1.5,-1.5,-1.3,1.5],[1.3,-1.5,1.5,1.5]])s.add(wt(_+v,0,m+x,_+C,.3,m+O,c),D.DARK);s.add(De(_-1.3,m-1.3,_+1.3,m+1.3,.12,!0,3,10127984),D.CONCRETE),s.add(wt(_-.08,0,m-.08,_+.08,2,m+.08,c),D.DARK),s.add(wt(_-1.2,1.9,m-1.2,_+1.2,2.05,m+1.2,8010298),D.DARK),r.push({x0:_-1.5,y0:0,z0:m-1.5,x1:_+1.5,y1:.3,z1:m+1.5});for(let v=0;v<3;v++){const x=i+t.range(-u,u),C=i+t.range(-u,u);s.add(wt(x-.9,.4,C-.2,x+.9,.48,C+.2,c),D.DARK),s.add(wt(x-.9,.5,C+.18,x+.9,.9,C+.24,c),D.DARK),s.add(wt(x-.8,0,C-.15,x-.7,.4,C+.2,l),D.DARK),s.add(wt(x+.7,0,C-.15,x+.8,.4,C+.2,l),D.DARK),r.push({x0:x-.9,y0:0,z0:C-.2,x1:x+.9,y1:.9,z1:C+.25})}const p=t.int(3,6);for(let v=0;v<p;v++){const x=i+t.range(-u-2,u+2),C=i+t.range(-u-2,u+2);if(Math.hypot(x-i,C-i)<5)continue;const O=t.range(4,7);s.add(wt(x-.18,0,C-.18,x+.18,O,C+.18,2761760),D.DARK);for(let N=0;N<4;N++){const B=t.range(0,Math.PI*2),W=t.range(1,2.4),H=O-t.range(.5,2.5),j=new Pe(.1,.1,W);j.translate(0,0,W/2),j.rotateX(-t.range(.3,.9)),j.rotateY(B),j.translate(x,H,C),s.add($t(j,2761760),D.DARK)}r.push({x0:x-.2,y0:0,z0:C-.2,x1:x+.2,y1:O,z1:C+.2})}const M=i+t.range(-10,10),S=i+t.range(-10,10);s.add(wt(M-.1,0,S-.1,M+.1,6,S+.1,3815994),D.DARK);const y=t.chance(.6);s.add(wt(M-.3,5.8,S-.1,M+.5,6.1,S+.3,y?new it(.8,.7,.45):2236962),D.LAMP),y&&a.push({x:M,z:S,y:5.8}),r.push({x0:M-.1,y0:0,z0:S-.1,x1:M+.1,y1:6,z1:S+.1});const R=i+(n?4:t.range(-18,18)),w=i+(n?8:18);for(let v=0;v<3;v++)s.add(wt(R+v*1.3,0,w,R+v*1.3+1.1,1.1,w+1.1,t.pick([3820090,4864570,3816010])),D.DARK);r.push({x0:R,y0:0,z0:w,x1:R+3.7,y1:1.1,z1:w+1.1});const A=i-(n?8:14),b=i+(n?7:10);return s.add(wt(A-.05,0,b,A+.05,2.1,b+.1,l),D.DARK),s.add(wt(A+2.5,0,b,A+2.6,2.1,b+.1,l),D.DARK),s.add(wt(A-.05,2,b,A+2.6,2.1,b+.1,l),D.DARK),t.chance(.5)&&s.add(wt(A+.5,.6,b-.02,A+2.1,2,b+.12,5913146),D.DARK),{boxes:r,carousel:{x:d,z:g},lamps:a,swing:{x:h+.25,z:f}}}function S_(){const s=new re,t=new Ge({color:5917242}),e=new Ge({color:6974064}),n=new Tt(new ge(1.3,1.3,.08,8),t);n.position.y=.45,s.add(n);for(let r=0;r<4;r++){const a=r/4*Math.PI*2,o=new Tt(new Pe(.06,.6,.06),e);o.position.set(Math.cos(a)*1.1,.78,Math.sin(a)*1.1),s.add(o);const l=new Tt(new Pe(.5,.06,.3),t);l.position.set(Math.cos(a)*.9,.7,Math.sin(a)*.9),l.rotation.y=-a,s.add(l)}const i=new Tt(new Br(1.1,.04,6,12),e);return i.rotation.x=Math.PI/2,i.position.y=1.05,s.add(i),s}function E_(){const s=new re,t=new Ge({color:4864552}),e=new Tt(new Pe(.8,.08,.4),t);return e.position.set(0,.54,0),s.add(e),s}function xo(s,t,e,n=!1){const i=[],r=t.int(4,9);for(let o=0;o<r;o++){const l=t.range(3,e-3),c=t.range(3,e-3),u=t.next();if(u<.45){const h=t.range(1.1,2.3),f=h*.55,d=new Le(h,8,6);d.translate(l,f*.35,c),s.add($t(d,12896460),D.CONCRETE),i.push({x0:l-h*.7,y0:0,z0:c-h*.7,x1:l+h*.7,y1:f,z1:c+h*.7})}else if(u<.8)for(let h=0;h<5;h++){const f=new Pe(.05,t.range(.6,1.4),.05);f.translate(0,.5,0),f.rotateZ(t.range(-.5,.5)),f.rotateX(t.range(-.5,.5)),f.translate(l,0,c),s.add($t(f,3024930),D.DARK)}else if(u<.92){const h=new ge(.12,.16,8,8);h.translate(l,4,c),s.add($t(h,4868680),D.CONCRETE),s.add(wt(l-1.2,7.4,c-.08,l+1.2,7.55,c+.08,3815994),D.DARK),i.push({x0:l-.15,y0:0,z0:c-.15,x1:l+.15,y1:8,z1:c+.15})}else s.add(wt(l,.3,c,l+4,1,c+1.7,t.pick([5917242,3816010,6969898])),D.DARK),s.add(wt(l+1,1,c+.1,l+3,1.5,c+1.6,1710618),D.DARK),i.push({x0:l,y0:0,z0:c,x1:l+4,y1:1.5,z1:c+1.7})}const a=[];if(t.chance(.22)){const o=t.range(4,e-20),l=t.range(4,e-14),u=(t.chance(.5)?Pr:Dr)(s,o,l,o+13,l+9,t.pick(["s","n","w","e"]),n);i.push(...u.boxes),a.push(u)}if(t.chance(.4)){const o=t.range(4,e-20),l=t.range(4,e-8);for(let c=0;c<4;c++)s.add(wt(o+c*3.6,0,l,o+c*3.6+3.4,2.4,l+6,t.pick([4868682,5917242,3820122])),D.CONCRETE);i.push({x0:o,y0:0,z0:l,x1:o+14.2,y1:2.4,z1:l+6})}return{boxes:i,shops:a}}function T_(s,t,e,n=!1){const i=[],r=e/2;s.add(De(0,r-4.2,e,r+4.2,.012,!0,4,3487032),D.DARK),s.add(De(0,r-.08,e,r+.08,.02,!0,8,9075264),D.DARK);for(const l of[-1,1])for(let c=0;c<3;c++){const u=8+c*14+t.range(-1,1),h=r+l*6.2,f=new ge(.08,.1,5.6,8);f.translate(u,2.8,h),s.add($t(f,3815994),D.DARK);const d=new Le(.22,8,6);d.translate(u,5.55,h);const g=t.chance(.55);s.add($t(d,g?new it(1,.85,.5):2236962),D.LAMP),i.push({x0:u-.12,y0:0,z0:h-.12,x1:u+.12,y1:5.6,z1:h+.12})}const a=[];if(t.chance(.72)){const l=t.chance(.5),c=t.range(6,e-20),u=l?r+8.2:r-16.5,h=l?"s":"n",d=(t.chance(.5)?Pr:Dr)(s,c,u,c+13,u+8.5,h,n);i.push(...d.boxes),a.push(d)}const o=xo(s,t,e,n);return i.push(...o.boxes.filter(l=>l.z0>r+7||l.z1<r-7)),o.shops&&a.push(...o.shops),{boxes:i,shops:a}}class w_ extends Ei{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new I_(e)}),this.register(function(e){return new L_(e)}),this.register(function(e){return new k_(e)}),this.register(function(e){return new H_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new D_(e)}),this.register(function(e){return new N_(e)}),this.register(function(e){return new U_(e)}),this.register(function(e){return new F_(e)}),this.register(function(e){return new C_(e)}),this.register(function(e){return new O_(e)}),this.register(function(e){return new P_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new z_(e)}),this.register(function(e){return new b_(e)}),this.register(function(e){return new V_(e)}),this.register(function(e){return new W_(e)})}load(t,e,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=As.extractUrlBase(t);a=As.resolveURL(c,this.path)}else a=As.extractUrlBase(t);this.manager.itemStart(t);const o=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Wo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,a,function(u){e(u),r.manager.itemEnd(t)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Dh){try{a[Vt.KHR_BINARY_GLTF]=new X_(t)}catch(h){i&&i(h);return}r=JSON.parse(a[Vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sx(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Vt.KHR_MATERIALS_UNLIT:a[h]=new R_;break;case Vt.KHR_DRACO_MESH_COMPRESSION:a[h]=new K_(r,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:a[h]=new Y_;break;case Vt.KHR_MESH_QUANTIZATION:a[h]=new q_;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function A_(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class b_{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const u=new it(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ze);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ch(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Rr(u),c.distance=h;break;case"spot":c=new Gg(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,On(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(e.cache,o,l)})}}class R_{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Oe}extendParams(t,e,n){const i=[];t.color=new it(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],ze),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,xe))}return Promise.all(i)}}class C_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class I_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new kt(o,o)}return Promise.all(r)}}class L_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class P_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class D_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new it(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],ze)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,xe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class N_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class U_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new it().setRGB(o[0],o[1],o[2],ze),Promise.all(r)}}class F_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class O_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new it().setRGB(o[0],o[1],o[2],ze),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,xe)),Promise.all(r)}}class z_{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class B_{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:An}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class k_{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class H_{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class G_{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class V_{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class W_{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==an.TRIANGLES&&c.mode!==an.TRIANGLE_STRIP&&c.mode!==an.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Dt,m=new L,p=new Qe,M=new L(1,1,1),S=new ko(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),S.setMatrixAt(y,_.compose(m,p,M));for(const y in l)if(y==="_COLOR_0"){const R=l[y];S.instanceColor=new mo(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);pe.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Dh="glTF",ys=12,Ac={JSON:1313821514,BIN:5130562};class X_{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Dh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ys,r=new DataView(t,ys);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Ac.JSON){const c=new Uint8Array(t,ys+a,o);this.content=n.decode(c)}else if(l===Ac.BIN){const c=ys+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class K_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=vo[u]||u.toLowerCase();o[h]=a[u]}for(const u in t.attributes){const h=vo[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[t.attributes[u]],d=$i[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},o,c,ze,f)})})}}class Y_{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class q_{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class Nh extends Ls{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-e,h=(n-e)/u,f=h*h,d=f*h,g=t*c,_=g-c,m=-2*d+3*f,p=d-f,M=1-m,S=p-f+h;for(let y=0;y!==o;y++){const R=a[_+y+o],w=a[_+y+l]*u,A=a[g+y+o],b=a[g+y]*u;r[y]=M*R+S*w+m*A+p*b}return r}}const j_=new Qe;class $_ extends Nh{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return j_.fromArray(r).normalize().toArray(r),r}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$i={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bc={9728:Xe,9729:de,9984:Xc,9985:mr,9986:Ms,9987:We},Rc={33071:Sn,33648:Er,10497:Wn},ya={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Z_={CUBICSPLINE:void 0,LINEAR:Cs,STEP:Rs},Ma={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new tn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tn})),s.DefaultMaterial}function pi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function On(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Q_(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,u=t.length;c<u;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=t.length;c<u;c++){const h=t[c];if(n){const f=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function tx(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ex(s){let t;const e=s.extensions&&s.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Sa(e.attributes):t=s.indices+":"+Sa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Sa(s.targets[n]);return t}function Sa(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function yo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ix=new Dt;class sx{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new A_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Rh(this.options.manager):this.textureLoader=new Kg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return pi(r,o,i),On(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const a=e[i].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(As.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=ya[i.type],o=$i[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ye(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ya[i.type],c=$i[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=e.cache.get(M);S||(_=new c(o,p*d,i.count*d/u),S=new yg(_,d/u),e.cache.add(M,S)),m=new Oo(S,l,f%d/u,g)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),m=new ye(_,l,g);if(i.sparse!==void 0){const p=ya.SCALAR,M=$i[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new M(a[1],S,i.sparse.count*p),w=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new ye(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,b=R.length;A<b;A++){const v=R[A];if(m.setX(v,w[A*l]),l>=2&&m.setY(v,w[A*l+1]),l>=3&&m.setZ(v,w[A*l+2]),l>=4&&m.setW(v,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const i=this,r=this.json,a=r.textures[t],o=r.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=bc[f.magFilter]||de,u.minFilter=bc[f.minFilter]||We,u.wrapS=Rc[f.wrapS]||Wn,u.wrapT=Rc[f.wrapT]||Wn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xe&&u.minFilter!==de,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const a=i.images[t],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;e.isImageBitmapLoader===!0&&(g=function(_){const m=new we(_);m.needsUpdate=!0,f(m)}),e.load(As.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),On(h,a),h.userData.mimeType=a.mimeType||nx(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Vt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Go,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Eh,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return tn}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let a;const o={},l=r.extensions||{},c=[];if(l[Vt.KHR_MATERIALS_UNLIT]){const h=i[Vt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,e))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new it(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],ze),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",h.baseColorTexture,xe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=Ce);const u=r.alphaMode||Ma.OPAQUE;if(u===Ma.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ma.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Oe&&(c.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new kt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Oe&&(c.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Oe){const h=r.emissiveFactor;o.emissive=new it().setRGB(h[0],h[1],h[2],ze)}return r.emissiveTexture!==void 0&&a!==Oe&&c.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,xe)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),On(h,r),e.associations.set(h,{materials:t}),r.extensions&&pi(i,h,r),h})}createUniqueName(t){const e=ee.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return Cc(l,o,e)})}const a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o],u=ex(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Cc(new Be,c,e),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?J_(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=a[d];let p;const M=c[d];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Sg(_,M):new Tt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===an.TRIANGLE_STRIP?p.geometry=Sc(p.geometry,nh):m.mode===an.TRIANGLE_FAN&&(p.geometry=Sc(p.geometry,ho));else if(m.mode===an.LINES)p=new wg(_,M);else if(m.mode===an.LINE_STRIP)p=new Ho(_,M);else if(m.mode===an.LINE_LOOP)p=new Ag(_,M);else if(m.mode===an.POINTS)p=new Th(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&tx(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),On(p,r),m.extensions&&pi(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)e.associations.set(h[d],{meshes:t,primitives:d});if(h.length===1)return r.extensions&&pi(i,h[0],r),h[0];const f=new re;r.extensions&&pi(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ve(nf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Or(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),On(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new Dt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Bo(o,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let M=0,S=f.length;M<S;M++){const y=f[M],R=d[M],w=g[M],A=_[M],b=m[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const v=n._createAnimationTracks(y,R,w,A,b);if(v)for(let x=0;x<v.length;x++)p.push(v[x])}return new _o(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ix)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Sh:c.length>1?u=new re:c.length===1?u=c[0]:u=new pe,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),On(u,r),r.extensions&&pi(n,u,r),r.matrix!==void 0){const h=new Dt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new re;n.name&&(r.name=i.createUniqueName(n.name)),On(r,n),n.extensions&&pi(e,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof _n||f instanceof we)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const a=[],o=t.name?t.name:t.uuid,l=[];ni[r.path]===ni.weights?t.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(ni[r.path]){case ni.weights:c=ss;break;case ni.rotation:c=rs;break;case ni.position:case ni.scale:c=as;break;default:switch(n.itemSize){case 1:c=ss;break;case 2:case 3:default:c=as;break}break}const u=i.interpolation!==void 0?Z_[i.interpolation]:Cs,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ni[r.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=yo(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof rs?$_:Nh;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rx(s,t,e){const n=t.attributes,i=new Yn;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const u=yo($i[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=e.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=yo($i[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new wn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Cc(s,t,e){const n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=vo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return Wt.workingColorSpace!==ze&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Wt.workingColorSpace}" not supported.`),On(s,t),rx(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Q_(s,t.targets,e):s})}const ax=["panel_wall","window_lit","window_dark","entrance","shop_magma","shop_kik","apt_kit","dumpster","ac_unit","bench","yard_lamp"],ox=["player","npc_0","npc_1","npc_2","npc_3","npc_4","stalker"],Uh=new Map;let Ea=null;function Fh(){return Ea||(Ea=new w_),Ea}function lx(s){return`/obamka/models/${s}.glb`}function cx(s){return`/obamka/models/chars/${s}.glb`}function Oh(s){return Array.isArray(s)?s:[s]}function zh(s){s.traverse(t=>{if(!(!t.isMesh||!t.material))for(const e of Oh(t.material)){const n=e==null?void 0:e.map;n&&(n.colorSpace=xe,n.generateMipmaps=!0,n.minFilter=We,n.magFilter=de,n.needsUpdate=!0)}})}function Bh(s){return s.traverse(t=>{if(!t.isMesh||!t.material)return;const e=Oh(t.material).map(n=>!n||n.isMeshBasicMaterial?n:/^(eye|lamp|glow)$/i.test(n.name||"")?new tn({color:16777215,emissive:n.emissive?n.emissive.clone():new it(16762218),emissiveIntensity:Math.max(1.2,n.emissiveIntensity||1),map:n.map||null,roughness:1,metalness:0,fog:!0,name:n.name,side:Ce}):n.isMeshStandardMaterial||n.isMeshPhysicalMaterial?(n.envMapIntensity=n.envMapIntensity??.5,n.metalness=Math.min(n.metalness??0,.08),n.side=Ce,n):new tn({color:n.color?n.color.clone():new it(16777215),map:n.map||null,roughness:.86,metalness:0,envMapIntensity:.5,transparent:n.transparent,opacity:n.opacity,side:Ce,fog:!0,name:n.name}));t.material=Array.isArray(t.material)?e:e[0]}),s}function qo(s,t=!1){const e=s.clone(!0);return t&&e.traverse(n=>{!n.isMesh||!n.material||(n.material=Array.isArray(n.material)?n.material.map(i=>i.clone()):n.material.clone())}),e}function hx(s){if(!s)return null;const t=[];let e=null;const n=s.clone(!0);if(n.updateMatrixWorld(!0),n.traverse(r=>{if(!r.isMesh||!r.geometry)return;const a=r.geometry.clone();a.applyMatrix4(r.matrixWorld);const o=Array.isArray(r.material)?r.material[0]:r.material;if(o!=null&&o.color){const l=a.attributes.position.count,c=new Float32Array(l*3),u=o.color.r,h=o.color.g,f=o.color.b;for(let d=0;d<l;d++)c[d*3]=u,c[d*3+1]=h,c[d*3+2]=f;a.setAttribute("color",new ye(c,3))}else a.attributes.color&&a.deleteAttribute("color");t.push(a),e||(e=o)}),!t.length)return null;const i=t.length===1?t[0]:Cr(t,!1)||t[0];if(!i)return null;if(i.attributes.normal){const r=i.attributes.normal;for(let a=0;a<r.count;a++)r.setXYZ(a,-r.getX(a),-r.getY(a),-r.getZ(a));r.needsUpdate=!0}return i.computeBoundingSphere(),{geometry:i,material:e.clone()}}function ux(s,t=12e3){return Promise.race([Fh().loadAsync(lx(s)),new Promise((e,n)=>setTimeout(()=>n(new Error("timeout")),t))])}function fx(s,t=2e4){return Promise.race([Fh().loadAsync(cx(s)),new Promise((e,n)=>setTimeout(()=>n(new Error("timeout")),t))])}async function dx(){const s=new Map;return await Promise.all(ox.map(async t=>{try{const e=await fx(t);Bh(e.scene),zh(e.scene),e.scene.updateMatrixWorld(!0),s.set(t,e)}catch(e){console.warn("[chars] skip",t,(e==null?void 0:e.message)||e)}})),s}async function px(){const s=new Map;return await Promise.all(ax.map(async t=>{try{const e=await ux(t);Bh(e.scene),zh(e.scene),e.scene.updateMatrixWorld(!0),s.set(t,e.scene),Uh.set(t,e.scene)}catch(e){console.warn("[kits] skip",t,(e==null?void 0:e.message)||e)}})),s}function mx(s,t){return(s==null?void 0:s.get(t))||Uh.get(t)||null}const Ic=new Dt,Lc=new L,Pc=new Qe,Dc=new L,Nc=new en,gx=new it;function kh(s){var i,r;const t=(s==null?void 0:s.map)||null;t&&(t.colorSpace=xe,t.generateMipmaps=!0,t.minFilter=We,t.magFilter=de,t.needsUpdate=!0);const e=s!=null&&s.color?s.color.clone():new it(13158078);return/^(lamp|glow|eye)$/i.test((s==null?void 0:s.name)||"")?new tn({color:16777215,emissive:((r=(i=s==null?void 0:s.emissive)==null?void 0:i.clone)==null?void 0:r.call(i))||new it(16762218),emissiveIntensity:Math.max(1.2,(s==null?void 0:s.emissiveIntensity)||0),emissiveMap:t,map:t,roughness:1,metalness:0,fog:!0,side:Ce,name:s==null?void 0:s.name}):new tn({color:t?new it(16777215):e,map:t,roughness:(s==null?void 0:s.roughness)??.86,roughnessMap:(s==null?void 0:s.roughnessMap)||null,metalness:0,envMapIntensity:.5,fog:!0,side:Ce,name:s==null?void 0:s.name})}function _x(s,t,e){if(!t||!e.length)return!1;const n=t.clone(!0);n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),n.updateMatrixWorld(!0);let i=0;return n.traverse(r=>{if(!r.isMesh||!r.geometry)return;const a=r.geometry.clone();a.applyMatrix4(r.matrixWorld),a.attributes.color&&a.deleteAttribute("color"),a.computeVertexNormals();const o=a.attributes.normal;if(o){for(let c=0;c<o.count;c++)o.setXYZ(c,-o.getX(c),-o.getY(c),-o.getZ(c));o.needsUpdate=!0}a.computeBoundingSphere();const l=Array.isArray(r.material)?r.material[0]:r.material;Hh(s,{geometry:a,material:l},e,kh(l)),i++}),i>0}function Hh(s,t,e,n){if(!(t!=null&&t.geometry)||!e.length)return null;const i=(n||t.material).clone(),r=new ko(t.geometry,i,e.length);r.instanceMatrix.setUsage(sh),r.frustumCulled=!1;let a=!1;for(const o of e)if(o.color!=null){a=!0;break}for(let o=0;o<e.length;o++){const l=e[o];Lc.set(l.x,l.y,l.z),Nc.set(0,l.yaw||0,0),Pc.setFromEuler(Nc),Dc.set(l.sx??1,l.sy??1,l.sz??1),Ic.compose(Lc,Pc,Dc),r.setMatrixAt(o,Ic),a&&r.setColorAt(o,gx.set(l.color??16777215))}return a&&(r.instanceColor.needsUpdate=!0),s.add(r),r}function Gh(s,t,e,n){if(!(t!=null&&t.length)||!e)return;const i=new Map;for(const r of t){let a=i.get(r.name);a||(a=[],i.set(r.name,a)),a.push(r)}for(const[r,a]of i){const o=mx(e,r);if(!o)continue;if(r==="entrance"||r==="shop_magma"||r==="shop_kik"||r==="apt_kit"){for(const c of a){const u=qo(o);u.position.set(c.x,c.y,c.z),u.rotation.y=c.yaw||0,u.scale.set(c.sx??1,c.sy??1,c.sz??1),u.traverse(h=>{if(!h.isMesh||!h.material)return;const f=Array.isArray(h.material)?h.material[0]:h.material;h.material=kh(f)}),s.add(u)}continue}if(_x(s,o,a))continue;const l=hx(o);l&&Hh(s,l,a,l.material)}}function Ta(s,t,e,n,i,r){const a=n-t,o=i-e,l=(t+n)/2,c=(e+i)/2;return r==="s"?{name:s,x:l,y:0,z:c,yaw:Math.PI,sx:a,sy:1,sz:o}:r==="n"?{name:s,x:l,y:0,z:c,yaw:0,sx:a,sy:1,sz:o}:r==="w"?{name:s,x:l,y:0,z:c,yaw:-Math.PI/2,sx:o,sy:1,sz:a}:{name:s,x:l,y:0,z:c,yaw:Math.PI/2,sx:o,sy:1,sz:a}}class xx{constructor(t,e,n,i,r=null){this.scene=t,this.materials=e,this.statics=n,this.kits=r,this.group=new re,t.add(this.group),this.chunks=new Map,this.entrances=[],this.carousels=[],this.swings=[],this.destroyed=new Set,this.pending=[],this.size=$.chunkSize,this.windows=[],this.shops=[],this.sessionSeed=Math.random()*1e9|0;const a=360,o=new ne(a,a);o.rotateX(-Math.PI/2);const l=o.attributes.uv;for(let g=0;g<l.count;g++)l.setXY(g,l.getX(g)*a/6,l.getY(g)*a/6);const c=o.attributes.position.count,u=new Float32Array(c*3).fill(1);o.setAttribute("color",new ye(u,3)),this.ground=new Tt(o,e[D.GROUND]),this.ground.position.y=-.01,this.group.add(this.ground);const h=1800,f=new Float32Array(h*3);this.snowBox=70;for(let g=0;g<h;g++)f[g*3]=(Math.random()-.5)*this.snowBox,f[g*3+1]=Math.random()*30,f[g*3+2]=(Math.random()-.5)*this.snowBox;const d=new Be;d.setAttribute("position",new ye(f,3)),this.snow=new Th(d,new Go({color:13685976,size:.05,sizeAttenuation:!0,transparent:!0,opacity:.7})),this.snow.frustumCulled=!1,this.group.add(this.snow),this.time=0}setVisible(t){this.group.visible=t}chunkType(t,e){if(t===0&&e===0)return"courtyard";if(Math.abs(t)<=1&&Math.abs(e)<=1)return t===0!=(e===0)?"street":"building";const n=ki(t,e,91)/4294967296;return n<.36?"building":n<.48?"courtyard":n<.7?"street":"tundra"}facingFor(t,e,n){return n.int(0,3)}toWorld(t,e,n,i,r){const a=this.size/2,o=n*Math.PI/2,l=Math.cos(o),c=Math.sin(o),u=i-a,h=r-a;return{x:t*this.size+a+u*l+h*c,z:e*this.size+a-u*c+h*l}}rotDir(t,e,n){const i=t*Math.PI/2,r=Math.cos(i),a=Math.sin(i);return{x:e*r+n*a,z:-e*a+n*r}}update(t,e,n){this.time+=e;const i=this.size,r=Math.floor(t.x/i),a=Math.floor(t.z/i),o=$.viewChunks;for(const[u,h]of this.chunks)(Math.abs(h.cx-r)>o+1||Math.abs(h.cz-a)>o+1)&&this.unload(u);for(let u=0;u<2;u++){let h=null,f=1/0;for(let d=-o;d<=o;d++)for(let g=-o;g<=o;g++){const _=r+d,m=a+g,p=_+","+m;if(this.chunks.has(p))continue;const M=d*d+g*g;M<f&&(f=M,h=[_,m])}if(!h)break;this.load(h[0],h[1])}this.ground.position.x=Math.round(t.x/6)*6,this.ground.position.z=Math.round(t.z/6)*6;const l=this.snow.geometry.attributes.position,c=this.snowBox;for(let u=0;u<l.count;u++){let h=l.getY(u)-e*(1.6+u%7*.2),f=l.getX(u)+e*1.1+Math.sin(this.time+u)*e*.4;h<0&&(h+=30),f>c/2&&(f-=c),l.setXYZ(u,f,h,l.getZ(u))}l.needsUpdate=!0,this.snow.position.set(t.x,0,t.z);for(const u of this.carousels)if(u.rotor.rotation.y+=e*.35,u.squeak-=e,u.squeak<=0){u.squeak=2+Math.random()*4;const h=Math.hypot(u.x-t.x,u.z-t.z);h<60&&n&&n.carouselSqueak(h)}for(const u of this.swings)u.phase+=e*.9,u.seat.rotation.z=Math.sin(u.phase)*.28}load(t,e){var M,S,y;const n=t+","+e,i=this.size,r=new yi(ki(t,e,17)),a=this.chunkType(t,e),o=new Ds,l={cx:t,cz:e,key:n,type:a,group:new re,entrances:[],windows:[],shops:[],carousel:null};let c=[],u=0,h=null;const f=[],d=!!((M=this.kits)!=null&&M.has("shop_magma")&&((S=this.kits)!=null&&S.has("shop_kik"))),g=!!((y=this.kits)!=null&&y.has("panel_wall")),_=R=>{this.registerShop(l,t,e,a==="building"?u:0,R),R!=null&&R.kit&&f.push(Ta(R.kit,R.x0,R.z0,R.x1,R.z1,R.front))};if(a==="building"){u=this.facingFor(t,e,r),h=f_(r,i);const R=this.destroyed.has(n),w=new yi(ki(t,e,771+(this.sessionSeed||0))),A=R?(p_(o,h,r),{windows:[]}):d_(o,h,r,w,g?f:null);if(c=m_(h,R),!R){h.entrances.forEach((x,C)=>{const O=this.toWorld(t,e,u,x.x,x.z),N=this.rotDir(u,x.nx,x.nz);l.entrances.push({x:O.x,z:O.z,nx:N.x,nz:N.z,floors:x.floors,key:n+":"+C,chunkKey:n,index:C,seed:ki(t,e,100+C),lamp:x.lamp})});const v=l.entrances[0];for(let x=0;x<(A.windows||[]).length;x++){const C=A.windows[x],O=this.toWorld(t,e,u,C.x,C.z),N=this.rotDir(u,C.nx,C.nz);l.windows.push({x:O.x,y:C.y,z:O.z,nx:N.x,nz:N.z,floor:C.floor,key:n+":w"+x,chunkKey:n,entrance:v,ambush:ki(t,e,400+x+(this.sessionSeed||0))%5===0})}}const b=xo(o,new yi(ki(t,e,5)),i,d);c=c.concat(b.boxes.filter(v=>!h.blocks.some(x=>v.x1>x.x0-3&&v.x0<x.x1+3&&v.z1>x.z0-3&&v.z0<x.z1+3)));for(const v of b.shops||[])_(v)}else if(a==="courtyard"){const R=M_(o,r,i,!1);if(c=R.boxes,t===0&&e===0){const b=Pr(o,5,8,20.5,18.2,"n",d),v=Dr(o,26.5,8.2,43,17.6,"n",d);c.push(...b.boxes,...v.boxes),this.registerShop(l,t,e,0,b),this.registerShop(l,t,e,0,v),b.kit&&f.push(Ta(b.kit,b.x0,b.z0,b.x1,b.z1,b.front)),v.kit&&f.push(Ta(v.kit,v.x0,v.z0,v.x1,v.z1,v.front)),f.push({name:"dumpster",x:21.2,y:0,z:19.4,yaw:.15},{name:"dumpster",x:22.6,y:0,z:19.6,yaw:-.08},{name:"bench",x:23.4,y:0,z:26.2,yaw:.2},{name:"bench",x:29.8,y:0,z:24,yaw:-.7},{name:"yard_lamp",x:17.8,y:0,z:27.2,yaw:0},{name:"yard_lamp",x:32.4,y:0,z:28,yaw:.2})}else if(r.chance(.55)){const b=r.chance(.5)?Pr:Dr,v=r.range(4,8),x=b(o,v,2,v+13,11,r.pick(["s","n"]),d);c.push(...x.boxes),_(x)}const w=this.toWorld(t,e,0,R.carousel.x,R.carousel.z),A=S_();if(A.position.set(w.x,0,w.z),l.carousel={rotor:A,x:w.x,z:w.z,squeak:Math.random()*3},this.carousels.push(l.carousel),this.scene.add(A),R.swing){const b=this.toWorld(t,e,0,R.swing.x,R.swing.z),v=E_();v.position.set(b.x,0,b.z),l.swing={seat:v,phase:Math.random()*6},this.scene.add(v),this.swings=this.swings||[],this.swings.push(l.swing)}}else if(a==="street"){const R=T_(o,r,i,d);c=R.boxes;for(const w of R.shops||[])_(w)}else{const R=xo(o,r,i,d);c=R.boxes;for(const w of R.shops||[])_(w)}o.add(De(0,i-5.5,i,i,.006,!0,4,3815996),D.DARK),o.add(De(i-5.5,0,i,i-5.5,.006,!0,4,3815996),D.DARK);const m=o.build(this.materials),p=i/2;if(m&&(m.position.set(-p,0,-p),l.group.add(m)),f.length&&this.kits){const R=new re;R.position.set(-p,0,-p),Gh(R,f,this.kits,this.materials),l.group.add(R)}l.group.rotation.y=u*Math.PI/2,l.group.position.set(t*i+p,0,e*i+p),this.group.add(l.group);for(const R of c){const w=this.toWorld(t,e,u,R.x0,R.z0),A=this.toWorld(t,e,u,R.x1,R.z1);this.statics.add(Math.min(w.x,A.x),R.y0,Math.min(w.z,A.z),Math.max(w.x,A.x),R.y1,Math.max(w.z,A.z),n)}this.entrances.push(...l.entrances),this.windows.push(...l.windows),this.shops.push(...l.shops),this.chunks.set(n,l)}registerShop(t,e,n,i,r){if(!(r!=null&&r.door)||!r.kind)return;const a=this.toWorld(e,n,i,r.door.x,r.door.z);t.shops.push({kind:r.kind,x:a.x,z:a.z,chunkKey:t.key})}unload(t){const e=this.chunks.get(t);e&&(this.group.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose()}),e.carousel&&(this.scene.remove(e.carousel.rotor),this.carousels=this.carousels.filter(n=>n!==e.carousel)),e.swing&&(this.scene.remove(e.swing.seat),this.swings=this.swings.filter(n=>n!==e.swing)),this.statics.removeTag(t),this.entrances=this.entrances.filter(n=>n.chunkKey!==t),this.windows=this.windows.filter(n=>n.chunkKey!==t),this.shops=this.shops.filter(n=>n.chunkKey!==t),this.chunks.delete(t))}destroyBuilding(t){if(this.destroyed.add(t),this.chunks.has(t)){const e=this.chunks.get(t);this.unload(t),this.load(e.cx,e.cz)}}nearestWindow(t,e,n,i=2.4){let r=null,a=i;for(const o of this.windows){const l=Math.hypot(o.x-t,o.z-n)+Math.abs(o.y-e)*.55;l<a&&(a=l,r=o)}return r}nearestKik(t,e,n=2.2){let i=null,r=n;for(const a of this.shops){if(a.kind!=="kik")continue;const o=Math.hypot(a.x-t,a.z-e);o<r&&(r=o,i=a)}return i}nearestEntrance(t,e,n=1.6){let i=null,r=n;for(const a of this.entrances){const o=Math.hypot(a.x+a.nx*.8-t,a.z+a.nz*.8-e);o<r&&(r=o,i=a)}return i}randomSpawnPoint(t,e,n,i,r=12){for(let a=0;a<r;a++){const o=Math.random()*Math.PI*2,l=n+Math.random()*(i-n),c=t+Math.cos(o)*l,u=e+Math.sin(o)*l;if(!this.statics.pointInside(c,.5,u)&&!this.statics.pointInside(c,1.5,u))return{x:c,z:u}}return null}}const oe=3;function vx(s,t,e,n,i,r,a,o,l=16777215,c=3){const u=r-e,h=a-n,f=o-i,d=(e+r)/2,g=(n+a)/2,_=(i+o)/2,m=[[u,h,0,d,g,o],[u,h,Math.PI,d,g,i],[f,h,Math.PI/2,r,g,_],[f,h,-Math.PI/2,e,g,_]];for(const[p,M,S,y,R,w]of m){if(p<.01||M<.01)continue;const A=new ne(p,M);En(A,p/c,M/c),A.rotateY(S),A.translate(y,R,w),s.add($t(A,l),t)}u>.01&&f>.01&&(s.add(De(e,i,r,o,a,!0,c,l),t),s.add(De(e,i,r,o,n,!1,c,l),t))}function yx(s,t,e){const n=new yi(s),i=Math.max(4,Math.min(16,t||5)),r=i*oe,a=new Ds,o=[],l=(m,p,M,S,y,R,w=D.WALLINT,A=16777215,b=!0,v=3)=>{vx(a,w,m,p,M,S,y,R,A,v),b&&o.push({x0:m,y0:p,z0:M,x1:S,y1:y,z1:R})},c=new it().setHSL(n.range(0,1),.08,n.range(.6,.85)),u=13,h={floors:i,boxes:o,elevators:[],corners:[],spawns:[],lamps:[],windows:[]};l(-3.2,-.2,-.2,3.2,0,5,D.FLOORINT,16777215),l(-3.2,0,-.2,-.7,oe,0,D.WALLINT,c),l(.7,0,-.2,3.2,oe,0,D.WALLINT,c),l(-.7,2.2,-.2,.7,oe,0,D.WALLINT,c);const f=new ne(1.4,2.2);f.translate(0,1.1,-.1),a.add($t(f,526602),D.DARK),o.push({x0:-.7,y0:0,z0:-.2,x1:.7,y1:2.2,z1:-.05}),h.exit={x:0,z:.9,y:0},h.playerStart={x:0,z:2.6,y:0,yaw:0},l(-3.4,0,-.2,-3.2,oe,5,D.WALLINT,c),l(3.2,0,-.2,3.4,oe,5,D.WALLINT,c),l(-3.2,.8,1,-2.9,1.7,3,D.DARK,3820122),l(-.3,oe-.12,2.3,.3,oe-.02,2.7,D.LAMP,new it(.8,.75,.55),!1),h.lamps.push({x:0,y:oe-.3,z:2.5,flicker:n.chance(.5)}),l(1.2,-.2,2.5,3.2,r+.2,4.8,D.WALLINT,c);const d=new ne(1.2,2.1);d.rotateY(-Math.PI/2),d.translate(1.19,1.05,3.6),a.add($t(d,16777215),D.ELEVATOR),h.elevators.push({x:.6,z:3.6,y:0,floor:0}),l(1.17,1.2,4.3,1.2,1.3,4.4,D.LAMP,new it(.8,.3,.2),!1),h.corners.push({x:-2.7,y:0,z:.4},{x:2.7,y:0,z:.4},{x:-2.7,y:0,z:2.2});for(let m=0;m<i;m++){const p=m*oe;if(l(-u-.2,p-.2,4.8,u+.2,p,8.2,D.FLOORINT),m===0)l(-u-.2,p,4.8,-3.2,p+oe,5,D.WALLINT,c),l(3.2,p,4.8,u+.2,p+oe,5,D.WALLINT,c);else{l(-u-.2,p,4.8,u+.2,p+oe,5,D.WALLINT,c);const M=new ne(1.2,2.1);M.translate(2.1,p+1.05,5.01),a.add($t(M,16777215),D.ELEVATOR),l(1.4,p+1.2,5,1.5,p+1.3,5.03,D.LAMP,new it(.8,.3,.2),!1),h.elevators.push({x:2.1,z:5.7,y:p,floor:m})}l(-u-.2,p,8,-1.8,p+oe,8.2,D.WALLINT,c),l(1.8,p,8,u+.2,p+oe,8.2,D.WALLINT,c),l(-u-.4,p,4.8,-u-.2,p+oe,8.2,D.WALLINT,c),l(u+.2,p,4.8,u+.4,p+oe,8.2,D.WALLINT,c);for(const M of[-1,1]){const S=new ne(1.6,1.4);S.rotateY(M<0?Math.PI/2:-Math.PI/2),S.translate(M*(u+.19),p+1.7,6.5),a.add($t(S,new it(.3,.33,.38)),D.LAMP),h.windows.push({x:M*u,y:p+1.7,z:6.5}),l(M*(u+.1)-.1,p+.3,6,M*(u+.1)+.1,p+.9,7,D.DARK,8026736,!1)}for(let M=0;M<3;M++)for(const S of[-1,1]){const y=S*(4.6+M*3.1);for(const[R,w]of[[5.01,0],[7.99,Math.PI]]){const A=n.chance(.12),b=new ne(.95,2.1);b.rotateY(w),b.translate(y,p+1.05,R),a.add($t(b,A?328965:new it().setHSL(.07,.3,n.range(.25,.5))),A?D.DARK:D.DOOR)}M===1&&h.spawns.push({x:y,y:p,z:6.5,floor:m})}m>0&&h.spawns.push({x:0,y:p,z:6.5,floor:m});for(const M of[-9,0,9]){const S=n.chance(.65);l(M-.3,p+oe-.12,6.3,M+.3,p+oe-.02,6.7,D.LAMP,S?new it(.8,.75,.55):2105376,!1),S&&h.lamps.push({x:M,y:p+oe-.3,z:6.5,flicker:n.chance(.4)})}if(h.corners.push({x:-u+.4,y:p,z:5.4},{x:u-.4,y:p,z:5.4},{x:-u+.4,y:p,z:7.6},{x:u-.4,y:p,z:7.6}),m<i-1){l(-2,p,8,-1.8,p+oe,12.7,D.WALLINT,c),l(1.8,p,8,2,p+oe,12.7,D.WALLINT,c),l(-2,p,12.5,2,p+oe,12.7,D.WALLINT,c);const M=new ne(1.6,1.2);M.rotateY(Math.PI),M.translate(0,p+2.2,12.49),a.add($t(M,new it(.3,.33,.38)),D.LAMP),l(-.2,p-.2,8,.2,p+oe,11,D.WALLINT,c);for(let S=0;S<10;S++){const y=p+S*.15,R=8+S*.3;l(.2,p-.2,R,1.8,y+.15,R+.3,D.FLOORINT,16777215,!0,1.5)}l(-1.8,p+1.3,11,1.8,p+1.5,12.5,D.FLOORINT,16777215,!0,1.5);for(let S=0;S<10;S++){const y=p+1.5+S*.15,R=11-S*.3;l(-1.8,p-.2,R-.3,-.2,y+.15,R,D.FLOORINT,16777215,!0,1.5)}l(-1.8,p+1.5,11,-1.7,p+2.4,12.5,D.DARK,3815994,!1),h.corners.push({x:-1.4,y:p+1.5,z:12.1},{x:1.4,y:p+1.5,z:12.1})}else l(-2,p,8,2,p+oe,8.4,D.WALLINT,c)}l(-u-.4,r,-.2,u+.4,r+.2,12.7,D.CEILINT),l(-3.4,oe,-.2,3.4,oe+.2,4.8,D.CEILINT),o.push({x0:-2.2,y0:0,z0:8,x1:-2,y1:r,z1:12.7},{x0:2,y0:0,z0:8,x1:2.2,y1:r,z1:12.7},{x0:-2.2,y0:0,z0:12.7,x1:2.2,y1:r,z1:12.9});const g=a.build(e),_=new re;return g&&_.add(g),h.group=_,h}function Mx(s,t,e,n,i,r,a,o,l,c,u=!0){s.add(wt(e,n,i,r,a,o,c),l),u&&t.push({x0:e,y0:n,z0:i,x1:r,y1:a,z1:o})}function Sx(s,t,e=null){const n=new yi(s),i=new Ds,r=[],a=9.2,o=7.4,l=2.75,c=new it().setHSL(n.range(.06,.12),.18,n.range(.68,.8)),u=(m,p,M,S,y,R,w=D.WALLINT,A=c,b=!0)=>Mx(i,r,m,p,M,S,y,R,w,A,b),h=(m,p,M,S,y,R)=>r.push({x0:m,y0:p,z0:M,x1:S,y1:y,z1:R}),f=!!(e!=null&&e.has("apt_kit"));u(-.2,-.15,-.2,a+.2,0,o+.2,D.FLOORINT,13218956),u(-.2,l,-.2,a+.2,l+.12,o+.2,D.CEILINT,14538440),u(-.2,0,-.2,0,l,o+.2),u(a,0,-.2,a+.2,l,o+.2),u(-.2,0,o,a+.2,l,o+.2),u(-.2,0,-.2,3.4,l,0),u(5.4,0,-.2,a+.2,l,0),u(3.4,2.15,-.2,5.4,l,0),u(3.4,0,-.16,5.4,2.15,-.08,D.DARK,3814440,!0);const d=new ne(1.9,1.5);d.translate(4.4,1.35,-.18),i.add($t(d,new it(.55,.48,.22)),D.LAMP),f?(u(.15,.9,o-.08,2.4,2.35,o-.02,D.MOSAIC,n.pick([8006186,3824202,4864618]),!1),h(.2,0,3.6,3.1,1.15,4.8),h(6.4,0,.3,7.3,1.7,1.1),h(7.5,0,.3,8.9,.85,1.5),h(6.3,.85,1.7,8.9,.95,3.4)):(u(.15,.9,o-.08,2.4,2.35,o-.02,D.MOSAIC,n.pick([8006186,3824202,4864618]),!1),u(.2,0,3.6,3.1,.42,4.8,D.DARK,4864552),u(.25,.42,3.7,3.05,.92,4.55,D.DARK,3820138),u(.2,.42,4.55,3.1,1.15,4.75,D.DARK,3820138),u(6.4,0,.3,7.3,1.7,1.1,D.DARK,13158596),u(7.5,0,.3,8.9,.85,1.5,D.DARK,3815994),u(6.3,.85,1.7,8.9,.95,3.4,D.DARK,9071178),u(6.4,0,1.8,6.55,.85,2.1,D.DARK,5913122),u(8.6,0,2.9,8.75,.85,3.2,D.DARK,5913122),u(a-.12,.4,4.4,a-.02,1.5,6.2,D.DARK,2763306,!1),u(a-.05,0,2.4,a+.02,2.1,3.5,D.DOOR,5913128,!1),u(4.1,l-.1,3.4,4.7,l-.02,4,D.LAMP,new it(.85,.72,.45),!1));const g=i.build(t),_=new re;return g&&_.add(g),f&&Gh(_,[{name:"apt_kit",x:0,y:0,z:0,yaw:0}],e),{group:_,boxes:r,windowExit:{x:4.4,y:0,z:.7},door:{x:a-.8,y:0,z:2.95},lamps:[{x:4.4,y:l-.3,z:3.7,flicker:n.chance(.25)},{x:1.8,y:1.8,z:4.2,flicker:!1},{x:7.4,y:1.7,z:2.2,flicker:!1}],spawns:[{x:1.6,y:0,z:5.4},{x:7.2,y:0,z:5.8},{x:4.8,y:0,z:2.2}],stalkerSpot:{x:2.2,y:0,z:5.8},playerStart:{x:4.4,y:0,z:3.2,yaw:.4}}}const mi=20,Te=1.4,yn=2.8;class Ex{constructor(t,e,n){this.scene=t,this.materials=e,this.statics=n,this.group=new re,t.add(this.group),this.group.visible=!1,this.segments=new Map,this.level=0,this.nextLevelChangeAt=1/0,this.hole=null,this.lamps=[]}start(){this.group.visible=!0,this.clearAll(),this.level=0,this.hole=null,this.plannedHoles=[],this.nextDropTimer=dt.range(7,13);for(let t=-2;t<5;t++)this.buildSegment(t)}clearAll(){for(const[t,e]of this.segments)this.removeSegment(t);this.segments.clear(),this.lamps.length=0}removeSegment(t){const e=this.segments.get(t);e&&(this.group.remove(e.mesh),e.mesh.geometry.dispose(),this.statics.removeTag("cseg"+t),this.lamps=this.lamps.filter(n=>n.seg!==t),this.segments.delete(t))}levelOf(t){let e=0;for(const n of this.plannedHoles)t>n.seg&&(e-=3.2);return e}buildSegment(t){if(this.segments.has(t))return;const e=new Ds,n=t*mi,i=n+mi,r=this.levelOf(t),a=this.plannedHoles.find(f=>f.seg===t),o="cseg"+t,l=new it().setHSL(.1,.05,.55),c=(f,d,g,_,m,p,M,S=16777215,y=!0)=>{const R=_-f,w=m-d,A=p-g,b=[[R,w,0,(f+_)/2,(d+m)/2,p],[R,w,Math.PI,(f+_)/2,(d+m)/2,g],[A,w,Math.PI/2,_,(d+m)/2,(g+p)/2],[A,w,-Math.PI/2,f,(d+m)/2,(g+p)/2]];for(const[v,x,C,O,N,B]of b){if(v<.01||x<.01)continue;const W=new ne(v,x);En(W,v/3,x/3),W.rotateY(C),W.translate(O,N,B),e.add($t(W,S),M)}R>.01&&A>.01&&(e.add(De(f,g,_,p,m,!0,3,S),M),e.add(De(f,g,_,p,d,!1,3,S),M)),y&&this.statics.add(f,d,g,_,m,p,o)},u=r-3.6;c(-Te-.2,u,n,-Te,r+yn,i,D.WALLINT,l),c(Te,u,n,Te+.2,r+yn,i,D.WALLINT,l),a?(c(-Te,r-.2,n,Te,r,a.z0,D.FLOORINT),c(-Te,r-3.4,a.z0-2,Te,r-3.2,i,D.FLOORINT),c(-Te,r+yn,n,Te,r+yn+.2,a.z1,D.CEILINT,16777215,!1),c(-Te,r-3.2+yn,a.z1,Te,r-3.2+yn+.2,i,D.CEILINT,16777215,!0),c(-Te,r-.2,a.z1,Te,r+yn,a.z1+.2,D.WALLINT,l)):(c(-Te,r-.2,n,Te,r,i,D.FLOORINT),c(-Te,r+yn,n,Te,r+yn+.2,i,D.CEILINT,16777215,!1));for(let f=n+2;f<i-1;f+=3.3)for(const d of[-1,1])if(dt.chance(.7)){const g=dt.chance(.15),_=new ne(.95,2.1);_.rotateY(d<0?Math.PI/2:-Math.PI/2),_.translate(d*(Te-.01),(a&&f>a.z0?r-3.2:r)+1.05,f),e.add($t(_,g?328965:new it().setHSL(.07,.3,dt.range(.2,.45))),g?D.DARK:D.DOOR)}for(let f=n+3;f<i;f+=6.5){const d=(a&&f>a.z1?r-3.2:r)+yn,g=dt.chance(.6);c(-.3,d-.1,f-.2,.3,d-.02,f+.2,D.LAMP,g?new it(.75,.7,.5):2105376,!1),g&&this.lamps.push({x:0,y:d-.3,z:f,seg:t,flicker:dt.chance(.5)});const _=new Pe(.03,.03,2.5);_.translate(dt.range(-.8,.8),d-.4-dt.range(0,.4),f+1.5),e.add($t(_,1118481),D.DARK)}const h=e.build(this.materials);this.group.add(h),this.segments.set(t,{mesh:h,lvl:r,hole:a})}planDrop(t){const e=t+dt.range(6,10),n=Math.floor(e/mi);if(this.plannedHoles.some(o=>o.seg===n||o.seg===n-1))return;const i=Math.min(e,(n+1)*mi-4.5),r=i+3.4;this.plannedHoles.push({seg:n,z0:i,z1:r});for(const o of[...this.segments.keys()])o>=n&&this.removeSegment(o);const a=Math.floor(t/mi);for(let o=a-3;o<=a+4;o++)this.buildSegment(o)}update(t,e){const n=Math.floor(t.z/mi);for(let i=n-3;i<=n+4;i++)this.segments.has(i)||this.buildSegment(i);for(const i of[...this.segments.keys()])(i<n-4||i>n+6)&&this.removeSegment(i);return this.nextDropTimer-=e,this.nextDropTimer<=0?(this.nextDropTimer=dt.range(8,15),this.planDrop(t.z),!0):!1}floorLevelAt(t){return this.levelOf(Math.floor(t/mi))}stop(){this.group.visible=!1,this.clearAll()}}class Tx{constructor(t,e,n){this.scene=t,this.materials=e,this.statics=n,this.group=new re,this.group.visible=!1,t.add(this.group),this.built=!1,this.size=$.arenaSize}build(){if(this.built){this.group.visible=!0,this.beacon||this.buildBeacon(),this.addStatics();return}const t=this.size,e=7,n=new Ds;n.add(De(-t/2,-t/2,t/2,t/2,0,!0,4,16777215),D.ARENA),n.add(De(-t/2,-t/2,t/2,t/2,e,!1,4,5592405),D.CEILINT);const i=new it(.78,.68,.64);for(const[o,l,c,u]of[[0,-t/2,t,0],[0,t/2,t,Math.PI],[t/2,0,t,-Math.PI/2],[-t/2,0,t,Math.PI/2]]){const h=new ne(c,e);En(h,c/3,e/3),h.rotateY(u),h.translate(o,e/2,l),n.add($t(h,i),D.WALLINT)}this.columns=[];for(let o=-t/2+15;o<t/2;o+=20)for(let l=-t/2+15;l<t/2;l+=20){if(Math.abs(o)<6&&Math.abs(l)<6)continue;const c=new ge(1.05,1.15,e,10);c.translate(o,e/2,l),n.add($t(c,9075322),D.CONCRETE),this.columns.push({x0:o-1.1,y0:0,z0:l-1.1,x1:o+1.1,y1:e,z1:l+1.1})}for(let o=-t/2+10;o<t/2;o+=20)for(let l=-t/2+10;l<t/2;l+=20){const c=new Le(.35,8,6);c.translate(o,e-.2,l),n.add($t(c,new it(1,.88,.7)),D.LAMP)}for(let o=0;o<25;o++){const l=dt.range(-t/2+4,t/2-4),c=dt.range(-t/2+4,t/2-4);Math.hypot(l,c)<10||n.add(wt(l,0,c,l+dt.range(1,3),dt.range(.4,1.3),c+dt.range(1,3),3813424),D.DARK)}n.add(wt(-1.5,0,4,1.5,3.2,6.5,9079434),D.CONCRETE);const r=new ne(1.3,2.2);r.rotateY(Math.PI),r.translate(0,1.1,3.99),n.add($t(r,16777215),D.ELEVATOR),this.columns.push({x0:-1.5,y0:0,z0:4,x1:1.5,y1:3.2,z1:6.5}),this.elevator={x:0,z:3.2,y:0};const a=n.build(this.materials);this.group.add(a),this.buildBeacon(),this.built=!0,this.group.visible=!0,this.addStatics()}buildBeacon(){this.beacon=new re,this.beacon.visible=!1;const t=new Oe({color:16769136,transparent:!0,opacity:.38,side:Ce,depthWrite:!1,fog:!1}),e=new Tt(new ge(.28,.95,6.8,14,1,!0),t);e.position.set(0,3.4,3.2);const n=new Tt(new Le(.55,10,8),new Oe({color:16774080,fog:!1}));n.position.set(0,6.6,3.2);const i=new Tt(new ne(1.7,2.7),new Oe({color:16773800,transparent:!0,opacity:.9,fog:!1}));i.position.set(0,1.35,3.91),i.rotation.y=Math.PI;const r=new Tt(new Vo(1.1,2.4,28),new Oe({color:16765024,side:Ce,transparent:!0,opacity:.75,fog:!1}));r.rotation.x=-Math.PI/2,r.position.set(0,.04,3.2),this.beacon.add(e,n,i,r),this.beacon.userData.beamMat=t,this.group.add(this.beacon),this.beaconLight=new Rr(16771232,0,36,1.05),this.beaconLight.position.set(0,3.4,3.2),this.group.add(this.beaconLight),this.beaconTime=0}setBeacon(t){this.beacon&&(this.beacon.visible=!!t),this.beaconLight&&(this.beaconLight.intensity=t?42:0)}update(t){var n;if(!((n=this.beacon)!=null&&n.visible))return;this.beaconTime+=t;const e=.28+Math.sin(this.beaconTime*4.2)*.16;this.beacon.userData.beamMat&&(this.beacon.userData.beamMat.opacity=e),this.beaconLight&&(this.beaconLight.intensity=36+Math.sin(this.beaconTime*5)*14)}addStatics(){const t=this.size,e=7;this.statics.add(-t/2,-.4,-t/2,t/2,0,t/2,"arena");for(const n of this.columns)this.statics.add(n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,"arena");this.statics.add(-t/2-1,0,-t/2-1,t/2+1,e,-t/2,"arena"),this.statics.add(-t/2-1,0,t/2,t/2+1,e,t/2+1,"arena"),this.statics.add(-t/2-1,0,-t/2,-t/2,e,t/2,"arena"),this.statics.add(t/2,0,-t/2,t/2+1,e,t/2,"arena")}randomEdgePoint(){const t=this.size/2-3,e=dt.int(0,3),n=dt.range(-t,t);switch(e){case 0:return{x:n,z:-t};case 1:return{x:n,z:t};case 2:return{x:-t,z:n};default:return{x:t,z:n}}}hide(){this.setBeacon(!1),this.group.visible=!1,this.statics.removeTag("arena")}}function wx(s){const t=new Map,e=new Map,n=s.clone();return Vh(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=t.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Vh(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Vh(s.children[n],t.children[n],e)}function jo(s,t,e,n,i,r=0,a=0,o=0,l=0){l&&s.translate(0,-l,0),(r||a||o)&&s.applyMatrix4(new Dt().makeRotationFromEuler(new en(r,a,o))),s.translate(e,n,i);const c=new it(t),u=s.attributes.position.count,h=new Float32Array(u*3);for(let f=0;f<u;f++)h[f*3]=c.r,h[f*3+1]=c.g,h[f*3+2]=c.b;return s.setAttribute("color",new ye(h,3)),s}function Ax(s,t,e,n,i,r,a,o=0,l=0,c=0,u=0){return jo(new Pe(s,t,e),n,i,r,a,o,l,c,u)}function Hi(s,t,e,n,i,r,a,o=0,l=0,c=0,u=0){return jo(new ge(s,t,e,12),n,i,r,a,o,l,c,u)}function dr(s,t,e,n,i,r=0,a=0,o=0){return jo(new Le(s,12,8),t,e,n,i,r,a,o,0)}function bx(s,t,e){const n=[],a=s.hunch||0,o=.85*(s.legL||1),l=.85*(s.legR||1),c=Math.max(o,l),u=t.swing||0;n.push(Hi(.11,.09,o,e.pants,-.15,c,0,u,0,0,o/2)),n.push(Hi(.11,.09,l,e.pants,.15,c,0,-u,0,0,l/2));const h=.5*(s.torsoW||1);n.push(Ax(h,.62,.28,e.shirt,0,c+.62/2,-a*.3,a,0,0));const f=.75*(s.armL||1),d=.75*(s.armR||1),g=c+.62-.05;n.push(Hi(.07,.06,f,e.skin,-h/2-.08,g,-a*.3,-u*.8+(t.armsUp||0),0,.08,f/2)),n.push(Hi(.07,.06,d,e.skin,h/2+.08,g,-a*.3,u*.8+(t.armsUp||0),0,-.08,d/2)),s.extraArm&&n.push(Hi(.055,.045,d*.8,e.skin,.05,g-.1,.18,.9+u,0,.3,d*.4));const _=s.headScale||1,m=s.neck||0,p=g+.1+m+.17*_;n.push(dr(.17*_,e.skin,s.headOff||0,p,-a*.5+(s.headZ||0),a*.5,0,s.headTilt||0)),m>0&&n.push(Hi(.055,.05,m+.1,e.skin,0,g+.1+m/2,-a*.4)),n.push(dr(.035*_,e.eye,(s.headOff||0)-.07*_,p+.03,.15*_+(s.headZ||0)-a*.5)),n.push(dr(.035*_,e.eye,(s.headOff||0)+.07*_*(s.eyeAsym||1),p+.03+(s.eyeDrop||0),.15*_+(s.headZ||0)-a*.5)),e.hair&&n.push(dr(.18*_,e.hair,s.headOff||0,p+.12*_,(s.headZ||0)-a*.5));const M=Cr(n,!1);return M.computeBoundingSphere(),M}const Uc=(()=>{const s=new yi(4242),t=["#8a7a6a","#9a8a7a","#7a6a60","#a08a78","#6f6a66","#8e8276"],e=["#3a3a44","#4a3a3a","#2e3a3a","#55504a","#3a2e3a","#44443a","#6a2a2a"],n=["#2a2a30","#3a3030","#26262a","#403a30"];return[{headScale:1.45,neck:.05,armL:1,armR:1,hunch:.1},{headScale:.8,armL:1.6,armR:1.55,hunch:.35,legL:.9,legR:.9},{headScale:1,armL:1,armR:.5,legL:1,legR:.7,headTilt:.4},{headScale:1.1,neck:.35,torsoW:.75,armL:1.1,armR:1.1},{headScale:1,extraArm:!0,torsoW:1.2,hunch:.15,eyeAsym:1.6,eyeDrop:-.06},{headScale:1.2,headOff:.12,headZ:.05,armL:1.25,armR:.9,legL:1.15,legR:1.15,hunch:.25}].map((r,a)=>({p:r,colors:{skin:t[a%t.length],shirt:e[s.int(0,e.length-1)],pants:n[s.int(0,n.length-1)],eye:"#0a0a0a",hair:s.chance(.5)?"#1a1a1a":null}}))})();class Rx{constructor(t,e=1100,n=null){this.capacity=e,this.meshes=[];const i=new Ge({vertexColors:!0,side:Ce}),r=[{swing:.5},{swing:-.5},{swing:0}];for(let a=0;a<Uc.length;a++){const o=Uc[a],l=[];for(let c=0;c<r.length;c++){const u=bx(o.p,r[c],o.colors),h=new ko(u,i,e);h.instanceMatrix.setUsage(sh),h.count=0,h.frustumCulled=!1,t.add(h),l.push(h)}this.meshes.push(l)}this._m=new Dt,this._q=new Qe,this._s=new L,this._p=new L,this._counts=[]}update(t,e){for(const n of this.meshes)for(const i of n)i.count=0;for(const n of t){if(n.dead)continue;const i=this.meshes[n.variant%this.meshes.length],r=n.moving?Math.floor(n.anim*2)%2:2,a=i[r];if(a.count>=this.capacity)continue;const o=n.moving?Math.abs(Math.sin(n.anim*Math.PI*2))*.05:0;this._p.set(n.pos.x,n.pos.y+o,n.pos.z),this._q.setFromAxisAngle(pe.DEFAULT_UP,n.yaw);const l=n.scale||1;this._s.set(l,l,l),this._m.compose(this._p,this._q,this._s),a.setMatrixAt(a.count++,this._m)}for(const n of this.meshes)for(const i of n)i.instanceMatrix.needsUpdate=!0}dispose(t){for(const e of this.meshes)for(const n of e)t.remove(n)}}function Cx(){const s=new re,t=new Oe({color:5921890,transparent:!0,opacity:.55,depthWrite:!1,fog:!0}),e=new Tt(new ge(.18,.55,2.4,8),t);e.position.y=1.5,s.add(e);const n=new Tt(new Le(.32,8,6),t);n.position.y=2.95,s.add(n);const i=new Oe({color:0});for(const o of[-1,1]){const l=new Tt(new Le(.07,6,5),i);l.position.set(o*.1,3,.26),s.add(l)}const r=new Tt(new Le(.1,6,5),i);r.position.set(0,2.78,.24),r.scale.set(1.4,.7,.6),s.add(r);for(let o=0;o<6;o++){const l=new Tt(new ge(.04,.12,.9+Math.random()*.7,5),t);l.position.set((Math.random()-.5)*.8,.35,(Math.random()-.5)*.35),l.userData.phase=Math.random()*6,s.add(l)}const a=new Tt(new ge(.07,.07,2.4,6),t);return a.rotation.z=Math.PI/2,a.position.y=2.4,s.add(a),s.userData.mat=t,s}function Ix(s){const t=[];let e=null;s.traverse(n=>{var i;n.name==="body"&&(e=n),(n.name==="eyeL"||n.name==="eyeR"||((i=n.material)==null?void 0:i.name)==="eye")&&t.push(n)}),e||(e=s.children[0]);for(const n of t)n.material&&(n.material=n.material.clone());return s.userData={eyes:t,body:e},t.length>0}function Lx(s){const t=s==null?void 0:s.get("stalker");if(t){const u=qo(t,!0);if(Ix(u))return u}const e=new re,n=new re;n.name="body";const i=new Ge({color:723725}),r=new Tt(new ge(.22,.28,1.8,8),i);r.position.y=.9,n.add(r);const a=new Tt(new ge(.28,.38,1.15,8),i);a.position.y=2.35,n.add(a);const o=new Tt(new Le(.28,8,6),i);o.position.y=3.2,n.add(o);const l=new Oe({color:9109504}),c=[];for(const u of[-1,1]){const h=new Tt(new ge(.06,.05,2.35,6),i);h.position.set(u*.46,1.7,.04),n.add(h);const f=new Tt(new Le(.09,8,6),l);f.position.set(u*.1,3.26,.26),n.add(f),c.push(f)}return n.scale.setScalar(5),e.add(n),e.userData={eyes:c,body:n},e}function Px(s){const t={};s.traverse(n=>{n.name&&(t[n.name]=n)}),s.userData={legL:t.legL,legR:t.legR,armL:t.armL,armR:t.armR,torso:t.torso,head:t.head,cap:t.cap,visor:t.visor,chain:t.chain,pistol:t.pistol,minigun:t.minigun,gun:t.gun};const e=s.userData;return e.minigun&&(e.minigun.visible=!1),e.pistol&&(e.pistol.visible=!0),e.legL&&e.legR&&e.armL&&e.armR&&e.torso&&e.head&&e.gun&&e.pistol&&e.minigun}function Dx(s){const t=s==null?void 0:s.get("player");if(t){const A=qo(t,!0);if(Px(A))return A}const e=new re,n=new Ge({color:8015412}),i=new Ge({color:15921384}),r=new Ge({color:2899292}),a=new Ge({color:15263968}),o=new Ge({color:789516}),l=new Ge({color:13214247}),c=new Ge({color:2236966}),u=(A,b,v,x)=>(A.position.set(b,v,x),A),h=new re;h.name="legL",h.position.set(-.14,.9,0),h.add(u(new Tt(new ge(.1,.09,.85,8),r),0,-.42,0)),h.add(u(new Tt(new Le(.12,8,6),a),0,-.86,.06));const f=new re;f.name="legR",f.position.set(.14,.9,0),f.add(u(new Tt(new ge(.1,.09,.85,8),r),0,-.42,0)),f.add(u(new Tt(new Le(.12,8,6),a),0,-.86,.06));const d=u(new Tt(new ge(.22,.26,.62,10),i),0,1.22,0);d.name="torso";const g=u(new Tt(new Br(.16,.018,6,12),l),0,1.42,.08);g.name="chain",g.rotation.x=.9;const _=new re;_.name="armL",_.position.set(-.32,1.48,0),_.add(u(new Tt(new ge(.07,.06,.7,8),n),0,-.32,0));const m=new re;m.name="armR",m.position.set(.32,1.48,0),m.add(u(new Tt(new ge(.07,.06,.7,8),n),0,-.32,0));const p=u(new Tt(new Le(.2,10,8),n),0,1.74,0);p.name="head";const M=u(new Tt(new Le(.21,10,8,0,Math.PI*2,0,Math.PI*.55),o),0,1.8,0);M.name="cap";const S=u(new Tt(new Pe(.34,.03,.12),o),0,1.88,.14);S.name="visor",e.add(h,f,d,g,_,m,p,M,S);const y=new re;y.name="gun",y.position.set(0,-.58,.12);const R=u(new Tt(new Pe(.07,.12,.26),c),0,0,.1);R.name="pistol";const w=new re;w.name="minigun",w.add(u(new Tt(new ge(.14,.16,.36,8),new Ge({color:3355448})),-.18,.04,.08)),w.children[0].rotation.x=Math.PI/2;for(let A=0;A<6;A++){const b=A/6*Math.PI*2,v=u(new Tt(new ge(.025,.025,.85,6),new Ge({color:5592412})),-.18+Math.cos(b)*.09,.04+Math.sin(b)*.09,.58);v.rotation.x=Math.PI/2,w.add(v)}return w.visible=!1,y.add(R,w),m.add(y),e.userData={legL:h,legR:f,armL:_,armR:m,torso:d,head:p,cap:M,visor:S,chain:g,pistol:R,minigun:w,gun:y},e}function Nx(s){const t=(s||"").toLowerCase();return t.includes("idle")||t.includes("stand")||t.includes("tpose")?t.includes("tpose")?null:"idle":t.includes("run")?"run":t.includes("walk")?"walk":null}function Ux(s){s.updateWorldMatrix(!0,!0);const t=new L;let e=0;return s.traverse(n=>{n.isBone&&(n.getWorldPosition(t),t.y<e&&(e=t.y))}),-e}function wa(s,t){let e=null;return s.traverse(n=>{!e&&n.isBone&&t.test(n.name)&&(e=n)}),e}function Fx(){const s=new re;s.name="gun";const t=new tn({color:2236966,roughness:.45,metalness:.35,envMapIntensity:.2}),e=new Tt(new Pe(.07,.12,.26),t);e.name="pistol",e.position.set(.02,-.04,.12);const n=new re;n.name="minigun",n.add(new Tt(new ge(.14,.16,.36,8),new tn({color:3355448,roughness:.5,metalness:.4}))),n.children[0].rotation.x=Math.PI/2,n.children[0].position.set(-.18,.04,.08);for(let i=0;i<6;i++){const r=i/6*Math.PI*2,a=new Tt(new ge(.025,.025,.85,6),new tn({color:5592412,roughness:.4,metalness:.5}));a.rotation.x=Math.PI/2,a.position.set(-.18+Math.cos(r)*.09,.04+Math.sin(r)*.09,.58),n.add(a)}return n.visible=!1,s.add(e,n),{gun:s,pistol:e,minigun:n}}const Aa=[{color:4016690,hideGear:!0,scale:.94},{color:6961188,hideGear:!0,scale:1.08},{color:2765636,hideGear:!0,scale:.86},{color:13154468,hideGear:!1,scale:1},{color:4871520,hideGear:!1,scale:1.12}],Ox=/visor|goggle/i,zx=/joint|skeleton/i,Bx=/beta_|xbot/i;function kx(s){let t=!1;return s.traverse(e=>{Bx.test(e.name)&&(t=!0)}),t?0:Math.PI}class $o{constructor(t,e={}){this.root=wx(t.scene),this.baseScale=e.scale??1,this.yawOffset=e.yawOffset??kx(this.root),this.root.scale.setScalar(this.baseScale),this.lift=Ux(this.root),this.mixer=new r_(this.root),this.actions={};const n=t.animations||[];for(const h of n){const f=Nx(h.name);if(!f||this.actions[f])continue;const d=this.mixer.clipAction(h);d.enabled=!0,d.setLoop(eh,1/0),this.actions[f]=d}this.current=null,this.play("idle",0),this.hand=wa(this.root,/RightHand$/i)||wa(this.root,/mixamorigRightHand/i),this.head=wa(this.root,/Head$/i);const i=e.tint,r=e.dress,a=!!e.horror,o=[];if(this.root.traverse(h=>{var d,g,_;if(!h.isMesh||!h.material)return;if(h.frustumCulled=!1,r!=null&&r.hideGear&&Ox.test(h.name)){h.visible=!1;return}h.material=Array.isArray(h.material)?h.material.map(m=>m.clone()):h.material.clone();const f=Array.isArray(h.material)?h.material:[h.material];for(const m of f){if(a)(d=m.color)==null||d.set(723725),m.map=null,m.roughness=.92,m.metalness=0,m.envMapIntensity=.12,(g=m.emissive)==null||g.set(0);else if(r){m.map=null,m.normalMap=null,m.roughnessMap=null,m.metalnessMap=null;const p=zx.test(h.name);(_=m.color)==null||_.set(p?r.joint??1710620:r.color??8947848),m.roughness=p?.35:.78,m.metalness=p?.45:.04,m.envMapIntensity=p?.4:.28}else i!=null&&m.color&&m.color.multiply(new it(i));m.side=Tn}}),a&&this.head){const h=new tn({color:0,emissive:9109504,emissiveIntensity:2.2,roughness:1,name:"eye"});for(const f of[-1,1]){const d=new Tt(new Le(.035,8,6),h.clone());d.position.set(f*.045,.06,.09),this.head.add(d),o.push(d)}}const{gun:l,pistol:c,minigun:u}=Fx();e.weapons&&(this.hand?this.hand.add(l):this.root.add(l)),this.root.userData={actor:this,pistol:c,minigun:u,gun:l,eyes:o,body:this.root},this.play("idle",0)}play(t,e=.16){const n=this.actions[t]||this.actions.idle||Object.values(this.actions)[0];!n||n===this.current||(n.reset().setEffectiveWeight(1).play(),this.current?this.current.crossFadeTo(n,e,!1):n.fadeIn(e),this.current=n)}setMove(t,e,n){!n&&t>.8?this.play("walk"):t>5.2||e&&t>1.2?this.play("run"):t>.35?this.play("walk"):this.play("idle"),this.current&&this.current.setEffectiveTimeScale(e?1.15:1)}setScale(t,e=t,n=t){this.root.scale.set(t,e,n)}update(t){this.mixer.update(t)}}function Mo(s,t){return(s==null?void 0:s.get(t))||(s==null?void 0:s.get("player"))||null}function Fc(s){const t=Mo(s,"player");return t?new $o(t,{weapons:!0,scale:1}):null}function Oc(s){const t=Mo(s,"stalker")||Mo(s,"player");return t?new $o(t,{horror:!0,scale:1,weapons:!1}):null}class Hx{constructor(t,e,n=80){this.scene=t,this.capacity=n,this.protos=[];const i=e==null?void 0:e.get("player");for(let r=0;r<Aa.length;r++){const a=Aa[r],o=(e==null?void 0:e.get(`npc_${r}`))||i;o&&this.protos.push({gltf:o,dress:a,scale:a.scale??1})}if(!this.protos.length&&i)for(const r of Aa)this.protos.push({gltf:i,dress:r,scale:r.scale??1});this.pool=[]}acquire(t){if(!this.protos.length)return null;const e=this.protos[t%this.protos.length],n=new $o(e.gltf,{dress:e.dress,scale:e.scale??1,weapons:!1});return this.scene.add(n.root),this.pool.push(n),n}update(t,e){let n=0;for(const i of t){if(i.dead)continue;if(n>=this.capacity)break;let r=this.pool[n];if(r||(r=this.acquire(i.variant??n)),!r)continue;r.root.visible=!0,r.root.position.set(i.pos.x,i.pos.y+r.lift,i.pos.z),r.root.rotation.y=i.yaw+r.yawOffset;const a=(i.scale||1)*r.baseScale;r.root.scale.setScalar(a),r.setMove(i.moving?i.speed||1.2:0,(i.speed||0)>4.5,!0),r.update(e),n++}for(let i=n;i<this.pool.length;i++)this.pool[i].root.visible=!1}dispose(t){for(const e of this.pool)t.remove(e.root);this.pool.length=0}}function zc(s,t,e=80){return t&&(t.has("player")||t.has("npc_0"))?new Hx(s,t,e):new Rx(s,1100,null)}class Gx{constructor(t,e=null,n=null){this.scene=t,this.renderer=zc(t,n,$.arenaMaxAlive),this.entities=[],this.spawnedTotal=0,this.class1Total=0,this.killed=0}setChars(t){var e,n;(n=(e=this.renderer).dispose)==null||n.call(e,this.scene),this.renderer=zc(this.scene,t,$.arenaMaxAlive)}clear(t=()=>!0){this.entities=this.entities.filter(e=>!t(e))}alive(){return this.entities.filter(t=>!t.dead)}count(t){let e=0;for(const n of this.entities)!n.dead&&n.cls===t&&e++;return e}spawn(t,e,n,i,r={}){const a={cls:t,variant:dt.int(0,4),pos:{x:e,y:n,z:i},yaw:dt.range(0,Math.PI*2),hp:t===3?$.class3Hp:t==="arena"?$.arenaEntityHp:t==="minion"?55:40,state:"idle",timer:dt.range(.5,3),anim:Math.random(),moving:!1,dead:!1,speed:0,home:{x:e,z:i},target:null,cooldown:0,scale:dt.range(.92,1.08),trailIdx:0,lostTimer:0,lungeCooldown:dt.range(2,10),twitch:dt.range(0,10),...r};return this.entities.push(a),this.spawnedTotal++,t===1&&this.class1Total++,a}canSpawnClass1(){return(this.class1Total+1)/(this.spawnedTotal+1)<=$.class1MaxShare}maintainOutside(t,e,n){const i=this.entities.filter(a=>(a.cls===1||a.cls===2)&&!a.dead);for(const a of i)Math.hypot(a.pos.x-e.x,a.pos.z-e.z)>95&&(a.dead=!0);if(i.length<16&&dt.chance(n*1.5)){const a=this.canSpawnClass1()&&dt.chance(.5)?1:2;let o=null,l=!1;if(a===2&&dt.chance(.5)&&t.entrances.length){const c=t.entrances.filter(u=>{const h=Math.hypot(u.x-e.x,u.z-e.z);return h>18&&h<70});if(c.length){const u=dt.pick(c);o={x:u.x+u.nx*2.6+dt.range(-1.5,1.5),z:u.z+u.nz*2.6+dt.range(-.5,1)},l=!0}}o||(o=t.randomSpawnPoint(e.x,e.z,24,60)),o&&this.spawn(a,o.x,0,o.z,{loiter:l,loiterYaw:Math.atan2(e.x-o.x,e.z-o.z)})}this.pruneDead()}pruneDead(){this.entities=this.entities.filter(t=>!t.dead)}update(t,e){const n=e.player.pos;for(const i of this.entities){if(i.dead)continue;i.cooldown-=t,i.timer-=t,i.twitch+=t;const r=n.x-i.pos.x,a=n.z-i.pos.z,o=Math.hypot(r,a),l=n.y-i.pos.y;switch(i.cls){case 1:this.updateHarmless(i,t,e,o,r,a);break;case 2:this.updateUnpredictable(i,t,e,o,r,a,l);break;case 3:this.updateAggressive(i,t,e,o,r,a,l);break;case"arena":case"minion":this.updateGrunt(i,t,e,o,r,a,l);break}i.moving&&(i.anim=(i.anim+t*i.speed*.55)%1)}this.renderer.update(this.entities,t)}stepTo(t,e,n,i,r,a,o=.33){const l=e-t.pos.x,c=n-t.pos.z,u=Math.hypot(l,c);if(u<.05)return t.moving=!1,0;const h=l/u,f=c/u,d=Math.min(u,i*r),g=t.pos.x,_=t.pos.z;a.move(t.pos,h*d,f*d,o,t.pos.y,1.7);const m=a.groundAt(t.pos.x,t.pos.z,t.pos.y,o*.8);t.pos.y+=(m-t.pos.y)*Math.min(1,r*12);const p=Math.hypot(t.pos.x-g,t.pos.z-_);t.moving=p>.001,t.speed=i;let S=Math.atan2(h,f)-t.yaw;for(;S>Math.PI;)S-=Math.PI*2;for(;S<-Math.PI;)S+=Math.PI*2;return t.yaw+=S*Math.min(1,r*8),p}faceTo(t,e,n,i){let a=Math.atan2(e-t.pos.x,n-t.pos.z)-t.yaw;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;t.yaw+=a*Math.min(1,i*5)}wander(t,e,n,i){const r=n.player.pos;if(i<4){t.moving=!1,this.faceTo(t,r.x,r.z,e),t.timer=Math.min(t.timer,1);return}if(t.loiter){t.moving=!1,t.yaw+=(t.loiterYaw-t.yaw)*e;return}t.timer<=0&&(t.timer=dt.range(2,6),t.target=dt.chance(.3)?null:{x:t.home.x+dt.range(-10,10),z:t.home.z+dt.range(-10,10)}),t.target?(this.stepTo(t,t.target.x,t.target.z,1.1,e,n.statics)<.002||Math.hypot(t.target.x-t.pos.x,t.target.z-t.pos.z)<.4)&&(t.target=null):t.moving=!1,Math.sin(t.twitch*7)>.98&&(t.yaw+=dt.range(-.6,.6))}updateHarmless(t,e,n,i,r,a){this.wander(t,e,n,i)}updateUnpredictable(t,e,n,i,r,a,o){var c,u;const l=n.player.pos;if(t.lungeCooldown-=e,t.state==="idle"){if(this.wander(t,e,n,i),t.lungeCooldown<=0&&i<10&&Math.abs(o)<2.5){const h=n.player.forward.x*-r+n.player.forward.z*-a>0,f=(i<4?.6:.18)*(h?1.6:1)*e;dt.chance(f)&&n.statics.lineOfSight(t.pos.x,t.pos.y+1.2,t.pos.z,l.x,l.y+1.2,l.z)&&(t.state="lunge",t.timer=2.2,(c=n.audio)==null||c.lunge(),(u=n.onLunge)==null||u.call(n))}}else t.state==="lunge"?(this.stepTo(t,l.x,l.z,10.5,e,n.statics),i<1.2?(n.onPlayerHit($.class2Damage,t),t.state="retreat",t.timer=2.5,t.target={x:t.pos.x-r*3,z:t.pos.z-a*3}):t.timer<=0&&(t.state="retreat",t.timer=2,t.target={x:t.pos.x-r,z:t.pos.z-a})):t.state==="retreat"&&(t.target&&this.stepTo(t,t.target.x,t.target.z,3.5,e,n.statics),t.timer<=0&&(t.state="idle",t.lungeCooldown=dt.range(8,22),t.target=null,t.loiter=!1))}updateAggressive(t,e,n,i,r,a,o){var h;const l=n.player.pos,c=n.statics,u=i<$.class3Sight&&Math.abs(o)<4&&c.lineOfSight(t.pos.x,t.pos.y+1.3,t.pos.z,l.x,l.y+1.2,l.z);if(t.state==="idle")t.timer<=0&&(t.timer=dt.range(1,4),t.target=dt.chance(.5)?{x:t.home.x+dt.range(-3,3),z:t.home.z+dt.range(-1,1)}:null),t.target?this.stepTo(t,t.target.x,t.target.z,.7,e,c)<.001&&(t.target=null):t.moving=!1,(u||i<3.5&&Math.abs(o)<2)&&(t.state="chase",t.lostTimer=0,t.trailIdx=-1,(h=n.audio)==null||h.ghostAppear());else if(t.state==="chase"){const f=n.trail;u?(t.lostTimer=0,t.trailIdx=f.length-1):t.lostTimer+=e;let d=l.x,g=l.z;if(!u&&f.length){let _=Math.max(0,t.trailIdx);for(let p=f.length-1;p>=Math.max(0,f.length-60);p--){const M=f[p];if(Math.abs(M.y-t.pos.y)<2.2&&c.lineOfSight(t.pos.x,t.pos.y+1.2,t.pos.z,M.x,M.y+1.2,M.z)){_=Math.max(_,p);break}}t.trailIdx=_;const m=f[Math.min(_,f.length-1)];d=m.x,g=m.z,Math.hypot(d-t.pos.x,g-t.pos.z)<.5&&_<f.length-1&&t.trailIdx++}i>1||Math.abs(o)>1.5?this.stepTo(t,d,g,$.class3Speed,e,c):(t.moving=!1,this.faceTo(t,l.x,l.z,e)),i<1.25&&Math.abs(o)<1.6&&t.cooldown<=0&&(t.cooldown=1.1,n.onPlayerHit(dt.range($.class3Damage[0],$.class3Damage[1]),t)),(t.lostTimer>12||i>40)&&(t.state="idle",t.home={x:t.pos.x,z:t.pos.z})}}updateGrunt(t,e,n,i,r,a,o){const l=n.player.pos;if(i>1.15?this.stepTo(t,l.x,l.z,t.gruntSpeed||2,e,n.statics,.3):(t.moving=!1,this.faceTo(t,l.x,l.z,e)),i<1.25&&Math.abs(o)<1.8&&t.cooldown<=0){const c=t.cls==="arena";t.cooldown=c?$.arenaHitCooldown:1.45,n.onPlayerHit(c?dt.range($.arenaDamage[0],$.arenaDamage[1]):dt.range($.minionDamage[0],$.minionDamage[1]),t)}}raycast(t,e,n=200){let i=null,r=n;for(const a of this.entities){if(a.dead)continue;const o=.5*(a.scale||1),l=1.9*(a.scale||1),c=t.x-a.pos.x,u=t.z-a.pos.z,h=e.x*e.x+e.z*e.z;if(h<1e-6)continue;const f=2*(c*e.x+u*e.z),d=c*c+u*u-o*o,g=f*f-4*h*d;if(g<0)continue;const _=(-f-Math.sqrt(g))/(2*h);if(_<0||_>r)continue;const m=t.y+e.y*_;m<a.pos.y||m>a.pos.y+l||(r=_,i=a)}return i?{entity:i,dist:r}:null}hurt(t,e,n){var i,r,a;t.hp-=e,(i=n.audio)==null||i.hitFlesh(),t.cls===3&&t.state==="idle"&&(t.state="chase",t.trailIdx=-1),t.cls===2&&t.state==="idle"&&(t.state="lunge",t.timer=2.2,(r=n.audio)==null||r.lunge()),t.hp<=0&&(t.dead=!0,this.killed++,(a=n.audio)==null||a.entityDie(),t.cls==="minion"&&n.onMinionDeath&&n.onMinionDeath(t),t.cls==="arena"&&n.onArenaDeath&&n.onArenaDeath(t))}}class Vx{constructor(t,e){this.scene=t,this.corridor=e,this.mesh=Cx(),this.mesh.visible=!1,t.add(this.mesh),this.active=!1,this.time=0}start(t){this.active=!0,this.lookBacks=0,this.holdBack=0,this.turnedForward=!0,this.survived=0,this.boost=0,this.ending=0,this.z=-14,this.time=0,this.sway=0,this.mesh.visible=!0,t.audio.ghostAppear(),t.audio.playMusic("chase",.55,1.2),t.ui.notify("НЕ ОБОРАЧИВАЙСЯ. БЕГИ.",4,"danger"),t.ui.showChaseHint(!0)}update(t,e){if(!this.active)return null;const n=e.player;if(this.time+=t,this.survived+=t,this.ending>0)return this.ending-=t,this.mesh.userData.mat.opacity=Math.max(0,this.ending/2*.55),e.audio.setMusicVolume(Math.max(0,this.ending/2*.4),.2),this.ending<=0?(this.finish(e),"escaped"):null;const i=n.pos.z-this.z,r=n.moving&&n.sprint&&n.grounded;let a=r?$.ghostSprintSpeed:n.moving?$.ghostBaseSpeed:$.ghostIdleSpeed;i>28&&!r&&(a+=.7),this.boost>0&&(a+=2.4),this.z+=a*t;let o=n.yaw%(Math.PI*2);if(o>Math.PI&&(o-=Math.PI*2),o<-Math.PI&&(o+=Math.PI*2),Math.abs(o)>$.ghostLookBackAngle*Math.PI/180){if(this.holdBack+=t,this.holdBack>$.ghostLookBackHold&&this.turnedForward){if(this.turnedForward=!1,this.lookBacks++,this.lookBacks>=2)return this.finish(e),"eaten";this.z=n.pos.z-Math.max(2.5,i*.4),this.boost=4,e.audio.ghostAppear(),e.ui.notify("ОНА БЛИЖЕ. ЕЩЁ РАЗ — И ВСЁ.",3.5,"danger"),e.shake=.6}}else this.holdBack=0,Math.abs(o)<1&&(this.turnedForward=!0);this.boost=Math.max(0,this.boost-t);const c=n.pos.z-this.z;if(c<.9)return this.finish(e),"caught";const u=Math.min(1,Math.max(.2,1.05-c/32)+(this.boost>0?.35:0));e.audio.setMusicVolume(u,.25),e.ui.setChaseIntensity(Math.max(0,1-c/20)),(this.survived>$.ghostMinSurvive&&c>$.ghostRetreatDistance*.6||c>$.ghostRetreatDistance)&&(this.ending=2,e.ui.notify("Она отстала…",3,"calm")),this.sway+=t;const h=this.corridor.floorLevelAt(this.z);this.mesh.position.set(Math.sin(this.sway*1.7)*.4,h+.1+Math.sin(this.sway*3)*.12,this.z),this.mesh.rotation.y=0,this.mesh.userData.mat.opacity=Math.min(.85,.35+(1-Math.min(1,c/20))*.5);for(const f of this.mesh.children)f.userData.phase!==void 0&&(f.rotation.x=Math.sin(this.sway*4+f.userData.phase)*.5,f.rotation.z=Math.cos(this.sway*3+f.userData.phase)*.3);return null}finish(t){this.active=!1,this.mesh.visible=!1,t.ui.showChaseHint(!1),t.ui.setChaseIntensity(0)}}const Wx={sleep:"СПИТ",food:"ИЩЕТ ЕДУ",belenka:"Идёт за Беленькой",dodep:"Ищет на додеп",hunt:"ИЩЕТ ТЕБЯ"},pr=["food","belenka","dodep"];class Xx{constructor(t,e=null,n=null){this.scene=t,this.actor=Oc(n),this.mesh=this.actor?this.actor.root:Lx(e),this.mesh.visible=!1,t.add(this.mesh),this.enabled=!0,this.state="sleep",this.timer=dt.range($.stalkerSleep[0]*.7,$.stalkerSleep[1]*.9),this.mode=null,this.lag=6,this.cooldown=0,this.pos={x:0,y:0,z:0},this.foodWander={x:0,z:0},this.worldSince=0,this.visibleTimer=0,this.aerial=!1,this.haloT=0}setChars(t){if(this.actor)return;const e=Oc(t);e&&(this.scene.remove(this.mesh),this.actor=e,this.mesh=e.root,this.mesh.visible=!1,this.scene.add(this.mesh))}setEnabled(t){this.enabled=t,t||(this.mesh.visible=!1,this.state==="hunt"&&this.reset())}reset(){this.state="sleep",this.mode=null,this.aerial=!1,this.timer=dt.range($.stalkerSleep[0],$.stalkerSleep[1]),this.mesh.visible=!1}startHunt(t,{aerial:e=!1,silent:n=!1}={}){this.state="hunt",this.aerial=e,this.chooseMode("stealth",t),t.audio.playHunt(),n||t.ui.notify("ТЕБЯ ПРЕСЛЕДУЮТ",5.5,"danger")}chooseMode(t,e){this.mode=t,this.lag=t==="stealth"?dt.range($.stalkerStealthLag[0],$.stalkerStealthLag[1]):$.stalkerDeathmatchLag,this.worldSince=e.time}onWorldChange(t){this.worldSince=t.time,this.aerial||(this.mesh.visible=!1)}pulseEyes(t){this.haloT+=t;const e=this.mesh.userData;if(!(e!=null&&e.eyes))return;const n=.42+Math.sin(this.haloT*3.4)*.22;for(const i of e.eyes)i.material.color.setRGB(.55+n,0,0)}update(t,e){var h,f,d,g,_,m;if(!this.enabled)return;const n=e.player;this.pulseEyes(t);const i=e.state==="apartment";if(this.actor){i?this.actor.setScale(1):this.actor.setScale(4.2,6.4,4.2);const p=this.state==="hunt"||pr.includes(this.state);this.actor.setMove(p&&this.mesh.visible?this.state==="hunt"?3.2:1.4:0,this.state==="hunt",!0),this.actor.update(t)}else{const p=this.mesh.userData.body||this.mesh.children[0];p&&p.scale.setScalar(i?1:5)}if(this.state!=="hunt"){this.timer-=t;const p=e.worldTime>$.stalkerRandomAfter&&dt.chance($.stalkerRandomChance*t);if(this.timer<=0||p)if(!p&&(this.state==="sleep"||pr.includes(this.state)))if(this.state==="sleep"||dt.chance(.72))this.state=dt.pick(pr),this.timer=dt.range($.stalkerFood[0],$.stalkerFood[1]),this.foodWander={x:n.pos.x+dt.range(-50,50),z:n.pos.z+dt.range(-50,50)};else{this.startHunt(e);return}else{this.startHunt(e);return}if(pr.includes(this.state)&&e.state==="outside"){const M=Math.hypot(this.foodWander.x-n.pos.x,this.foodWander.z-n.pos.z);if(M<30||M>70){const w=dt.range(0,Math.PI*2);this.foodWander={x:n.pos.x+Math.cos(w)*48,z:n.pos.z+Math.sin(w)*48}}const S=this.foodWander.x-this.pos.x,y=this.foodWander.z-this.pos.z,R=Math.hypot(S,y);R>60?(this.pos.x=this.foodWander.x,this.pos.z=this.foodWander.z):R>.5&&(this.pos.x+=S/R*1.2*t,this.pos.z+=y/R*1.2*t),this.pos.y=e.statics.groundAt(this.pos.x,this.pos.z,0,.3),this.mesh.position.set(this.pos.x,this.pos.y+(((h=this.actor)==null?void 0:h.lift)||0),this.pos.z),this.mesh.rotation.y=Math.atan2(S,y)+(((f=this.actor)==null?void 0:f.yawOffset)??0),this.mesh.visible=!e.statics.pointInside(this.pos.x,1,this.pos.z)}else this.mesh.visible=!1;return}if(!this.mode)return;if(this.aerial){const p=n.pos.x-this.pos.x,M=n.pos.y-this.pos.y,S=n.pos.z-this.pos.z,y=Math.hypot(p,M,S)||1,R=9.2;this.pos.x+=p/y*R*t,this.pos.y+=M/y*R*t,this.pos.z+=S/y*R*t,this.mesh.visible=!0,this.mesh.position.set(this.pos.x,this.pos.y+(((d=this.actor)==null?void 0:d.lift)||0)*this.mesh.scale.y,this.pos.z),this.mesh.rotation.y=Math.atan2(p,S)+(((g=this.actor)==null?void 0:g.yawOffset)??0),this.cooldown-=t,y<4.6&&this.cooldown<=0&&(this.cooldown=1.5,e.hurtPlayer($.stalkerDamage,"stalker"),e.shake=.8);return}const r=e.trail,a=e.time-this.lag;if(e.time-this.worldSince<this.lag){if(r.length){const p=r[0];this.pos.x=p.x,this.pos.y=p.y,this.pos.z=p.z}this.mesh.visible=e.time-this.worldSince>this.lag*.5&&r.length>0}else{let p=r[0];for(let M=r.length-1;M>=0;M--)if(r[M].t<=a){p=r[M];break}if(p){const M=Math.min(1,t*6);this.pos.x+=(p.x-this.pos.x)*M,this.pos.y+=(p.y-this.pos.y)*M,this.pos.z+=(p.z-this.pos.z)*M}this.mesh.visible=!0}const o=n.pos.x-this.pos.x,l=n.pos.z-this.pos.z,c=Math.hypot(o,l);this.mesh.position.set(this.pos.x,this.pos.y+(((_=this.actor)==null?void 0:_.lift)||0)*this.mesh.scale.y,this.pos.z),this.mesh.rotation.y=Math.atan2(o,l)+(((m=this.actor)==null?void 0:m.yawOffset)??0),this.cooldown-=t;const u=e.state==="apartment"?1.55:4.4;c<u&&Math.abs(n.pos.y-this.pos.y)<9&&this.cooldown<=0&&(this.cooldown=1.5,e.hurtPlayer($.stalkerDamage,"stalker"),e.shake=.8)}}class Bc{constructor(t){this.kind=t;const e=t==="minigun"?$.minigun:$.pistol;this.cfg=e,this.cooldown=0,this.mag=e.mag||1/0,this.reserve=e.reserve??1/0,this.reloading=0,this.spin=0}get infinite(){return this.kind==="minigun"}update(t,e){if(this.cooldown=Math.max(0,this.cooldown-t),this.reloading>0&&(this.reloading-=t,this.reloading<=0)){const n=this.cfg.mag-this.mag,i=Math.min(n,this.reserve);this.mag+=i,this.reserve-=i,this.reloading=0}this.kind==="minigun"&&(this.spin=Math.max(0,Math.min(1,this.spin+(e?t*2.5:-t*1.2))))}canReload(){return this.kind==="pistol"&&this.reloading<=0&&this.mag<this.cfg.mag&&this.reserve>0}reload(){return this.canReload()?(this.reloading=this.cfg.reload,!0):!1}tryFire(t){if(this.reloading>0||this.kind==="minigun"&&this.spin<.35||this.cooldown>0||this.mag<=0)return 0;const e=60/this.cfg.rpm;return this.cooldown=e,this.infinite||this.mag--,1}addAmmo(t){this.infinite||(this.reserve+=t)}}class Kx{constructor(t,e,n=null,i=null){this.scene=t,this.camera=e,this.pos=new L(0,0,0),this.vy=0,this.yaw=Math.PI,this.pitch=-.15,this.modelYaw=Math.PI,this.hp=$.maxHp,this.crouch=!1,this.sprint=!1,this.moving=!1,this.grounded=!0,this.speed=0,this.velocity=new L,this.vx=0,this.vz=0,this.coyote=0,this.jumpBuf=0,this.lastDamage=0,this.animPhase=0,this.aimTimer=0,this.camDist=$.camDist,this.camDistCur=$.camDist,this.iframes=0,this.actor=Fc(i),this.model=this.actor?this.actor.root:Dx(n),t.add(this.model),this.pistol=new Bc("pistol"),this.minigun=new Bc("minigun"),this.weapon=this.pistol,this.frozen=!1,this.stepAcc=0,this.dead=!1,this.forward=new L(0,0,1),this.fallStart=null,this.flying=!1}setChars(t){var n;if(this.actor)return;const e=Fc(t);e&&(this.scene.remove(this.model),this.actor=e,this.model=e.root,this.scene.add(this.model),this.setWeapon(((n=this.weapon)==null?void 0:n.kind)==="minigun"?"minigun":"pistol"))}setWeapon(t){var n;this.weapon=t==="minigun"?this.minigun:this.pistol;const e=(n=this.model)==null?void 0:n.userData;e!=null&&e.pistol&&(e.pistol.visible=t!=="minigun"),e!=null&&e.minigun&&(e.minigun.visible=t==="minigun")}teleport(t,e,n,i){this.pos.set(t,e,n),this.vy=0,this.vx=0,this.vz=0,i!==void 0&&(this.yaw=i,this.modelYaw=i),this.camDistCur=.5,this.fallStart=null,this.coyote=0,this.jumpBuf=0}get height(){return this.crouch?$.crouchHeight:$.playerHeight}get eyeY(){return this.pos.y+this.height-.15}damage(t,e){this.dead||this.iframes>0||(this.hp=Math.max(0,this.hp-t),this.lastDamage=0,this.iframes=$.playerIframes,e==null||e.playerHurt(),this.hurtFlash=1,this.hp<=0&&(this.dead=!0))}update(t,e,n,i,r={}){if(this.lastDamage+=t,this.iframes=Math.max(0,this.iframes-t),this.hurtFlash=Math.max(0,(this.hurtFlash||0)-t*2),this.camDist=r.camDist||$.camDist,this.lastDamage>$.hpRegenDelay&&this.hp<$.maxHp&&!this.dead&&(this.hp=Math.min($.maxHp,this.hp+$.hpRegenRate*t)),!this.frozen&&!r.noLook){this.yaw-=e.dx*e.sensitivity;const v=e.invertY?-1:1;this.pitch=Math.max(-1.25,Math.min(.9,this.pitch-e.dy*e.sensitivity*v))}const a=Math.sin(this.yaw),o=Math.cos(this.yaw);this.forward.set(a,0,o),!this.frozen&&e.hit("KeyQ")&&(r.canFly?(this.flying=!this.flying,this.flying&&(this.crouch=!1,this.grounded=!1,this.fallStart=null)):this.flying?this.flying=!1:this.flyDenied=!0),!this.frozen&&!this.flying&&(e.hit("ControlLeft")||e.hit("KeyC"))&&(this.crouch?n.ceilingAt(this.pos.x,this.pos.z,this.pos.y+$.crouchHeight,$.playerRadius)-this.pos.y>$.playerHeight+.05&&(this.crouch=!1):this.crouch=!0),this.sprint=!this.frozen&&e.down("ShiftLeft")&&!this.crouch;let l=0,c=0;this.frozen||(e.down("KeyW")&&(l+=a,c+=o),e.down("KeyS")&&(l-=a,c-=o),e.down("KeyD")&&(l+=-o,c+=a),e.down("KeyA")&&(l-=-o,c-=a));const u=Math.hypot(l,c);this.moving=u>.01,this.moving&&(l/=u,c/=u,this.lastMove={x:l,z:c});const h=this.crouch?$.crouchSpeed:this.sprint?$.sprintSpeed:$.walkSpeed,f=this.lastMove||{x:a,z:o};if(this.flying){const v=Math.sin(this.yaw)*Math.cos(this.pitch),x=Math.sin(this.pitch),C=Math.cos(this.yaw)*Math.cos(this.pitch);let O=0,N=0,B=0;this.frozen||(e.down("KeyW")&&(O+=v,N+=x,B+=C),e.down("KeyS")&&(O-=v,N-=x,B-=C),e.down("KeyD")&&(O+=-o,B+=a),e.down("KeyA")&&(O-=-o,B-=a),e.down("Space")&&(N+=1),(e.down("KeyC")||e.down("ControlLeft"))&&(N-=1));const W=Math.hypot(O,N,B)||1,H=this.sprint?$.flySpeed*1.35:$.flySpeed;this.vx=O/W*H,this.vy=N/W*H,this.vz=B/W*H,this.moving=W>.05;const j=this.pos.clone();n.move(this.pos,this.vx*t,this.vz*t,$.playerRadius,this.pos.y,this.height),this.pos.y+=this.vy*t;const X=n.groundAt(this.pos.x,this.pos.z,this.pos.y,$.playerRadius*.8);this.pos.y<X&&(this.pos.y=X),this.grounded=!1,this.velocity.subVectors(this.pos,j).divideScalar(Math.max(t,1e-4)),this.speed=Math.hypot(this.vx,this.vz),this.moving&&(this.animPhase+=t*2);const st=!this.frozen&&e.mouseDown&&!r.noFire;this.weapon.update(t,st),st&&(this.aimTimer=.6),this.aimTimer-=t,!this.frozen&&e.hit("KeyR")&&this.weapon.reload()&&(i==null||i.reload());let _t=(this.aimTimer>0||r.faceCamera?this.yaw:this.moving?Math.atan2(f.x,f.z):this.modelYaw)-this.modelYaw;for(;_t>Math.PI;)_t-=Math.PI*2;for(;_t<-Math.PI;)_t+=Math.PI*2;return this.modelYaw+=_t*Math.min(1,t*12),this.updateModel(t),this.updateCamera(n,t),st}!this.frozen&&e.hit("Space")?this.jumpBuf=$.jumpBuffer:this.jumpBuf=Math.max(0,this.jumpBuf-t),this.grounded?this.coyote=$.coyoteTime:this.coyote=Math.max(0,this.coyote-t);let d=!1;if(!this.frozen&&!this.crouch&&this.jumpBuf>0&&this.coyote>0?(this.vy=$.jumpVel,this.grounded=!1,this.coyote=0,this.jumpBuf=0,d=!0):!this.frozen&&!this.crouch&&this.grounded&&e.down("Space")&&(this.vy=$.jumpVel,this.grounded=!1,d=!0),d&&this.moving&&(Math.hypot(this.vx,this.vz)<h&&(this.vx=l*h,this.vz=c*h),this.vx+=l*$.bhopJumpBoost,this.vz+=c*$.bhopJumpBoost),this.grounded&&!d){const v=Math.hypot(this.vx,this.vz);if(v>.05){const x=Math.max(v,$.stopSpeed)*$.friction*t,C=Math.max(0,v-x)/v;this.vx*=C,this.vz*=C}else this.vx=0,this.vz=0;this.accelerate(l,c,h,$.groundAccel,t)}else this.accelerate(l,c,$.airWishCap,$.airAccel,t);const g=$.bhopMaxSpeed,_=Math.hypot(this.vx,this.vz);_>g&&(this.vx*=g/_,this.vz*=g/_);const m=this.pos.clone(),p=this.pos.x,M=this.pos.z;n.move(this.pos,this.vx*t,this.vz*t,$.playerRadius,this.pos.y,this.height),Math.abs(this.pos.x-(p+this.vx*t))>.002&&(this.vx=0),Math.abs(this.pos.z-(M+this.vz*t))>.002&&(this.vz=0),this.vy-=$.gravity*t;let S=this.pos.y+this.vy*t;const y=n.groundAt(this.pos.x,this.pos.z,this.pos.y,$.playerRadius*.8),R=n.ceilingAt(this.pos.x,this.pos.z,this.pos.y+this.height*.5,$.playerRadius);if(S+this.height>=R&&(S=R-this.height-.01,this.vy=Math.min(0,this.vy)),S<=y&&!d?(!this.grounded&&this.fallStart!==null&&this.fallStart-y>1.5&&(i==null||i.fall(),this.landed=this.fallStart-y),S=y,this.vy=0,this.grounded=!0,this.fallStart=null):(this.grounded&&(this.fallStart=this.pos.y),this.grounded=!1),this.pos.y=S,this.velocity.subVectors(this.pos,m).divideScalar(Math.max(t,1e-4)),this.speed=Math.hypot(this.vx,this.vz),this.moving&&this.grounded){this.stepAcc+=this.speed*t;const v=this.crouch?1:this.sprint?2.2:1.6;this.stepAcc>v&&(this.stepAcc=0,i==null||i.footstep(r.inside,this.crouch)),this.animPhase+=t*this.speed*1.4}else this.animPhase+=0;const w=!this.frozen&&e.mouseDown&&!r.noFire;this.weapon.update(t,w),w&&(this.aimTimer=.6),this.aimTimer-=t,!this.frozen&&e.hit("KeyR")&&this.weapon.reload()&&(i==null||i.reload());let b=(this.aimTimer>0||r.faceCamera?this.yaw:this.moving?Math.atan2(f.x,f.z):this.modelYaw)-this.modelYaw;for(;b>Math.PI;)b-=Math.PI*2;for(;b<-Math.PI;)b+=Math.PI*2;return this.modelYaw+=b*Math.min(1,t*12),this.updateModel(t),this.updateCamera(n,t),w}updateModel(t){var l,c;const e=this.model,n=e.userData;if(e.position.set(this.pos.x,this.pos.y+(((l=this.actor)==null?void 0:l.lift)||0),this.pos.z),e.rotation.y=this.modelYaw+(((c=this.actor)==null?void 0:c.yawOffset)??0),this.actor){const u=this.flying?Math.hypot(this.vx,this.vy,this.vz):this.speed;this.actor.setMove(u,this.sprint,this.grounded||this.flying),this.actor.update(t);const h=this.crouch?1:0;this._cr=(this._cr??0)+(h-(this._cr??0))*Math.min(1,t*10);const f=this.actor.baseScale;this.actor.root.scale.set(f,f*(1-.22*this._cr),f),e.visible=!this.hideModel;return}if(!(n!=null&&n.legL)){e.visible=!this.hideModel;return}const i=this.moving?Math.sin(this.animPhase*2.2)*(this.sprint?.9:.6):0;n.legL.rotation.x=i,n.legR.rotation.x=-i;const r=this.aimTimer>0;n.armL.rotation.x=r?-1.3:-i*.8,n.armR.rotation.x=r?-1.45:i*.8,n.armR.rotation.z=r?0:-.05,n.gun&&(n.gun.rotation.x=r?0:.6);const a=this.crouch?1:0;this._cr=(this._cr??0)+(a-(this._cr??0))*Math.min(1,t*10);const o=-.55*this._cr;n.torso&&(n.torso.position.y=1.22+o),n.head&&(n.head.position.y=1.74+o),n.cap&&(n.cap.position.y=1.8+o),n.visor&&(n.visor.position.y=1.88+o),n.chain&&(n.chain.position.y=1.42+o),n.armL.position.y=1.5+o,n.armR.position.y=1.5+o,n.legL.position.y=.9+o*.5,n.legR.position.y=.9+o*.5,n.legL.scale.y=n.legR.scale.y=1-.45*this._cr,n.torso&&(n.torso.rotation.x=.35*this._cr),e.visible=!this.hideModel}accelerate(t,e,n,i,r){if(n<=0||t===0&&e===0)return;const a=this.vx*t+this.vz*e,o=n-a;if(o<=0)return;let l=i*n*r;l>o&&(l=o),this.vx+=l*t,this.vz+=l*e}updateCamera(t,e){const n=this.pitch,i=this.yaw,r=new L(Math.sin(i)*Math.cos(n),Math.sin(n),Math.cos(i)*Math.cos(n)),a=new L(-Math.cos(i),0,Math.sin(i)),o=new L(this.pos.x,this.eyeY,this.pos.z).addScaledVector(a,-.5);let l=this.camDist;const c=o.clone().addScaledVector(r,-this.camDist),u=t.segmentHit(o.x,o.y,o.z,c.x,c.y,c.z);u<1&&(l=Math.max(.35,u*this.camDist-.3)),this.camDistCur+=(l-this.camDistCur)*Math.min(1,e*(l<this.camDistCur?25:5));const h=o.clone().addScaledVector(r,-this.camDistCur);this.camera.position.copy(h),this.camera.lookAt(o.clone().addScaledVector(r,12)),this.moving&&this.grounded&&(this.camera.position.y+=Math.sin(this.animPhase*2.2)*.03*(this.sprint?1.5:1)),this.hideModel=this.camDistCur<.7}}class Yx{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.dx=0,this.dy=0,this.mouseDown=!1,this.mouseClicked=!1,this.locked=!1,this.sensitivity=.0022,this.invertY=!0;try{this.invertY=localStorage.getItem("invertY")!=="0"}catch{}window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),["Space","Tab","KeyW","KeyA","KeyS","KeyD","KeyQ"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=!1}),document.addEventListener("mousemove",e=>{this.locked&&(this.dx+=e.movementX,this.dy+=e.movementY)}),t.addEventListener("mousedown",e=>{e.button===0&&(this.mouseDown=!0,this.mouseClicked=!0)}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouseDown=!1)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault())}lock(){var t,e;this.locked||(e=(t=this.canvas).requestPointerLock)==null||e.call(t)}unlock(){var t;this.locked&&((t=document.exitPointerLock)==null||t.call(document))}down(t){return this.keys.has(t)}hit(t){return this.pressed.has(t)}flush(){this.pressed.clear(),this.dx=0,this.dy=0,this.mouseClicked=!1}}const Gi=s=>`/obamka/audio/${s}`;class qx{constructor(){this.ctx=null,this.master=null,this.sfxGain=null,this.musicGain=null,this.tracks={},this.current=null,this.musicVolume=.8,this.sfxVolume=.9,this.unlocked=!1,this.loops={},this.buffers={},this.pending={shot:fetch(Gi("shot.wav")).then(t=>t.arrayBuffer()).catch(()=>null)}}unlock(){if(this.unlocked)return;const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.sfxVolume,this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicVolume,this.musicGain.connect(this.master),this.unlocked=!0,this.noiseBuf=this._makeNoise(2),this._startWind(),this._loadBuf("shot",Gi("shot.wav")),this._track("outside",Gi("outside.mp3"),!0),this._track("chase",Gi("hunk_kunilingues.mp3"),!0),this._track("arena",Gi("lyudoyob.mp3"),!0),this._track("choice",Gi("deathmatch_choice.mp3"),!0)}async _loadBuf(t,e){try{const i=(this.pending[t]?await this.pending[t]:null)||await(await fetch(e)).arrayBuffer();if(!i)throw new Error("empty");this.buffers[t]=await this.ctx.decodeAudioData(i.slice(0))}catch(n){console.warn("sfx load failed",t,n)}}_playBuf(t,{vol:e=1,rate:n=1,dur:i=null}={}){const r=this.buffers[t];if(!r)return!1;const a=this.ctx,o=a.createBufferSource();o.buffer=r,o.playbackRate.value=n;const l=a.createGain(),c=a.currentTime;return l.gain.setValueAtTime(e,c),i!=null&&l.gain.exponentialRampToValueAtTime(1e-4,c+i),o.connect(l),l.connect(this.sfxGain),o.start(),i!=null&&o.stop(c+i+.04),!0}setVolumes(t,e){this.musicVolume=t,this.sfxVolume=e,this.unlocked&&(this.musicGain.gain.value=t,this.sfxGain.gain.value=e)}_track(t,e,n){const i=new Audio(e);i.loop=n,i.preload="auto",i.crossOrigin="anonymous";const r={el:i,name:t,gain:this.ctx.createGain(),ok:!0,src:null};r.gain.gain.value=0,r.gain.connect(this.musicGain);try{r.src=this.ctx.createMediaElementSource(i),r.src.connect(r.gain)}catch{}i.addEventListener("error",()=>{r.ok=!1}),this.tracks[t]=r}playOutside(t=.72,e=1.6){this.unlocked&&(this.current&&this.current.name==="outside"||this.playMusic("outside",t,e))}playMusic(t,e=1,n=1){if(!this.unlocked)return;const i=this.tracks[t];if(this.stopMusic(.6),!i||!i.ok)return;this.current=i;try{i.el.currentTime=0,i.el.play().catch(()=>{})}catch{}const r=this.ctx.currentTime;i.gain.gain.cancelScheduledValues(r),i.gain.gain.setValueAtTime(1e-4,r),i.gain.gain.linearRampToValueAtTime(e,r+n)}setMusicVolume(t,e=.3){if(!this.unlocked||!this.current||!this.current.gain)return;const n=this.current.gain.gain;n.cancelScheduledValues(this.ctx.currentTime),n.setValueAtTime(n.value,this.ctx.currentTime),n.linearRampToValueAtTime(t,this.ctx.currentTime+e)}stopMusic(t=1){if(!this.unlocked||!this.current)return;const e=this.current;if(this.current=null,!e.gain)return;const n=e.gain.gain,i=this.ctx.currentTime;n.cancelScheduledValues(i),n.setValueAtTime(n.value,i),n.linearRampToValueAtTime(1e-4,i+t),setTimeout(()=>{if(this.current!==e)try{e.el.pause()}catch{}},t*1e3+50)}_makeNoise(t){const e=this.ctx,n=e.createBuffer(1,e.sampleRate*t,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;return n}footstep(){}playHunt(){this.unlocked&&(this.current&&this.current.name==="chase"||this.playMusic("chase",.7,1.2))}pistol(){this.unlocked&&this._playBuf("shot",{vol:.9,rate:.96+Math.random()*.08})}minigun(){this.unlocked&&this._playBuf("shot",{vol:.4,rate:1.04+Math.random()*.14,dur:.16})}reload(){}hitFlesh(){}playerHurt(){}entityDie(){}lunge(){}shit(){}bombArmed(){}bombTick(){}explosion(){}ding(){}elevatorHum(){}stalkerAlert(){}ghostAppear(){}gameOver(){}whoosh(){}fall(){}ui(){}heartbeat(){}carouselSqueak(){}_startWind(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=280,n.Q.value=.55;const i=t.createGain();i.gain.value=.12,e.connect(n),n.connect(i),i.connect(this.sfxGain),e.start(),this.wind=i}setWind(t,e=1){this.wind&&this.wind.gain.linearRampToValueAtTime(t,this.ctx.currentTime+e)}}const Ee=s=>document.getElementById(s);class jx{constructor(){this.el={hpFill:document.querySelector("#hp .fill"),ammo:Ee("ammo"),objective:Ee("objective"),stalker:Ee("stalker"),prompt:Ee("prompt"),progress:Ee("progress"),progressFill:document.querySelector("#progress div"),notify:Ee("notify"),chasehint:Ee("chasehint"),arena:Ee("arena"),bomb:Ee("bomb"),fade:Ee("fade"),start:Ee("start"),menu:Ee("menu"),choice:Ee("choice"),choiceTimer:Ee("choiceTimer"),gameover:Ee("gameover"),goze:Ee("goze"),goReason:Ee("goReason"),goStats:Ee("goStats"),stalkerBtn:Ee("stalkerBtn"),crosshair:Ee("crosshair")},this.chaseIntensity=0}setHp(t,e){this.el.hpFill.style.width=Math.max(0,t/e*100)+"%",this.el.hpFill.style.background=t<30?"#c02020":"#8a1a1a"}setAmmo(t){t.kind==="minigun"?this.el.ammo.innerHTML="∞<small>ПУЛЕМЁТ</small>":this.el.ammo.innerHTML=(t.reloading>0?"…":t.mag)+" / "+t.reserve+"<small>ПМ"+(t.mag===0&&t.reserve>0?" — R":"")+"</small>"}setObjective(t){this.el.objective.textContent="ЗАМИНИРОВАНО ПОДЪЕЗДОВ: "+t}setStalker(t,e){if(!e){this.el.stalker.className="hud sleep",this.el.stalker.innerHTML="ПРЕСЛЕДОВАТЕЛЬ<b>ОТКЛЮЧЁН</b>";return}this.el.stalker.className="hud "+t,this.el.stalker.innerHTML="ПРЕСЛЕДОВАТЕЛЬ<b>"+Wx[t]+"</b>"}prompt(t){this.el.prompt.style.display=t?"block":"none",t&&(this.el.prompt.textContent=t)}progress(t){this.el.progress.style.display=t===null?"none":"block",t!==null&&(this.el.progressFill.style.width=t*100+"%")}notify(t,e=3,n="info"){const i=document.createElement("div");i.className="note "+n,i.textContent=t,this.el.notify.appendChild(i),requestAnimationFrame(()=>i.classList.add("show")),setTimeout(()=>{i.classList.remove("show"),setTimeout(()=>i.remove(),400)},e*1e3)}showChaseHint(t){this.el.chasehint.style.display=t?"block":"none"}setChaseIntensity(t){this.chaseIntensity=t}arena(t){this.el.arena.style.display=t?"block":"none",t&&(this.el.arena.textContent=t)}bomb(t){this.el.bomb.style.display=t?"block":"none",t&&(this.el.bomb.textContent=t)}fade(t){this.el.fade.style.opacity=t}show(t,e){this.el[t].classList.toggle("show",e)}setCrosshair(t,e=!1){this.el.crosshair.style.display=t?"block":"none",this.el.crosshair.classList.toggle("combat",!!e)}gameOver(t,e){this.el.goReason.textContent=t,this.el.goStats.textContent=e,this.show("gameover",!0)}}class $x{constructor(t){this.renderer=t,this.rt=new ai(320,180,{minFilter:de,magFilter:de,depthBuffer:!0}),this.scene=new Mh,this.camera=new Or(-1,1,1,-1,0,1),this.material=new Kn({uniforms:{tDiffuse:{value:this.rt.texture},time:{value:0},hurt:{value:0},fade:{value:0},pulse:{value:0},res:{value:new kt(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        uniform sampler2D tDiffuse; uniform float time, hurt, fade, pulse; uniform vec2 res; varying vec2 vUv;
        float rand(vec2 co){ return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }
        vec3 bloom(vec2 uv){
          vec2 px = 1.0 / max(res, vec2(1.0));
          vec3 a = vec3(0.0);
          a += max(texture2D(tDiffuse, uv + px * vec2( 2.0, 0.0)).rgb - 0.78, 0.0);
          a += max(texture2D(tDiffuse, uv + px * vec2(-2.0, 0.0)).rgb - 0.78, 0.0);
          a += max(texture2D(tDiffuse, uv + px * vec2( 0.0, 2.0)).rgb - 0.78, 0.0);
          a += max(texture2D(tDiffuse, uv + px * vec2( 0.0,-2.0)).rgb - 0.78, 0.0);
          a += max(texture2D(tDiffuse, uv + px * vec2( 3.5, 3.5)).rgb - 0.78, 0.0) * 0.6;
          a += max(texture2D(tDiffuse, uv + px * vec2(-3.5, 3.5)).rgb - 0.78, 0.0) * 0.6;
          a += max(texture2D(tDiffuse, uv + px * vec2( 3.5,-3.5)).rgb - 0.78, 0.0) * 0.6;
          a += max(texture2D(tDiffuse, uv + px * vec2(-3.5,-3.5)).rgb - 0.78, 0.0) * 0.6;
          return a * 0.18;
        }
        void main(){
          vec2 uv = vUv;
          uv += (rand(vec2(floor(uv.y*90.0), floor(time*20.0))) - 0.5) * 0.008 * pulse;
          vec3 c = texture2D(tDiffuse, uv).rgb + bloom(uv);
          vec2 d = uv - 0.5;
          float v = 1.0 - dot(d, d) * (0.38 + pulse * 1.1);
          c *= clamp(v, 0.0, 1.0);
          c += (rand(uv * vec2(1.0, 1.7) + fract(time)) - 0.5) * 0.018;
          c = mix(c, vec3(0.45, 0.02, 0.02), hurt * (0.35 + dot(d,d) * 2.0));
          c = mix(c, vec3(0.0), fade);
          gl_FragColor = vec4(c, 1.0);
        }`,depthTest:!1,depthWrite:!1}),this.quad=new Tt(new ne(2,2),this.material),this.scene.add(this.quad),this.resize()}resize(){const t=Math.max(160,Math.floor(window.innerWidth*$.pixelScale)),e=Math.max(90,Math.floor(window.innerHeight*$.pixelScale));this.rt.setSize(t,e),this.material.uniforms.res.value.set(t,e)}render(t,e,n){this.material.uniforms.time.value+=n,this.renderer.setRenderTarget(this.rt),this.renderer.render(t,e),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}}class Zx extends Bg{constructor(t){super(t),this.type=Hn}parse(t){const a=function(b,v){switch(b){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},u=`
`,h=function(b,v,x){v=v||1024;let O=b.pos,N=-1,B=0,W="",H=String.fromCharCode.apply(null,new Uint16Array(b.subarray(O,O+128)));for(;0>(N=H.indexOf(u))&&B<v&&O<b.byteLength;)W+=H,B+=H.length,O+=128,H+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(O,O+128)));return-1<N?(b.pos+=B+N+1,W+H.slice(0,N)):!1},f=function(b){const v=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,B={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let W,H;for((b.pos>=b.byteLength||!(W=h(b)))&&a(1,"no header found"),(H=W.match(v))||a(3,"bad initial token"),B.valid|=1,B.programtype=H[1],B.string+=W+`
`;W=h(b),W!==!1;){if(B.string+=W+`
`,W.charAt(0)==="#"){B.comments+=W+`
`;continue}if((H=W.match(x))&&(B.gamma=parseFloat(H[1])),(H=W.match(C))&&(B.exposure=parseFloat(H[1])),(H=W.match(O))&&(B.valid|=2,B.format=H[1]),(H=W.match(N))&&(B.valid|=4,B.height=parseInt(H[1],10),B.width=parseInt(H[2],10)),B.valid&2&&B.valid&4)break}return B.valid&2||a(3,"missing format specifier"),B.valid&4||a(3,"missing image size specifier"),B},d=function(b,v,x){const C=v;if(C<8||C>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);C!==(b[2]<<8|b[3])&&a(3,"wrong scanline width");const O=new Uint8Array(4*v*x);O.length||a(4,"unable to allocate buffer space");let N=0,B=0;const W=4*C,H=new Uint8Array(4),j=new Uint8Array(W);let X=x;for(;X>0&&B<b.byteLength;){B+4>b.byteLength&&a(1),H[0]=b[B++],H[1]=b[B++],H[2]=b[B++],H[3]=b[B++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=C)&&a(3,"bad rgbe scanline format");let st=0,rt;for(;st<W&&B<b.byteLength;){rt=b[B++];const Ct=rt>128;if(Ct&&(rt-=128),(rt===0||st+rt>W)&&a(3,"bad scanline data"),Ct){const Ht=b[B++];for(let Y=0;Y<rt;Y++)j[st++]=Ht}else j.set(b.subarray(B,B+rt),st),st+=rt,B+=rt}const _t=C;for(let Ct=0;Ct<_t;Ct++){let Ht=0;O[N]=j[Ct+Ht],Ht+=C,O[N+1]=j[Ct+Ht],Ht+=C,O[N+2]=j[Ct+Ht],Ht+=C,O[N+3]=j[Ct+Ht],N+=4}X--}return O},g=function(b,v,x,C){const O=b[v+3],N=Math.pow(2,O-128)/255;x[C+0]=b[v+0]*N,x[C+1]=b[v+1]*N,x[C+2]=b[v+2]*N,x[C+3]=1},_=function(b,v,x,C){const O=b[v+3],N=Math.pow(2,O-128)/255;x[C+0]=Ws.toHalfFloat(Math.min(b[v+0]*N,65504)),x[C+1]=Ws.toHalfFloat(Math.min(b[v+1]*N,65504)),x[C+2]=Ws.toHalfFloat(Math.min(b[v+2]*N,65504)),x[C+3]=Ws.toHalfFloat(1)},m=new Uint8Array(t);m.pos=0;const p=f(m),M=p.width,S=p.height,y=d(m.subarray(m.pos),M,S);let R,w,A;switch(this.type){case qe:A=y.length/4;const b=new Float32Array(A*4);for(let x=0;x<A;x++)g(y,x*4,b,x*4);R=b,w=qe;break;case Hn:A=y.length/4;const v=new Uint16Array(A*4);for(let x=0;x<A;x++)_(y,x*4,v,x*4);R=v,w=Hn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:S,data:R,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w}}setDataType(t){return this.type=t,this}load(t,e,n,i){function r(a,o){switch(a.type){case qe:case Hn:a.colorSpace=ze,a.minFilter=de,a.magFilter=de,a.generateMipmaps=!1,a.flipY=!0;break}e&&e(a,o)}return super.load(t,r,n,i)}}const Wh=()=>"/obamka/";function Jx(s){return s.colorSpace=xe,s.wrapS=s.wrapT=Wn,s.generateMipmaps=!0,s.minFilter=We,s.magFilter=de,s.anisotropy=8,s.needsUpdate=!0,s}function Qx(s){return s.colorSpace=Bn,s.wrapS=s.wrapT=Wn,s.generateMipmaps=!0,s.minFilter=We,s.magFilter=de,s.anisotropy=8,s.needsUpdate=!0,s}async function kc(s,t,e){try{const n=await s.loadAsync(`${Wh()}textures/scan/${t}`);return e(n)}catch{return null}}async function tv(){const s=new Rh,t=async(u,h)=>({map:await kc(s,u,Jx),roughnessMap:await kc(s,h,Qx)}),[e,n,i,r,a,o,l,c]=await Promise.all([t("concrete_diff.jpg","concrete_rough.jpg"),t("plaster_diff.jpg","plaster_rough.jpg"),t("asphalt_diff.jpg","asphalt_rough.jpg"),t("snow_diff.jpg","snow_rough.jpg"),t("brick_diff.jpg","brick_rough.jpg"),t("metal_diff.jpg","metal_rough.jpg"),t("roof_diff.jpg","roof_rough.jpg"),t("wood_diff.jpg","wood_rough.jpg")]);return{concrete:e,plaster:n,asphalt:i,snow:r,brick:a,metal:o,roof:l,wood:c}}function ev(s,t,e){var i,r;if(!e)return;const n=(a,o,l,c=1)=>{if(!(l!=null&&l.map))return;l.map.repeat.set(c,c),l.roughnessMap&&l.roughnessMap.repeat.set(c,c),s[a]=l.map;const u=t[o];u&&(u.map=l.map,l.roughnessMap?(u.roughnessMap=l.roughnessMap,u.roughness=1):u.roughness=.86,u.metalness=0,u.vertexColors=!0,u.needsUpdate=!0)};n("facade",0,e.concrete),n("concrete",1,e.concrete),n("roof",2,e.roof),n("mosaic",4,e.brick),n("wallInt",7,e.plaster),n("floorInt",8,e.asphalt),n("ceilInt",9,e.plaster),n("ground",11,e.snow,1),n("arenaFloor",12,e.asphalt,8),(i=e.metal)!=null&&i.map&&(s.metal=e.metal.map,s.metalRough=e.metal.roughnessMap),(r=e.wood)!=null&&r.map&&(s.wood=e.wood.map)}async function nv(s,t){try{const e=await new Zx().loadAsync(`${Wh()}env/dusk.hdr`);e.mapping=Sr;const n=new fo(s),i=n.fromEquirectangular(e).texture;return n.dispose(),t.environment=i,"environmentIntensity"in t&&(t.environmentIntensity=.42),{hdr:e,env:i}}catch(e){return console.warn("[look] HDRI skip",(e==null?void 0:e.message)||e),null}}const ba={outside:{color:7238780,density:.008},interior:{color:789520,density:.048},chase:{color:328966,density:.07},arena:{color:8018e3,density:.0035},apartment:{color:2892316,density:.012}};class iv{constructor(t,e=null){this.canvas=t,this.kits=e,this.renderer=new vg({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.toneMapping=Vc,this.renderer.toneMappingExposure=.95,this.renderer.outputColorSpace=xe,this.scene=new Mh,this.camera=new Ve($.fov,window.innerWidth/window.innerHeight,.1,260),this.postfx=new $x(this.renderer),this.input=new Yx(t),this.audio=new qx,this.ui=new jx,this.textures=o_(),this.materials=l_(this.textures),this.statics=new c_,this.outdoor=new xx(this.scene,this.materials,this.statics,this.textures,e),this.corridor=new Ex(this.scene,this.materials,this.statics),this.arena=new Tx(this.scene,this.materials,this.statics),this.population=new Gx(this.scene,e),this.player=new Kx(this.scene,this.camera,e),this.ghost=new Vx(this.scene,this.corridor),this.stalker=new Xx(this.scene,e),this.hemi=new kg(12109008,4867646,1.35),this.scene.add(this.hemi),this.ambient=new Xg(6975092,.42),this.scene.add(this.ambient),this.dir=new Ch(16766120,1.15),this.dir.position.set(28,22,-48),this.scene.add(this.dir),this.points=[];for(let n=0;n<5;n++){const i=new Rr(16765072,0,32,1.2);this.scene.add(i),this.points.push(i)}this.muzzle=new Rr(16760944,0,8,2),this.scene.add(this.muzzle),this.state="start",this.menuOpen=!1,this.choiceOpen=!1,this.gozeOpen=!1,this.gozeLeft=0,this._wasFlying=!1,this.time=0,this.trail=[],this.trailTimer=0,this.interiors=new Map,this.apartments=new Map,this.current=null,this.currentApt=null,this.interiorGroup=null,this.bombs=[],this.score=0,this.shake=0,this.fadeLevel=0,this.savedOutside={x:0,z:3,yaw:Math.PI},this.elevator=null,this.plant=0,this.planting=!1,this.worldTime=0,this.heartbeat=0,this.stats={kills:0,buildings:0},this.envLook=null,document.documentElement.classList.add("start-open"),document.body.classList.add("start-open"),this.setMode("outside"),this.savedOutside={x:$.chunkSize/2,z:$.chunkSize/2+4,yaw:Math.PI},this.player.teleport(this.savedOutside.x,0,this.savedOutside.z,Math.PI),this.bindUI(),window.addEventListener("resize",()=>this.resize())}applyLook(t,e){ev(this.textures,this.materials,t),this.envLook=e,this.applyEnv()}applyEnv(){if(this.envLook)if(this.scene.environment=this.envLook.env,this.mode==="outside")this.scene.background=this.envLook.hdr,this.scene.backgroundBlurriness=.14,this.scene.backgroundIntensity=.58;else{const t=ba[this.mode]||ba.interior;this.scene.background=new it(t.color),this.scene.backgroundBlurriness=0,this.scene.backgroundIntensity=1}}setChars(t){this.player.setChars(t),this.population.setChars(t),this.stalker.setChars(t)}resize(){this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.postfx.resize()}bindUI(){const t=r=>document.getElementById(r);t("startBtn").onclick=()=>this.startGame(),t("resumeBtn").onclick=()=>this.toggleMenu(!1),t("stalkerBtn").onclick=()=>{this.stalker.setEnabled(!this.stalker.enabled),t("stalkerBtn").textContent="ПРЕСЛЕДОВАТЕЛЬ: "+(this.stalker.enabled?"ВКЛ":"ВЫКЛ"),this.stalker.enabled||this.endHuntMusic(),this.audio.ui()},t("volMusic").oninput=r=>this.audio.setVolumes(parseFloat(r.target.value),this.audio.sfxVolume),t("volSfx").oninput=r=>this.audio.setVolumes(this.audio.musicVolume,parseFloat(r.target.value)),t("sens").oninput=r=>{this.input.sensitivity=.0022*parseFloat(r.target.value)};const e=t("invertY");e&&(e.checked=this.input.invertY,e.onchange=()=>{this.input.invertY=e.checked,localStorage.setItem("invertY",e.checked?"1":"0"),this.audio.ui()}),t("stealthBtn").onclick=()=>this.chooseHunt("stealth"),t("dmBtn").onclick=()=>this.chooseHunt("deathmatch"),t("restartBtn").onclick=()=>location.reload();const n=t("gozeYes"),i=t("gozeNo");n&&(n.onclick=()=>this.answerGoze(!0)),i&&(i.onclick=()=>this.answerGoze(!1)),this.canvas.addEventListener("click",()=>{this.isPlaying()&&!this.menuOpen&&!this.choiceOpen&&!this.gozeOpen&&this.input.lock()})}isPlaying(){return["outside","interior","chase","arena","apartment"].includes(this.state)}startGame(){this.audio.unlock(),document.documentElement.classList.remove("start-open"),document.body.classList.remove("start-open"),this.ui.show("start",!1),this.state="outside",this.outdoor.sessionSeed=Math.random()*1e9|0;for(const t of[...this.outdoor.chunks.keys()])this.outdoor.unload(t);for(let t=0;t<20;t++)this.outdoor.update(this.player.pos,0,null);this.input.lock(),this.audio.playOutside(.72,1.2),this.ui.notify("Двор. Качели скрипят. Найди подъезд.",5,"calm"),this.ui.setCrosshair(!0)}toggleMenu(t){this.isPlaying()&&(this.menuOpen=t,this.ui.show("menu",t),t?this.input.unlock():this.input.lock())}setMode(t){const e=ba[t];this.scene.fog=new Fo(e.color,e.density),this.mode=t,this.applyEnv(),(!this.envLook||t!=="outside")&&(this.scene.background=new it(e.color)),this.outdoor.setVisible(t==="outside"),this.interiorGroup&&(this.interiorGroup.visible=t==="interior"||t==="apartment"),t!=="chase"&&(this.corridor.group.visible=!1),t!=="arena"&&(this.arena.group.visible=!1),this.hemi.intensity=t==="outside"?1.85:t==="arena"?3.8:t==="apartment"?2.4:t==="interior"?1.2:.65,this.hemi.color.set(t==="arena"?15780024:t==="apartment"?15258296:13160664),this.ambient.intensity=t==="outside"?.55:t==="arena"?2.6:t==="apartment"?1.15:.32,this.dir.intensity=t==="outside"?1.25:t==="arena"?2:0,this.statics.hasDefaultGround=!0,this.statics.defaultGround=t==="outside"||t==="arena"?0:-1e3,this.audio.setWind(t==="outside"?.12:.03)}switchWorld(t){if(this.statics.clear(),this.trail.length=0,this.population.clear(e=>e.cls===3||e.cls==="arena"||e.cls==="minion"||t!=="outside"),t==="outside")for(const e of[...this.outdoor.chunks.keys()])this.outdoor.unload(e);this.setMode(t),this.stalker.onWorldChange(this),this.worldTime=0,this.fadeLevel=1,this.stalker.mode==="deathmatch"&&t!=="chase"&&t!=="arena"&&setTimeout(()=>this.spawnMinions($.deathmatchInitialMinions),1500)}enterInterior(t,e=null){this.savedOutside={x:t.x+t.nx*2.4,z:t.z+t.nz*2.4,yaw:Math.atan2(t.nx,t.nz)};let n=this.interiors.get(t.key);if(!n&&(n=yx(t.seed,t.floors,this.materials),n.key=t.key,n.chunkKey=t.chunkKey,n.bombPlanted=!1,n.entrance=t,this.interiors.set(t.key,n),this.interiors.size>8)){const a=this.interiors.keys().next().value;a!==t.key&&(this.interiors.get(a).group.traverse(l=>{var c;return(c=l.geometry)==null?void 0:c.dispose()}),this.interiors.delete(a))}this.interiorGroup&&this.scene.remove(this.interiorGroup),this.interiorGroup=n.group,this.scene.add(n.group),this.current=n,this.switchWorld("interior"),this.state="interior";for(const a of n.boxes)this.statics.add(a.x0,a.y0,a.z0,a.x1,a.y1,a.z1,"int");if(e===null)this.player.teleport(n.playerStart.x,n.playerStart.y,n.playerStart.z,0);else{const a=n.elevators.find(o=>o.floor===e)||n.elevators[0];this.player.teleport(a.x,a.y,a.z,a.floor===0?-Math.PI/2:0)}const i=[...n.spawns].sort(()=>Math.random()-.5),r=Math.min(i.length,dt.int(5,10));for(let a=0;a<r;a++){const o=i[a];Math.hypot(o.x-this.player.pos.x,o.z-this.player.pos.z)<6&&Math.abs(o.y-this.player.pos.y)<1||this.population.spawn(3,o.x,o.y,o.z)}this.audio.stopMusic(1.2),this.ui.notify("Ты внутри. Они тоже.",3.5,"danger"),n.bombPlanted&&this.ui.notify("Бомба здесь уже заложена. Уходи.",3,"info")}exitToOutside(t=this.savedOutside){this.switchWorld("outside"),this.state="outside",this.player.teleport(t.x,t.y??0,t.z,t.yaw),this.player.crouch=!1,this.player.weapon.kind==="minigun"&&this.stalker.mode!=="deathmatch"&&this.player.setWeapon("pistol");for(let e=0;e<9;e++)this.outdoor.update(this.player.pos,0,null);this.audio.playOutside(.72,1.4)}enterApartment(t){if(!t)return;this.savedOutside={x:t.x+t.nx*2.4,z:t.z+t.nz*2.4,y:0,yaw:Math.atan2(-t.nx,-t.nz)};let e=this.apartments.get(t.key);e||(e=Sx(t.key.split("").reduce((n,i)=>n+i.charCodeAt(0),1),this.materials,this.kits),e.window=t,this.apartments.set(t.key,e)),e.window=t,this.interiorGroup&&this.scene.remove(this.interiorGroup),this.interiorGroup=e.group,this.scene.add(e.group),this.currentApt=e,this.switchWorld("apartment"),this.state="apartment";for(const n of e.boxes)this.statics.add(n.x0,n.y0,n.z0,n.x1,n.y1,n.z1,"apt");this.player.flying=!1,this.player.teleport(e.playerStart.x,e.playerStart.y,e.playerStart.z,e.playerStart.yaw),this.population.clear(n=>n.cls===3);for(const n of e.spawns)this.population.spawn(3,n.x,n.y,n.z);this.audio.stopMusic(.8),t.ambush?(this.stalker.pos.x=e.stalkerSpot.x,this.stalker.pos.y=0,this.stalker.pos.z=e.stalkerSpot.z,this.stalker.startHunt(this,{silent:!0}),this.stalker.worldSince=this.time-20,this.ui.notify("ОН УЖЕ В КВАРТИРЕ. Беги в подъезд и вызови лифт.",5.5,"danger")):this.ui.notify("Чужая квартира. Ковёр. Запах борща.",3.2,"info")}exitApartment(t){var i;const e=(i=this.currentApt)==null?void 0:i.window,n=this.stalker.state==="hunt";t&&e&&this.gozeLeft>0?(this.exitToOutside({x:e.x+e.nx*2.6,y:e.y-.95,z:e.z+e.nz*2.6,yaw:Math.atan2(e.nx,e.nz)}),this.player.flying=!0,this.player.pos.y=Math.max(this.player.pos.y,e.y-1.05),n&&(this.stalker.aerial=!0,this.stalker.pos.x=e.x,this.stalker.pos.y=e.y,this.stalker.pos.z=e.z,this.ui.notify("Он летит за тобой. Ищи подъезд и лифт.",5,"danger"))):this.exitToOutside(),this.currentApt=null}endHuntMusic(){this.state!=="chase"&&(this.state==="outside"?this.audio.playOutside(.72,1.2):this.state==="arena"?this.audio.playMusic("arena",.75,1):this.audio.stopMusic(.8))}enterKik(){this.stalker.state==="hunt"&&(this.stalker.reset(),this.endHuntMusic()),this.player.flying=!1,this.gozeOpen=!0,this.ui.show("goze",!0),this.input.unlock()}answerGoze(t){this.gozeOpen&&(this.gozeOpen=!1,this.ui.show("goze",!1),t&&(this.gozeLeft=$.gozeDuration,this.ui.notify("Гавваховый Гозе 60%. Q — полёт под гавваховыми гозе.",4.5,"info")),this.isPlaying()&&this.input.lock())}startChase(){this.chaseReturn={state:this.state,pos:this.player.pos.clone(),yaw:this.player.yaw},this.switchWorld("chase"),this.state="chase",this.corridor.start(),this.player.teleport(0,.05,0,0),this.player.crouch=!1,this.player.pitch=-.1,this.population.renderer.update([]),this.ghost.start(this)}endChase(t){if(t==="eaten"){this.gameOver("Сущность съела тебя. Ты обернулся.");return}if(t==="caught"){this.gameOver("Сущность догнала тебя. Беги быстрее.");return}this.corridor.stop(),this.audio.stopMusic(1.2);const e=this.chaseReturn;if(e.state==="interior"&&this.current){const n=this.current;this.switchWorld("interior"),this.state="interior",this.interiorGroup.visible=!0;for(const a of n.boxes)this.statics.add(a.x0,a.y0,a.z0,a.x1,a.y1,a.z1,"int");const i=dt.int(0,n.floors-1);this.player.teleport(0,i*$.floorHeight,6.5,Math.PI);const r=n.spawns.filter(a=>a.floor!==i).sort(()=>Math.random()-.5).slice(0,dt.int(3,6));for(const a of r)this.population.spawn(3,a.x,a.y,a.z)}else this.exitToOutside({x:e.pos.x,z:e.pos.z,yaw:e.yaw});this.ui.notify("Ты не знаешь, как здесь оказался.",4,"calm")}openHuntChoice(){this.choiceOpen=!0,this.choiceTimer=10,this.ui.show("choice",!0),this.input.unlock(),this.audio.playMusic("choice",.85,.5),this.ui.setStalker("hunt",!0)}chooseHunt(t){this.choiceOpen&&(this.choiceOpen=!1,this.ui.show("choice",!1),this.audio.stopMusic(.8),this.stalker.chooseMode(t,this),this.input.lock(),this.state==="outside"&&this.audio.playOutside(.72,1.2),t==="deathmatch"?(this.player.setWeapon("minigun"),this.spawnMinions($.deathmatchInitialMinions),this.ui.notify("DEATHMATCH. Каждый убитый приведёт двоих.",4,"danger")):this.ui.notify("Уходи тихо. Он идёт по следу. Ищи лифт.",4,"info"))}spawnMinions(t){if(this.stalker.mode!=="deathmatch"||!this.isPlaying()||this.state==="chase"||this.state==="arena")return;const e=this.player.pos;let n=0,i=0;for(;n<t&&i<60;){i++;const r=Math.random()*Math.PI*2,a=dt.range(14,24),o=e.x+Math.cos(r)*a,l=e.z+Math.sin(r)*a,c=this.statics.groundAt(o,l,e.y+1.5,.3);c<e.y-4||c>e.y+4||this.statics.pointInside(o,c+.5,l)||this.statics.pointInside(o,c+1.4,l)||(this.population.spawn("minion",o,c,l,{gruntSpeed:dt.range($.minionSpeed[0],$.minionSpeed[1])}),n++)}}callElevator(){this.player.frozen=!0,this.elevator={t:3.4},this.audio.elevatorHum(!0),this.ui.prompt(null)}finishElevator(){var r;if(this.audio.elevatorHum(!1),this.audio.ding(),this.player.frozen=!1,this.stalker.reset(),this.endHuntMusic(),this.player.flying=!1,this.population.clear(a=>a.cls==="minion"),this.player.weapon.kind==="minigun"&&this.player.setWeapon("pistol"),dt.chance($.elevatorArenaChance)){this.enterArena();return}let t=(r=this.current)==null?void 0:r.entrance;const e=this.outdoor.entrances.filter(a=>a.key!==(t==null?void 0:t.key));e.length&&dt.chance(.45)&&(t=dt.pick(e)),t||(t=this.current.entrance);const n=t.floors;let i=dt.int(0,Math.max(0,Math.min(16,n)-1));this.enterInterior(t,i),this.ui.notify(i===0?"Первый этаж. Кажется.":`Этаж ${i+1}`,3,"calm")}enterArena(){this.switchWorld("arena"),this.state="arena",this.arena.build(),this.player.teleport(0,0,-3,Math.PI),this.player.setWeapon("minigun"),this.arenaTotal=dt.int($.arenaCount[0],$.arenaCount[1]),this.arenaRemaining=this.arenaTotal,this.arenaSpawned=0,this.arenaAcc=0,this.arenaWon=!1,this.arena.setBeacon(!1),this.audio.playMusic("arena",.75,1),this.ui.notify(`DEATHMATCH. ИХ ${this.arenaTotal}. ПАТРОНЫ БЕСКОНЕЧНЫ.`,5,"danger")}updateArena(t){if(this.arenaWon)this.arena.update(t);else{const e=this.population.count("arena");for(this.arenaAcc+=t*$.arenaSpawnPerSec;this.arenaAcc>=1&&e+1<=$.arenaMaxAlive&&this.arenaSpawned<this.arenaTotal;){this.arenaAcc-=1,this.arenaSpawned++;const n=this.arena.randomEdgePoint();this.population.spawn("arena",n.x,0,n.z,{gruntSpeed:dt.range($.arenaGruntSpeed[0],$.arenaGruntSpeed[1])})}this.ui.arena(`ОСТАЛОСЬ: ${this.arenaRemaining}`),this.arenaRemaining<=0&&(this.arenaWon=!0,this.audio.stopMusic(2),this.arena.setBeacon(!0),this.ui.arena("ЛИФТ — СВЕТОВОЙ СТОЛБ В ЦЕНТРЕ"),this.ui.notify("ПОБЕДА. Иди на жёлтый столб.",5,"calm"))}}leaveArena(){this.arena.setBeacon(!1),this.arena.hide(),this.ui.arena(null),this.exitToOutside(),this.ui.notify("Лифт выплюнул тебя обратно во двор.",4,"calm")}updateBombs(t){for(const n of this.bombs){const i=n.t;if(n.t-=t,n.t<10&&Math.floor(i)!==Math.floor(n.t)&&this.audio.bombTick(),n.t<=0){if(n.done=!0,this.audio.explosion(),this.shake=1.6,this.state==="interior"&&this.current&&this.current.chunkKey===n.chunkKey){this.gameOver("Ты подорвался на собственной бомбе.");return}this.outdoor.destroyBuilding(n.chunkKey);for(const[a,o]of[...this.interiors])o.chunkKey===n.chunkKey&&(o.group.traverse(l=>{var c;return(c=l.geometry)==null?void 0:c.dispose()}),this.interiors.delete(a));this.score++,this.stats.buildings++,this.ui.setObjective(this.score),this.ui.notify("ДОМ СЛОЖИЛСЯ. +1",4,"danger")}}this.bombs=this.bombs.filter(n=>!n.done),this.bombs.find(n=>this.current&&n.interiorKey===this.current.key);const e=this.bombs[0];this.ui.bomb(e?`БОМБА: ${Math.ceil(e.t)}с — УХОДИ`:null)}plantBomb(){const t=this.current;t.bombPlanted=!0,this.bombs.push({chunkKey:t.chunkKey,interiorKey:t.key,t:$.bombFuse}),this.audio.bombArmed();const e=this.plantCorner,n=new Tt(new Pe(.3,.18,.3),new Ge({color:4861460}));n.position.set(e.x,e.y+.09,e.z),t.group.add(n),this.ui.notify("БОМБА ЗАЛОЖЕНА. 25 СЕКУНД.",4,"danger")}hurtPlayer(t,e){if(this.state!=="gameover"&&(this.player.damage(t,this.audio),this.shake=Math.max(this.shake,.3),this.player.dead)){const n={stalker:"Преследователь догнал тебя.",3:"Тебя разорвали в подъезде.",2:"Забит насмерть во дворе.",arena:"Арена победила.",minion:"Deathmatch проигран."};this.gameOver(n[e]||"Ты умер.")}}gameOver(t){this.state!=="gameover"&&(this.state="gameover",this.audio.stopMusic(1.5),this.audio.gameOver(),this.audio.elevatorHum(!1),this.input.unlock(),this.ui.prompt(null),this.ui.progress(null),this.ui.showChaseHint(!1),this.ui.gameOver(t,`Заминировано подъездов: ${this.score} · Убито сущностей: ${this.population.killed} · Время: ${Math.floor(this.time)}с`))}updateInteraction(t){const e=this.player,n=e.pos;let i=null,r=null;if(this.planting=!1,this.state==="outside"){const a=this.outdoor.nearestEntrance(n.x,n.z,1.8);a&&(i="E — войти в подъезд",r=()=>this.enterInterior(a));const o=this.outdoor.nearestKik(n.x,n.z,2.3);!r&&o&&(i="E — войти в Красное и Коричневое",r=()=>this.enterKik());const l=this.outdoor.nearestWindow(n.x,n.y+1.15,n.z,e.flying?2.9:2.3);!r&&l&&(e.flying||Math.abs(n.y+1.2-l.y)<1.8)&&(i="E — влететь в окно",r=()=>this.enterApartment(l))}else if(this.state==="apartment"&&this.currentApt){const a=this.currentApt;Math.hypot(n.x-a.windowExit.x,n.z-a.windowExit.z)<1.5&&(i=e.flying?"E — вылететь в окно":this.gozeLeft>0?"E — к окну  ·  Q — полёт":"E — к окну",r=()=>this.exitApartment(!0)),Math.hypot(n.x-a.door.x,n.z-a.door.z)<1.35&&(i="E — в подъезд",r=()=>{var l,c;const o=((l=a.window)==null?void 0:l.entrance)||this.outdoor.entrances[0];o&&this.enterInterior(o,((c=a.window)==null?void 0:c.floor)??0)})}else if(this.state==="interior"&&this.current){const a=this.current;Math.hypot(n.x-a.exit.x,n.z-a.exit.z)<1.3&&Math.abs(n.y)<1&&(i="E — выйти на улицу",r=()=>this.exitToOutside());for(const c of a.elevators)Math.hypot(n.x-c.x,n.z-c.z)<1.3&&Math.abs(n.y-c.y)<1&&(i="E — вызвать лифт",r=()=>this.callElevator());let o=null,l=1.1;for(const c of a.corners){const u=Math.hypot(n.x-c.x,n.z-c.z);u<l&&Math.abs(n.y-c.y)<.8&&(l=u,o=c)}o&&!r&&(a.bombPlanted?i="Здесь уже заложено":e.crouch?(i="Держи E — заложить бомбу",this.plantCorner=o,this.input.down("KeyE")&&(this.planting=!0,this.plant===0&&this.audio.shit(),this.plant+=t/$.bombPlantTime,this.plant>=1&&(this.plant=0,this.planting=!1,this.plantBomb(),i=null))):i="Присядь (C), чтобы заложить бомбу")}else if(this.state==="arena"&&this.arenaWon){const a=this.arena.elevator;Math.hypot(n.x-a.x,n.z-a.z)<1.6&&(i="E — лифт",r=()=>this.leaveArena())}this.planting||(this.plant=0),this.ui.progress(this.planting?this.plant:null),this.ui.prompt(i),r&&this.input.hit("KeyE")&&r()}updateShooting(t,e){const n=this.player.weapon;if(this.muzzle.intensity*=Math.max(0,1-t*25),!e){n.kind==="pistol"&&this.input.mouseClicked&&n.mag===0&&n.reload()&&this.audio.reload();return}if(n.kind==="pistol"&&n.mag===0&&this.input.mouseClicked){n.reload()&&this.audio.reload();return}const i=n.tryFire(t);for(let r=0;r<i;r++){n.kind==="minigun"?this.audio.minigun():this.audio.pistol();const a=new L;this.camera.getWorldDirection(a),a.x+=(Math.random()-.5)*n.cfg.spread*2,a.y+=(Math.random()-.5)*n.cfg.spread*2,a.z+=(Math.random()-.5)*n.cfg.spread*2,a.normalize();const o=this.population.raycast(this.camera.position,a,200);o&&this.population.hurt(o.entity,n.cfg.damage,this.ctx),this.muzzle.intensity=n.kind==="minigun"?14:20,this.muzzle.position.copy(this.player.pos).add(new L(Math.sin(this.player.modelYaw)*.6,1.4,Math.cos(this.player.modelYaw)*.6)),this.shake=Math.max(this.shake,n.kind==="minigun"?.12:.18)}}updateLights(t){const e=this.player.pos;let n=[];if(this.state==="interior"&&this.current)n=this.current.lamps.map(i=>({...i,color:16765072,i:9}));else if(this.state==="chase")n=this.corridor.lamps.map(i=>({...i,color:16765072,i:8}));else if(this.state==="outside")for(const i of this.outdoor.entrances)i.lamp&&n.push({x:i.x+i.nx*.9,y:2.3,z:i.z+i.nz*.9,color:16765072,i:7,flicker:!1});else this.state==="apartment"&&this.currentApt?n=this.currentApt.lamps.map(i=>({...i,color:16767136,i:9})):this.state==="arena"&&(n.push({x:e.x,y:5.8,z:e.z,color:16771280,i:36,flicker:!1}),n.push({x:e.x+10,y:6.2,z:e.z+4,color:16763040,i:26,flicker:!1}),n.push({x:e.x-10,y:6.2,z:e.z-4,color:16763040,i:26,flicker:!1}),n.push({x:0,y:6.4,z:0,color:16774364,i:this.arenaWon?48:32,flicker:!1}),n.push({x:0,y:3.4,z:3.2,color:16769152,i:this.arenaWon?55:18,flicker:!1}));n.sort((i,r)=>Math.hypot(i.x-e.x,i.z-e.z)+Math.abs(i.y-e.y)*2-(Math.hypot(r.x-e.x,r.z-e.z)+Math.abs(r.y-e.y)*2));for(let i=0;i<this.points.length;i++){const r=this.points[i],a=n[i];if(!a){r.intensity=0;continue}r.position.set(a.x,a.y,a.z),r.color.set(a.color),r.intensity=a.i*(a.flicker?(Math.random()>.12?1:.15)*(.85+Math.sin(this.time*17+i)*.15):1)}}update(t){if(t=Math.min(t,.05),this.state==="start"||this.state==="gameover"){this.render(t),this.input.flush();return}if(this.input.hit("Escape")&&!this.choiceOpen&&!this.gozeOpen&&this.toggleMenu(!this.menuOpen),this.gozeOpen&&(this.input.hit("KeyY")?this.answerGoze(!0):this.input.hit("KeyN")&&this.answerGoze(!1)),this.choiceOpen&&(this.choiceTimer-=t,this.ui.el.choiceTimer.textContent=Math.ceil(this.choiceTimer),this.input.hit("Digit1")?this.chooseHunt("stealth"):this.input.hit("Digit2")?this.chooseHunt("deathmatch"):this.choiceTimer<=0&&this.chooseHunt("stealth")),this.menuOpen||this.choiceOpen||this.gozeOpen){this.render(t),this.input.flush();return}!this.input.locked&&this.isPlaying(),this.time+=t,this.worldTime+=t;const e=this.player;this.elevator&&(this.elevator.t-=t,this.fadeLevel=Math.min(1,this.fadeLevel+t*.8),this.shake=.08,this.elevator.t<=0&&(this.elevator=null,this.finishElevator())),this.ctx={player:e,statics:this.statics,audio:this.audio,trail:this.trail,inside:this.state!=="outside",onPlayerHit:(a,o)=>this.hurtPlayer(a,o.cls),onLunge:()=>{this.shake=Math.max(this.shake,.85)},onMinionDeath:()=>{this.stats.kills++,this.spawnMinions(2)},onArenaDeath:()=>{this.stats.kills++,this.arenaRemaining--}};const n=this.state==="arena"||this.stalker.mode==="deathmatch";this.gozeLeft>0&&(this.gozeLeft-=t,this.gozeLeft<=0&&(this.gozeLeft=0,e.flying=!1,this._wasFlying=!1,this.ui.notify("Ты протрезвел, если хочешь ещё полетать, иди в Красное и Коричневое",6.5,"info")));const i=e.update(t,this.input,this.statics,this.audio,{inside:this.state!=="outside"&&this.state!=="apartment",noFire:this.state==="chase"||!!this.elevator,camDist:this.state==="apartment"?2.15:n?$.camDistCombat:$.camDist,canFly:this.gozeLeft>0});e.flyDenied&&(e.flyDenied=!1,this.ui.notify("Полёт закрыт. Иди в Красное и Коричневое.",3.2,"info")),e.flying!==this._wasFlying&&(this._wasFlying=e.flying,this.ui.notify(e.flying?"Полёт. Лети к светящимся окнам.":"Полёт выключен.",2.2,"info")),e.landed&&(!e.flying&&e.landed>6&&this.hurtPlayer(Math.min(40,(e.landed-6)*6),"fall"),e.landed=0),this.trailTimer+=t;const r=this.trail[this.trail.length-1];switch((!r||this.trailTimer>.2||Math.hypot(r.x-e.pos.x,r.z-e.pos.z)>.6)&&(this.trailTimer=0,this.trail.push({x:e.pos.x,y:e.pos.y,z:e.pos.z,t:this.time}),this.trail.length>400&&this.trail.splice(0,this.trail.length-400)),this.state){case"outside":if(this.outdoor.update(e.pos,t,this.audio),this.population.maintainOutside(this.outdoor,e.pos,t),this.worldTime>15&&!this.elevator&&dt.chance($.ghostOutsideChancePerSec*t)){this.startChase();break}break;case"interior":if(this.worldTime>12&&!this.elevator&&dt.chance($.ghostInteriorChancePerSec*t)){this.startChase();break}e.pos.y<-20&&e.teleport(this.current.playerStart.x,0,this.current.playerStart.z);break;case"apartment":e.pos.y<-8&&this.currentApt&&e.teleport(this.currentApt.playerStart.x,0,this.currentApt.playerStart.z);break;case"chase":{this.corridor.update(e.pos,t);const a=this.ghost.update(t,this);a&&this.endChase(a);break}case"arena":this.updateArena(t),e.pos.y<-20&&e.teleport(0,0,-3);break}if(this.state==="gameover"){this.render(t),this.input.flush();return}this.state!=="chase"&&(this.state!=="arena"&&this.stalker.update(t,this),this.population.update(t,this.ctx),this.updateInteraction(t),this.updateShooting(t,i)),this.updateBombs(t),this.updateLights(t),e.hp<30&&(this.heartbeat-=t,this.heartbeat<=0&&(this.heartbeat=.9,this.audio.heartbeat())),this.ui.setHp(e.hp,$.maxHp),this.ui.setAmmo(e.weapon),this.ui.setStalker(this.stalker.state,this.stalker.enabled),this.ui.setCrosshair(!0,this.state==="arena"||this.stalker.mode==="deathmatch"),this.shake>0&&(this.camera.position.x+=(Math.random()-.5)*this.shake*.25,this.camera.position.y+=(Math.random()-.5)*this.shake*.25,this.shake=Math.max(0,this.shake-t*1.8)),this.fadeLevel=Math.max(0,this.fadeLevel-t*1.4),this.render(t),this.input.flush()}render(t){const e=this.postfx.material.uniforms;e.hurt.value=this.player.hurtFlash||0,e.fade.value=this.elevator?Math.min(1,this.fadeLevel):this.fadeLevel;let n=this.ui.chaseIntensity;if(this.stalker.state==="hunt"&&this.stalker.mode&&this.stalker.mesh.visible){const i=Math.hypot(this.stalker.pos.x-this.player.pos.x,this.stalker.pos.z-this.player.pos.z);n=Math.max(n,Math.max(0,1-i/12)*.8)}e.pulse.value=n,this.postfx.render(this.scene,this.camera,t)}}const sv=document.getElementById("game"),Xh=new Map,xn=new iv(sv,Xh);window.__obamka=xn;let Hc=performance.now();function Kh(s){const t=(s-Hc)/1e3;Hc=s;try{xn==null||xn.update(t)}catch(e){console.error(e),window.__lastError=String(e.stack||e)}requestAnimationFrame(Kh)}requestAnimationFrame(Kh);Promise.all([tv(),nv(xn.renderer,xn.scene)]).then(([s,t])=>{xn.applyLook(s,t)}).catch(s=>console.warn("[look] failed",(s==null?void 0:s.message)||s));px().then(s=>{var t;for(const[e,n]of s)Xh.set(e,n);if((t=xn.outdoor)!=null&&t.chunks.size)for(const e of[...xn.outdoor.chunks.keys()])xn.outdoor.unload(e)}).catch(s=>{console.warn("[kits] preload failed",(s==null?void 0:s.message)||s)});dx().then(s=>{s.size&&xn.setChars(s)}).catch(s=>{console.warn("[chars] preload failed",(s==null?void 0:s.message)||s)});
