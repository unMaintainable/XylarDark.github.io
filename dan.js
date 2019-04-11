// unadjusted use case points to unadjusted function points
// Source: http://ceur-ws.org/Vol-1138/re4p21.pdf

function getUUCW (simple, average, complex)  {
    return (simple *5+ average *10 + complex *15);
}

function getUAW (simple, average, complex)  {
    return (simple + average *2 + complex *3);
}
