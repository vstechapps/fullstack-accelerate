<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fullstack Accelerator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background-color: #0a2540;
      color: #fff;
    }

    .hero-banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 60px 80px;
      background-color: #0a2540;
      box-sizing: border-box;
    }

    .banner-content {
      max-width: 50%;
    }

    .banner-content h1 {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .banner-content p {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 30px;
      color: #c9d6e3;
    }

    .cta-button {
      padding: 14px 28px;
      font-size: 1rem;
      color: white;
      background-color: #007bff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #0056b3;
    }

    .banner-image {
      max-width: 45%;
      text-align: right;
    }

    .banner-image img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
    }

    @media (max-width: 768px) {
      .hero-banner {
        flex-direction: column;
        text-align: center;
        padding: 40px 20px;
      }

      .banner-content,
      .banner-image {
        max-width: 100%;
      }

      .banner-image {
        margin-top: 10px;
      }
    }
  </style>
</head>
<body>

  <section class="hero-banner">
    <div class="banner-content">
      <h1 style="font-size:40px">
      <div class="d-block d-md-inline-block">Master &nbsp;</div>
      <div class="d-block d-md-inline-block">Full-Stack &nbsp;</div>
      <div class="d-block d-md-inline-block">Development</div>
      </h1>
      <p>Join our hands-on, project-based course to learn Java, Spring Boot & Angular from scratch. Designed for both students and professionals.</p>
      <button class="cta-button" onclick="window.location.href='../'">Start Learning Now</button>
    </div>
    <div class="banner-image">
      <img src="b01.png" alt="Fullstack Banner Illustration" style="width: -webkit-fill-available !important;">
    </div>
  </section>

  <section style="background-color: #f4f6f9; color: #0a2540; padding: 30px 10px">
  <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
    <h2 style="font-size: 2.5rem; margin-bottom: 20px;">About the Course</h2>
    <p style="font-size: 1.1rem; line-height: 1.8; color: #333;">
      The <b>Fullstack Accelerator</b> program is a complete roadmap to becoming a modern full-stack developer.
      It covers <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Angular</strong>, and integrates
      real-world application building at each step. Perfect for beginners and professionals aiming to upgrade.
    </p>
    <div style="display: flex; justify-content: center; flex-wrap: wrap; margin-top: 40px; gap: 20px;">
    <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); width: 280px;">
        <h3 style="font-size: 1.2rem; color: #007bff;">From Theory to Code</h3>
        <p>Understand the basics, then put them into practice with hands-on projects. Start with the theory, end with real code – learning made practical.</p>
      </div>
      <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); width: 280px;">
        <h3 style="font-size: 1.2rem; color: #007bff;">Applied Learning</h3>
        <p>Transform your understanding of fullstack concepts into practical coding skills by applying theoretical knowledge directly to real-world projects.</p>
      </div>
      <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); width: 280px;">
        <h3 style="font-size: 1.2rem; color: #007bff;">Project based practice</h3>
        <p>Understand the logic behind the code, then bring it to life. This approach ensures you're not just memorizing concepts but applying them through meaningful.</p>
      </div>
      <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); width: 280px;">
        <h3 style="font-size: 1.2rem; color: #007bff;">Fullstack using AI</h3>
        <p>Learn how to leverage AI-powered tools to accelerate fullstack development tasks such as coding, testing, deployment.</p>
      </div>
      <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); width: 280px;">
        <h3 style="font-size: 1.2rem; color: #007bff;">Up-to-Date Content</h3>
        <p>Technology evolves rapidly, and so do we. This course is continuously updated to reflect the latest trends, tools, and best practices in fullstack development.</p>
      </div>
    </div>
  </div>
</section>
<section style="background-color: #ffffff; color: #0a2540; padding: 30px 10px">
  <div style="max-width: 1000px; margin: 0 auto;">
    <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 40px;">What You'll Learn</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px;">
      <div style="padding: 25px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h4 style="color: #007bff; margin-bottom: 10px;">Frontend Development</h4>
        <ul style="padding-left: 20px; color: #333;">
          <li>HTML5, CSS3, JavaScript</li>
          <li>JQuery & Boostrap</li>
          <li>Angular Framework</li>
          <li>Responsive Design</li>
          <li>Material Design</li>
        </ul>
      </div>
      <div style="padding: 25px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h4 style="color: #007bff; margin-bottom: 10px;">Backend Development</h4>
        <ul style="padding-left: 20px; color: #333;">
          <li>Java Core & Advanced</li>
          <li>Spring Boot & REST APIs</li>
          <li>JPA & Hibernate</li>
          <li>Microservices</li>
        </ul>
      </div>
      <div style="padding: 25px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h4 style="color: #007bff; margin-bottom: 10px;">Deployment & Tools</h4>
        <ul style="padding-left: 20px; color: #333;">
          <li>Git & GitHub</li>
          <li>Maven & Gradle</li>
          <li>Firebase Hosting</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section style="background-color: #f4f6f9; color: #0a2540; padding: 40px 10px">
  <div style="max-width: 1000px; margin: 0 auto; text-align: center;">
    <h2 style="ffont-size:40px; margin-bottom: 20px;">
    <span>Not Convinced?</span>
    </h2>
    <p style="font-size: 1.1rem; margin-bottom: 30px;">Help us understand your interests and goals in fullstack development.</p>
    <a href="/survey" style="display: inline-block; padding: 14px 28px; font-size: 1rem; color: white; background-color: #007bff; border: none; border-radius: 6px; cursor: pointer; text-decoration: none; transition: background-color 0.3s ease;">Take Quick Survey</a>
  </div>
</section>

</body>
</html>
