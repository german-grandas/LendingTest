(this.webpackJsonplendingtest=this.webpackJsonplendingtest||[]).push([[0],{157:function(e,t,n){},169:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(52),a=n.n(s),r=(n(157),n(133)),l=n(206),o=n(208),j=n(202),d=n(207),h=n(76),b=n(101),u=n(2),x=function(e){var t=e.children,n=e.to;return Object(u.jsx)(b.b,{to:n,style:{color:"white",marginRight:15,marginTop:15},children:Object(u.jsx)(j.a.Item,{style:{justifyContent:"center",margin:"0.5em 0"},children:t})})},O=function(){return Object(u.jsx)("header",{children:Object(u.jsx)(l.a,{inverted:!0,textAlign:"center",children:Object(u.jsx)(j.a,{secondary:!0,inverted:!0,attached:"top",stackable:!0,aling:"left",children:Object(u.jsx)(d.a,{style:{width:"100%"},children:Object(u.jsxs)(d.a.Row,{columns:3,centered:!0,verticalAlign:"middle",children:[Object(u.jsx)(d.a.Column,{width:6,children:Object(u.jsxs)(j.a.Menu,{position:"left",children:[Object(u.jsx)("img",{alt:"quantic-logo",src:"https://lendingfront.com/wp-content/uploads/2019/12/white_logo.svg",width:150,height:50,style:{margin:"0.5em 0.4em"}}),Object(u.jsx)(x,{to:"/",children:Object(u.jsx)(o.a,{as:"h4",content:"APPLICATION",inverted:!0})}),Object(u.jsx)(x,{to:"/",children:Object(u.jsxs)(o.a,{as:"h4",inverted:!0,children:[Object(u.jsx)(h.a,{name:"search"}),Object(u.jsx)(o.a.Content,{children:"SEARCH"})]})})]})}),Object(u.jsx)(d.a.Column,{width:4,children:Object(u.jsx)(o.a,{as:"h1",content:"QA",inverted:!0,textAlign:"center"})}),Object(u.jsx)(d.a.Column,{width:6,children:Object(u.jsxs)(j.a.Menu,{position:"right",children:[Object(u.jsx)(x,{to:"/",children:Object(u.jsx)(o.a,{as:"h4",content:"DASHBOARD",inverted:!0})}),Object(u.jsx)(x,{to:"/",children:Object(u.jsxs)(o.a,{as:"h4",inverted:!0,children:[Object(u.jsx)(h.a,{name:"address book",size:"small"}),Object(u.jsx)(o.a.Content,{children:"USER ADMIN"})]})}),Object(u.jsx)(x,{to:"/",children:Object(u.jsxs)(o.a,{as:"h4",inverted:!0,children:[Object(u.jsx)(h.a,{name:"user circle",size:"small"}),Object(u.jsx)(o.a.Content,{children:"USER ADMIN"})]})})]})})]})})})})})},m=function(e){var t=e.children,n=(new Date).getFullYear()||"2021";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(r.a,{children:[Object(u.jsx)("meta",{charSet:"utf-8"}),Object(u.jsx)("title",{children:"LendingTest"}),Object(u.jsx)("link",{rel:"canonical",href:"https://germangrandas.github.io/LendingTest/"})]}),Object(u.jsx)(O,{}),Object(u.jsx)("main",{children:t}),Object(u.jsx)("footer",{children:Object(u.jsx)(l.a,{vertical:!0,size:"mini",textAlign:"center",style:{padding:"4em 0em",boxShadow:"-8px 15px 30px rgba(133,141,148,.66)"},children:Object(u.jsx)(o.a,{as:"h3",content:"\xa9LendingFront".concat(n)})})})]})},g=(n(169),n(170),n(205)),v=n(26),f=n(67),p=n.n(f),w=n(204),y=n(99),C=n(82),_=n(203),A=n(201),R=n(139),S=function(e){var t=e.investor,n=e.setEdit,i=Object(c.useRef)(t.id),s=t.investor_name,a=t.purchased,r=t.sold,l="$".concat(r);return Object(u.jsx)(_.a,{className:"ui inverted segment simple_border",style:{margin:"0 0"},children:Object(u.jsx)(_.a.Content,{children:Object(u.jsx)(_.a.Header,{style:{width:"100%"},children:Object(u.jsx)(d.a,{verticalAlign:"middle",style:{maxWidth:"100%",margin:"0",padding:"1.4em"},children:Object(u.jsxs)(d.a.Row,{columns:4,textAlign:"center",style:{padding:"0.1em"},children:[Object(u.jsx)(d.a.Column,{width:5,children:Object(u.jsx)(o.a,{as:"h5",content:s})}),Object(u.jsxs)(d.a.Column,{width:4,children:[" ",Object(u.jsx)(o.a,{as:"h5",content:l})]}),Object(u.jsx)(d.a.Column,{width:4,children:Object(u.jsx)(R.PieChart,{data:[{value:a,color:"#16c4c4"}],style:{height:"60px"},totalValue:100,lineWidth:10,background:"#969696",label:function(e){return e.dataEntry.value},labelStyle:{fontSize:"25px",fontFamily:"sans-serif",fill:"#969696"},labelPosition:0})}),Object(u.jsxs)(d.a.Column,{width:3,children:[Object(u.jsx)(g.a,{icon:"pencil",color:"teal",circular:!0,size:"tiny",onClick:function(){return n(i)}}),Object(u.jsx)(g.a,{icon:"cancel",circular:!0,color:"teal",size:"tiny",basic:!0})]})]})})})})})},N=function(e){var t=e.investors,n=e.investor_info,i=e.finishEdit,s=n.investor_name,a=n.left_amount,r=n.id,l=parseFloat(a),o=Object(c.useState)({id:r,investor:"",sold:a}),j=Object(v.a)(o,2),h=j[0],b=j[1],x=Object(c.useState)(!1),O=Object(v.a)(x,2),m=O[0],f=O[1],w=h.investor,R=h.sold;return Object(u.jsx)(_.a,{className:"ui inverted segment simple_border",style:{margin:"0 0"},children:Object(u.jsx)(_.a.Content,{children:Object(u.jsx)(_.a.Header,{style:{width:"100%"},children:Object(u.jsx)(A.a,{onSubmit:function(e){e.preventDefault();/^[+-]?\d+(\.\d+)?$/.test(R)&&""!==w?(f(!1),p.a.put("https://demo7555831.mockable.io/edit_investor",h).then((function(e){e.data;i(h)})).catch((function(e){f(!0),console.error(e)}))):f(!0)},success:!0,children:Object(u.jsx)(d.a,{verticalAlign:"middle",style:{maxWidth:"100%",margin:"0",padding:"1.4em"},children:Object(u.jsxs)(d.a.Row,{columns:4,textAlign:"center",style:{padding:"0.1em"},children:[Object(u.jsx)(d.a.Column,{width:6,children:Object(u.jsx)(A.a.Select,{fluid:!0,label:"Select investor",options:t,onChange:function(e,t){var n=t.value;return b(Object(C.a)(Object(C.a)({},h),{},{investor:n}))},name:"investor",error:m,placeholder:s})}),Object(u.jsx)(d.a.Column,{width:4,children:Object(u.jsx)(A.a.Input,{fluid:!0,label:"Amount to sell",name:"sold",placeholder:l,onChange:function(e){var t=e.target;b(Object(C.a)(Object(C.a)({},h),{},Object(y.a)({},t.name,t.value)))},value:R,error:m})}),Object(u.jsxs)(d.a.Column,{width:4,children:[Object(u.jsx)(g.a,{icon:"save",color:"teal",circular:!0,size:"tiny",type:"submit"}),Object(u.jsx)(g.a,{icon:"cancel",circular:!0,color:"teal",size:"tiny",basic:!0})]})]})})})})})})},k=function(e){var t=e.investors,n=Object(c.useState)({}),i=Object(v.a)(n,2),s=i[0],a=i[1],r=Object(c.useState)(!1),l=Object(v.a)(r,2),o=l[0],j=l[1],d=t.map((function(e){var t=e.investor_name;return{key:t,value:t,text:t}})),h=function(e){var n=e.current,c=t.filter((function(e){return e.id===n}))[0];a(c),j(!0)};return Object(u.jsx)(_.a.Group,{children:o?Object(u.jsx)(N,{investors:d,investor_info:s,finishEdit:function(e){console.log(e),j(!1)}}):t.map((function(e){return Object(u.jsx)(S,{investor:e,setEdit:h},e.id)}))})},I=function(e){var t=e.product,n=Object(c.useState)([]),i=Object(v.a)(n,2),s=i[0],a=i[1];return Object(c.useEffect)((function(){p.a.post("https://demo7555831.mockable.io/get_investors_by_id",{product_id:t}).then((function(e){var t=e.data.information;a(t)})).catch(console.error)}),[t]),Object(u.jsx)(d.a,{columns:1,children:Object(u.jsxs)(d.a.Column,{children:[Object(u.jsxs)(d.a.Row,{className:"investors_space",children:[Object(u.jsx)(d.a.Row,{style:{margin:"0.3em 1em"},children:Object(u.jsx)(o.a,{as:"h4",content:"Product ID ".concat(t),inverted:!0,className:"border_header"})}),Object(u.jsx)(d.a.Row,{style:{marginTop:"1.3em"},children:Object(u.jsx)(d.a,{verticalAlign:"middle",children:Object(u.jsxs)(d.a.Row,{columns:4,textAlign:"center",children:[Object(u.jsx)(d.a.Column,{width:5,children:Object(u.jsx)(o.a,{as:"h5",content:"Investor Name",inverted:!0})}),Object(u.jsxs)(d.a.Column,{width:4,children:[" ",Object(u.jsx)(o.a,{as:"h5",content:"Sold",inverted:!0})]}),Object(u.jsx)(d.a.Column,{width:4,children:Object(u.jsx)(o.a,{as:"h5",content:"% Purchased",inverted:!0})}),Object(u.jsx)(d.a.Column,{width:3})]})})})]}),Object(u.jsx)(d.a.Row,{style:{overflowY:"scroll",maxHeight:"43.5vh",minHeight:"43.5vh"},children:Object(u.jsx)(k,{investors:s})}),Object(u.jsxs)(d.a.Row,{className:"card_button teal_space",verticalAlign:"middle",textAlign:"center",children:[Object(u.jsx)(o.a,{as:"h3",style:{margin:"0.4em  1.4em"},content:"Remaining amount $850.000 of $8.300.800",inverted:!0}),Object(u.jsx)(w.a,{percent:25,style:{margin:"0.4em  1.4em"},color:"blue",size:"tiny"}),Object(u.jsxs)(d.a.Row,{style:{margin:"0.4em  1.4em"},children:[Object(u.jsx)(o.a,{as:"h6",content:"0%",floated:"left",inverted:!0}),Object(u.jsx)(o.a,{as:"h6",content:"100%",floated:"right",inverted:!0})]})]})]})})},z=function(e){var t=e.product,n=e.getInvestor,i=(e.selected,t.amount),s=t.date,a=t.product_id,r=Object(c.useRef)(a),l=Object(c.useState)(!1),j=Object(v.a)(l,2),h=j[0],b=j[1],x=new Date(s),O=x.getMonth()+1,m=x.getDate(),g=x.getFullYear(),f="".concat(m,"/").concat(O,"/").concat(g),p="$".concat(i);return Object(u.jsx)(_.a,{className:"ui inverted segment item_class",style:{margin:"0 0"},onMouseOver:function(e){b(!0)},onMouseOut:function(e){b(!1)},onClick:function(){return n(r.current)},children:Object(u.jsx)(_.a.Content,{children:Object(u.jsx)(_.a.Header,{style:{width:"100%"},children:Object(u.jsxs)(d.a,{verticalAlign:"middle",style:{maxWidth:"100%",margin:"0",padding:"1.4em"},children:[Object(u.jsxs)(d.a.Row,{columns:2,style:{padding:"0"},children:[Object(u.jsxs)(d.a.Column,{textAlign:"left",width:10,children:[Object(u.jsx)(d.a.Row,{children:Object(u.jsx)(o.a,{as:"h6",content:"Product ID",inverted:!!h})}),Object(u.jsx)(d.a.Row,{children:Object(u.jsx)(o.a,{as:"h2",content:a,inverted:!!h})})]}),Object(u.jsxs)(d.a.Column,{textAlign:"right",width:6,children:[Object(u.jsx)(d.a.Row,{children:Object(u.jsx)(o.a,{as:"h5",content:"Advance",color:h?"black":"teal",inverted:!!h})}),Object(u.jsx)(d.a.Row,{children:Object(u.jsx)(o.a,{as:"h6",content:f,inverted:!!h})})]})]}),Object(u.jsx)(d.a.Row,{columns:1,style:{padding:"0"},children:Object(u.jsx)(d.a.Column,{children:Object(u.jsx)(o.a,{as:"h2",content:p,textAlign:"right",inverted:!!h})})})]})})})})},E=function(e){var t=e.products,n=e.getInvestor,c=e.selected;return Object(u.jsx)(_.a.Group,{children:t.map((function(e){return Object(u.jsx)(z,{product:e,getInvestor:n,selected:c},e.product_id)}))})},D=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),a=Object(v.a)(s,2),r=a[0],j=a[1];Object(c.useEffect)((function(){p.a.post("https://demo7555831.mockable.io/get_products_by_id",{user_id:""}).then((function(e){var t=e.data.information;i(t)})).catch(console.error)}),[]);return Object(u.jsx)(l.a,{attached:"top",style:{padding:"0 0",height:"100%"},children:Object(u.jsxs)(d.a,{columns:2,doubling:!0,stretched:!0,style:{margin:"0 0",marginLeft:"0 !important",height:"100%"},children:[Object(u.jsxs)(d.a.Column,{width:5,style:{height:"100%",padding:"0 0"},children:[Object(u.jsx)("div",{className:"ui left aligned card_header",children:Object(u.jsx)(o.a,{as:"h4",content:"Select a product to syndicate",style:{margin:"0.5em 2em"}})}),Object(u.jsx)("div",{style:{overflowY:"scroll",minHeight:"48vh"},children:Object(u.jsx)(E,{products:n,getInvestor:function(e){j(e)},selected:r})}),Object(u.jsx)(l.a,{textAlign:"center",className:"card_button",children:Object(u.jsxs)(d.a,{columns:2,children:[Object(u.jsx)(d.a.Column,{children:Object(u.jsxs)(g.a,{color:"teal",size:"medium",style:{borderRadius:"15px",width:"160px"},children:[Object(u.jsx)(h.a,{name:"close"})," Close"]})}),Object(u.jsx)(d.a.Column,{children:Object(u.jsxs)(g.a,{size:"medium",style:{borderRadius:"15px",width:"160px",background:"white",color:"teal",border:"1px solid rgba(228, 228, 228,0.6)"},children:[Object(u.jsx)(h.a,{name:"save"})," Sell"]})})]})})]}),Object(u.jsx)(d.a.Column,{width:11,style:{padding:"0"},children:Object(u.jsx)(I,{product:r})})]})})};var H=function(){return Object(u.jsx)(m,{className:"App",children:Object(u.jsxs)("div",{style:{maxHeight:"80vh"},children:[Object(u.jsx)("div",{className:"card_floated",children:Object(u.jsx)(D,{})}),Object(u.jsx)(o.a,{as:"h1",inverted:!0,className:"text_floated",children:"Advances for syndication"}),Object(u.jsx)(g.a,{circular:!0,icon:"add",color:"orange",className:"button_floated"}),Object(u.jsx)("div",{style:{backgroundColor:"#00b5ad",margin:"0 0",width:"100%",height:"20vh"}}),Object(u.jsx)("div",{style:{margin:"0 0",width:"100%",height:"70vh"}})]})})};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(H,{})})}),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.ba6a25a7.chunk.js.map