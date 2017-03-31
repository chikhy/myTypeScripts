// JScript source code

function FadeInPage(){
	if(document.getElementById("body").filters("alpha").opacity < 100){
		document.getElementById("body").filters("alpha").opacity += 5;
		setTimeout("FadeInPage()",5);
		}
	else{
		document.getElementById('body').style.visibility = "visible";
		}
	}

function fnc_confirm(){
	if(confirm('Confirma que desea eliminar el elemento?') == true)
	{
		return true;
	}
	else
	{
		return false
	}
}

function fnc_ChangeCase(KeyPressEvent,UpperCase)
{
	if(UpperCase)
	{
		if((KeyPressEvent.keyCode > 96 && KeyPressEvent.keyCode < 123) || KeyPressEvent.keyCode == 241)
			KeyPressEvent.keyCode = KeyPressEvent.keyCode - 32;
	}
	else
	{
		if((KeyPressEvent.keyCode > 64 && KeyPressEvent.keyCode < 91) && KeyPressEvent.keyCode == 209)
			KeyPressEvent.keyCode = KeyPressEvent.keyCode + 32;
	}
	KeyPressEvent.returnValue = true;
}

function fnc_IntegerKeyPress(KeyPressEvent)
{
	if(KeyPressEvent.keyCode < 48 || KeyPressEvent.keyCode > 57)
		KeyPressEvent.returnValue = false;
}

function fnc_DatePress(KeyPressEvent)
{
	if(KeyPressEvent.keyCode < 47 || KeyPressEvent.keyCode > 57)
		KeyPressEvent.returnValue = false;
}

function fnc_FloatKeyPress(KeyPressEvent){
	if(KeyPressEvent.keyCode < 46 || KeyPressEvent.keyCode > 57 || KeyPressEvent.keyCode == 47) KeyPressEvent.returnValue = false;
	}

function fnc_Code(KeyPressEvent,UpperCase)
{
	if(UpperCase)
	{
		if((KeyPressEvent.keyCode > 96 && KeyPressEvent.keyCode < 123) || KeyPressEvent.keyCode == 241 || KeyPressEvent.keyCode == 32)
			KeyPressEvent.keyCode = KeyPressEvent.keyCode - 32;
	}
	else
	{
		if((KeyPressEvent.keyCode > 64 && KeyPressEvent.keyCode < 91) && KeyPressEvent.keyCode == 209)
			KeyPressEvent.keyCode = KeyPressEvent.keyCode + 32;
	}
	KeyPressEvent.returnValue = true;
}

function fnc_InchKeyPress(KeyPressEvent,field)
{
	if(KeyPressEvent.keyCode < 48 || KeyPressEvent.keyCode > 57)
	{  
		if (KeyPressEvent.keyCode == 32) 
		{
			if(field.value.indexOf(" ")==-1 && field.value.indexOf("/")==-1 && field.value.length>0)
				KeyPressEvent.returnValue = true;
			else
				KeyPressEvent.returnValue = false;
		}
		else
		{
			if(KeyPressEvent.keyCode == 47 && field.value.indexOf("/")==-1 && field.value.length>0)
				if(field.value.indexOf(" ")>0)
					if(field.value.indexOf(" ")<field.value.length-1)
						KeyPressEvent.returnValue = true;
					else	
						KeyPressEvent.returnValue = false;
				else
					KeyPressEvent.returnValue = true;
			else
				KeyPressEvent.returnValue = false;
		}
	}
}

function validateDate(dtControl) 
{
    var input = document.getElementById(dtControl)
    var validformat=/((^\d{1,2}\/\d{1,2}\/\d{4})|)$/ //Basic check for format validity
    var returnval=false
    if (!validformat.test(input.value))
		alert('Formato de fecha invalida: mm\/dd\/yyyy.');
    else
    { //Detailed check for valid date ranges
		var monthfield=input.value.split("/")[0]
		var dayfield=input.value.split("/")[1]
		var yearfield=input.value.split("/")[2]
	    var dayobj = new Date(yearfield, monthfield-1, dayfield)
		if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield))
			alert('Formato de fecha invalida: mm\/dd\/yyyy.');
		else
			returnval=true;
    }
    if (returnval==false) input.focus() //focus back on required field
    return returnval
}

// Removes leading whitespaces
// Suprime los espacios en blanco a la izquierda
function LTrim(value)
{
    var re = /\s*((\S+\s*)*)/;
    value = value.replace("'", "");
    return value.replace(re, "$1");
}

// Removes ending whitespaces
// Suprime los espacios en blanco a la derecha
function RTrim(value)
{
    var re = /((\s*\S+)*)\s*/;
    value = value.replace("'", "");
    return value.replace(re, "$1");
}

// Removes leading and ending whitespaces
// Suprime los espacios al comienzo y al final
function Trim(value)
{
    return LTrim(RTrim(value));
}
