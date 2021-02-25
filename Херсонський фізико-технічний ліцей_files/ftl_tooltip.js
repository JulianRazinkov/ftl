
function coordinates(input) {
    input.value = input.value.replace(/[^\d\.]/g, '');
alert(input);
}


function showUrlInDialog(page, title){

var $dialog = $('<div></div>')
               .html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
               .dialog({
                   autoOpen: false,
                   position: { my: "center", at: "center", of: window },            
                   modal: true,
                   height: 450,
                   width: 600,
                   title: title
               });
$dialog.dialog('open');
}



function showUrlInDialogS(page, title, w, h){

var $dialog = $('<div></div>')
               .html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>')
               .dialog({
                   autoOpen: false,
                   position: { my: "center", at: "center", of: window },            
                   modal: true,
                   height: h,
                   width: w,
                   title: title
               });
$dialog.dialog('open');
}
function hideshow(which) {
if (!document.getElementById)
return
if (which.style.display=="block")
which.style.display="none"
else
which.style.display="block"
}



function photost(StudentK, datafile, formname){
alert(datafile);
var filename = $("#datafile").val();
$.post("index.php?option=com_ftl&task=student.photo", {StudentK: ""+StudentK+"", datafile: ""+filename+""}, function(data){
alert(data);
});
}






function downloadfile(filename, func){
//url = 'http://www.ftl.kherson.ua/index.php?option=com_ftl&task=student.downloadfile&func=2&filename=5240_2_3680.jpg';
url = "http://www.ftl.kherson.ua/index.php?option=com_ftl&task=student.downloadfile&filename=" + filename + "&func=" + func;
document.location.href = url
//alert(url);
//alert(func);
//$.post("index.php?option=com_ftl&task=student.downloadfile", {filename: ""+filename+"", func: ""+func+""}, function(data){
//location.reload();
//});

}

function deletefile(kod, filename, func, formname){
//alert(func);
if(confirm("Видалити файл?")) {
$.post("index.php?option=com_ftl&task=student.deletefile", {kod: ""+kod+"", filename: ""+filename+"", func: ""+func+""}, function(data){
//location.reload();
//alert(data);
});
} else {location.reload();}

}

function load_path(div, path){
//alert(path);
//$("#"+div).load(path);


/*$(document).ready(function() {
  $("#"+div).load(path);
});
*/


$("#"+div).hide().load(path, function() {
     $(this).show().slideDown(3000);
 });

//$('#' + div).html('Downloading...'); // Show "Downloading..."
// Do an ajax request
//$.post({
//  url: path
//}).done(function(data) { // data what is sent back by the php page
//  
//  $('#' + div).html(data); // display data
//});


}



function file_action(from, to,  action){
//alert(action);
if(action== 'delete') {
if(confirm("Видалити файл?")) {
$.post("index.php?option=com_ftl&task=student.file_delete_from_folder", {from: ""+from+""}, function(data){
//location.reload();
//alert(data);
});
} else {location.reload();}
}

if(action== 'copy') {
//alert(from);
$.post("index.php?option=com_ftl&task=student.file_copy_to_folder", {from: ""+from+"", to: ""+to+""}, function(data){
//location.reload();
//alert(data);
});
}


}





function runfunc(func, kod){
//alert(kod);
$.post("index.php?option=com_ftl&task=student.runfunc", {func: ""+func+"", kod: ""+kod+""}, 
 function(data)
{ 
    //alert( 'запрос успешно выполнен' );
    //alert(data); 
});
}


function runfuncname(funcname, kod){
//alert(funcname);
$.post("index.php?option=com_ftl&task=student."+funcname+"", {kod: ""+kod+""}, 
 function(data)
{ 
    //alert( 'запрос успешно выполнен' );
    //alert(data); 
});
}


function runfuncarray(func, kod, a){
//alert('mkkkkkk');
$.post("index.php?option=com_ftl&task=student.runfuncarray", {func: ""+func+"", kod: ""+kod+"", a: ""+a+"", }, 
 function(data)
{ 
    //alert( 'запрос успешно выполнен' );
    //alert(data); 
});
}


