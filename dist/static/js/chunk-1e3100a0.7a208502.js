(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e3100a0"],{"6f58":function(e,t,a){},"7db0":function(e,t,a){"use strict";var n=a("23e7"),l=a("b727").find,r=a("44d2"),s=a("ae40"),o="find",i=!0,u=s(o);o in[]&&Array(1)[o]((function(){i=!1})),n({target:"Array",proto:!0,forced:i||!u},{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),r(o)},8074:function(e,t,a){"use strict";a("6f58")},cabd:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return u}));var n=a("b775");function l(e,t,a){return Object(n["a"])({url:"/course/page?name="+e+"&page="+t+"&pageSize="+a,method:"get"})}function r(){return Object(n["a"])({url:"/course",method:"get"})}function s(e){return Object(n["a"])({url:"/course",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/course",method:"put",data:e})}function i(e){return Object(n["a"])({url:"/course/"+e,method:"delete"})}function u(e){return Object(n["a"])({url:"/course/"+e,method:"get"})}},ea99:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchStudent}},[a("el-form-item",{attrs:{label:"Student Name"}},[a("el-input",{attrs:{placeholder:"Please enter student name"},model:{value:e.searchStudent.name,callback:function(t){e.$set(e.searchStudent,"name",t)},expression:"searchStudent.name"}})],1),a("el-form-item",{attrs:{label:"Gender"}},[a("el-select",{attrs:{placeholder:"Please choose"},model:{value:e.searchStudent.gender,callback:function(t){e.$set(e.searchStudent,"gender",t)},expression:"searchStudent.gender"}},[a("el-option",{attrs:{label:"Male",value:"1"}}),a("el-option",{attrs:{label:"Female",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"Entry Date"}},[a("el-date-picker",{staticStyle:{width:"400px","margin-left":"20px"},attrs:{clearable:"","value-format":"yyyy-MM-dd",type:"daterange",placeholder:"Choose date","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date"},model:{value:e.entrydate,callback:function(t){e.entrydate=t},expression:"entrydate"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Search")]),a("el-button",{attrs:{type:"info"},on:{click:e.clear}},[e._v("Clear")])],1)],1),a("el-row",[a("el-button",{attrs:{type:"danger",size:"medium"},on:{click:e.deleteByIds}},[e._v("- Batch Deletion")]),a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!0,e.student={image:""}}}},[e._v("+ Add New Student")])],1),a("el-dialog",{ref:"form",attrs:{title:"Add New Student",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.student,"label-width":"80px",size:"mini"}},[a("el-form-item",{attrs:{label:"Name"}},[a("el-input",{attrs:{placeholder:"Please enter student name",autocomplete:"off"},model:{value:e.student.name,callback:function(t){e.$set(e.student,"name",t)},expression:"student.name"}})],1),a("el-form-item",{attrs:{label:"Matric No"}},[a("el-input",{attrs:{placeholder:"Please enter matric number",autocomplete:"off"},model:{value:e.student.matric,callback:function(t){e.$set(e.student,"matric",t)},expression:"student.matric"}})],1),a("el-form-item",{attrs:{label:"Gender"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Please choose"},model:{value:e.student.gender,callback:function(t){e.$set(e.student,"gender",t)},expression:"student.gender"}},e._l(e.genderList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"Avatar"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/upload",headers:e.token,name:"image","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.student.image?a("img",{staticClass:"avatar",attrs:{src:e.student.image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"Address"}},[a("el-input",{attrs:{placeholder:"Please enter address",autocomplete:"off"},model:{value:e.student.address,callback:function(t){e.$set(e.student,"address",t)},expression:"student.address"}})],1),a("el-form-item",{attrs:{label:"Email"}},[a("el-input",{attrs:{placeholder:"Please enter email",autocomplete:"off"},model:{value:e.student.email,callback:function(t){e.$set(e.student,"email",t)},expression:"student.email"}})],1),a("el-form-item",{attrs:{label:"Phone No"}},[a("el-input",{attrs:{placeholder:"Please enter phone number",autocomplete:"off"},model:{value:e.student.phone,callback:function(t){e.$set(e.student,"phone",t)},expression:"student.phone"}})],1),a("el-form-item",{attrs:{label:"Course"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Please choose","value-key":"student.course"},model:{value:e.student.courseId,callback:function(t){e.$set(e.student,"courseId",t)},expression:"student.courseId"}},e._l(e.courseList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"EntryDate"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd",clearable:"",type:"date",placeholder:"Choose date",size:"small"},model:{value:e.student.entrydate,callback:function(t){e.$set(e.student,"entrydate",t)},expression:"student.entrydate"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("Sumbit")]),a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")])],1)],1)],1),a("br"),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"Student Name",align:"center"}}),a("el-table-column",{attrs:{prop:"matric",label:"Matric Number",align:"center"}}),a("el-table-column",{attrs:{prop:"image",label:"Avatar",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[a("el-image",{staticStyle:{width:"auto",height:"40px",border:"none",cursor:"pointer"},attrs:{src:t.image}})]}}])}),a("el-table-column",{attrs:{align:"center",label:"Gender"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-right":"10px"}},[e._v(" "+e._s("1"==t.row.gender?"Male":"Female"))])]}}])}),a("el-table-column",{attrs:{prop:"address",label:"Address",align:"center"}}),a("el-table-column",{attrs:{prop:"email",label:"Email",align:"center"}}),a("el-table-column",{attrs:{prop:"phone",label:"Phone Number",align:"center"}}),a("el-table-column",{attrs:{prop:"courseId",label:"Course",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(e.getCourseNameById(a.courseId))+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"Entry Date"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.entrydate)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"Latest Updated"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.updateTime?t.row.updateTime.replace("T"," "):"")+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"Operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.update(t.row.id)}}},[e._v("Edit")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.deleteById(t.row.id)}}},[e._v("Delete")])]}}])})],1)],a("el-pagination",{attrs:{background:e.background,"current-page":e.currentPage,"page-sizes":[5,10,15,20],"page-size":5,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],2)},l=[],r=(a("b0c0"),a("7db0"),a("d3b7"),a("b775"));function s(e,t,a,n,l,s){return Object(r["a"])({url:"/student?name="+e+"&gender="+t+"&begin="+a+"&end="+n+"&page="+l+"&pageSize="+s,method:"get"})}function o(e){return Object(r["a"])({url:"/student",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/student",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/student/"+e,method:"delete"})}function c(e){return Object(r["a"])({url:"/student/"+e,method:"get"})}var d=a("cabd"),m=a("5f87"),p={data:function(){return{background:!0,pageSize:5,totalCount:100,currentPage:1,dialogVisible:!1,searchStudent:{name:"",gender:""},student:{image:"",courseId:null},courseList:[],genderList:[{id:1,name:"Male"},{id:2,name:"Female"}],beginTime:"",endTime:"",entrydate:"",selectedIds:[],multipleSelection:[],tableData:[],token:{token:Object(m["a"])()}}},watch:{entrydate:function(e){e&&e.length>=2?(this.beginTime=e[0],this.endTime=e[1]):(this.beginTime="",this.endTime="")}},mounted:function(){var e=this;this.page(),Object(d["c"])().then((function(t){e.courseList=t.data.data}))},methods:{page:function(){var e=this;s(this.searchStudent.name,this.searchStudent.gender,this.beginTime,this.endTime,this.currentPage,this.pageSize).then((function(t){e.totalCount=t.data.data.total,e.tableData=t.data.data.rows}))},getCourseNameById:function(e){var t=this.courseList.find((function(t){return t.id==e}));return t?t.name:""},handleSelectionChange:function(e){this.multipleSelection=e},onSubmit:function(){this.currentPage=1,this.page()},clear:function(){this.searchStudent={name:"",gender:""},this.beginTime="",this.endTime="",this.entrydate="",this.page()},add:function(){var e,t=this;e=this.student.id?i(this.student):o(this.student),e.then((function(e){"1"==e.data.code?(t.dialogVisible=!1,t.page(),t.$message({message:"Save Successful",type:"success"}),t.student={image:""}):t.$message.error(e.data.msg)}))},update:function(e){var t=this;this.dialogVisible=!0,c(e).then((function(e){1==e.data.code&&(t.student=e.data.data,t.student)}))},handleSizeChange:function(e){this.pageSize=e,this.page()},handleCurrentChange:function(e){this.currentPage=e,this.page()},deleteById:function(e){var t=this;this.$confirm("This operation will delete the data, do you want to continue?","Hint",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((function(){u(e).then((function(e){1==e.data.code?(t.$message.success("Delete Successful"),t.page()):t.$message.error(e.data.msg)}))})).catch((function(){t.$message.info("Cancel Delete")}))},deleteByIds:function(){var e=this;this.$confirm("This operation will delete the data, do you want to continue?","Hint",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((function(){for(var t=0;t<e.multipleSelection.length;t++)e.selectedIds[t]=e.multipleSelection[t].id;u(e.selectedIds).then((function(t){"1"==t.data.code?(e.$message.success("Delete Successful"),e.page()):e.$message.error(t.data.msg)}))})).catch((function(){e.$message.info("Cancel Delete")}))},handleAvatarSuccess:function(e,t){this.student.image=e.data},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("Upload avatar pictures can only be in JPG format!"),a||this.$message.error("The size of the uploaded avatar image cannot exceed 2MB!"),t&&a}}},f=p,h=(a("8074"),a("2877")),g=Object(h["a"])(f,n,l,!1,null,null,null);t["default"]=g.exports}}]);