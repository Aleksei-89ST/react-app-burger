(this["webpackJsonphot-burgers"]=this["webpackJsonphot-burgers"]||[]).push([[0],{35:function(e,t,a){e.exports=a(53)},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(21),s=a(25),l=[{title:"Hot Burger \u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f",url:"hot-burger-tverskaya",id:1},{title:"Hot Burger \u041c\u0430\u0440\u043e\u0441\u0435\u0439\u043a\u0430",url:"hot-burger-maroseyka",id:2},{title:"Hot Burger \u041f\u0435\u0442\u0440\u043e\u0432\u043a\u0430",url:"hot-burger-petrovka",id:3}],u=function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),c=a[0],u=a[1],i=Object(r.useState)(""),o=Object(s.a)(i,2),m=o[0],p=o[1],d=Object(r.useState)(""),h=Object(s.a)(d,2),g=h[0],b=h[1];return n.a.createElement("div",{className:"restaurant_select"},n.a.createElement("div",{className:"restaurant_select_top"},n.a.createElement("div",{onClick:function(){u(!c)},className:"restaurant_select_top-header font-effect-outline"},m||"\u0412\u044b\u0431\u0435\u0440\u0438 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"),n.a.createElement("div",{className:"arrow_picker"},n.a.createElement("div",{className:"arrow_picker-up"}),n.a.createElement("div",{className:"arrow_pecker-down"}))),c?n.a.createElement("div",{className:"restaurant_select_bottom"},n.a.createElement("ul",null,l.map((function(e){return n.a.createElement("li",{onClick:function(){return function(e){var t=e.title,a=e.url;p(t),b(a),u(!1)}(e)},key:e.id},e.title)})))):null,m&&!c?n.a.createElement("button",{onClick:function(){e.history.push("/restaurant/".concat(g))}},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"):null)},i=a(5),o=a(23),m=a(16),p=a.n(m),d=a(20),h=a(17),g=a(7),b=a(8),f=a(10),v=a(9),E=function(e){return n.a.createElement("header",{className:"top"},n.a.createElement("div",{className:"wrap"},n.a.createElement("div",{className:"header-content"},n.a.createElement("div",{className:"header-rating"},n.a.createElement("div",{className:"header-rating-tag"}," \u0420\u0435\u0439\u0442\u0438\u043d\u0433: "),n.a.createElement("div",{className:"header-rating-icon"}," \u2605\u2605\u2605\u2605\u2605 ")),n.a.createElement("div",{className:"header-divider"}),n.a.createElement("h1",{className:"font-effect-fire-animation"},e.title),n.a.createElement("h3",null,n.a.createElement("span",null,"\u0411\u044b\u0441\u0442\u0440\u043e\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),n.a.createElement("span",{className:"sub-header"},"#\u0431\u0443\u0440\u0433\u0435\u0440\u043e\u0432")))))},O=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).nameRef=n.a.createRef(),e.priceRef=n.a.createRef(),e.statusRef=n.a.createRef(),e.descRef=n.a.createRef(),e.imageRef=n.a.createRef(),e.createBurger=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value||0),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addBurger(a),t.currentTarget.reset()},e}return Object(b.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{className:"burger-edit",onSubmit:this.createBurger},n.a.createElement("input",{ref:this.nameRef,name:"name",type:"text",placeholder:"Name",autoComplete:"off"}),n.a.createElement("input",{ref:this.priceRef,name:"price",type:"text",placeholder:"Price",autoComplete:"off"}),n.a.createElement("select",{ref:this.statusRef,name:"status",className:"status"},n.a.createElement("option",{value:"avalible"},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e"),n.a.createElement("option",{value:"anavalible"},"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043c\u0435\u043d\u044e")),n.a.createElement("textarea",{ref:this.descRef,name:"desc",placeholder:"Desc"}),n.a.createElement("input",{ref:this.imageRef,name:"image",type:"text",placeholder:"Image",autoComplete:"off"}),n.a.createElement("button",{type:"submit"},"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u041c\u0435\u043d\u044e"))}}]),a}(n.a.Component),j=a(24),y=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleChange=function(t){var a=Object(h.a)(Object(h.a)({},e.props.burger),{},Object(j.a)({},t.currentTarget.name,"price"===t.currentTarget.name?parseFloat(t.currentTarget.value)||0:t.currentTarget.value));e.props.updateBurger(e.props.index,a)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"burger-edit"},n.a.createElement("input",{onChange:this.handleChange,name:"name",type:"text",value:this.props.burger.name}),n.a.createElement("input",{onChange:this.handleChange,name:"price",type:"text",value:this.props.burger.price}),n.a.createElement("select",{onChange:this.handleChange,name:"status",className:"status",value:this.props.burger.status},n.a.createElement("option",{value:"available"},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e!"),n.a.createElement("option",{value:"unavailable"},"\u041d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e!")),n.a.createElement("textarea",{onChange:this.handleChange,name:"desc",value:this.props.burger.desc}),n.a.createElement("input",{onChange:this.handleChange,name:"image",type:"text",value:this.props.burger.image}),n.a.createElement("button",{onClick:function(){return e.props.deleteBurger(e.props.index)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043c\u0435\u043d\u044e"))}}]),a}(n.a.Component),N=a(14),k=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={photo:"",user:""},e.authHandler=function(){var t=Object(d.a)(p.a.mark((function t(a){var r,n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=a.user,n=r.email,c=r.photoURL,e.setState({user:n,photo:c});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.default.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,r=t.photo,c=r||"/images/avatar.png";return n.a.createElement("div",{className:"menu-admin"},a?n.a.createElement("div",{className:"login-header"},n.a.createElement("div",{className:"avatar"},n.a.createElement("img",{src:c,alt:a})),n.a.createElement("button",{className:"buttonLogout",onClick:this.props.handleLogout},"\u0412\u044b\u0439\u0442\u0438")):null,n.a.createElement("h2",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u041c\u0435\u043d\u044e"),Object.keys(this.props.burgers).map((function(t){return n.a.createElement(y,{key:t,index:t,deleteBurger:e.props.deleteBurger,burger:e.props.burgers[t],updateBurger:e.props.updateBurger})})),n.a.createElement(O,{addBurger:this.props.addBurger}),n.a.createElement("button",{onClick:this.props.loadSampleBurgers},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0411\u0443\u0440\u0433\u0435\u0440\u044b"))}}]),a}(n.a.Component),C=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.total,t=e>0&&e<500?350:99,a=99===t?n.a.createElement("span",{className:" font-effect-neon total_wrap-chep"},t," \u20bd"):n.a.createElement("span",null,t," \u20bd");return n.a.createElement("div",{className:"total"},n.a.createElement("div",{className:"total_wrap"},n.a.createElement("div",null,n.a.createElement("div",null,"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430: ",e>0?a:null),n.a.createElement("div",{className:"total_wrap-free"},e<500?"\u0417\u0430\u043a\u0430\u0436\u0438\u0442\u0435 \u0435\u0449\u0451 \u043d\u0430 ".concat(500-e," \u20bd \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0437\u0430 99 \u20bd"):null)),n.a.createElement("div",{className:"total_wrap-final"},"\u0418\u0442\u043e\u0433\u043e: ",e," \u20bd")))}}]),a}(n.a.Component),B=a(55),w=a(56),S=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).renderOrder=function(t){var a=e.props.burgers[t],r=e.props.order[t],c=a&&"available"===a.status,s={classNames:"order",key:t,timeout:{enter:500,exit:500}};return a?c?n.a.createElement(B.a,s,n.a.createElement("li",{key:t},n.a.createElement("span",null,n.a.createElement(w.a,{component:"span",className:"count"},n.a.createElement(B.a,{classNames:"count",key:r,timeout:{enter:500,exit:500}},n.a.createElement("span",null,r))),"\u0448\u0442. ",a.name,n.a.createElement("span",null," ",r*a.price," \u20bd "),n.a.createElement("button",{onClick:function(){return e.props.deleteFromOrder(t)},className:"cansellItem"},"\xd7")))):n.a.createElement(B.a,s,n.a.createElement("li",{className:"unavailible",key:t},"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435,",a?a.name:"burger"," \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d")):null},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var r=e.props.burgers[a],n=e.props.order[a];return r&&"available"===r.status?t+r.price*n:t}),0);return n.a.createElement("div",{className:"order-wrap"},n.a.createElement("h2",null,"\u0412\u0430\u0448 \u0417\u0430\u043a\u0430\u0437"),n.a.createElement(w.a,{component:"ul",className:"order"},t.map(this.renderOrder)),a>0?n.a.createElement(C,{total:a}):n.a.createElement("div",{className:"nothingSelected"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043b\u044e\u0434\u0430 \u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"))}}]),a}(n.a.Component),x={burger1:{name:"\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/cheese.jpg",desc:"\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u043e\u043c \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b \u0441 \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u0430\u043c\u0438 \u0438 \u0441\u0432\u0435\u0436\u0435\u0439 \u043f\u0448\u0435\u043d\u0438\u0447\u043d\u043e\u0439 \u0431\u0443\u043b\u043e\u0447\u043a\u043e\u0439.",price:110,status:"available"},burger2:{name:"\u0427\u0438\u043a\u0435\u043d\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/chicken.jpg",desc:"\u041a\u0443\u0440\u0438\u043d\u044b\u0439 \u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u044b\u0440\u0430, \u0441\u043e\u0443\u0441\u0430 \u0411\u0430\u0440\u0431\u0435\u043a\u044e \u0438 \u043b\u0438\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0430\u043b\u0430\u0442\u0430.",price:140,status:"available"},burger3:{name:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0413\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/double.jpg",desc:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0433\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u043e\u043c \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b \u0438 \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c \u0427\u0435\u0434\u0434\u0435\u0440 \u0438 \u043f\u0440\u044f\u043d\u044b\u043c \u0441\u043e\u0443\u0441\u043e\u043c.",price:200,status:"unavailable"},burger4:{name:"\u0424\u0438\u0448\u0431\u0443\u0440\u0433\u0435\u0440",image:"/images/fish.jpg",desc:"\u0420\u044b\u0431\u043d\u043e\u0435 \u0444\u0438\u043b\u0435 \u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 c \u043b\u0438\u0441\u0442\u043e\u0432\u044b\u043c \u0441\u0430\u043b\u0430\u0442\u043e\u043c, \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u0430\u043c\u0438 \u0438 \u043f\u0440\u0435\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u043b\u0435\u0433\u043a\u0438\u043c \u043c\u0430\u0439\u043e\u043d\u0435\u0437\u043e\u043c.",price:150,status:"available"},burger5:{name:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0424\u0440\u0438",image:"/images/fries.jpg",desc:"\u0425\u0440\u0443\u0441\u0442\u044f\u0449\u0438\u0435 \u043b\u043e\u043c\u0442\u0438\u043a\u0438 \u0437\u043e\u043b\u043e\u0442\u0438\u0441\u0442\u043e\u0433\u043e \u0433\u043e\u0440\u044f\u0447\u0435\u0433\u043e \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044f \u0421\u0443\u043f\u0435\u0440 \u0424\u0440\u0438, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0433\u043e \u043e\u0440\u0433\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u043d\u0435\u043f\u043b\u043e\u0434\u0430!",price:85,status:"available"},burger6:{name:"King \u0411\u0443\u0440\u0433\u0435\u0440",image:"/images/ham.jpg",desc:"\u0411\u0443\u0440\u0433\u0435\u0440 \u0438\u0437 100% \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0439 \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b, \u0441 \u0436\u0430\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u043b\u043e\u043c\u0442\u0438\u043a\u0430\u043c\u0438 \u0431\u0435\u043a\u043e\u043d\u0430 \u0438 \u0441\u0432\u0435\u0436\u0438\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c, \u0437\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043a\u0435\u0442\u0447\u0443\u043f\u043e\u043c \u0438 \u043c\u0430\u0439\u043e\u043d\u0435\u0437\u043e\u043c.",price:450,status:"available"},burger7:{name:"\u041c\u0435\u0433\u0430 \u0411\u0443\u0440\u0433\u0435\u0440",image:"/images/mega.jpg",desc:"\u041d\u0430\u0448 \u0441\u0430\u043c\u044b\u0439 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u0440\u0433\u0435\u0440, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0439 \u0438\u0437 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0431\u0438\u0444\u0448\u0442\u0435\u043a\u0441\u0430, \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0441\u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u044b\u0440\u0430 \u0427\u0435\u0434\u0434\u0435\u0440 \u0438 \u0441\u043e\u043b\u0435\u043d\u044b\u0445 \u043e\u0433\u0443\u0440\u0447\u0438\u043a\u043e\u0432.",price:500,status:"available"},burger8:{name:"\u0411\u0443\u0440\u0433\u0435\u0440 \u0432 \u041f\u0438\u0442\u0435",image:"/images/pita.jpg",desc:"\u0427\u0435\u0442\u044b\u0440\u0435 \u043a\u043e\u0442\u043b\u0435\u0442\u044b \u0438\u0437 100% \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u044b, \u043f\u043e\u043a\u0440\u044b\u0442\u044b\u0435 \u043f\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c \u0427\u0435\u0434\u0434\u0435\u0440, \u0441\u043e \u0441\u0432\u0435\u0436\u0438\u043c \u043b\u0438\u0441\u0442\u043e\u0432\u044b\u043c \u0441\u0430\u043b\u0430\u0442\u043e\u043c \u0432 \u0441\u0432\u0435\u0436\u0435\u0439 \u043f\u0448\u0435\u043d\u0438\u0447\u043d\u043e\u0439 \u043b\u0435\u043f\u0435\u0448\u043a\u0435.",price:380,status:"available"},burger9:{name:"Village \u0424\u0440\u0438",image:"/images/bakedFries.jpg",desc:"\u041f\u043e\u0440\u0446\u0438\u044f \u0441\u0432\u0435\u0436\u0438\u0445 \u043b\u043e\u043c\u0442\u0438\u043a\u043e\u0432 \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044f, \u0437\u0430\u043f\u0435\u0447\u0435\u043d\u044b\u0445 \u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043c \u0432\u043e\u0437\u0434\u0443\u0445\u0435 \u043f\u043e\u0434 \u043c\u0438\u0440\u043d\u043e \u0442\u043b\u0435\u044e\u0449\u0438\u043c\u0438 \u0443\u0433\u043b\u044f\u043c\u0438",price:90,status:"available"}},R=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,r=t.name,c=t.price,s=t.desc,l="available"===t.status;return n.a.createElement("li",{className:"menu-burger"},n.a.createElement("div",{className:"image-container"},n.a.createElement("img",{src:a,alt:r})),n.a.createElement("div",{className:"burger-details"},n.a.createElement("h3",{className:"burger-name"},r,n.a.createElement("span",{className:"price"},c," \u20bd ")," "),n.a.createElement("p",null,s),n.a.createElement("button",{className:"buttonOrder",disabled:!l,onClick:function(){return e.props.addToOrder(e.props.index)}},l?"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c":"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0442")))}}]),a}(n.a.Component),_=a(32),A=a.n(_),I=(a(44),a(48),N.default.initializeApp({apiKey:"AIzaSyAIl84324du8blrXayE_je0bitgNC2escY",authDomain:"very-hot-burgers-47ba0.firebaseapp.com",databaseURL:"https://very-hot-burgers-47ba0-default-rtdb.firebaseio.com"})),H=A.a.createClass(I.database()),T=function(e){return n.a.createElement("div",{className:"login-container"},n.a.createElement("nav",{className:"login"},n.a.createElement("h2",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),n.a.createElement("p",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 GitHub"),n.a.createElement("button",{className:"github",onClick:function(){return e.authenticate()}},"\u0412\u043e\u0439\u0442\u0438")))},D=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={user:""},e.authHandler=function(){var t=Object(d.a)(p.a.mark((function t(a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=a.user.email,e.setState({user:r});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(){var t=new N.default.auth.GithubAuthProvider;I.auth().signInWithPopup(t).then(e.authHandler)},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.default.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){return this.state.user?this.props.children:n.a.createElement(T,{authenticate:this.authenticate})}}]),a}(n.a.Component),F=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={burgers:{},order:{}},e.addBurger=function(t){var a=Object(h.a)({},e.state.burgers);a["burger".concat(Date.now())]=t,e.setState({burgers:a})},e.updateBurger=function(t,a){var r=Object(h.a)({},e.state.burgers);r[t]=a,e.setState({burgers:r})},e.deleteBurger=function(t){var a=Object(h.a)({},e.state.burgers);a[t]=null,e.setState({burgers:a})},e.loadSampleBurgers=function(){e.setState({burgers:x})},e.addToOrder=function(t){var a=Object(h.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.deleteFromOrder=function(t){var a=Object(h.a)({},e.state.order);delete a[t],e.setState({order:a})},e.handleLogout=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.default.auth().signOut();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.restaurantId);t&&this.setState({order:JSON.parse(t)}),this.ref=H.syncState("".concat(e.restaurantId,"/burgers"),{context:this,state:"burgers"})}},{key:"componentDidUpdate",value:function(){var e=this.props.match.params;localStorage.setItem(e.restaurantId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){H.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return n.a.createElement(D,null,n.a.createElement("div",{className:"burger-paradise"},n.a.createElement("div",{className:"menu"},n.a.createElement(E,{title:"Very Hot Burger"}),n.a.createElement("ul",{className:"burgers"},Object.keys(this.state.burgers).map((function(t){return n.a.createElement(R,{key:t,index:t,addToOrder:e.addToOrder,details:e.state.burgers[t]})})))),n.a.createElement(S,{burgers:this.state.burgers,order:this.state.order,deleteFromOrder:this.deleteFromOrder}),n.a.createElement(k,{addBurger:this.addBurger,loadSampleBurgers:this.loadSampleBurgers,burgers:this.state.burgers,updateBurger:this.updateBurger,deleteBurger:this.deleteBurger,handleLogout:this.handleLogout})))}}]),a}(n.a.Component),L=function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"The Page is Not Found"))},J=function(){return n.a.createElement(o.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:u}),n.a.createElement(i.a,{path:"/restaurant/:restaurantId",component:F}),n.a.createElement(i.a,{component:L})))};a(52);Object(c.render)(n.a.createElement(J,null),document.querySelector("#root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.843af1ab.chunk.js.map