function runfuncnamekods(funcname, kod1, kod2, kod3, kod4, kod5){
//alert(kod1);
$.post("index.php?option=com_ftl&task=student."+funcname+"", {kod1: ""+kod1+"", kod2: ""+kod2+"", kod3: ""+kod3+"", kod4: ""+kod4+"", kod5: ""+kod5+""}, 
 function(data)
{ 
    //alert( 'запрос успешно выполнен' );
    //alert(data); 
});
}


function sv1(tb, fd, kod, val, formname){
//alert(fd);
$.post("index.php?option=com_ftl&task=student.stb", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+"", val: ""+val+""}, function(data){
//alert('data');
});
}


function sv(tb, fd, kod, val, formname){
//alert(fd);
$.post("index.php?option=com_ftl&task=student.stb", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+"", val: ""+val+""}, function(data){
//alert('data');
});
}






function svf_longtext(tb, fd, kod, val, func, formname){
alert(val);
$.post("index.php?option=com_ftl&task=student.stbf", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+"", val: ""+val+"", func: ""+func+""}, function(data){
//alert('data');
});

}



function svf_data(tb, fd, kod, val, func, formname){
//alert(val);

////////////////$.post("index.php?option=com_ftl&task=student.stbf", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+"", val: ""+val+"", func: ""+func+""}, function(data){
//alert('data');
///////////////});
///"index.php?option=com_ftl&task=student.stbf",
//alert(val);
$.ajax({
//  async: "екгу",
  type: "POST",
  url: "index.php?option=com_ftl&task=student.stbf",
  data: "&tb="+tb+"&fd="+fd+"&kod="+kod+"&val="+val+"&func="+func+"",
  success: function(msg){ }
});

}





function svf(tb, fd, kod, val, func, formname){
//alert(kod);
if(val=='') val=-22;
//alert(val);
if(typeof(val)=='string') {
        val = val.replace("'","`");
        val = encodeURIComponent(val);
    }


////////////////$.post("index.php?option=com_ftl&task=student.stbf", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+"", val: ""+val+"", func: ""+func+""}, function(data){
//alert('data');
///////////////});
///"index.php?option=com_ftl&task=student.stbf",
//alert(val);
$.ajax({
//  async: "екгу",
  type: "POST",
  url: "index.php?option=com_ftl&task=student.stbf",
  data: "&tb="+tb+"&fd="+fd+"&kod="+kod+"&val="+val+"&func="+func+"",
  success: function(msg){ 
    if(msg == 0) 
    {
        alert( "Нет ответа от сервера! Проверьте соединение в интернетом! Зайдите позже...");
    }
else {
    if(formname=='reload') {location.reload();}
}

}
});

}


function svfreload(tb, fd, kod, val, func, formname){

if(val=='') val=-22;
//
if(typeof(val)=='string') {val = val.replace("'","`");}
////////////////$.post("index.php?option=com_ftl&task=student.stbf", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+"", val: ""+val+"", func: ""+func+""}, function(data){
//alert('data');
///////////////});
//alert(val);
$.ajax({
//  async: "екгу",
  type: "POST",
  url: "index.php?option=com_ftl&task=student.stbf",
  data: "&tb="+tb+"&fd="+fd+"&kod="+kod+"&val="+val+"&func="+func+"",
  success: function(msg){ 
    if(msg == 0) 
    {
        alert( "Нет ответа от сервера! Проверьте соединение в интернетом! Зайдите позже...");
    }
else { location.reload();}


}
});

}


function svfj(tb, fd, kod, val, func, formname){
//alert(val);
if(val=='') val=-22;
//val = val.replace("'","`");
////////////////$.post("index.php?option=com_ftl&task=student.stbf", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+"", val: ""+val+"", func: ""+func+""}, function(data){
////alert('data');
///////////////});

$.ajax({
//  async: "екгу",
  type: "POST",
  url: "index.php?option=com_ftl&task=student.stbfj",
  data: "&tb="+tb+"&fd="+fd+"&kod="+kod+"&val="+val+"&func="+func+"",
  success: function(msg){ //alert(msg);
    if(msg == 0) 
    {
        alert( "Нет ответа от сервера! Проверьте соединение в интернетом! Зайдите позже...");
       
    }
}
});

}

