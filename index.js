const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  console.info('incoming request...');
  const environmentVars = process.env;
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>xLT - Deployment Success</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    
    .container {
      background: white;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      max-width: 700px;
      width: 100%;
      padding: 50px 40px;
      text-align: center;
    }
    
    .logo {
      font-size: 64px;
      font-weight: bold;
      color: #667eea;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
      letter-spacing: 2px;
    }
    
    .success-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 30px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      color: white;
    }
    
    h1 {
      color: #2d3748;
      font-size: 32px;
      margin-bottom: 20px;
      font-weight: 700;
    }
    
    .message {
      color: #4a5568;
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 30px;
    }
    
    .instructions {
      background: #f7fafc;
      border-left: 4px solid #667eea;
      padding: 20px;
      margin: 30px 0;
      text-align: left;
      border-radius: 8px;
    }
    
    .instructions h2 {
      color: #2d3748;
      font-size: 20px;
      margin-bottom: 15px;
      font-weight: 600;
    }
    
    .instructions p {
      color: #4a5568;
      font-size: 16px;
      line-height: 1.6;
    }
    
    .path {
      background: white;
      padding: 12px 16px;
      border-radius: 6px;
      font-family: 'Courier New', monospace;
      color: #667eea;
      font-weight: 600;
      margin-top: 12px;
      display: inline-block;
      border: 2px solid #e2e8f0;
    }
    
    .footer {
      margin-top: 40px;
      padding-top: 30px;
      border-top: 2px solid #e2e8f0;
    }
    
    .thank-you {
      color: #2d3748;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    
    .coming-soon {
      color: #718096;
      font-size: 16px;
      font-style: italic;
    }
    
    .highlight {
      color: #667eea;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="success-icon">✓</div>
    <div class="logo">xLT</div>
    <h1>Deployment Successful!</h1>
    
    <p class="message">
      You have successfully deployed your application using <span class="highlight">xLT</span>. 
      Your app is now live and running smoothly.
    </p>
    <p class="message">
       ENV: 
      `${environmentVars.DATABASE_URL}`
    </p>
    
    <div class="instructions">
      <h2>🚀 Next Steps</h2>
      <p>
        Now you can commit and deploy your app directly from the xLT console:
      </p>
      <div class="path">
        Apps → Your App → Deploy
      </div>
    </div>
    
    <div class="footer">
      <p class="thank-you">Thank you for using xLT! 🎉</p>
      <p class="coming-soon">More exciting features are coming soon...</p>
    </div>
  </div>
</body>
</html>
  `;
  res.send(html);
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
