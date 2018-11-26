for (var year = 2014; year <= 2050; year++) {

    var firstJanuary = new Date(year, 0, 1);
    if (firstJanuary.getDay() === 1) {
        console.log("1st January is being a Sunday in " + year + ".");
    }
}