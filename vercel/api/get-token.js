// api/get-token.js
export default function handler(request, response) {
  // Simulate generating a unique token on a secure server backend
  const serverGeneratedToken = "srv_tok_" + Math.random().toString(36).substr(2, 9);
  
  // Send it back to the browser application
  response.status(200).json({ 
    success: true,
    token: serverGeneratedToken,
    message: "Token safely minted on Vercel Serverless Architecture." 
  });
}