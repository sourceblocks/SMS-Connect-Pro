import React, { useState } from 'react';

function SendMessage() {
  const [message, setMessage] = useState('');
  const [recipients, setRecipients] = useState(['John Doe', 'Jane Smith']);
  const [summary, setSummary] = useState(null);

  const handleSend = () => {
    setSummary(`Message: "${message}" will be sent to ${recipients.length} recipients.`);
  };

  return (
    <div>
      <h2>Send Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={handleSend}>Submit</button>

      {summary && (
        <div>
          <h3>Summary</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default SendMessage;
