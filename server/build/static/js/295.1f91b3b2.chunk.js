"use strict";(self.webpackChunkmaplibregrid=self.webpackChunkmaplibregrid||[]).push([[295],{98883:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r=n(93433),i=n(74165),s=n(15861),o=n(29439),a=n(72791),d=n(29669),l=n.n(d),u=n(56111),p=(n(10262),n(5112)),c=n.n(p),x=(n(14038),n(5483)),f=n.n(x),m=n(56488),y=n(24310),h=n(29002),g=n(57689),b=n(68870),v=n(35527),Z=n(53767),w=n(20890),j=n(36520),k=n(94721),S=n(81910),T=n(58562),C=n(82455),I=n(90983),F=n(29823),D=n(3746),z=n(87740),M=n(75985),B=(n(5462),n.p+"static/media/cardbg.27f8d9bebeeb185ef7df.png"),A=n.p+"static/media/cardbgDark.81def748094c1b07c8ac.png",P=n(38308),E=n(19601),N=n(13400),R=n(39504),O=n(11087),L=n(56305),W=n(37532),U=n(80184),V=function(e){var t=e.filterState,n=e.modalC,r=null===t||void 0===t?void 0:t.likesList,i=null===t||void 0===t?void 0:t.favoritesList;return(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)(b.Z,{sx:{height:{xs:"405px",md:"480px"},width:{xs:"290px",md:"365px"},borderRadius:"15px",position:"absolute",backgroundColor:"background.secondary",top:"100px",left:{xs:"-14%",md:"0%"}},children:[(0,U.jsxs)(b.Z,{sx:{position:"relative",borderRadius:"15px"},children:[(0,U.jsx)(b.Z,{sx:{position:"absolute",top:"10px",right:"10px"},children:(0,U.jsx)(N.Z,{onClick:function(){n(!1)},children:(0,U.jsx)(F.Z,{sx:{fontSize:"30px",color:"white",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)","&:hover":{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"},opacity:"",padding:"8px",borderRadius:"10px"}})})}),(0,U.jsx)(b.Z,{sx:function(e){return{boxShadow:"light"===e.palette.mode?"rgb(242,231,231) 10px 10px 20px 22px inset, rgb(242,231,231) 10px 18px 36px 28px inset":"rgb(21 0 47 / 60%) 10px 10px 20px 22px inset, rgb(21 0 47 / 60%) 10px 18px 36px 28px inset",backgroundImage:"url(".concat(L.J,"/upload/").concat(null===t||void 0===t?void 0:t.capturesImage,")"),backgroundPosition:"center",backgroundSize:"cover",borderRadius:"10px",height:{xs:"160px",md:"230px"},width:"100%"}}})]}),(0,U.jsxs)(R.Z,{sx:{m:{xs:0},marginBottom:"10px"},children:[(0,U.jsx)(w.Z,{gutterBottom:!0,sx:{pb:2,fontSize:{xs:"15px",md:"22px"}},children:null===t||void 0===t?void 0:t.name}),(0,U.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,U.jsxs)(w.Z,{sx:{fontSize:{xs:"15px",md:"22px"}},children:[" ","Price"]}),(0,U.jsx)(w.Z,{component:"p",sx:{fontSize:{xs:"15px",md:"22px"}},children:(null===t||void 0===t?void 0:t.productTotalPrice)+"$"})]}),(0,U.jsx)(W.Z,{userlikeviews:{likesList:r,favoritesList:i},howManyViews:null===t||void 0===t?void 0:t.howManyViews}),(0,U.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"centers"},children:[(0,U.jsx)(w.Z,{component:"p",sx:{fontSize:"1rem",color:"gray",fontWeight:700},children:"status"}),(0,U.jsx)(w.Z,{color:null!==t&&void 0!==t&&t.paidStatusContract?"green":"red",component:"p",sx:{fontSize:"12px",ml:1,mt:1,fontWeight:700},children:null!==t&&void 0!==t&&t.paidStatusContract?"Mint succes":"pending"})]}),(0,U.jsx)(O.rU,{to:"/nftDetail/".concat(null===t||void 0===t?void 0:t._id),style:{textDecoration:"none"},children:(0,U.jsx)(h.Z,{text:"View Details"})})]})]})})},G=a.memo(V),J=n(76943),Q=n(59434),Y=n(36151),H=n(43878),_=function(e){var t=e.ceil,n=e.setBLoading,r=e.loadCeil,d=e.discountValue,l=(0,a.useContext)(y.G).address,u=a.useState(0),p=(0,o.Z)(u,2),c=p[0],x=p[1],f=a.useCallback((0,s.Z)((0,i.Z)().mark((function e(){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,Number(t.totalceil.length)*Number(t.tilePrice);case 3:return n=(n=e.sent).toFixed(2),r=100*(+n-+d),e.abrupt("return",+r);case 7:case"end":return e.stop()}}),e)}))),[t,d]);function h(){return(h=(0,s.Z)((0,i.Z)().mark((function e(r,s){var o,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(!0),!c){e.next=9;break}return o={snapshot:t.snapshot,user:t.user,lang:t.lang,long:t.long,tilePrice:t.tilePrice,areaLength:t.totalceil.length,totalceil:JSON.stringify(t.totalceil),address:t.address,discount:+d,token:r,type:"stripe"},e.next=5,(0,m.gg)(o,n);case 5:"ok"===(a=e.sent).status?(n(!1),M.Am.success(null===a||void 0===a?void 0:a.message),setTimeout((function(){window.location.reload()}),4e3)):(M.Am.error("Nft Transfer Failed!"),n(!1)),e.next=10;break;case 9:console.log("not Found!");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.useEffect((function(){(0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})))()}),[f,x,d,t]),console.log("price---\x3e",c,+t.discounted),(0,U.jsx)("div",{children:l?r?(0,U.jsx)(H.Z,{style:{width:"100%",margin:"5px 0px"},className:"center",stripeKey:"pk_test_51MNHzbF5wRQ0Uvcs7XByXeDH2xPTWhOEsOppkdGSEsQLdVfeOTCxddjsmpCd8ZDX9UyBKX8zUOhFbC6ePG29yPpi007D8UomKd",token:function(e,t){return h.apply(this,arguments)},amount:c,name:"Sample Book",billingAddress:!0}):(0,U.jsx)(w.Z,{sx:{color:"#37D1B5",fontWeight:700},children:"Loading ........."}):(0,U.jsx)(Y.Z,{sx:{fontSize:{xs:"12px",md:"20px"},width:"100%",marginTop:{xs:"10px",md:"20px"},borderRadius:"10px",background:" linear-gradient(90deg, rgba(110,7,199,0.9223039557619923) 37%, rgba(204,13,227,0.981127485173757) 79%)",fontWeight:700},children:"Please connect to your wallet!"})})},q=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_usdt","type":"uint256"}],"name":"usdtToBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_usdt","type":"uint256"}],"name":"usdtToToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'),K="0x966c0dafDF85E194B051DeA34666B63722151e6A",X=n(55794),$=n(24082),ee=n(4834);function te(e){var t=e.ceilDetailsstate,n=e.dataValue,r=e.handleClose,d=e.setBLoading,l=e.openModal,u=(0,a.useContext)(y.G).address,p=function(){r(!1)},c=a.useState(""),x=(0,o.Z)(c,2),f=x[0],h=x[1],g=parseFloat(n).toFixed(6),j=(0,E.parseUnits)(g.toString(),6),k=(0,P.do)({address:K,abi:q,functionName:"usdtToBNB",args:[j]}),S=k.data,T=(k.isError,k.isLoading,(0,P.KQ)({address:u}).data),C=T&&+(null===T||void 0===T?void 0:T.formatted),I=(0,P.M5)({request:{to:"0xbb17CDC95b626c76E934Df7bF05fEaEFcEa9C61E",value:S},onError:function(e){d(!1)}}).config,D=(0,P.pQ)(I),z=D.data,B=D.isError,A=D.isSuccess,R=D.sendTransaction,O=a.useCallback((0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!B&&A&&(0,m.Ol)(z,B,t,+j,d,f);case 1:case"end":return e.stop()}}),e)}))),[z,B,A,t]);a.useEffect((function(){O()}),[O,t]);var L=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=2;break}return e.abrupt("return",M.Am.error("Please enter Address"));case 2:return e.next=4,(0,m.FD)(f);case 4:if("ok"!==(null===(t=e.sent)||void 0===t?void 0:t.status)){e.next=10;break}if(!(+C<0)){e.next=8;break}return e.abrupt("return",M.Am.error("insuficient Balance. "));case 8:return e.next=10,R();case 10:"error"===(null===t||void 0===t?void 0:t.status)&&M.Am.error(" user is not register");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,U.jsx)("div",{children:(0,U.jsx)($.Z,{open:l,onClose:p,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,U.jsxs)(v.Z,{sx:{position:"absolute",top:{xs:"50%",md:"40%"},left:"50%",transform:"translate(-50%, -50%)",width:{xs:"280px",sm:"400px",md:"500px"},boxShadow:24,p:{xs:1,sm:2,md:4},borderRadius:"10px",backgroundColor:"background.secondary"},children:[(0,U.jsxs)(b.Z,{sx:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,U.jsx)(w.Z,{id:"modal-modal-title",variant:"h5",fontWeight:"bold",sx:{fontSize:{xs:"15px",sm:"16px",md:"20px"}},children:"NFT Mint to Specific Address By Admin"}),(0,U.jsx)(b.Z,{sx:{width:"10%"},children:(0,U.jsx)(N.Z,{onClick:p,children:(0,U.jsx)(F.Z,{sx:{fontSize:"33px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)","&:hover":{backgroundColor:"#4a148c"},opacity:"",padding:"8px",borderRadius:"8px",color:"white"}})})})]}),(0,U.jsx)(b.Z,{sx:{p:{xs:1,md:2},my:{xs:0,md:2},display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"start",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",borderRadius:"10px"},children:(0,U.jsx)(b.Z,{sx:{width:"100%"},children:(0,U.jsxs)(Z.Z,{spacing:2,children:[(0,U.jsx)(ee.ZP,{placeholder:"Enter Address",value:f,onChange:function(e){var t=e.target.value.trim();t&&h(t)},type:"text",sx:{backgroundColor:"white",width:"100%",color:"black",borderRadius:"5px",px:2,py:.5}}),(0,U.jsx)(b.Z,{sx:{width:"100%",height:"40px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:2,fontSize:{xs:"10px",md:"15px"},color:"white",fontWeight:500,cursor:"pointer"},onClick:L,children:"APPLY"})]})})})]})})})}var ne=a.memo(te);var re=function(){var e,t,n=(0,g.UO)(),d=(0,g.s0)(),p=(0,Q.I0)(),x=(0,Q.v9)((function(e){return e})).ceilSlice.userdetails,N=(0,a.useContext)(y.G).address,R=(0,a.useState)(0),L=(0,o.Z)(R,2),W=L[0],V=L[1],Y=(0,a.useRef)(null),H=(0,a.useRef)(null),$=(0,a.useRef)(null),ee=(0,a.useState)(0),te=(0,o.Z)(ee,2),re=te[0],ie=te[1],se=(0,a.useState)(1),oe=(0,o.Z)(se,2),ae=oe[0],de=(oe[1],(0,a.useState)([])),le=(0,o.Z)(de,2),ue=le[0],pe=le[1],ce=(0,a.useState)(!1),xe=(0,o.Z)(ce,2),fe=xe[0],me=xe[1],ye=(0,a.useState)(""),he=(0,o.Z)(ye,2),ge=he[0],be=he[1],ve=(0,a.useState)(!1),Ze=(0,o.Z)(ve,2),we=Ze[0],je=Ze[1],ke=(0,a.useState)(!1),Se=(0,o.Z)(ke,2),Te=Se[0],Ce=Se[1],Ie=(0,a.useState)(!0),Fe=(0,o.Z)(Ie,2),De=Fe[0],ze=Fe[1],Me=(0,a.useState)(!0),Be=(0,o.Z)(Me,2),Ae=Be[0],Pe=Be[1],Ee=(0,a.useState)(""),Ne=(0,o.Z)(Ee,2),Re=Ne[0],Oe=Ne[1],Le=(0,a.useState)(!1),We=(0,o.Z)(Le,2),Ue=(We[0],We[1]),Ve=(0,a.useState)(!1),Ge=(0,o.Z)(Ve,2),Je=Ge[0],Qe=Ge[1],Ye=(0,a.useState)(!1),He=(0,o.Z)(Ye,2),_e=He[0],qe=He[1],Ke=(0,a.useState)(""),Xe=(0,o.Z)(Ke,2),$e=Xe[0],et=Xe[1],tt=a.useState(0),nt=(0,o.Z)(tt,2),rt=nt[0],it=nt[1],st=a.useState(!1),ot=(0,o.Z)(st,2),at=ot[0],dt=ot[1],lt=(0,a.useState)([73.1083603962225,31.42117432409888]),ut=(0,o.Z)(lt,2),pt=ut[0],ct=(ut[1],(0,a.useState)("")),xt=(0,o.Z)(ct,2),ft=xt[0],mt=xt[1],yt=x.role&&(null===x||void 0===x?void 0:x.role.filter((function(e){return null!==e}))),ht=!1,gt=[],bt=parseFloat(W).toFixed(6),vt=(0,E.parseUnits)(bt.toString(),6),Zt=(0,P.do)({address:K,abi:q,functionName:"usdtToBNB",args:[vt]}),wt=Zt.data,jt=(Zt.isError,Zt.isLoading,(0,P.KQ)({address:N}).data),kt=jt&&+(null===jt||void 0===jt?void 0:jt.formatted),St=(0,P.M5)({request:{to:"0xbb17CDC95b626c76E934Df7bF05fEaEFcEa9C61E",value:wt},onError:function(e){Qe(!1)}}).config,Tt=(0,P.pQ)(St),Ct=Tt.data,It=Tt.isLoading,Ft=Tt.isError,Dt=Tt.isSuccess,zt=Tt.sendTransaction,Mt=a.useCallback((0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ct&&!at&&(0,m.nU)(Ct,Ft,Re,+vt,Qe);case 1:case"end":return e.stop()}}),e)}))),[Ct,It,Ft,Dt]);a.useEffect((function(){Mt()}),[Mt]),(0,a.useEffect)((function(){var e=ue.length;e&&me(!1);var t=e*ae;ie(e),V(t)}),[ue]),(0,a.useEffect)((function(){!function(){if(gt=[],f().accessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA",!$.current){$.current=new(f().Map)({container:Y.current,style:"mapbox://styles/mapbox/satellite-streets-v12",center:[73.1083603962225,31.42117432409888],zoom:16.5,scrollZoom:!0,preserveDrawingBuffer:!0});var e=new(c())({accessToken:f().accessToken,mapboxgl:f()});document.getElementById("geocoder").appendChild(e.onAdd($.current)),$.current.on("load",(function(){var e=new u.Grid({gridWidth:.02,gridHeight:.02,units:"kilometers",minZoom:2,maxZoom:22,active:!1,paint:{"line-opacity":.3,"line-color":"pink"}});$.current.addControl(new(f().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),$.current.addControl(new(l().NavigationControl)({showZoom:!0})),$.current.addControl(e);var t,n=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,n,s,o,a,d,l,u,c,x,f;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="selected-cells",$.current.addSource(s,{type:"geojson",data:{type:"FeatureCollection",features:gt}}),$.current.addLayer({id:s,source:s,active:!0,type:"fill",paint:{"fill-color":"#0000ff","fill-opacity":.2,"fill-outline-color":"red"}}),$.current.on("grid.click",(function(e){var t=e.bbox,n=gt.findIndex((function(e){return e.geometry.bbox.toString()===t.toString()}));if(-1===n&&!0!==ht){var i=[[[t[0],t[1]],[t[2],t[1]],[t[2],t[3]],[t[0],t[3]],[t[0],t[1]]]],o={type:"Feature",geometry:{type:"Polygon",bbox:t,coordinates:i}};gt.push(o),pe((function(e){return[].concat((0,r.Z)(e),[o])}))}else ht?me(!0):(gt.splice(n,1),pe((function(e){return e.filter((function(e,t){return t!==n}))})));$.current.getSource(s).setData({type:"FeatureCollection",features:gt}),je(!1),et("")})),Qe(!0),o="selected-Oldcells",e.next=8,(0,m.fO)();case 8:for(a=e.sent,p((0,J.mO)(null===(t=a)||void 0===t?void 0:t.nfts)),a=null===(n=a)||void 0===n?void 0:n.nfts,Qe(!1),d=[],l=0;l<(null===(u=a)||void 0===u?void 0:u.length);l++)for(c=0;c<(null===(x=a[l])||void 0===x?void 0:x.attributes.length);c++)d.push(null===(f=a[l])||void 0===f?void 0:f.attributes[c]);$.current.on("grid.click",(function(e){var t,n=e.bbox,r=null===(t=a)||void 0===t?void 0:t.find((function(e){return null===e||void 0===e?void 0:e.attributes.find((function(e){return JSON.stringify(n)===JSON.stringify(e.geometry.bbox)}))}));""!==r&&be(r)})),$.current.on("grid.click",(function(){je(!1)})),$.current.addSource(o,{type:"geojson",data:{type:"FeatureCollection",features:d}}),$.current.addLayer({id:"selectedCellsOldId",source:o,active:!0,type:"fill",paint:{"fill-color":"white","fill-opacity":.3,"fill-outline-color":"blue"}});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();$.current.on("load",n()),$.current.on("mouseenter","selectedCellsOldId",(function(){ht=!0,$.current.getCanvas().style.cursor="not-allowed"})),$.current.on("mouseleave","selectedCellsOldId",(function(){ht=!1,$.current.getCanvas().style.cursor=""})),t=e,$.current.hasControl(t)?t.update():$.addControl(t)}))}}()}),[pt,_e]),(0,a.useEffect)((function(){null!==n&&void 0!==n&&n.lang&&null!==n&&void 0!==n&&n.long&&$.current.flyTo({center:[null===n||void 0===n?void 0:n.long,null===n||void 0===n?void 0:n.lang]})}),[n]);var Bt=function(){var n=(0,s.Z)((0,i.Z)().mark((function n(){var r,s,o,a,d,l;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d=ue.length/2,l=Math.floor(d),e=null===(r=ue[l])||void 0===r||null===(s=r.geometry)||void 0===s?void 0:s.bbox[0],t=null===(o=ue[l])||void 0===o||null===(a=o.geometry)||void 0===a?void 0:a.bbox[1],!(ue.length<30)){n.next=7;break}return n.next=7,$.current.flyTo({center:[e,t],zoom:(null===ue||void 0===ue?void 0:ue.length)>9?(null===ue||void 0===ue?void 0:ue.length)<18?17:(null===ue||void 0===ue?void 0:ue.length)<25?16.7:16.5:18});case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),At=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.current.flyTo({zoom:16.5});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pt=function(){var n=(0,s.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,null!==x&&void 0!==x&&x.id){n.next=4;break}return d("/login"),n.abrupt("return",!1);case 4:N&&null!==x&&void 0!==x&&x.id?(Bt(),Ue(!0),setTimeout((function(){var n=document.querySelector("#snapshot"),r=n.getContext("2d"),i=$.current.getCanvas().toDataURL(),s=window.devicePixelRatio,o=window.innerWidth*s,a=window.innerHeight*s;n.height=a,n.width=o;var d=new Image;d.src=i,d.onload=function(){r.drawImage(d,0,0)};var l={totalceil:ue,snapshot:i,user:null===x||void 0===x?void 0:x.id,tilePrice:ae,address:N,lang:t,long:e,discounted:rt};Oe(l),et(l),At()}),2e3)):M.Am.error("Please connect Wallet !"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error In buyCell process ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),Et=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ce(!Te);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Nt=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,n,r,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ft){e.next=17;break}return e.next=3,(0,m.Le)(ft);case 3:if(n=e.sent,!(r=null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data)){e.next=14;break}return s=Number(r.offers),V(W-(o=W/100*s)),it(o),document.querySelector(".promoInputSection").style.display="none",e.abrupt("return",M.Am.success("Discount Code applied"));case 14:return e.abrupt("return",M.Am.error("This Promo is not working"));case 15:e.next=18;break;case 17:return e.abrupt("return",M.Am.error("Please Provide Valid Promo Code"));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Rt=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Pt(),dt(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(X.Z,{loading:Je}),Re&&at?(0,U.jsx)(ne,{handleClose:dt,openModal:at,ceilDetailsstate:Re,setBLoading:Qe,dataValue:W}):"",(0,U.jsxs)(b.Z,{sx:{display:"flex",flexDirection:"column",maxWidth:"xl"},children:[(0,U.jsx)("div",{id:"screenshot",ref:H,children:(0,U.jsx)(b.Z,{sx:{height:"100vh",marginRight:"0px",mt:0,position:"relative"},ref:Y})}),(0,U.jsxs)(v.Z,{sx:{position:"absolute",top:{xs:"60px",md:"120px"},zIndex:"1",right:{xs:"30%",md:"6%"},width:{xs:"200px",md:"350px"},borderRadius:"15px",padding:{xs:"0px 0px",md:"4px 8px"},backgroundColor:"background.secondary",backdropFilter:"blur(1px)"},children:[(0,U.jsxs)(b.Z,{sx:{p:{md:1},display:{xs:"flex",md:"flex"},justifyContent:"flex-start",alignItems:"center"},children:[(0,U.jsx)("div",{id:"geocoder",className:"geocoder"}),(0,U.jsx)(b.Z,{sx:{display:{xs:"none",md:"block"}},children:(0,U.jsxs)(Z.Z,{spacing:2,direction:"row",children:[(0,U.jsx)(I.Z,{sx:{ml:1}}),(0,U.jsx)(D.Z,{})]})})]}),re&&!0!==fe?(0,U.jsx)(b.Z,{className:"mapcontainer",id:"PaymentBox",sx:function(e){return{backgroundImage:"light"===e.palette.mode?"url(".concat(B,")"):"url(".concat(A,")"),backgroundSize:"100% 100%",position:"absolute",top:{xs:"70px",md:"90px"},left:{xs:"0%",md:"0"},zIndex:" -0.9",width:{xs:"240px",md:"350px"},height:{xs:"330px",md:"460px"},borderRadius:"15px",padding:{xs:"0px 0px",md:"4px 8px"}}},children:(0,U.jsxs)(b.Z,{p:2,ml:3,sx:{height:{xs:"275px",md:"365px"},overflowY:"scroll",backdropFilter:"blur(1px)",scrollbarColor:" rebeccapurple green",scrollbarWidth:"thin",mt:{xs:4,md:6}},children:[(0,U.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,U.jsx)(w.Z,{sx:{fontWeight:"bold",fontSize:{xs:"14px",md:"25px"}},children:"FREE LAND"}),(0,U.jsx)(b.Z,{children:(0,U.jsxs)(Z.Z,{spacing:2,direction:"row",children:[(0,U.jsx)(S.Z,{sx:{fontSize:{xs:"25px",md:"30px"},color:"white",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",padding:{xs:"4px",md:"6px"},borderRadius:"10px"}}),(0,U.jsx)(F.Z,{onClick:function(){ie(0),qe(!_e)},sx:{fontSize:{xs:"25px",md:"30px"},color:"white",cursor:"pointer",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",padding:{xs:"4px",md:"6px"},borderRadius:"10px"}})]})})]}),(0,U.jsxs)(b.Z,{mt:1,sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,U.jsxs)(Z.Z,{spacing:1,direction:"row",sx:{display:"flex",alignItems:"center"},children:[(0,U.jsx)(z.Z,{}),(0,U.jsxs)(w.Z,{sx:{color:"text.secondary",fontSize:{xs:"10px",md:"20px"}},children:["NOT LAND ART"," "]})]}),(0,U.jsx)(j.Z,{title:"You can only create land art on this map, only non Urban and water tiles for land",children:(0,U.jsx)(C.Z,{sx:{color:"text.secondary"}})})]}),(0,U.jsxs)(b.Z,{mt:2,sx:{display:"flex",justifyContent:"space-between"},children:[(0,U.jsxs)(Z.Z,{spacing:2,direction:"row",sx:{display:"flex",alignItems:"center"},children:[(0,U.jsx)(T.Z,{}),(0,U.jsx)(w.Z,{sx:{color:"text.secondary"},children:"--"})]}),(0,U.jsx)(j.Z,{title:"You can only create land art on this map, only non Urban and water tiles for land",children:(0,U.jsx)(C.Z,{sx:{color:"text.secondary"}})})]}),(0,U.jsxs)(Z.Z,{spacing:1,sx:{mt:{xs:1,md:2}},children:[(0,U.jsx)(b.Z,{sx:{ml:{xs:0,md:0}},children:(0,U.jsxs)(w.Z,{component:"h2",sx:{display:"flex",justifyContent:"space-between",fontSize:{xs:"12px",md:"30px"}},children:["$ value",(0,U.jsxs)(w.Z,{component:"span",sx:{fontSize:{xs:"12px",md:"30px"}},children:[" ","$",null===W||void 0===W?void 0:W.toFixed(1)]})]})}),(0,U.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",color:"#848484"},children:[(0,U.jsx)(w.Z,{variant:"body1",color:"text.secondary",sx:{fontSize:{xs:"10px",md:"20px"}},children:"Current value per tile"}),(0,U.jsx)(w.Z,{component:"span",sx:{fontSize:{xs:"10px",md:"20px"},color:"text.secondary"},children:"$1.32"})]}),(0,U.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",color:"#848484"},children:[(0,U.jsx)(w.Z,{variant:"body1",color:"text.secondary",sx:{fontSize:{xs:"10px",md:"20px"}},children:"Growth since creation"}),(0,U.jsxs)(w.Z,{component:"span",sx:{fontSize:{xs:"10px",md:"20px"},color:"text.secondary"},children:["$",W.Growth," %"]})]})]}),we?(0,U.jsxs)(b.Z,{sx:{pb:2},children:[(0,U.jsx)(w.Z,{sx:{fontSize:"1rem",width:"100%"},children:"Pay with Debit Card"}),(0,U.jsx)(_,{ceil:Re,setBLoading:Qe,loadCeil:$e,discountValue:rt}),(0,U.jsx)(w.Z,{variant:"p",children:"Payment processed by Wert, USD price is for indication only. 4% transaction fee will be included. Min $5 purchases."})]}):"",Te?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(b.Z,{children:[De?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(b.Z,{sx:{display:"flex",mt:1},children:[(0,U.jsx)(w.Z,{sx:{fontSize:{xs:"10px",md:"15px"},width:"100%"},children:"Pay with Wallet"}),(0,U.jsx)(w.Z,{sx:{fontSize:{xs:"10px",md:"15px"}},children:(null===N||void 0===N?void 0:N.slice(0,4))+"..."+(null===N||void 0===N?void 0:N.slice(-4))})]}),(0,U.jsx)(b.Z,{sx:{width:"100%",mt:-3},onClick:(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(+kt<=0)){e.next=2;break}return e.abrupt("return",M.Am.error("Insufficient funds"));case 2:return Pe(!1),e.next=5,Pt();case 5:return e.next=7,zt();case 7:case"end":return e.stop()}}),e)}))),children:(0,U.jsx)(h.Z,{text:"Pay with wallet"})})]}):"",Ae?(0,U.jsxs)(b.Z,{children:[(0,U.jsx)(b.Z,{mt:1,children:(0,U.jsx)(w.Z,{sx:{fontSize:{xs:"10px",md:"15px"},color:"text.primery"},children:"Pay with Card"})}),(0,U.jsx)(b.Z,{onClick:(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return je(!we),ze(!De),e.next=4,Pt();case 4:case"end":return e.stop()}}),e)}))),sx:{width:"100%",mt:-3},children:(0,U.jsx)(h.Z,{text:"Pay with Debit Card"})})]}):""]}),(0,U.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",marginTop:"1rem"},children:[(0,U.jsx)(b.Z,{sx:{display:"inline-block",color:"#fff",fontSize:{xs:"10px",md:"12px"},fontWeight:"500",marginTop:"10px",marginBottom:"10px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",padding:"10px 10px",margin:"1px 1px",borderRadius:"5px",cursor:"pointer",letterSpacing:"1px"},onClick:function(){document.querySelector(".promoInputField").style.display="none",document.querySelector(".promoInputSection").style.display="flex"},className:"promoInputField",children:"Add Promo+"}),null!==yt&&void 0!==yt&&yt.includes("admin")?(0,U.jsx)(b.Z,{onClick:Rt,sx:{display:"inline-block",color:"#fff",fontSize:{xs:"10px",md:"12px"},fontWeight:"500",marginTop:"10px",marginBottom:"10px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",padding:"10px 10px",margin:"1px 1px",borderRadius:"5px",cursor:"pointer",letterSpacing:"1px"},className:"promoInputField",children:"Mint Nft to Specific"}):""]}),(0,U.jsxs)("div",{style:{width:"100%",height:"42px",marginTop:"10px",display:"none",justifyContent:"space-between"},className:"promoInputSection",children:[(0,U.jsx)("input",{style:{width:"67%",height:"100%",fontSize:"20px",borderRadius:"10px",outline:"none",border:"1px solid #dad7cd",padding:"0 4px",placeholder:"Promo Code"},value:ft,onChange:function(e){mt(e.target.value)},type:"input"}),(0,U.jsx)(b.Z,{sx:{width:"30%",height:"100%",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px",fontSize:{xs:"10px",md:"15px"},color:"white",fontWeight:500,cursor:"pointer"},onClick:Nt,children:"APPLY"})]}),(0,U.jsx)("br",{}),(0,U.jsx)(k.Z,{color:"white",height:"5px"}),(0,U.jsxs)(b.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"7px"},children:[(0,U.jsx)(w.Z,{sx:{fontSize:"1rem",fontWeight:900},children:"Total"}),(0,U.jsx)(w.Z,{sx:{fontSize:"1rem",fontWeight:900},children:W?null===W||void 0===W?void 0:W.toFixed(2):""})]})]}):void 0,(0,U.jsx)("br",{}),null!==x&&void 0!==x&&x.id?(0,U.jsx)(b.Z,{children:Te?"":(0,U.jsx)(b.Z,{sx:{mt:-2,cursor:"pointer"},onClick:function(){var e=[];ue.forEach((function(t){e.push(JSON.stringify(t.geometry.bbox))})),N?Et():M.Am.error("connect with wallet")},children:(0,U.jsx)(h.Z,{className:"checkBtn",text:"CHECK OUT"})})}):(0,U.jsx)(O.rU,{to:"/login",style:{textDecoration:"none",color:"white"},children:(0,U.jsx)(h.Z,{text:"Login"})})]})}):(0,U.jsxs)(U.Fragment,{children:[!0===fe?"":(0,U.jsx)(v.Z,{sx:{position:"absolute",top:{xs:"70px",md:"90px"},left:{xs:"0%",md:"0"},zIndex:" -0.9",width:{xs:"240px",md:"350px"},borderRadius:{xs:"5px",md:"10px"},padding:{xs:"4px 4px",md:"10px 8px"},backdropFilter:"blur(1px)",backgroundColor:"background.secondary"},children:(0,U.jsx)(b.Z,{children:(0,U.jsx)(w.Z,{sx:{pl:1},children:"No selected Tile"})})}),fe&&(0,U.jsx)(G,{modalC:function(e){me(e)},filterState:ge})]})]})]}),(0,U.jsx)("div",{style:{width:"100%",display:"none"},children:(0,U.jsx)("canvas",{id:"snapshot",style:{width:"100%"}})})]})}},29002:function(e,t,n){n(72791);var r=n(36151),i=n(80184);t.Z=function(e){return(0,i.jsx)(r.Z,{sx:{py:1,fontSize:{xs:"12px",md:"15px"},width:"100%",marginTop:"30px",borderRadius:"10px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white",fontWeight:700},children:e.text})}},37532:function(e,t,n){n.d(t,{Z:function(){return p}});n(72791);var r={display:"flex",justifyContent:"space-between",alignItems:"center",width:"25%",color:"lightgray"},i=n(68870),s=n(53767),o=n(20890),a=n(3746),d=n(17237),l=n(60786),u=n(80184);var p=function(e){var t,n,p=e.userlikeviews,c=e.howManyViews,x=null===p||void 0===p||null===(t=p.likesList)||void 0===t?void 0:t.length,f=null===p||void 0===p||null===(n=p.favoritesList)||void 0===n?void 0:n.length,m=null===c||void 0===c?void 0:c.length;return(0,u.jsx)(i.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",my:1},children:(0,u.jsx)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:(0,u.jsxs)(s.Z,{spacing:1,direction:"row",children:[(0,u.jsxs)(i.Z,{style:r,children:[(0,u.jsx)(l.Z,{fontSize:"small"}),(0,u.jsx)(o.Z,{fontSize:"small",sx:{ml:.5},children:x>0?x:0})]}),(0,u.jsxs)(i.Z,{style:r,children:[(0,u.jsx)(d.Z,{fontSize:"small",sx:{ml:1}}),(0,u.jsxs)(o.Z,{fontSize:"small",sx:{ml:.5},children:[" ",f||0]})]}),(0,u.jsxs)(i.Z,{style:r,children:[(0,u.jsx)(a.Z,{fontSize:"small",sx:{ml:1}}),(0,u.jsx)(o.Z,{fontSize:"small",sx:{ml:.5},children:m||0})]})]})})})}}}]);
//# sourceMappingURL=295.1f91b3b2.chunk.js.map