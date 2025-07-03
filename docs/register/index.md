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
        .container { max-width: 600px; margin-top: 50px; padding:0px; }
        .card { padding: 30px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
        .discount-price { font-size: 1.8rem; color: #28a745; font-weight: bold; }
        .main-content table { width:unset;}
    </style>
</head>
<body>
    <div class="container">
      <div class="card text-center" style="background: #fff; color: #0a2540; box-shadow: 0 2px 12px rgba(0,0,0,0.10); border-radius: 12px; font-size: 1.15rem; max-width: 600px; margin: 50px auto 0 auto; padding: 20px;">
      <h2>Complete Your Registration</h2>
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
            <td style="padding: 6px 18px 6px 0;"><span style="font-size:1.3em; vertical-align:middle;">💵</span> <b>Course Fee:</b></td>
            <td style="padding: 6px 0;"><span style="font-weight:600; background: #e9f2fb; color: #0a2540; padding: 3px 10px; border-radius: 6px;">₹8999</span></td>
          </tr>
        </table>
        <div class="my-3">
            <input type="email" id="userEmail" class="form-control mb-2" placeholder="Enter your Email ID">
            <input type="tel" id="userMobile" class="form-control mb-2" placeholder="Enter your Mobile Number">
            <input type="text" id="couponCode" class="form-control" placeholder="Enter Coupon Code">
            <button class="btn btn-primary mt-3" onclick="applyCoupon()">Apply Coupon</button>
        </div>
        <p id="finalPrice" class="discount-price">Course Fee: ₹8999</p>
        <button class="btn btn-success" onclick="proceedToPayment()">Proceed to Payment</button>
      </div>
    </div>
    <script>
        let basePrice = 8999;
        let paymentInfo = null;
        let originalPrice = 8999;
        // Fetch payment info when page loads
        async function loadPaymentInfo() {
            try {
                const response = await fetch('./payment-info.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch payment info');
                }
                paymentInfo = await response.json();
            } catch (error) {
                console.error('Error fetching payment info:', error);
            }
        }
        // Load payment info when page loads
        document.addEventListener('DOMContentLoaded', loadPaymentInfo);
        function applyCoupon() {
            const couponCode = document.getElementById("couponCode").value.trim();
            // Check if payment info is loaded
            if (!paymentInfo || !paymentInfo.coupons) {
                alert('Payment information is loading. Please try again in a moment.');
                return;
            }
            const coupon = paymentInfo.coupons.find(c => c.code === couponCode);
            if (coupon) {
                basePrice = originalPrice - coupon.discount;
                document.getElementById("finalPrice").innerHTML = "Course Fee: ₹" + basePrice;
                alert(`Coupon Applied! ₹${coupon.discount} Off`);
            } else {
                alert("Invalid Coupon Code");
            }
        }
        function isMobileDevice() {
            return /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(navigator.userAgent);
        }
        async function proceedToPayment() {
            const userEmail = document.getElementById("userEmail").value.trim();
            const userMobile = document.getElementById("userMobile").value.trim();
            // Validate that at least one contact method is provided
            if (!userEmail && !userMobile) {
                alert('Please provide either Email ID or Mobile Number');
                return;
            }
            // Check if payment info is loaded
            if (!paymentInfo) {
                alert('Payment information is loading. Please try again in a moment.');
                return;
            }
            // Create description with user contact details
            let description = paymentInfo.description;
            if (userEmail) {
                description += `${userEmail}`;
            }
            if (userMobile) {
                description += `${userMobile}`;
            }
            // Construct UPI deep link
            const upiLink = `upi://pay?pa=${paymentInfo.upiId}&pn=${encodeURIComponent(paymentInfo.payeeName)}&am=${basePrice}&cu=${paymentInfo.currency}&tn=${encodeURIComponent(description)}`;
            // Only redirect if on mobile device
            if (isMobileDevice()) {
                window.open(upiLink, '_blank');
            } else {
                alert('Please open this page on your mobile device to complete the UPI payment.');
            }
        }
    </script>
</body>
</html>