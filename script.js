const seatsContainer = document.getElementById("seats");
const selectedSeatsText = document.getElementById("selectedSeats");
const totalAmount = document.getElementById("totalAmount");
const bookButton = document.getElementById("bookButton");

const seatPrice = 500;

// Already booked seats
const bookedSeats = [3, 7, 12, 18];

// Selected seats
let selectedSeats = [];

// Create 24 seats
for (let i = 1; i <= 24; i++) {

    const seat = document.createElement("button");

    seat.classList.add("seat");

    seat.textContent = i;

    // Check if seat is already booked
    if (bookedSeats.includes(i)) {

        seat.classList.add("booked");

        seat.disabled = true;

    } else {

        seat.addEventListener("click", function () {

            selectSeat(i, seat);

        });

    }

    seatsContainer.appendChild(seat);
}


// Select / unselect seat
function selectSeat(seatNumber, seatElement) {

    if (selectedSeats.includes(seatNumber)) {

        // Remove seat
        selectedSeats = selectedSeats.filter(
            seat => seat !== seatNumber
        );

        seatElement.classList.remove("selected");

    } else {

        // Add seat
        selectedSeats.push(seatNumber);

        seatElement.classList.add("selected");
    }

    updateBooking();
}


// Update booking details
function updateBooking() {

    if (selectedSeats.length === 0) {

        selectedSeatsText.textContent = "None";

    } else {

        selectedSeatsText.textContent =
            selectedSeats.sort((a, b) => a - b).join(", ");
    }

    const total = selectedSeats.length * seatPrice;

    totalAmount.textContent = total;
}


// Book seats
bookButton.addEventListener("click", function () {

    if (selectedSeats.length === 0) {

        alert("Please select at least one seat.");

        return;
    }

    alert(
        "Booking successful!\n" +
        "Seats: " + selectedSeats.join(", ") +
        "\nTotal: ₹" +
        (selectedSeats.length * seatPrice)
    );
});