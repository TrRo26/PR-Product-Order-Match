// verification - no null - no spaces
// add user conditional formating

var Baby = require('babyparse')
// browserify pidmft.js > bundle.js

$('.format-btn').on('click', function() {
	var prodPgID = $('.prod-pg-id').val().trim()
	var prodVar = $('.prod-variant').val().trim()
	var orderPgID = $('.order-pg-id').val().trim()
	var orderVar = $('.order-variant').val().trim()

	parProdPgID = (Baby.parse(prodPgID)).data;
	parProdVar = (Baby.parse(prodVar)).data;
	parOrderPgID = (Baby.parse(orderPgID)).data;
	parOrderVar = (Baby.parse(orderVar)).data;

	console.log(parProdPgID)
	console.log(parProdVar)
	console.log("---------------")
	console.log(combine(parProdPgID, parProdVar))
	console.log(combine(parOrderPgID, parOrderVar))

	var productData = combine(parProdPgID, parProdVar)
	var orderData = combine(parOrderPgID, parOrderVar)

	console.log(compare(productData, orderData))

})

function combine(a, b) {
	var combo = []
	for (i=0; i<a.length; i++) {
		combo.push(a[i][0] + b[i][0])
	}
	return combo
}

function compare(prod, order) {
	var results = []
	while (prod.length > 1) {
		product_being_compared = prod.shift()
		console.log(product_being_compared)
		for(i=0; i < order.length; i++) {
			if (order[i] === product_being_compared) {
				results.push(order[i] + " - MATCHED")
			} else {
				results.push(order[i])
			}
		}
	}
	return results
}


// $('.lil-one').on('click', function() {
// 	$('.old-data').val("")
// })

// $('.lil-two').on('click', function() {
// 	$('.new-data').val("")
// })

function reFormat(parsedData, oldMID, newMID, srcUGC) {
	var convertedArr = []
	for (i=0; i<parsedData.length; i++) {
		var oldPID = parsedData[i][0]
		var newPID = parsedData[i][1]
		var oldVAR = parsedData[i][2]
		var newVAR = parsedData[i][3]
		var lineResult = newMID + "," + newPID + "," + newVAR + "," +
										 oldMID + "," + oldPID + "," + oldVAR + "," + srcUGC
		convertedArr.push(lineResult)
	}
	return convertedArr
}

function prettyPrint(array) {
	for (i=0; i<array.length; i++) {
		$('.new-data').val($('.new-data').val() + array[i] + "\n")
	}
}
