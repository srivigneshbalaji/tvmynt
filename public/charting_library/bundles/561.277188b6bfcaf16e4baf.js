(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[561],{59142:function(e,t){var n,o,s;o=[t],void 0===(s="function"==typeof(n=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var o={get passive(){n=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var s="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),a=[],r=!1,i=-1,l=void 0,c=void 0,u=function(e){return a.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},h=function(e){var t=e||window.event;return!!u(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},d=function(){setTimeout((function(){void 0!==c&&(document.body.style.paddingRight=c,c=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)}))};e.disableBodyScroll=function(e,o){if(s){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!a.some((function(t){return t.targetElement===e}))){var d={targetElement:e,options:o||{}};a=[].concat(t(a),[d]),e.ontouchstart=function(e){1===e.targetTouches.length&&(i=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var n,o,s,a;1===t.targetTouches.length&&(o=e,a=(n=t).targetTouches[0].clientY-i,!u(n.target)&&(o&&0===o.scrollTop&&0<a||(s=o)&&s.scrollHeight-s.scrollTop<=s.clientHeight&&a<0?h(n):n.stopPropagation()))},r||(document.addEventListener("touchmove",h,n?{passive:!1}:void 0),r=!0)}}else{m=o,setTimeout((function(){if(void 0===c){var e=!!m&&!0===m.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(c=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}));var p={targetElement:e,options:o||{}};a=[].concat(t(a),[p])}var m},e.clearAllBodyScrollLocks=function(){s?(a.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),r&&(document.removeEventListener("touchmove",h,n?{passive:!1}:void 0),r=!1),a=[],i=-1):(d(),a=[])},e.enableBodyScroll=function(e){if(s){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,a=a.filter((function(t){return t.targetElement!==e})),r&&0===a.length&&(document.removeEventListener("touchmove",h,n?{passive:!1}:void 0),r=!1)}else 1===a.length&&a[0].targetElement===e?(d(),a=[]):a=a.filter((function(t){return t.targetElement!==e}))}})?n.apply(t,o):n)||(e.exports=s)},37593:e=>{e.exports={wrapper:"wrapper-5Xd5conM",input:"input-5Xd5conM",box:"box-5Xd5conM",icon:"icon-5Xd5conM",noOutline:"noOutline-5Xd5conM","intent-danger":"intent-danger-5Xd5conM",check:"check-5Xd5conM",
dot:"dot-5Xd5conM"}},62092:e=>{e.exports={loader:"loader-MuZZSHRY",static:"static-MuZZSHRY",item:"item-MuZZSHRY","tv-button-loader":"tv-button-loader-MuZZSHRY",medium:"medium-MuZZSHRY",small:"small-MuZZSHRY",black:"black-MuZZSHRY",white:"white-MuZZSHRY",gray:"gray-MuZZSHRY",primary:"primary-MuZZSHRY","loader-initial":"loader-initial-MuZZSHRY","loader-appear":"loader-appear-MuZZSHRY"}},88797:e=>{e.exports={loaderWrap:"loaderWrap-wpeeczk7",big:"big-wpeeczk7",loader:"loader-wpeeczk7"}},19119:e=>{e.exports={item:"item-tPYeYcJa",interactive:"interactive-tPYeYcJa",hovered:"hovered-tPYeYcJa",disabled:"disabled-tPYeYcJa",active:"active-tPYeYcJa",shortcut:"shortcut-tPYeYcJa",normal:"normal-tPYeYcJa",big:"big-tPYeYcJa",iconCell:"iconCell-tPYeYcJa",icon:"icon-tPYeYcJa",checkmark:"checkmark-tPYeYcJa",content:"content-tPYeYcJa",label:"label-tPYeYcJa",checked:"checked-tPYeYcJa",toolbox:"toolbox-tPYeYcJa",showToolboxOnHover:"showToolboxOnHover-tPYeYcJa",arrowIcon:"arrowIcon-tPYeYcJa",subMenu:"subMenu-tPYeYcJa",invisibleHotkey:"invisibleHotkey-tPYeYcJa"}},52506:e=>{e.exports={row:"row-Bc0VIp30",line:"line-Bc0VIp30",hint:"hint-Bc0VIp30"}},33549:e=>{e.exports={menu:"menu-qOMHRo3C"}},61999:e=>{e.exports={item:"item-zoYF2FPa",emptyIcons:"emptyIcons-zoYF2FPa",loading:"loading-zoYF2FPa",disabled:"disabled-zoYF2FPa",interactive:"interactive-zoYF2FPa",hovered:"hovered-zoYF2FPa",normal:"normal-zoYF2FPa",big:"big-zoYF2FPa",icon:"icon-zoYF2FPa",label:"label-zoYF2FPa",title:"title-zoYF2FPa",nested:"nested-zoYF2FPa",shortcut:"shortcut-zoYF2FPa",remove:"remove-zoYF2FPa"}},76860:e=>{e.exports={separator:"separator-ErQ6N9mF"}},8323:(e,t,n)=>{"use strict";n.d(t,{CheckboxInput:()=>c});var o=n(59496),s=n(97754),a=n(72571),r=n(57369),i=n(37593),l=n.n(i);function c(e){const t=s(l().box,l()["intent-"+e.intent],{[l().check]:!Boolean(e.indeterminate),[l().dot]:Boolean(e.indeterminate),[l().noOutline]:-1===e.tabIndex}),n=s(l().wrapper,e.className);return o.createElement("span",{className:n,title:e.title},o.createElement("input",{id:e.id,tabIndex:e.tabIndex,className:l().input,type:"checkbox",name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,autoFocus:e.autoFocus,role:e.role,onChange:function(){e.onChange&&e.onChange(e.value)},ref:e.reference}),o.createElement("span",{className:t},o.createElement(a.Icon,{icon:r,className:l().icon})))}},34404:(e,t,n)=>{"use strict";n.d(t,{Loader:()=>c});var o,s=n(59496),a=n(97754),r=n(49423),i=n(62092),l=n.n(i);!function(e){e[e.Initial=0]="Initial",e[e.Appear=1]="Appear",e[e.Active=2]="Active"}(o||(o={}));class c extends s.PureComponent{constructor(e){super(e),this._stateChangeTimeout=null,this.state={state:o.Initial}}render(){const{className:e,color:t="black",size:n="medium",staticPosition:o}=this.props,r=a(l().item,l()[t],l()[n]);return s.createElement("span",{className:a(l().loader,o&&l().static,this._getStateClass(),e)},s.createElement("span",{className:r}),s.createElement("span",{className:r}),s.createElement("span",{className:r}))}componentDidMount(){this.setState({state:o.Appear}),
this._stateChangeTimeout=setTimeout(()=>{this.setState({state:o.Active})},2*r.dur)}componentWillUnmount(){this._stateChangeTimeout&&(clearTimeout(this._stateChangeTimeout),this._stateChangeTimeout=null)}_getStateClass(){switch(this.state.state){case o.Initial:return l()["loader-initial"];case o.Appear:return l()["loader-appear"];default:return""}}}},28786:(e,t,n)=>{"use strict";n.d(t,{ActionsTable:()=>I});var o=n(59496),s=n(52506);function a(e){return o.createElement("tr",{className:s.row},o.createElement("td",null,o.createElement("div",{className:s.line})),o.createElement("td",null,o.createElement("div",{className:s.line}),e.hint?o.createElement("div",{className:s.hint},e.hint):null))}var r=n(88537),i=n(97754),l=n.n(i),c=n(8323),u=n(1227),h=n(72535);var d=n(72621),p=n(77687),m=n(68620),v=n(76821),b=n(77154),g=n(96366),f=n(19119);class E extends o.PureComponent{constructor(){super(...arguments),this._handleMouseOver=e=>{(function(e){const t=e.sourceCapabilities;let n=t&&t.firesTouchEvents;return void 0===n&&(n=h.touch),n})(e.nativeEvent)||this.props.onMouseOver&&this.props.onMouseOver()},this._handleClickToolbox=e=>{e.stopPropagation(),this.props.onClickToolbox&&this.props.onClickToolbox()}}render(){const{hasSubItems:e,shortcutHint:t,hint:n,invisibleHotkey:s,favourite:a,theme:r=f,size:l="normal"}=this.props,c=this.props.checkable&&this.props.checkboxInput?"label":"div";return o.createElement(o.Fragment,null,o.createElement("tr",{className:i(r.item,!this.props.noInteractive&&r.interactive,this.props.hovered&&r.hovered,this.props.disabled&&r.disabled,this.props.active&&r.active,this.props.selected&&r.selected,r[l]),onClick:this.props.onClick,onMouseOver:this._handleMouseOver,ref:this.props.reference,"data-action-name":this.props.actionName},void 0!==a&&o.createElement("td",null,o.createElement(p.FavoriteButton,{className:r.favourite,isFilled:a,onClick:this.props.onFavouriteClick})),o.createElement("td",{className:i(r.iconCell),"data-icon-cell":!0},this._icon(r)),o.createElement("td",{className:r.contentCell},o.createElement(c,{className:r.content},o.createElement("span",{className:i(r.label,this.props.checked&&r.checked),"data-label":!0},this.props.label),this._toolbox(r),e&&o.createElement("span",{className:r.arrowIcon,dangerouslySetInnerHTML:{__html:g},"data-submenu-arrow":!0}),!e&&t&&!u.CheckMobile.any()&&o.createElement(m.Hint,{className:i(s&&r.invisibleHotkey),text:t}),!e&&!t&&n&&o.createElement(m.Hint,{text:n})))),o.createElement("tr",{className:r.subMenu},o.createElement("td",null,this.props.children)))}_icon(e){if(this.props.checkable){if(this.props.checkboxInput)return o.createElement(c.CheckboxInput,{className:i(e.icon,e.checkboxInput),checked:this.props.checked});if(this.props.checked){const t=!this.props.icon&&!this.props.iconChecked,n=this.props.iconChecked||this.props.icon||b;return o.createElement("span",{className:i(e.icon,t&&e.checkmark),dangerouslySetInnerHTML:{__html:n},"data-icon-checkmark":t})}return this.props.icon?o.createElement("span",{className:e.icon,dangerouslySetInnerHTML:{
__html:this.props.icon}}):o.createElement("span",{className:e.icon})}return this.props.icon?o.createElement("span",{className:e.icon,dangerouslySetInnerHTML:{__html:this.props.icon}}):null}_toolbox(e){return this.props.toolbox?o.createElement("span",{className:i(e.toolbox,this.props.showToolboxOnHover&&e.showToolboxOnHover),onClick:this._handleClickToolbox,"data-toolbox":!0},this._renderToolboxContent()):null}_renderToolboxContent(){if(this.props.toolbox)switch(this.props.toolbox.type){case v.ToolboxType.Delete:return o.createElement(d.RemoveButton,{onClick:this.props.toolbox.action})}return null}}var w=n(75753),x=n(70981),C=n(32133),k=n(34581);var _=n(94488),S=n(34404),M=n(88797);function y(e){const{size:t="normal"}=e;return o.createElement(E,{size:t,label:o.createElement("div",{className:l()(M.loaderWrap,M[t])},o.createElement(S.Loader,{className:M.loader})),noInteractive:!0,onMouseOver:e.onMouseOver})}class N extends o.PureComponent{constructor(e){super(e),this._itemRef=null,this._menuElementRef=o.createRef(),this._menuRef=null,this._handleClick=e=>{e.isDefaultPrevented()||this.state.disabled||(this._hasSubItems()?this._showSubMenu():(this.state.doNotCloseOnClick||(0,x.globalCloseMenu)(),this.props.action.execute(),this._trackEvent(),this.props.onExecute&&this.props.onExecute(this.props.action)))},this._handleClickToolbox=()=>{(0,x.globalCloseMenu)()},this._handleItemMouseOver=()=>{this._showSubMenu(),this._setCurrentContextValue()},this._handleMenuMouseOver=()=>{this._setCurrentContextValue()},this._showSubMenu=()=>{this.props.onShowSubMenu(this.props.action)},this._calcSubMenuPos=e=>function(e,t,n={x:0,y:10}){if(t){const{left:n,right:o,top:s}=t.getBoundingClientRect(),a=document.documentElement.clientWidth,r={x:n-e,y:s},i={x:o,y:s};return(0,k.isRtl)()?n<=e?i:r:a-o>=e?i:r}return n}(e,this._itemRef),this._updateState=e=>{this.setState(e.getState())},this._setItemRef=e=>{this._itemRef=e},this._handleMenuRef=e=>{this._menuRef=e},this._registerSubmenu=()=>{var e;return null===(e=this.context)||void 0===e?void 0:e.registerSubmenu(this.props.action.id,e=>(0,r.ensureNotNull)(this._itemRef).contains(e)||null!==this._menuElementRef.current&&this._menuElementRef.current.contains(e))},this.state={...this.props.action.getState()}}componentDidMount(){this.props.action.onUpdate().subscribe(this,this._updateState),this.state.subItems.length&&(this._unsubscribe=this._registerSubmenu()),this.props.reference&&(this._itemRef=this.props.reference.current)}componentDidUpdate(e,t){var n,o,s;t.loading!==this.state.loading&&(null===(o=(n=this.props).onRequestUpdate)||void 0===o||o.call(n)),0===t.subItems.length&&this.state.subItems.length>0&&(this._unsubscribe=this._registerSubmenu()),t.subItems.length>0&&0===this.state.subItems.length&&(null===(s=this._unsubscribe)||void 0===s||s.call(this)),t.subItems!==this.state.subItems&&null!==this._menuRef&&this._menuRef.update()}componentWillUnmount(){this.props.action.onUpdate().unsubscribe(this,this._updateState),this._unsubscribe&&this._unsubscribe()}render(){var e,t,n
;const s=null!==(e=this.state.jsxLabel)&&void 0!==e?e:this.state.label,a=(null===(t=this.context)||void 0===t?void 0:t.current)?this.context.current===this.props.action.id:this.props.isSubMenuOpened;return this.state.loading?o.createElement(y,{size:this.state.size}):o.createElement(E,{theme:this.props.theme,reference:null!==(n=this.props.reference)&&void 0!==n?n:this._setItemRef,onClick:this._handleClick,onClickToolbox:this._handleClickToolbox,onMouseOver:this._handleItemMouseOver,hovered:a,hasSubItems:this._hasSubItems(),actionName:this.state.name,checkboxInput:this.props.checkboxInput,selected:this.props.selected,...this.state,label:s},o.createElement(w.ContextMenu,{isOpened:a,items:this.state.subItems,position:this._calcSubMenuPos,menuStatName:this.props.menuStatName,parentStatName:this._getStatName(),menuElementReference:this._menuElementRef,onMouseOver:this.state.subItems.length?this._handleMenuMouseOver:void 0,ref:this._handleMenuRef}))}_setCurrentContextValue(){var e;this.state.subItems.length&&(null===(e=this.context)||void 0===e||e.setCurrent(this.props.action.id))}_hasSubItems(){return this.state.subItems.length>0}_trackEvent(){const e=this._getStatName();(0,C.trackEvent)("ContextMenuClick",this.props.menuStatName||"",e)}_getStatName(){return[this.props.parentStatName,this.state.statName].filter(e=>Boolean(e)).join(".")}}N.contextType=_.SubmenuContext;class I extends o.PureComponent{constructor(e){super(e),this._handleShowSubMenu=e=>{const t=e.getState();this.setState({showSubMenuOf:t.subItems.length?e:void 0})},this.state={}}render(){return o.createElement("table",null,o.createElement("tbody",null,this.props.items.map(e=>this._item(e))))}static getDerivedStateFromProps(e,t){return!e.parentIsOpened&&t.showSubMenuOf?{showSubMenuOf:void 0}:null}_item(e){switch(e.type){case"separator":return o.createElement(a,{key:e.id,hint:e.getHint()});case"action":return o.createElement(N,{key:e.id,action:e,onShowSubMenu:this._handleShowSubMenu,isSubMenuOpened:this.state.showSubMenuOf===e,menuStatName:this.props.menuStatName,parentStatName:this.props.parentStatName,onRequestUpdate:this.props.onRequestUpdate})}}}},75753:(e,t,n)=>{"use strict";n.d(t,{ContextMenu:()=>_,OverlapContextMenu:()=>S});var o=n(59496),s=n(97754),a=n.n(s),r=n(74485),i=n(10618),l=n(23235),c=n(49161),u=n(28786),h=n(63694),d=n(30052),p=n(76860);function m(e){return o.createElement("li",{className:p.separator})}var v=n(29624),b=n(59339),g=n(70981);function f(e){const{action:t}=e,[n,s]=(0,o.useState)(()=>t.getState()),[a,r]=(0,o.useState)(!1),i=!!n.subItems.length,l=i&&a;return(0,o.useEffect)(()=>{const e=()=>s(t.getState());return t.onUpdate().subscribe(null,e),()=>{t.onUpdate().unsubscribe(null,e)}},[]),o.createElement(v.ContextMenuItem,{...n,onClick:function(e){if(n.disabled||e.defaultPrevented)return;if(i)return void r(!0);n.doNotCloseOnClick||(0,g.globalCloseMenu)();t.execute()},isLoading:n.loading,isHovered:l},l&&o.createElement(b.Drawer,{onClose:c},o.createElement(x,{items:n.subItems,parentAction:t,closeNested:c})));function c(e){
e&&e.preventDefault(),r(!1)}}var E=n(34064),w=n(37799);function x(e){const{items:t,parentAction:n,closeNested:s}=e,a=!Boolean(n)&&t.every(e=>!Boolean("separator"!==e.type&&(e.getState().icon||e.getState().checkable)));return o.createElement(E.EmptyIconsContext.Provider,{value:a},o.createElement("ul",null,n&&o.createElement(o.Fragment,null,o.createElement(v.ContextMenuItem,{label:n.getState().label,isTitle:!0,active:!1,disabled:!1,subItems:[],checkable:!1,checked:!1,doNotCloseOnClick:!1,icon:w,onClick:s}),o.createElement(m,null)),t.map(e=>{switch(e.type){case"action":return o.createElement(f,{key:e.id,action:e});case"separator":return o.createElement(m,{key:e.id})}})))}const C=o.createContext(null);var k=n(33549);class _ extends o.PureComponent{constructor(e){super(e),this._menuRef=o.createRef(),this._handleRequestUpdate=()=>{this.update()},this._handleClose=()=>{this.props.onClose&&this.props.onClose()},this._handleOutsideClickClose=e=>{const{doNotCloseOn:t,onClose:n}=this.props;!n||void 0!==t&&t.contains(e.target)||n()},this._handleFocusOnOpen=()=>{var e,t;(null===(e=this.props.menuElementReference)||void 0===e?void 0:e.current)&&this.props.takeFocus&&(null===(t=this.props.menuElementReference)||void 0===t||t.current.focus({preventScroll:!0}))},this.state={}}render(){const{isOpened:e,onClose:t,items:n,doNotCloseOn:s,menuStatName:r,parentStatName:p,takeFocus:m,...v}=this.props;return e?o.createElement(h.DrawerManager,null,o.createElement(c.KeyboardDocumentListener,{keyCode:27,eventType:"keyup",handler:this._handleClose}),o.createElement(d.MatchMedia,{rule:"screen and (max-width: 428px)"},t=>this._isDrawer(t)?o.createElement(C.Provider,{value:{type:"drawer"}},o.createElement(b.Drawer,{onClose:this._handleClose,position:"Bottom","data-name":v["data-name"]},o.createElement(x,{items:n}))):o.createElement(C.Provider,{value:{type:"menu"}},o.createElement(l.OutsideEvent,{handler:this._handleOutsideClickClose,mouseDown:!0,touchStart:!0,reference:this.props.menuElementReference},t=>o.createElement(i.Menu,{...v,reference:t,className:a()(k.menu,"context-menu"),onClose:this._handleClose,noMomentumBasedScroll:!0,ref:this._menuRef,tabIndex:m?-1:void 0,onOpen:this._handleFocusOnOpen},o.createElement(u.ActionsTable,{items:n,menuStatName:r,parentStatName:p,parentIsOpened:e,onRequestUpdate:this._handleRequestUpdate})))))):null}update(){this._menuRef.current&&this._menuRef.current.update()}_isDrawer(e){return void 0===this.props.mode?e:"drawer"===this.props.mode}}const S=(0,r.makeOverlapable)(_)},68620:(e,t,n)=>{"use strict";n.d(t,{Hint:()=>i});var o=n(59496),s=n(97754),a=n.n(s),r=n(19119);function i(e){const{text:t="",className:n}=e;return o.createElement("span",{className:a()(r.shortcut,n)},t)}},29624:(e,t,n)=>{"use strict";n.d(t,{ContextMenuItem:()=>m});var o=n(59496),s=n(97754),a=n.n(s),r=n(72571),i=n(34404),l=n(34064),c=n(68620),u=n(711),h=n(58991),d=n(45355),p=n(61999);function m(e){
const{isTitle:t,isLoading:n,isHovered:s,active:m,checkable:v,disabled:b,checked:g,icon:f,iconChecked:E,hint:w,subItems:x,label:C,onClick:k,children:_,toolbox:S,jsxLabel:M,size:y="normal"}=e,N=(0,o.useContext)(l.EmptyIconsContext),I=!!x.length;return n?o.createElement("li",{className:a()(p.item,p.loading,p[y])},o.createElement(i.Loader,null)):o.createElement("li",{className:a()(p.item,p.interactive,t&&p.title,b&&p.disabled,s&&p.hovered,m&&p.active,N&&p.emptyIcons,p[y]),onClick:k},o.createElement(r.Icon,{className:a()(p.icon),icon:function(){if(v&&g)return E||f||u;return f}()}),o.createElement("span",{className:a()(p.label)},null!=M?M:C),!!S&&o.createElement(r.Icon,{onClick:function(){S&&S.action()},className:p.remove,icon:d}),!I&&w&&o.createElement(c.Hint,{className:p.shortcut,text:w}),I&&o.createElement(r.Icon,{className:p.nested,icon:h}),_)}},34064:(e,t,n)=>{"use strict";n.d(t,{EmptyIconsContext:()=>o});const o=n(59496).createContext(!1)},49161:(e,t,n)=>{"use strict";n.d(t,{KeyboardDocumentListener:()=>s});var o=n(59496);class s extends o.PureComponent{constructor(){super(...arguments),this._handleKeyDown=e=>{e.keyCode===this.props.keyCode&&this.props.handler(e)}}componentDidMount(){document.addEventListener(this.props.eventType||"keydown",this._handleKeyDown,!1)}componentWillUnmount(){document.removeEventListener(this.props.eventType||"keydown",this._handleKeyDown,!1)}render(){return null}}},23235:(e,t,n)=>{"use strict";n.d(t,{OutsideEvent:()=>s});var o=n(61174);function s(e){const{children:t,...n}=e;return t((0,o.useOutsideEvent)(n))}},74485:(e,t,n)=>{"use strict";n.d(t,{makeOverlapable:()=>a});var o=n(59496),s=n(8361);function a(e){return class extends o.PureComponent{render(){const{isOpened:t,root:n}=this.props;if(!t)return null;const a=o.createElement(e,{...this.props,zIndex:150});return"parent"===n?a:o.createElement(s.Portal,null,a)}}}},57369:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'},37799:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 20L11 14.5 16.5 9"/></svg>'},58991:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'},77154:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" width="18" height="14"><path fill="currentColor" d="M6 11.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41-10.59 10.58z"/></svg>'},711:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>'},45355:e=>{
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'}}]);