function addf(tb, fd, val, func, formname){
//alert('jooooopa jooooopa!');
if(val=='') val=-22;
if(typeof(val) === 'string')
{
  if(val=='') {n="-22";}
  n = val.replace(',', '.'); 
  val = n;
}
//alert(val);
$.post("index.php?option=com_ftl&task=student.addf", {tb: ""+tb+"", fd: ""+fd+"", val: ""+val+"", func: ""+func+""}, function(data){
//alert(data);
location.reload();

});
}


function addresp(tb, fd, val, func, formname){
/*//alert('jooooopa jooooopa!');
var res = "";
if(val=='') val=-22;
val = val.replace("'","`");
//alert(val);
$.post("index.php?option=com_ftl&task=student.addf", {tb: ""+tb+"", fd: ""+fd+"", val: ""+val+"", func: ""+func+""}, 
success: function(data){
//alert(data);
//location.reload();
var res = data;return res;
//return data;
}); console.log(res);*/

    var result="";
    $.ajax({
      url:"index.php?option=com_ftl&task=student.addf",
      data: {tb: ""+tb+"", fd: ""+fd+"", val: ""+val+"", func: ""+func+""},
      async: false,  
      success:function(data) {
      result = data;
      }
   });
   return result;
//console.log(result);



}


function svaddfnew(tb, fd, kod, cond, val, func, a){


if(!kod) kod=0;
/*if(!val) val=-22;
if(typeof(val)=='string') {val = val.replace("'","`");}*/
//alert(kod);
$.post("index.php?option=com_ftl&task=student.svaddf", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+"", cond: ""+cond+"", val: ""+val+"", func: ""+func+""}, function(){
//alert('llllll');
        for(i=0; i<(a.length+1);i++)
        {
        if(document.getElementById(a[i][3]))
        {
        document.getElementById(a[i][3]).innerHTML = '<img src=http://127.0.0.1/ftl/components/com_ftl/images/system/loading.gif width=12>';
        $("#"+a[i][3]).load("index.php?option=com_ftl&task==student.probal",{tb: ""+a[i][0]+"", fd: ""+a[i][1]+"", kod: ""+a[i][2]+""},
        function(data){});
        }
        }

});

        


}



function svaddf(tb, fd, kod, cond, val, func, formname){


if(!kod) kod=0;
if(!val) val=-22;
val = val.replace("'","`");

$.post("index.php?option=com_ftl&task=student.svaddf", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+"", cond: ""+cond+"", val: ""+val+"", func: ""+func+""}, function(){

});
}

function adddel(tb, cond, val, func, formname){

//if(!val) val=-22;
//if(typeof(val)=='string') {val = val.replace("'","`");}
//alert(cond);
$.post("index.php?option=com_ftl&task=student.adddel", {tb: ""+tb+"", cond: ""+cond+"", val: ""+val+"", func: ""+func+""}, function(data){
//alert(data);
});
}



function svaddfrasp(tb, fd, kod, cond, val, func, cond1, dn, formname){

console.log(cond);

if(kod=='') kod=0;
console.log('kod='+ kod);
if(val=='') val=-22;
val = val.replace("'","`");

$.post("index.php?option=com_ftl&task=student.svaddf", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+"", cond: ""+cond+"", val: ""+val+"", func: ""+func+""}, function(data){

$("#"+dn).load("index.php?option=com_ftl&task=student.loadvalue", {tb: ""+tb+"", cond: ""+cond1+""}, function(data){
//alert(data);
});

//alert(data);
});
}



function hidediv(box){
$('#'+ box).animate({height: 'hide'}, 500);
    }

