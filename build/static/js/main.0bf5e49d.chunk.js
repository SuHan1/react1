(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),l=n.n(r),s=n(1),i=n(2),d=n(4),c=n(3),u=(n(12),function(e){Object(d.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).addNewTodo=function(){if(""!=o.refs.mytext.value){var e={title:o.refs.mytext.value,done:!1};o.props.addTodo(e),o.refs.mytext.value=""}else console.log("kkk")},o}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"inp"},"todolist"),a.a.createElement("input",{id:"inp",ref:"mytext",type:"text",onChange:this.props.handleChange}),a.a.createElement("button",{onClick:this.addNewTodo},"\u6dfb\u52a0"))}}]),n}(o.Component)),p=function(e){Object(d.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).renderTodos=function(e){return o.props.todos.map((function(t,n){if(e==t.done)return a.a.createElement("li",null,a.a.createElement("input",{onClick:function(){return o.props.toggle(n)},checked:e,type:"checkbox"}),a.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.title}}),a.a.createElement("button",{onClick:function(){return o.props.delTodo(n)}},"\u5220\u9664"))}))},o}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",this.props.arr1.length),a.a.createElement("ul",null,this.renderTodos(!1)),a.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",this.props.arr2.length),a.a.createElement("ul",{style:{color:"green"}},this.renderTodos(!0)))}}]),n}(o.Component),h=function(e){Object(d.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).handleChange=function(e){o.setState({inpValue:e.target.value})},o.addTodo=function(e){o.state.todos.push(e),o.setState({todos:o.state.todos})},o.delTodo=function(e){o.setState({todos:o.state.todos.filter((function(t,n){return n!=e}))})},o.toggle=function(e){var t=JSON.parse(JSON.stringify(o.state.todos));t[e].done=!t[e].done,o.setState({todos:t})},o.state={inpValue:"",todos:[{title:"\u6b63\u5728\u8fdb\u884c1",done:!1},{title:"\u5df2\u7ecf\u5b8c\u62101",done:!0}]},o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");e&&this.setState({todos:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=(e.inpValue,t.filter((function(e){return!e.done}))),o=t.filter((function(e){return e.done}));return a.a.createElement("div",null,a.a.createElement(u,{handleChange:this.handleChange,addTodo:this.addTodo.bind(this)}),a.a.createElement(p,{todos:this.state.todos,toggle:this.toggle,delTodo:this.delTodo,state:this.state,arr1:n,arr2:o}))}}]),n}(o.Component);l.a.render(a.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.0bf5e49d.chunk.js.map