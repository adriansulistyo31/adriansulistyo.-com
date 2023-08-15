const sendButton = document.getElementById('send-button');
const userMessage = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

sendButton.addEventListener('click', function() {
  const userText = userMessage.value.trim();
  if (userText !== '') {
    addUserMessage(userText);
    setTimeout(function() {
      const botReply = getBotReply(userText);
      addBotMessage(botReply);
    }, 1000);
    userMessage.value = '';
  }
});

function addUserMessage(message) {
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-message user-message';
  userDiv.textContent = message;
  chatBox.appendChild(userDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
  const botDiv = document.createElement('div');
  botDiv.className = 'chat-message bot-message';
  botDiv.textContent = message;
  chatBox.appendChild(botDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(userText) {
  const lowerCaseText = userText.toLowerCase();
  if (lowerCaseText.includes('halo') || lowerCaseText.includes('hai')) {
    return "Hai, sayang! Bagaimana harimu?";
  } else if (lowerCaseText.includes('apa kabar')) {
    return "Aku selalu baik-baik saja saat bersamamu ❤";
  } else if (lowerCaseText.includes('siapa nama kamu?'))
  { return "pencipta ku Adrian sulistyo tidak  memberikan ku nama, tapi kamu bisa   memanggil ku sayang ☺"
  } else if (lowerCaseText.includes('aku rindu')) {
    return "aku juga kangen sayang 🥰"
  } else if (lowerCaseText.includes('lagi ngapain')) {
    return "lagi miriin kamu 😍 "
  } else if (lowerCaseText.includes('berapa umur kamu')  || lowerCaseText.includes('umur nya berapa')) {
    return "saya tidak tau pasti, tapi yang perlu kamu tau, aku sayang bangettt 🥰 "
  } else if (lowerCaseText.includes('gombalin aku dong') || lowerCaseText.includes('ngegombal dong sayang')) {
    return "Seandainya cintaku ❤ untukmu bisa diukur, maka seluruh samudra di dunia 🌏 ini tak akan sanggup menampungnya."
  } else if (lowerCaseText.includes('apa arti nya gravitasi')){
    return "Gravitasi adalah gaya tarik-menarik antara benda-benda dengan massa. Gaya gravitasi ini menyebabkan benda-benda saling tertarik satu sama lain dan merupakan penyebab utama mengapa benda-benda jatuh ke bumi serta planet-planet mengorbit matahari."
  }
    else {
    return "Aku sangat mencintaimu, sayang🥰 ";
  }
}