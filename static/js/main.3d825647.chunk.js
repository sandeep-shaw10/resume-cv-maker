(this["webpackJsonpresume-maker"]=this["webpackJsonpresume-maker"]||[]).push([[0],{26:function(e,t,a){},49:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(24),n=a.n(c),r=a(28),l=a(3),o=a(4),i=a(2),d=a(6),j=a(5),b=(a(57),a(13)),m=a(10),u=(a(58),a(91)),p=a(92),h=(a(59),a(0)),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(u.a,{expand:"lg",className:"navbar",children:[Object(h.jsx)(u.a.Brand,{to:"/home",className:"text-light",children:"Resume Maker"}),Object(h.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(p.a,{className:"ml-auto",children:[Object(h.jsx)(b.b,{className:"pr-4 my-1 navlink",to:"/home",children:"Home"}),Object(h.jsx)(b.b,{className:"pr-4 my-1 navlink",to:"/resume/details",children:"Resume"}),Object(h.jsx)(b.b,{className:"pr-4 my-1 navlink",to:"/about",children:"About"}),Object(h.jsx)(b.b,{className:"pr-4 my-1 navlink",to:"/contact",children:"Contact"})]})})]})})}}]),a}(s.Component),x=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("footer",{className:"text-center py-1",children:Object(h.jsx)("p",{className:"strong",children:"\xa9 All right Reserved 2021"})})})}}]),a}(s.Component),v=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Home"})})}}]),a}(s.Component),f=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"my-5",children:Object(h.jsx)("h1",{children:"About"})})}}]),a}(s.Component),g=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"my-5",children:Object(h.jsx)("h1",{children:"Contacts"})})}}]),a}(s.Component),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this)).clearAll=s.clearAll.bind(Object(i.a)(s)),s}return Object(o.a)(a,[{key:"clearAll",value:function(){if(window.confirm("Do you want to Delete all ?")){this.props.updateState({personal:{name:"",occupation:"",phone:"",email:"",website:"",about:"",image:""},social:{LinkedIn:"",Facebook:"",Github:"",Twitter:"",Youtube:"",Dribbble:""},skill:["Add Skill"],language:["Add Language"],education:[{name:"Institute of ABC, XYZ",degree:"B. Sc",from:"2015",to:"2018",about:"<p> About.... </p>"}],work:[{name:"Teach ABC, XYZ",work:"Web Developer",from:"2015",to:"2018",about:"<p> About.... </p>"}],awards:[{name:"Certificate of Something",work:"Hackathon",from:"2015",to:"",about:"<p> About.... </p>"}],project:[{name:"ML Project",work:"Data Visualization",from:"2015",to:"",about:"<p> About.... </p>"}]}),localStorage.removeItem("resume-data")}}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.b,{className:"btn btn-info my-2 mx-1 btn-sm",to:"/resume/details",children:"Details"}),Object(h.jsx)(b.b,{className:"btn btn-info my-2 mx-1 btn-sm",to:"/resume/media",children:"Media"}),Object(h.jsx)(b.b,{className:"btn btn-info my-2 mx-1 btn-sm",to:"/resume/education",children:"Education"}),Object(h.jsx)(b.b,{className:"btn btn-info my-2 mx-1 btn-sm",to:"/resume/work",children:"Work"}),Object(h.jsx)(b.b,{className:"btn btn-info my-2 mx-1 btn-sm",to:"/resume/project",children:"Project"}),Object(h.jsx)(b.b,{className:"btn btn-info my-2 mx-1 btn-sm",to:"/resume/awards",children:"Awards"}),Object(h.jsx)(b.b,{className:"btn btn-info my-2 mx-1 btn-sm",to:"/resume/skills",children:"Skills"}),Object(h.jsx)(b.b,{className:"btn btn-info my-2 mx-1 btn-sm",to:"/resume/language",children:"Languages"}),Object(h.jsx)(b.b,{className:"btn btn-info my-2 mx-1 btn-sm",to:"/resume/preview",children:"Preview"}),Object(h.jsx)("button",{className:"btn btn-danger my-2 mx-1 btn-sm",onClick:this.clearAll,children:"Delete"})]})}}]),a}(s.Component),y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"my-3 text-center",children:"Resume Maker"}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-12 text-center",children:Object(h.jsx)(N,{updateState:this.props.updateState})})})]})})}}]),a}(s.Component),k=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).updateData=function(e){var t=e.target.id;"image"===t?(s.bitData=URL.createObjectURL(e.target.files[0]),s.props.detail.personal[t]=s.bitData):(s.bitData=e.target.value,s.props.detail.personal[t]=s.bitData);var a=s.props;s.props.updateState(a.personal)},s.name=e.detail.personal.name,console.log(s.name),s.updateData=s.updateData.bind(Object(i.a)(s)),s}return Object(o.a)(a,[{key:"initState",value:function(){}},{key:"render",value:function(){var e=this.props.detail;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{updateState:this.props.updateState}),Object(h.jsxs)("div",{className:"container py-4 my-4  toggle",children:[Object(h.jsx)("h1",{className:"text-center display-4",children:"PERSONAL DETAIL"}),Object(h.jsxs)("div",{className:"form-row",children:[Object(h.jsx)("div",{className:"col-lg-6 col-md-12 py-2",children:Object(h.jsx)("input",{type:"text",id:"name",value:e.personal.name,onChange:this.updateData,className:"form-control personal-form",placeholder:"Full Name"})}),Object(h.jsx)("div",{className:"col-lg-6 col-md-12 py-2",children:Object(h.jsx)("input",{type:"text",id:"occupation",value:e.personal.occupation,onChange:this.updateData,className:"form-control personal-form",placeholder:"Current Occupation"})}),Object(h.jsx)("div",{className:"col-lg-4 col-md-6 py-2",children:Object(h.jsx)("input",{type:"text",id:"phone",value:e.personal.phone,onChange:this.updateData,className:"form-control personal-form",placeholder:"Phone no."})}),Object(h.jsx)("div",{className:"col-lg-4 col-md-6 py-2",children:Object(h.jsx)("input",{type:"email",id:"email",value:e.personal.email,onChange:this.updateData,className:"form-control personal-form",placeholder:"Email"})}),Object(h.jsx)("div",{className:"col-lg-4 col-md-7 py-2",children:Object(h.jsx)("input",{type:"url",id:"website",value:e.personal.website,onChange:this.updateData,className:"form-control personal-form",placeholder:"Website"})}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("label",{htmlFor:"objective",children:"Your Aim / Objective / About "}),Object(h.jsx)("textarea",{id:"about",value:e.personal.about,onChange:this.updateData,className:"form-control personal-form",rows:"5"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("label",{htmlFor:"imageField",children:"Enter Image (Not mandatory)"}),Object(h.jsx)("input",{type:"file",onChange:this.updateData,name:"image",accept:"image/jpeg, image/png",className:"form-control-file personal-form",id:"image"})]})]})]}),Object(h.jsx)("div",{className:"mb-5"})]})}}]),a}(s.Component),w=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).updateData=function(e){var t=e.target.id;s.bitData=e.target.value,s.props.social.social[t]=s.bitData;var a=s.props;s.props.updateState(a.social)},s.updateData=s.updateData.bind(Object(i.a)(s)),s}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.social;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{updateState:this.props.updateState}),Object(h.jsxs)("div",{className:"container py-4 my-4  toggle",children:[Object(h.jsx)("h1",{className:"text-center display-4",children:" SOCIAL MEDIA"}),Object(h.jsx)("div",{className:"row",children:[{favicon:"fa-linkedin",place:"LinkedIn"},{favicon:"fa-facebook-square",place:"Facebook"},{favicon:"fa-github",place:"Github"},{favicon:"fa-twitter",place:"Twitter"},{favicon:"fa-youtube",place:"Youtube"},{favicon:"fa-dribbble",place:"Dribbble"}].map((function(a,s){return Object(h.jsx)("div",{className:"col-lg-6 col-md-12 mb-4",children:Object(h.jsxs)("div",{className:"social-wrap d-flex justify-content-between",children:[Object(h.jsxs)("div",{className:"mx-2",children:[" ",Object(h.jsx)("i",{className:"fa "+a.favicon+" fa-2x"})," "]}),Object(h.jsx)("input",{type:"text",id:a.place,onChange:e.updateData,className:"form-control form-control-social",placeholder:a.place,value:t.social[a.place]})]})},s)}))})]})]})}}]),a}(s.Component),C=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"col-12 mb-3",children:Object(h.jsxs)("div",{className:"component bg-light rounded p-1",children:[Object(h.jsxs)("div",{className:"wrap d-flex justify-content-between mb-0",children:[Object(h.jsxs)("h4",{children:[" ",Object(h.jsx)("b",{className:"bold",children:this.props.degree}),", "+this.props.place]}),Object(h.jsxs)("div",{className:"lead",children:[Object(h.jsx)("span",{children:this.props.from}),Object(h.jsx)("span",{className:this.props.display,children:""===this.props.to?"":"- "+this.props.to})]}),Object(h.jsx)("button",{className:"btn btn-danger p-0 px-2 m-0",onClick:function(){return e.props.handleDelete(e.props.value)},children:Object(h.jsx)("i",{className:"fa fa-trash"})})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"about-text pl-4",dangerouslySetInnerHTML:{__html:this.props.about}})]})})})}}]),a}(s.Component),S=(a(26),a(20)),D=a(21),I=a.n(D),A=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).updateData=function(){if(""===s.state.name||""===s.state.degree||""===s.state.from)alert("Atleast enter the Institute Name, Degree Name and the year");else{var e=s.state,t=s.props;t.data.education.push(e);var a=document.getElementsByClassName("ck-editor__editable"),c=t.data.education.length-1;t.data.education[c].about=a[0].innerHTML,s.props.updateState(t.data),s.setState({name:"",degree:"",from:"",to:"",about:""}),a[0].innerHTML="<p> About......... </p>"}},s.onChangeInput=function(e){var t=e.target.id,a=s.state;a[t]=e.target.value,s.setState(a)},s.handleDelete=function(e){var t=s.props.data.education.length-e-1,a=s.props.data.education;a=a.filter((function(e,a){return a!==t}));var c=s.props;c.data.education=a,s.props.updateState(c.data)},s.updateData=s.updateData.bind(Object(i.a)(s)),s.onChangeInput=s.onChangeInput.bind(Object(i.a)(s)),s.handleDelete=s.handleDelete.bind(Object(i.a)(s)),s.state={name:"",degree:"",from:"",to:"",about:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{updateState:this.props.updateState}),Object(h.jsxs)("div",{className:"container py-4 my-4  toggle",children:[Object(h.jsx)("h1",{className:"text-center display-4",children:"EDUCATION"}),Object(h.jsxs)("div",{className:"form-row",children:[Object(h.jsxs)("div",{className:"col-12 py-2",children:[Object(h.jsx)("label",{htmlFor:"name",children:" Name "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.name,type:"text",className:"form-control",placeholder:"Enter the Institution Name",id:"name"})]}),Object(h.jsxs)("div",{className:"col-md-3 col-6 py-2 ",children:[Object(h.jsx)("label",{htmlFor:"from",children:" From "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.from,type:"number",className:"form-control",placeholder:"Enter the Year",id:"from"})]}),Object(h.jsxs)("div",{className:"col-md-3 col-6 py-2  ",children:[Object(h.jsx)("label",{htmlFor:"to",children:" To "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.to,type:"number",className:"form-control",placeholder:"Enter the Year",id:"to"})]}),Object(h.jsxs)("div",{className:"col-md-6 col-12 py-2",children:[Object(h.jsxs)("label",{htmlFor:"degree",children:[" ","Degree"," "]}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.degree,type:"text",className:"form-control",placeholder:"Enter the degree Name",id:"degree"})]}),Object(h.jsxs)("div",{className:"col-12 py-2",children:[Object(h.jsx)("label",{children:" About "}),Object(h.jsx)(S.CKEditor,{editor:I.a,data:"<p> About......... </p>"})]}),Object(h.jsx)("div",{className:"mx-auto mt-2 mb-4",children:Object(h.jsxs)("button",{className:"btn btn-dark",onClick:this.updateData,children:["ADD ",Object(h.jsx)("i",{className:"fa fa-plus"})," "]})})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"container",children:this.props.data.education.slice(0).reverse().map((function(t,a){return Object(h.jsx)(C,{degree:t.degree,place:t.name,about:t.about,from:t.from,to:t.to,value:a,handleDelete:e.handleDelete,display:"block"},a)}))})]})}}]),a}(s.Component),F=(a(49),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).validateEnterKey=function(e){"Enter"===e.key&&(console.log(s.props.skill),s.props.skill.skill.includes(e.target.value)?alert('"'+e.target.value+'" already exists.'):(s.props.skill.skill.push(e.target.value),s.props.updateState(s.props.skill),e.target.value=""))},s.deleteKey=function(e){console.log(e);var t=s.props.skill;t.skill=t.skill.filter((function(t,a){return a!==e})),s.props.updateState(t)},s.validateEnterKey=s.validateEnterKey.bind(Object(i.a)(s)),s.deleteKey=s.deleteKey.bind(Object(i.a)(s)),s}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.skill;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{data:this.props,updateState:this.props.updateState}),Object(h.jsxs)("div",{className:"container py-4 my-4 toggle",id:"toggle-Skills",children:[Object(h.jsx)("h1",{className:"text-center display-4",children:" SKILLS"}),Object(h.jsx)("div",{className:"skill-box",children:Object(h.jsx)("div",{className:"skill-value text-center",children:Object(h.jsx)("ul",{children:t.skill.map((function(t,a){return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:t}),Object(h.jsx)("button",{onClick:function(){return e.deleteKey(a)},children:Object(h.jsx)("span",{className:"close-btn",children:Object(h.jsx)("i",{className:"fa fa-close"})})})]},a)}))})})}),Object(h.jsx)("div",{className:"form-group row mt-3 mx-auto",children:Object(h.jsx)("div",{className:"col-6 mx-auto",children:Object(h.jsx)("input",{type:"text",className:"form-control",maxLength:"25",id:"key-skill",placeholder:"Type your skill and press enter",onKeyDown:this.validateEnterKey})})})]})]})}}]),a}(s.Component)),E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).validateEnterKey=function(e){"Enter"===e.key&&(console.log(s.props.language),s.props.language.language.includes(e.target.value)?alert('"'+e.target.value+'" already exists.'):(s.props.language.language.push(e.target.value),s.props.updateState(s.props.language),e.target.value=""))},s.deleteKey=function(e){console.log(e);var t=s.props.language;t.language=t.language.filter((function(t,a){return a!==e})),s.props.updateState(t)},s.validateEnterKey=s.validateEnterKey.bind(Object(i.a)(s)),s.deleteKey=s.deleteKey.bind(Object(i.a)(s)),s}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.language;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{data:this.props,updateState:this.props.updateState}),Object(h.jsxs)("div",{className:"container py-4 my-4 toggle",id:"toggle-Skills",children:[Object(h.jsx)("h1",{className:"text-center display-4",children:" LANGUAGE "}),Object(h.jsx)("div",{className:"skill-box",children:Object(h.jsx)("div",{className:"skill-value text-center",children:Object(h.jsx)("ul",{children:t.language.map((function(t,a){return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:t}),Object(h.jsx)("button",{onClick:function(){return e.deleteKey(a)},children:Object(h.jsx)("span",{className:"close-btn",children:Object(h.jsx)("i",{className:"fa fa-close"})})})]},a)}))})})}),Object(h.jsx)("div",{className:"form-group row mt-3 mx-auto",children:Object(h.jsx)("div",{className:"col-6 mx-auto",children:Object(h.jsx)("input",{type:"text",className:"form-control",maxLength:"25",id:"key-skill",placeholder:"Type your skill and press enter",onKeyDown:this.validateEnterKey})})})]})]})}}]),a}(s.Component),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).removeImage=function(){var e=s.props.data;e.data.personal.image="",e.updateState(e.social)},s.printResume=function(){window.print()},s.themeColor=function(e){var t=e.target.value;s.props.themeColor.theme=t;var a=s.props;s.props.updateTheme(a.theme)},s.textColor=function(e){var t=e.target.value;s.props.themeColor.color=t;var a=s.props;s.props.updateTheme(a.color)},s.removeImage=s.removeImage.bind(Object(i.a)(s)),s.printResume=s.printResume.bind(Object(i.a)(s)),s.themeColor=s.themeColor.bind(Object(i.a)(s)),s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"btn-group btn-group-sm",children:[Object(h.jsx)("a",{href:"/resume/details",type:"button",className:"btn btn-primary",children:"Insert Image"}),Object(h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:this.removeImage,children:"Remove Image"}),Object(h.jsx)("button",{type:"button",className:"btn btn-warning",onClick:this.printResume,children:"Print Resume"})]})})}),Object(h.jsx)("div",{className:"container my-3",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-6",children:[Object(h.jsx)("label",{htmlFor:"favcolor1",className:"label mr-4",children:"Theme Colour: "}),Object(h.jsx)("input",{type:"color",id:"favcolor1",name:"favcolor1",defaultValue:this.props.themeColor.theme,onChange:function(t){e.themeColor(t)}})]}),Object(h.jsxs)("div",{className:"col-6",children:[Object(h.jsx)("label",{htmlFor:"favcolor1",className:"label mr-4",children:"Text Colour: "}),Object(h.jsx)("input",{type:"color",id:"favcolor1",name:"favcolor1",defaultValue:this.props.themeColor.color,onChange:function(t){e.textColor(t)}})]})]})})]})}}]),a}(s.Component),L=(a(87),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).yearFormatting=function(e,t){return""!==t?"( "+e+" - "+t+" )":"( "+e+" )"},s.updateTheme=function(e){s.setState(Object(r.a)({},e))},s.yearFormatting=s.yearFormatting.bind(Object(i.a)(s)),s.state={theme:"#ffb9b9",color:"#262626"},s.updateTheme=s.updateTheme.bind(Object(i.a)(s)),s}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data,a=t.personal.image,s=""===a?"col-12":"col-9",c=t.education,n=t.work,r=t.awards,l=t.project,o=t.skill,i=t.language,d=t.social,j={backgroundColor:this.state.theme},b={borderBottom:"2px solid "+this.state.theme},m={color:this.state.color};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{updateState:this.props.updateState}),Object(h.jsx)(T,{data:this.props,updateTheme:this.updateTheme,themeColor:this.state}),Object(h.jsxs)("div",{className:"container my-4 bg-light py-3",id:"resume",style:m,children:[Object(h.jsx)("div",{className:"detail-preview container",children:Object(h.jsxs)("div",{className:"row",children:[a=""===a?"":Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)("img",{className:"img-fluid",src:a,alt:"Re-upload if not displayed"})}),Object(h.jsxs)("div",{className:s,style:j,children:[Object(h.jsx)("h1",{children:t.personal.name}),Object(h.jsx)("h5",{children:t.personal.occupation}),Object(h.jsx)("hr",{className:"m-1"}),Object(h.jsx)("p",{children:t.personal.about})]})]})}),Object(h.jsx)("div",{className:"media-preview container",children:Object(h.jsxs)("div",{className:"row p-1 ",children:[""!==t.personal.phone?Object(h.jsxs)("div",{className:"col-3 d-flex ",children:[Object(h.jsx)("i",{className:"fa fa-mobile"})," ",Object(h.jsxs)("p",{className:"ml-1",children:[" ",t.personal.phone," "]})]}):"",""!==t.personal.email?Object(h.jsxs)("div",{className:"col-3 d-flex ",children:[Object(h.jsx)("i",{className:"fa fa-envelope"})," ",Object(h.jsxs)("p",{className:"ml-1",children:[" ",t.personal.email," "]})]}):"",""!==t.personal.website?Object(h.jsxs)("div",{className:"col-3 d-flex ",children:[Object(h.jsx)("i",{className:"fa fa-globe"})," ",Object(h.jsxs)("p",{className:"ml-1",children:[" ",t.personal.website," "]})," "]}):"",""!==d.LinkedIn?Object(h.jsxs)("div",{className:"col-3 d-flex ",children:[Object(h.jsx)("i",{className:"fa fa-linkedin"})," ",Object(h.jsxs)("p",{className:"ml-1",children:[" ",d.LinkedIn," "]})," "]}):""]})}),Object(h.jsx)("div",{className:"content-preview container  m-1",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3 ",children:Object(h.jsxs)("div",{className:"wrap-1 m-1",style:{borderRight:"2px solid "+this.state.theme},children:[0!==Object.values(d).filter((function(e){return""!==e})).length?Object(h.jsxs)("div",{className:"social-media pb-4",children:[Object(h.jsx)("h4",{children:"Social Media"}),""!==d.Github?Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("i",{className:"fa fa-github"})," ",d.Github," "]}):"",""!==d.Dribbble?Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("i",{className:"fa fa-dribbble"})," ",d.Dribbble," "]}):"",""!==d.Facebook?Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("i",{className:"fa fa-facebook"})," ",d.Facebook," "]}):"",""!==d.Youtube?Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("i",{className:"fa fa-youtube"})," ",d.Youtube," "]}):"",""!==d.Twitter?Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("i",{className:"fa fa-twitter"})," ",d.Twitter," "]}):""]}):"",0!==o.length?Object(h.jsxs)("div",{className:"skills pb-4 ",children:[Object(h.jsx)("h4",{children:"Technical Skills"}),Object(h.jsx)("ul",{className:"ml-2",children:o.map((function(e){return Object(h.jsx)("li",{className:"mb-0",children:e},e)}))})]}):"",0!==i.length?Object(h.jsxs)("div",{className:"language pb-4",children:[Object(h.jsx)("h4",{children:"Languages"}),Object(h.jsx)("ul",{className:"ml-2",children:i.map((function(e){return Object(h.jsx)("li",{className:"mb-0",children:e},e)}))})]}):""]})}),Object(h.jsx)("div",{className:"col-9 ",children:Object(h.jsxs)("div",{className:"wrap-2 m-1",children:[0!==Object.values(n).length?Object(h.jsxs)("div",{className:"work-experience pb-4",children:[Object(h.jsx)("h2",{style:b,children:"Work Experience"}),Object.values(n).map((function(t){return Object(h.jsxs)("div",{className:"wrap mb-2",children:[Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)("p",{className:"m-0 lead",children:Object(h.jsx)("cite",{children:t.work})}),Object(h.jsxs)("p",{className:"text-right m-0 lead",children:[" ",e.yearFormatting(t.from,t.to)," "]})]}),Object(h.jsx)("p",{className:"text-muted m-0",children:t.name}),Object(h.jsx)("div",{className:"wrap-about-resume text-muted m-0",dangerouslySetInnerHTML:{__html:t.about}})]},t.work)}))]}):"",0!==Object.values(l).length?Object(h.jsxs)("div",{className:"projec pb-4",children:[Object(h.jsx)("h2",{style:b,children:"Projects"}),Object.values(l).map((function(t){return Object(h.jsxs)("div",{className:"wrap mb-2",children:[Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)("p",{className:"m-0 lead",children:Object(h.jsx)("cite",{children:t.work})}),Object(h.jsxs)("p",{className:"text-right m-0 lead",children:[" ",e.yearFormatting(t.from,t.to)," "]})]}),Object(h.jsx)("p",{className:"text-muted m-0",children:t.name}),Object(h.jsx)("div",{className:"wrap-about-resume text-muted m-0",dangerouslySetInnerHTML:{__html:t.about}})]},t.work)}))]}):"",0!==Object.values(c).length?Object(h.jsxs)("div",{className:"education pb-4",children:[Object(h.jsx)("h2",{style:b,children:"Education"}),Object.values(c).map((function(t){return Object(h.jsxs)("div",{className:"wrap mb-2",children:[Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)("p",{className:"m-0 lead",children:Object(h.jsx)("cite",{children:t.degree})}),Object(h.jsxs)("p",{className:"text-right m-0 lead",children:[" ",e.yearFormatting(t.from,t.to)," "]})]}),Object(h.jsx)("p",{className:"text-muted m-0",children:t.name}),Object(h.jsx)("div",{className:"wrap-about-resume text-muted m-0",dangerouslySetInnerHTML:{__html:t.about}})]},t.degree)}))]}):"",0!==Object.values(r).length?Object(h.jsxs)("div",{className:"awards pb-4",children:[Object(h.jsx)("h2",{style:b,children:"Achievements"}),Object.values(r).map((function(t){return Object(h.jsxs)("div",{className:"wrap mb-2",children:[Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)("p",{className:"m-0 lead",children:Object(h.jsx)("cite",{children:t.work})}),Object(h.jsxs)("p",{className:"text-right m-0 lead",children:[" ",e.yearFormatting(t.from,t.to)," "]})]}),Object(h.jsx)("p",{className:"text-muted m-0",children:t.name}),Object(h.jsx)("div",{className:"wrap-about-resume text-muted m-0",dangerouslySetInnerHTML:{__html:t.about}})]},t.work)}))]}):""]})})]})})]})]})}}]),a}(s.Component)),K=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).updateData=function(){if(""===s.state.name||""===s.state.work||""===s.state.from)alert("Atleast enter the Office Name, Designation and the year");else{var e=s.state,t=s.props;t.data.work.push(e);var a=document.getElementsByClassName("ck-editor__editable"),c=t.data.work.length-1;t.data.work[c].about=a[0].innerHTML,s.props.updateState(t.data),s.setState({name:"",work:"",from:"",to:"",about:""}),a[0].innerHTML="<p> About......... </p>"}},s.onChangeInput=function(e){var t=e.target.id,a=s.state;a[t]=e.target.value,s.setState(a)},s.handleDelete=function(e){var t=s.props.data.work.length-e-1,a=s.props.data.work;a=a.filter((function(e,a){return a!==t}));var c=s.props;c.data.work=a,s.props.updateState(c.data)},s.updateData=s.updateData.bind(Object(i.a)(s)),s.onChangeInput=s.onChangeInput.bind(Object(i.a)(s)),s.handleDelete=s.handleDelete.bind(Object(i.a)(s)),s.state={name:"",work:"",from:"",to:"",about:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{updateState:this.props.updateState}),Object(h.jsxs)("div",{className:"container py-4 my-4  toggle",children:[Object(h.jsx)("h1",{className:"text-center display-4",children:"WORK"}),Object(h.jsxs)("div",{className:"form-row",children:[Object(h.jsxs)("div",{className:"col-12 py-2",children:[Object(h.jsx)("label",{htmlFor:"name",children:" Name "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.name,type:"text",className:"form-control",placeholder:"Enter the Office Name",id:"name"})]}),Object(h.jsxs)("div",{className:"col-md-3 col-6 py-2 ",children:[Object(h.jsx)("label",{htmlFor:"from",children:" From "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.from,type:"number",className:"form-control",placeholder:"Enter the Year",id:"from"})]}),Object(h.jsxs)("div",{className:"col-md-3 col-6 py-2  ",children:[Object(h.jsx)("label",{htmlFor:"to",children:" To "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.to,type:"number",className:"form-control",placeholder:"Enter the Year",id:"to"})]}),Object(h.jsxs)("div",{className:"col-md-6 col-12 py-2",children:[Object(h.jsxs)("label",{htmlFor:"work",children:[" ","Work"," "]}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.work,type:"text",className:"form-control",placeholder:"Enter the Designation Name",id:"work"})]}),Object(h.jsxs)("div",{className:"col-12 py-2",children:[Object(h.jsx)("label",{children:" About "}),Object(h.jsx)(S.CKEditor,{editor:I.a,data:"<p> About......... </p>"})]}),Object(h.jsx)("div",{className:"mx-auto mt-2 mb-4",children:Object(h.jsxs)("button",{className:"btn btn-dark",onClick:this.updateData,children:["ADD ",Object(h.jsx)("i",{className:"fa fa-plus"})," "]})})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"container",children:this.props.data.work.slice(0).reverse().map((function(t,a){return Object(h.jsx)(C,{degree:t.work,place:t.name,about:t.about,from:t.from,to:t.to,value:a,handleDelete:e.handleDelete,display:"block"},a)}))})]})}}]),a}(s.Component),M=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).updateData=function(){if(""===s.state.name||""===s.state.work||""===s.state.from)alert("Atleast enter the Institute Name, work Name and the year");else{var e=s.state,t=s.props;t.data.awards.push(e);var a=document.getElementsByClassName("ck-editor__editable"),c=t.data.awards.length-1;t.data.awards[c].about=a[0].innerHTML,s.props.updateState(t.data),s.setState({name:"",work:"",from:"",to:"",about:""}),a[0].innerHTML="<p> About......... </p>"}},s.onChangeInput=function(e){var t=e.target.id,a=s.state;a[t]=e.target.value,s.setState(a)},s.handleDelete=function(e){var t=s.props.data.awards.length-e-1,a=s.props.data.awards;a=a.filter((function(e,a){return a!==t}));var c=s.props;c.data.awards=a,s.props.updateState(c.data)},s.updateData=s.updateData.bind(Object(i.a)(s)),s.onChangeInput=s.onChangeInput.bind(Object(i.a)(s)),s.handleDelete=s.handleDelete.bind(Object(i.a)(s)),s.state={name:"",work:"",from:"",to:"",about:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{updateState:this.props.updateState}),Object(h.jsxs)("div",{className:"container py-4 my-4  toggle",children:[Object(h.jsx)("h1",{className:"text-center display-4",children:"AWARDS"}),Object(h.jsxs)("div",{className:"form-row",children:[Object(h.jsxs)("div",{className:"col-12 py-2",children:[Object(h.jsx)("label",{htmlFor:"name",children:" Name "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.name,type:"text",className:"form-control",placeholder:"Enter the Competition / Events Name",id:"name"})]}),Object(h.jsxs)("div",{className:"col-md-3 col-6 py-2 ",children:[Object(h.jsx)("label",{htmlFor:"from",children:" From "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.from,type:"number",className:"form-control",placeholder:"Enter the Year",id:"from"})]}),Object(h.jsxs)("div",{className:"col-md-3 col-6 py-2  ",children:[Object(h.jsx)("label",{htmlFor:"to",children:" To "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.to,type:"number",className:"form-control",placeholder:"Enter the Year",id:"to"})]}),Object(h.jsxs)("div",{className:"col-md-6 col-12 py-2",children:[Object(h.jsxs)("label",{htmlFor:"work",children:[" ","Certificate"," "]}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.work,type:"text",className:"form-control",placeholder:"Enter the Awards Name",id:"work"})]}),Object(h.jsxs)("div",{className:"col-12 py-2",children:[Object(h.jsx)("label",{children:" About "}),Object(h.jsx)(S.CKEditor,{editor:I.a,data:"<p> About......... </p>"})]}),Object(h.jsx)("div",{className:"mx-auto mt-2 mb-4",children:Object(h.jsxs)("button",{className:"btn btn-dark",onClick:this.updateData,children:["ADD ",Object(h.jsx)("i",{className:"fa fa-plus"})," "]})})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"container",children:this.props.data.awards.slice(0).reverse().map((function(t,a){return Object(h.jsx)(C,{degree:t.work,place:t.name,about:t.about,from:t.from,to:t.to,value:a,handleDelete:e.handleDelete,display:"block"},a)}))})]})}}]),a}(s.Component),R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).updateData=function(){if(""===s.state.name||""===s.state.work||""===s.state.from)alert("Atleast enter the Institute Name, work Name and the year");else{var e=s.state,t=s.props;t.data.project.push(e);var a=document.getElementsByClassName("ck-editor__editable"),c=t.data.project.length-1;t.data.project[c].about=a[0].innerHTML,s.props.updateState(t.data),s.setState({name:"",work:"",from:"",to:"",about:""}),a[0].innerHTML="<p> About......... </p>"}},s.onChangeInput=function(e){var t=e.target.id,a=s.state;a[t]=e.target.value,s.setState(a)},s.handleDelete=function(e){var t=s.props.data.project.length-e-1,a=s.props.data.project;a=a.filter((function(e,a){return a!==t}));var c=s.props;c.data.project=a,s.props.updateState(c.data)},s.updateData=s.updateData.bind(Object(i.a)(s)),s.onChangeInput=s.onChangeInput.bind(Object(i.a)(s)),s.handleDelete=s.handleDelete.bind(Object(i.a)(s)),s.state={name:"",work:"",from:"",to:"",about:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{updateState:this.props.updateState}),Object(h.jsxs)("div",{className:"container py-4 my-4  toggle",children:[Object(h.jsx)("h1",{className:"text-center display-4",children:"PROJECT"}),Object(h.jsxs)("div",{className:"form-row",children:[Object(h.jsxs)("div",{className:"col-12 py-2",children:[Object(h.jsx)("label",{htmlFor:"name",children:" Name "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.name,type:"text",className:"form-control",placeholder:"Enter the Project Name",id:"name"})]}),Object(h.jsxs)("div",{className:"col-md-3 col-6 py-2 ",children:[Object(h.jsx)("label",{htmlFor:"from",children:" From "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.from,type:"number",className:"form-control",placeholder:"Enter the Year",id:"from"})]}),Object(h.jsxs)("div",{className:"col-md-3 col-6 py-2  ",children:[Object(h.jsx)("label",{htmlFor:"to",children:" To "}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.to,type:"number",className:"form-control",placeholder:"Enter the Year",id:"to"})]}),Object(h.jsxs)("div",{className:"col-md-6 col-12 py-2",children:[Object(h.jsxs)("label",{htmlFor:"work",children:[" ","Certificate"," "]}),Object(h.jsx)("input",{onChange:this.onChangeInput,value:this.state.work,type:"text",className:"form-control",placeholder:"Enter the Project Specification",id:"work"})]}),Object(h.jsxs)("div",{className:"col-12 py-2",children:[Object(h.jsx)("label",{children:" About "}),Object(h.jsx)(S.CKEditor,{editor:I.a,data:"<p> About......... </p>"})]}),Object(h.jsx)("div",{className:"mx-auto mt-2 mb-4",children:Object(h.jsxs)("button",{className:"btn btn-dark",onClick:this.updateData,children:["ADD ",Object(h.jsx)("i",{className:"fa fa-plus"})," "]})})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"container",children:this.props.data.project.slice(0).reverse().map((function(t,a){return Object(h.jsx)(C,{degree:t.work,place:t.name,about:t.about,from:t.from,to:t.to,value:a,handleDelete:e.handleDelete,display:"block"},a)}))})]})}}]),a}(s.Component),Y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).updateState=function(t){e.setState(Object(r.a)({},t)),localStorage.setItem("resume-data",JSON.stringify(e.state))},localStorage.getItem("resume-data")?e.state=JSON.parse(localStorage.getItem("resume-data")):(e.state={personal:{name:"",occupation:"",phone:"",email:"",website:"",about:"",image:""},social:{LinkedIn:"",Facebook:"",Github:"",Twitter:"",Youtube:"",Dribbble:""},skill:["Add Skill"],language:["Add Language"],education:[{name:"Institute of ABC, XYZ",degree:"B. Sc",from:"2015",to:"2018",about:"<p> About.... </p>"}],work:[{name:"Teach ABC, XYZ",work:"Web Developer",from:"2015",to:"2018",about:"<p> About.... </p>"}],awards:[{name:"Certificate of Something",work:"Hackathon",from:"2015",to:"",about:"<p> About.... </p>"}],project:[{name:"ML Project",work:"Data Visualization",from:"2015",to:"",about:"<p> About.... </p>"}]},localStorage.setItem("resume-data",JSON.stringify(e.state))),e.updateState=e.updateState.bind(Object(i.a)(e)),e}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(b.a,{basename:"/resume-cv-maker",children:[Object(h.jsx)(O,{}),Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{exact:!0,path:"/about",component:f}),Object(h.jsx)(m.a,{exact:!0,path:"/contact",component:g}),Object(h.jsx)(m.a,{exact:!0,path:"/resume/details",children:Object(h.jsx)(k,{detail:this.state,updateState:this.updateState})}),Object(h.jsx)(m.a,{exact:!0,path:"/resume/media",children:Object(h.jsx)(w,{social:this.state,updateState:this.updateState})}),Object(h.jsx)(m.a,{exact:!0,path:"/resume/education",children:Object(h.jsx)(A,{data:this.state,updateState:this.updateState})}),Object(h.jsx)(m.a,{exact:!0,path:"/resume/work",children:Object(h.jsx)(K,{data:this.state,updateState:this.updateState})}),Object(h.jsx)(m.a,{exact:!0,path:"/resume/awards",children:Object(h.jsx)(M,{data:this.state,updateState:this.updateState})}),Object(h.jsx)(m.a,{exact:!0,path:"/resume/skills",children:Object(h.jsx)(F,{skill:this.state,updateState:this.updateState})}),Object(h.jsx)(m.a,{exact:!0,path:"/resume/language",children:Object(h.jsx)(E,{language:this.state,updateState:this.updateState})}),Object(h.jsx)(m.a,{exact:!0,path:"/resume/project",children:Object(h.jsx)(R,{data:this.state,updateState:this.updateState})}),Object(h.jsx)(m.a,{exact:!0,path:"/resume/preview",children:Object(h.jsx)(L,{data:this.state,updateState:this.updateState})}),Object(h.jsx)(m.a,{path:"",component:v})]}),Object(h.jsx)(x,{})]}),Object(h.jsx)("div",{className:"container my-5 py-5"})]})}}]),a}(s.Component);n.a.render(Object(h.jsx)(Y,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.3d825647.chunk.js.map