(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),s=(a(17),a(2)),c=a(3),l=a(6),d=a(4),u=a(5),h=a(11),p=a(7),m=a(1),b=a(10),f=a.n(b);a(20);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={task:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addTodo(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},this.state,{id:f()(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return o.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"task"},"New Todo:"),o.a.createElement("input",{id:"task",placeholder:"write new todo",required:!0,type:"text",name:"task",value:this.state.task,onChange:this.handleChange}))}}]),t}(n.Component),v=(a(21),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={isEditing:!1,task:a.props.task},a.handleRemove=a.handleRemove.bind(Object(m.a)(a)),a.toggleForm=a.toggleForm.bind(Object(m.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleToggle=a.handleToggle.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleToggle",value:function(){this.props.toggleCompletion(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),console.log(this.state.task),this.setState({isEditing:!this.state.isEditing})}},{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.isEditing?o.a.createElement("div",{className:"Todo"},o.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate},o.a.createElement("input",{type:"text",name:"task",value:this.state.task,onChange:this.handleChange}),o.a.createElement("button",null,"Save"))):o.a.createElement("div",{className:"Todo"},o.a.createElement("li",{className:this.props.completed?"Todo-task completed":"Todo-task",onClick:this.handleToggle},this.props.task),o.a.createElement("div",{className:"Todo-buttons"},o.a.createElement("button",{onClick:this.toggleForm},o.a.createElement("i",{class:"fas fa-pen"})),o.a.createElement("button",{onClick:this.handleRemove},o.a.createElement("i",{class:"fas fa-trash"}))))}}]),t}(n.Component));a(22);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={tasks:[]},a.addTodo=a.addTodo.bind(Object(m.a)(a)),a.removeTodo=a.removeTodo.bind(Object(m.a)(a)),a.updateTodo=a.updateTodo.bind(Object(m.a)(a)),a.toggleCompletion=a.toggleCompletion.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"updateTodo",value:function(e,t){var a=this.state.tasks.map((function(a){return a.id===e?k({},a,{task:t}):a}));this.setState({tasks:a})}},{key:"toggleCompletion",value:function(e){var t=this.state.tasks.map((function(t){return t.id===e?k({},t,{completed:!t.completed}):t}));this.setState({tasks:t})}},{key:"addTodo",value:function(e){this.setState((function(t){return{tasks:[].concat(Object(h.a)(t.tasks),[e])}}))}},{key:"removeTodo",value:function(e){this.setState({tasks:this.state.tasks.filter((function(t){return t.id!==e}))})}},{key:"render",value:function(){var e=this,t=this.state.tasks.map((function(t){return o.a.createElement(v,{id:t.id,key:t.id,task:t.task,completed:t.completed,removeTodo:e.removeTodo,updateTodo:e.updateTodo,toggleCompletion:e.toggleCompletion})}));return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h1",null,"Todo List! ",o.a.createElement("span",null,"A simple React Todo List App.")),o.a.createElement(O,{addTodo:this.addTodo}),o.a.createElement("ul",null,t))}}]),t}(n.Component),E=(a(23),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.26ac5887.chunk.js.map