function showdiv(box){
$('#'+ box).animate({height: 'show'}, 500);
    }

function rewidth(box, w){    
      $('#'+ box).animate({
width: w + "%"
  }, 500, function() {
    // Animation complete.
  });
}
//скрыть и показать медленно див - изначально должен быть скрытым 
function hideShowDiv(box){
//    alert(box);
      $('#'+box).toggle('slow');
}

function upd(tb, fd, val, cond, func, formname){

//if(val=='') val=-22;
//val = val.replace("'","`");
//alert(cond);
$.post("index.php?option=com_ftl&task=student.upd", {tb: ""+tb+"", fd: ""+fd+"", val: ""+val+"", cond: ""+cond+"",  func: ""+func+""}, function(data){
//alert(data);
});
}

function updnew(tb, fd, val, cond, func, formname){
//alert(tb);
//if(val=='') val=-22;
//val = val.replace("'","`");

$.post("index.php?option=com_ftl&task=student.updnew", {tb: ""+tb+"", fd: ""+fd+"", val: ""+val+"", cond: ""+cond+"",  func: ""+func+""}, function(data){
//alert(data);
});
}


function updsome(tb, fd, val, cond, func, formname){
//alert(tb);
//if(val=='') val=-22;
//val = val.replace("'","`");

$.post("index.php?option=com_ftl&task=student.updsome", {tb: ""+tb+"", fd: ""+fd+"", val: ""+val+"", cond: ""+cond+"",  func: ""+func+""}, function(data){
//alert(data);
});
}


function loadvalue(tb, cond, dn, formname){

//alert(cond);
$("#"+dn).load("index.php?option=com_ftl&task=student.loadvalue", {tb: ""+tb+"", cond: ""+cond+""}, function(data){
//alert(data);
});
}


function oi(tb, kod, cond, func, formname){

$.post("index.php?option=com_ftl&task=student.del", {tb: ""+tb+"", kod: ""+kod+"", cond: ""+cond+"", func: ""+func+""}, function(data){
//location.reload();
});

}

function del(tb, kod, cond, func, formname){
if(kod=='') kod=0;
//alert(kod);
//if(confirm("Видалити?<br /> Після видалення сторінка перезавантажиться, дочекайтеся...")) {}
$.post("index.php?option=com_ftl&task=student.del", {tb: ""+tb+"", kod: ""+kod+"", cond: ""+cond+"", func: ""+func+""}, function(data){
//location.reload();
});
}


    function showContent(link) {  
  
        var cont = document.getElementById('contentBody');  
        var loading = document.getElementById('loading');  
  
        cont.innerHTML = loading.innerHTML;  
  
        var http = createRequestObject();  
        if( http )   
        {  
            http.open('get', link);  
            http.onreadystatechange = function ()   
            {  
                if(http.readyState == 4)   
                {  
                    cont.innerHTML = http.responseText;  
                }  
            }  
            http.send(null);      
        }  
        else   
        {  
            document.location = link;  
        }  
    }  
  
    // создание ajax объекта  
    function createRequestObject()   
    {  
        try { return new XMLHttpRequest() }  
        catch(e)   
        {  
            try { return new ActiveXObject('Msxml2.XMLHTTP') }  
            catch(e)   
            {  
                try { return new ActiveXObject('Microsoft.XMLHTTP') }  
                catch(e) { return null; }  
            }  
        }  
    }  
    
    
