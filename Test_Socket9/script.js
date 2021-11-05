function cal() {
    var w;
    var d;
    var m;
    var k;
    var c;
    var y;

    d = document.getElementById('date').value;
    m = document.getElementById("month").value;
    y = document.getElementById("year").value;
    var alert = document.getElementById("alert");
    var dayofweek = document.getElementById("dayofweek");

    d = parseFloat(d);
    m = parseFloat(m);
    y = parseFloat(y);

    var yc = (y / 4) % 1;
    if ((m == 1, 3, 5, 7, 8, 10, 12 && d > 31) || (m == 4, 6, 9, 11 && d > 30) || ((yc == 0 && m == 2 && d > 29 && y != 1900) || (yc > 0 && m == 2 && d > 28))
        || (d < 1) || (m < 1 || m > 12) || (y < 1900) || (y == 1900 && m == 2 && d > 28)
    ) {
        alert.style.display = "block";
        dayofweek.style.display = "none";
        document.getElementById("alert").innerHTML = "Please enter a valid date.";

    } else {
        alert.style.display = "none";
        if (y == 1900 && m < 3) {
            d = d + 1;
        }
        c = Math.floor(y / 100);
        k = y % 100;


        if (m < 3) {
            m = m + 12;
            k = k - 1;

        }

        w = (Math.floor(d + (26 * (m + 1)) / 10) + k + Math.floor(k / 4) + Math.floor(c / 4) - (2 * c)) % 7

        if (w < 0) {
            w = w + 7;
        }

        if (w == 0) {
            document.getElementById("dayofweek").innerHTML = "Saturday";
            dayofweek.classList.remove("saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday");
            dayofweek.classList.add("saturday");
            dayofweek.style.display = "block";
        } else if (w == 1) {
            document.getElementById("dayofweek").innerHTML = "Sunday";
            dayofweek.classList.remove("saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday");
            dayofweek.classList.add("sunday");
            dayofweek.style.display = "block";
        } else if (w == 2) {
            document.getElementById("dayofweek").innerHTML = "Monday";
            dayofweek.classList.remove("saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday");
            dayofweek.classList.add("monday");
            dayofweek.style.display = "block";
        } else if (w == 3) {
            document.getElementById("dayofweek").innerHTML = "Tuesday";
            dayofweek.classList.remove("saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday");
            dayofweek.classList.add("tuesday");
            dayofweek.style.display = "block";
        } else if (w == 4) {
            document.getElementById("dayofweek").innerHTML = "Wednesday";
            dayofweek.classList.remove("saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday");
            dayofweek.classList.add("wednesday");
            dayofweek.style.display = "block";
        } else if (w == 5) {
            document.getElementById("dayofweek").innerHTML = "Thursday";
            dayofweek.classList.remove("saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday");
            dayofweek.classList.add("thursday");
            dayofweek.style.display = "block";

        } else if (w == 6) {
            document.getElementById("dayofweek").innerHTML = "Friday";
            dayofweek.classList.remove("saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday");
            dayofweek.classList.add("friday");
            dayofweek.style.display = "block";
        }
    }


}