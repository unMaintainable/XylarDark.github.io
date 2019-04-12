// unadjusted use case points to unadjusted function points

//calculate for use case row
function getUUCW (simple, average, complex)  {
    return (simple *5+ average *10 + complex *15);
}

//calculate for actors row
function getUAW (simple, average, complex)  {
    return (simple + average *2 + complex *3);
}

//calculate button
$("#calculateUseCase").click(function (event) {
    let result = 0;
    result += getUUCW(parseInt($("input[name=simpleUseCase]").val()),
        parseInt($("input[name=averageUseCase]").val()),
        parseInt($("input[name=complexUseCase]").val()));
    result += getUAW(parseInt($("input[name=simpleActor]").val()),
        parseInt($("input[name=averageActor]").val()),
        parseInt($("input[name=complexActor]").val()));
    $("#resultUseCase").text(result);
});