function sl(tb, fd, kod, val, func, a){

//alert(typeof val);
//alert(val); 
//String s = String(val);
//alert(s);
//if (var instanceof Integer) {alert("fdfdsf");}
//if(val.instanceof(Double)) String val = Double.toString(val);
//if(val.instanceof(Integer) alert ("Int");
//String val = Integer.toString(val);



n = val.replace(',', '.');
if(val=='') {n="-22";}
val = n;
$.ajax({
//  async: "false",
  type: "POST",
  url: "index.php?option=com_ftl&task=student.stbf",
  data: "&tb="+tb+"&fd="+fd+"&kod="+kod+"&val="+val+"&func="+func+"",
  success: function(msg){ 
    if(msg == 0) 
    {
        alert( "Стоп! Нет ответа от сервера!");
    }
        else
    {
        for(i=0; i<(a.length+1);i++)
        {
        if(document.getElementById(a[i][3]))
        {
        document.getElementById(a[i][3]).innerHTML = '<img src=http://img.o1.ua//newtemplate/img/load.gif width=12>';
        $("#"+a[i][3]).load("index.php?option=com_ftl&task==student.probal",{tb: ""+a[i][0]+"", fd: ""+a[i][1]+"", kod: ""+a[i][2]+""},
        function(data){});
        }
        }
    }
                        }
        });
}




function lv(tb, fd, kod, dn){
//alert(dn);
document.getElementById(dn).innerHTML = '<img src=components/com_ftl/images/system/loading.gif width=12px>';
$("#"+dn).load("index.php?option=com_ftl&task==student.probal", {tb: ""+tb+"", fd: ""+fd+"", kod: ""+kod+""}, 
function(data){
    
//    alert (data);
});
}


/**
* Сохраняем форму. Функция принимает ссылку на форму. Форма должна иметь
* уникальный аттрибут ID.
*/





function saveFormSession(form) {
  if(!form||!form.id||!/^[^;=]+$/.test(form.id)) return;
  var data="", tok, el, safe_name;
  for(var i=0; i<form.elements.length; i++) {
    if((el=form.elements[i]).name==""||el.getAttribute("skip_form_save")!=null) continue;
    safe_name=el.name.replace(/([)\\])/g, "\\$1");
    switch(el.type) {
      case "text":
      case "textarea": tok="v("+safe_name+"):"+el.value.replace(/([|\\])/g, "\\$1")+"||"; break;
      case "radio":
      case "checkbox": tok="s("+safe_name+"):"+(el.checked? "1": "0")+"||"; break;
      case "select-one": tok="i("+safe_name+"):"+(el.selectedIndex)+"||"; break;
      default: tok="";
    }
    data+=tok;
  }
  if(data>=4000) return alert("Can't save form into cookie, to much data...");
  document.cookie="ses"+form.id+"="+escape(data);
}
/**
* Восстановить значение формы. Форма должна иметь уникальный атттрибут ID.
*/
function restoreFormSession(form) {
   if(!form||!form.id||!/^[^;=]+$/.test(form.id)) return false;
   var strt, end, data, nm, dat;
   if((strt=document.cookie.indexOf("ses"+form.id))<0) return false;
   if((end=document.cookie.indexOf(";", strt + form.id.length + 3))<0) end=document.cookie.length;
   data=unescape(document.cookie.substring(strt + form.id.length + 4, end)).split("||");
   for(var i=0; i<data.length-1; i++) {
      nm=/^[vsi]\(((?:[^)\\]|(?:\\\))|(?:\\\\))+)\)\:/.exec(data[i]);
      nm[1]=nm[1].replace(/\\([)\\])/g, "$1");
      dat=data[i].substr(nm[0].length).replace(/\\([|\\])/g, "$1");
      switch(data[i].charAt(0)) {
        case "v": form.elements[nm[1]].value=dat; break;
        case "s": form.elements[nm[1]].checked=(dat=="1"? true: false); break;
        case "i": form.elements[nm[1]].selectedIndex=dat; break;
      }
   }
}



/*function DisplayImagePreview(input){
	console.log(input.files);
	if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img_preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}*/
function ajaxFormSubmit(form, tip, kod, year) {
//    alert (form);
    var formData = new FormData($(form)[0]);
    $.ajax({
        url: 'index.php?option=com_ftl&task=student.file_upload_new&tip='+tip+'&kod='+kod+'&year='+year+'',
        type: 'POST',
        data: formData,
        success: function(data) {
if(data!=0) {alert(data);}
//alert(data);
        },
 

        error: function() {
            alert('Ошибка');
        },
        cache: false,
        contentType: false,
        processData: false
 
    });
 
}