import React from 'react';

const roastLines = [
  "🚫 ACCESS DENIED",
  "💥 Attempt logged. Your IP has been flagged for excessive noobery.",
  "",
  "Bro really typed /admin like this was a 2008 WordPress site 😭",
  "You're not hacking anything — you're just guessing URLs like a lost puppy.",
  "This ain’t TryHackMe playground, champ. This is MY domain. Literally.",
  "",
  "🧠 Let’s analyze your technique:",
  "- Step 1: Open Google",
  "- Step 2: “How to hack a website”",
  "- Step 3: Ctrl+C, Ctrl+V a payload you don’t understand",
  "- Step 4: Type /admin and pray 🤡",
  "- Step 5: Cry when it redirects you here",
  "Result: FAILURE. Diagnosis: Chronic Noob Disorder.",
  "",
  "Bro you're the kind of hacker that gets phished by “Free Netflix Premium”.",
  "You probably ran nmap and thought your own IP was the target 😭",
  "Your Kali VM crying in the background right now.",
  "Even ChatGPT is judging you.",
  "",
  "🔒 Real talk: if this is your idea of pentesting, go back to HTML tutorials.",
  "Come back when you can actually write a buffer overflow, not just type /admin like it’s a cheat code.",
  "",
  "💀 Final verdict: YOU. ARE. A. NOOB.",
  "Go touch some grass 🌱 and maybe learn Python before returning.",
];

const Admin = () => {
  return (
    <div
      style={{
        fontFamily: 'monospace',
        backgroundColor: '#000',
        color: '#00FF00',
        padding: '2rem',
        fontSize: '1.2rem',
        minHeight: '100vh',
        whiteSpace: 'pre-line',
      }}
    >
      {roastLines.map((line, index) => (
        <p
          key={index}
          style={{
            animation: `fadeIn 0.3s ease ${index * 0.3}s forwards`,
            opacity: 0,
          }}
        >
          {line}
        </p>
      ))}
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Admin;