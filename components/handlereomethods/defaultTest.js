


let logger = {
	address : "shanghai",
	map : "china",

	checkPro : function  (pro) {
		if(pro !== String){
			pro = logger.map; 
		}

		return pro;
	},

	methodBare : methodBare
}


function methodBare () {

	this.message = "post";

	this.provious = 'logger';

	const that = this;

	return {
		self : this,
		that : that
	}
}


export default logger;