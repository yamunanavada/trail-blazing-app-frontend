
          window.__NEXT_REGISTER_CHUNK('app_components_PortalWrapper_react_214a65a7b89932ffdd521636ebcac9de.js', function() {
            webpackJsonp([2],{139:function(t,e,n){"use strict";function o(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}o(),t.exports=n(302)},150:function(t,e,n){"use strict";function o(t){return r(t)&&3==t.nodeType}var r=n(151);t.exports=o},151:function(t,e,n){"use strict";function o(t){var e=t?t.ownerDocument||t:document,n=e.defaultView||window;return!(!t||!("function"==typeof n.Node?t instanceof n.Node:"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName))}t.exports=o},303:function(t,e,n){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen,isInWorker:!o};t.exports=r},304:function(t,e,n){"use strict";var o=n(284),r={listen:function(t,e,n){return t.addEventListener?(t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1)}}):t.attachEvent?(t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n)}}):void 0},capture:function(t,e,n){return t.addEventListener?(t.addEventListener(e,n,!0),{remove:function(){t.removeEventListener(e,n,!0)}}):{remove:o}},registerDefault:function(){}};t.exports=r},305:function(t,e,n){"use strict";function o(t){if(void 0===(t=t||("undefined"!=typeof document?document:void 0)))return null;try{return t.activeElement||t.body}catch(e){return t.body}}t.exports=o},306:function(t,e,n){"use strict";function o(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!==t&&e!==e}function r(t,e){if(o(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var u=0;u<n.length;u++)if(!i.call(e,n[u])||!o(t[n[u]],e[n[u]]))return!1;return!0}var i=Object.prototype.hasOwnProperty;t.exports=r},307:function(t,e,n){"use strict";function o(t,e){return!(!t||!e)&&(t===e||!r(t)&&(r(e)?o(t,e.parentNode):"contains"in t?t.contains(e):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(e))))}var r=n(150);t.exports=o},308:function(t,e,n){"use strict";function o(t){try{t.focus()}catch(t){}}t.exports=o},601:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(3),i=o(r),u=n(1),c=o(u),a=n(2),s=o(a),l=n(4),d=o(l),f=n(5),p=o(f),v=n(0),_=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(v),h=n(139),y=function(t){function e(){var t,n,o,r;(0,c.default)(this,e);for(var u=arguments.length,a=Array(u),s=0;s<u;s++)a[s]=arguments[s];return n=o=(0,d.default)(this,(t=e.__proto__||(0,i.default)(e)).call.apply(t,[this].concat(a))),o.state={isPortalOpen:!1},o.setIsPortalOpen=function(t){return o.setState({isPortalOpen:t})},o.Portal=function(t){var e=t.children;return o._portalNode?_.createElement(m,{setIsPortalOpen:o.setIsPortalOpen,node:o._portalNode},e):null},o.openPortal=function(){o._portalNode=document.createElement("div"),o._rootNode&&o._rootNode.appendChild(o._portalNode),o.forceUpdate()},o.closePortal=function(){o._portalNode&&o._rootNode&&o._rootNode.removeChild(o._portalNode),o._portalNode=null,o.forceUpdate()},r=n,(0,d.default)(o,r)}return(0,p.default)(e,t),(0,s.default)(e,[{key:"componentWillMount",value:function(){this._rootNode=this.props.rootId?document.getElementById(this.props.rootId):document.body,this.openPortal()}},{key:"componentWillUnmount",value:function(){this.closePortal()}},{key:"render",value:function(){return this.props.children({openPortal:this.openPortal,closePortal:this.closePortal,Portal:this.Portal,isPortalOpen:this.state.isPortalOpen})}}]),e}(_.Component);e.default=y;var m=function(t){function e(){return(0,c.default)(this,e),(0,d.default)(this,(e.__proto__||(0,i.default)(e)).apply(this,arguments))}return(0,p.default)(e,t),(0,s.default)(e,[{key:"componentDidMount",value:function(){this.props.setIsPortalOpen(!0)}},{key:"componentWillUnmount",value:function(){this.props.setIsPortalOpen(!1)}},{key:"render",value:function(){return(0,h.createPortal)(this.props.children,this.props.node)}}]),e}(_.PureComponent)}});
          })
        