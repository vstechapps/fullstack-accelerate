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
    <h2>Complete Your Registration</h2>
      <div class="card text-center" style="background: #fff; color: #0a2540; box-shadow: 0 2px 12px rgba(0,0,0,0.10); border-radius: 12px; font-size: 1.15rem; max-width: 600px; margin: 50px auto 0 auto; padding: 30px;">
        <table style="margin: 0 auto 18px auto; font-size: 1.08rem;">
          <tr>
            <td style="padding: 6px 18px 6px 0;"><span style="font-size:1.3em; vertical-align:middle;">📘</span> <b>Course:</b></td>
            <td style="padding: 6px 0;"><span style="font-weight:600; background: #e9f2fb; color: #0a2540; padding: 3px 10px; border-radius: 6px;">Java Fullstack</span></td>
          </tr>
          <tr>
            <td style="padding: 6px 18px 6px 0;"><span style="font-size:1.3em; vertical-align:middle;">🎓</span> <b>Trainer:</b></td>
            <td style="padding: 6px 0;"><span style="font-weight:600; background: #e9f2fb; color: #0a2540; padding: 3px 10px; border-radius: 6px;">V.V.S.K Chaitanya</span></td>
          </tr>
          <tr>
            <td style="padding: 6px 18px 6px 0;"><span style="font-size:1.3em; vertical-align:middle;">🕒</span> <b>Duration:</b></td>
            <td style="padding: 6px 0;"><span style="font-weight:600; background: #e9f2fb; color: #0a2540; padding: 3px 10px; border-radius: 6px;">3 Months</span></td>
          </tr>
          <tr>
            <td style="padding: 6px 18px 6px 0;"><span style="font-size:1.3em; vertical-align:middle;">🕒</span> <b>Course Fee:</b></td>
            <td style="padding: 6px 0;"><span style="font-weight:600; background: #e9f2fb; color: #0a2540; padding: 3px 10px; border-radius: 6px;">₹9999</span></td>
          </tr>
        </table>
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