<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Bootstrap 5 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <script defer src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"></script>
    <script defer src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"></script>

    <style>
        body { background-color: #f8f9fa; }
        .container { max-width: 600px; margin-top: 50px; }
        .card { padding: 30px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
        .discount-price { font-size: 1.8rem; color: #28a745; font-weight: bold; }
        .old-price { text-decoration: line-through; color: #888; }
    </style>
</head>
<body>

    <div class="container">
        <div class="card text-center">
            <h2>Complete Your Registration</h2>
            <p>Original Price: <span class="old-price">₹9999</span></p>
            <p class="discount-price">₹8999</p>

            <div class="mb-3">
                <input type="text" id="couponCode" class="form-control" placeholder="Enter Coupon Code">
                <button class="btn btn-primary mt-2" onclick="applyCoupon()">Apply Coupon</button>
            </div>

            <p id="finalPrice" class="discount-price">Final Price: ₹8999</p>
            <button class="btn btn-success" onclick="proceedToPayment()">Proceed to Payment</button>
        </div>
    </div>

    <script>
        let basePrice = 8999;

        function applyCoupon() {
            const couponCode = document.getElementById("couponCode").value;
            if (couponCode === "DISCOUNT500") {
                basePrice -= 500;
                document.getElementById("finalPrice").innerHTML = "Final Price: ₹" + basePrice;
                alert("Coupon Applied! ₹500 Off");
            } else {
                alert("Invalid Coupon Code");
            }
        }

        function proceedToPayment() {
            window.location.href = "payment/?amount=" + basePrice;
        }
    </script>

</body>
</html>