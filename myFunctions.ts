/*	Set of JavaScript functions
 *	20170331
 *	Gus Posada
 *	ServiceNOW oriented
 */

let askConfirmation: ()=> boolean = function (): boolean {
	if (confirm('Do you confirm element deletion?') == true) {
		return true;
	} else return false;
}

// Checks date string format and date value
let validateDate: (input : string)=> boolean = function(input: string) : boolean {
	var returnval: boolean = false;
	var validFormat: RegExp = RegExp(/((^\d{4}\/\d{1,2}\/\d{1,2})|)$/); // regular expression for date format
	if (!validFormat.test(input)) alert('Invalid date format: yyyy\/mm\/dd.'); // check format
	else { // check date
		var yearField: number = parseInt(input.split("/")[0]); // get year
		var monthField = parseInt(input.split("/")[1]); // get month
		var dayField = parseInt(input.split("/")[2]); // get day
		var dayobj: Date = new Date(yearField, monthField - 1, dayField) // create date object with obtained values
		if ((dayobj.getMonth() + 1 != monthField) || (dayobj.getDate() != dayField) || (dayobj.getFullYear() != yearField)) alert('Invalid date format: yyy\/mm\/dd.');
		else returnval = true;
	}
	return returnval;
}

// Removes leading whitespaces
let LTrim: (input: string)=>string = function (input: string): string {
	var re = /\s*((\S+\s*)*)/;
	input = input.replace("'", "");
	return input.replace(re, "$1");
}

// Removes ending whitespaces
let RTrim: (input:string)=>string = function (input: string): string {
	var re = /((\s*\S+)*)\s*/;
	input = input.replace("'", "");
	return input.replace(re, "$1");
}

// Removes leading and ending whitespaces
let Trim: (input: string)=> string = function (input: string): string {
	return LTrim(RTrim(input));
}