// This JavaScript will call out to the US Navy to obtain sunrise and sunset times.
fetch('http://api.usno.navy.mil/rstt/oneday?date=10/14/2018&loc=Phoenix, AZ')
.then(
    function(response) {
        if (response.status !==200) {
            console.log('Looks like there was a  problem.  Status Code: ' +
            response.status);
            return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
        console.log(data);
        document.getElementById("sunRiseAndSet").innerHTML = data(3);
        });
    }
)
.catch(function(err) {
    console.log('Fetch Error :-S', err);
});
