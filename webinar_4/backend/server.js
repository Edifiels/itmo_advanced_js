const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Новый клиент подключился');
  
  ws.send(JSON.stringify({
    type: 'system',
    content: 'Добро пожаловать в чат!'
  }));

  ws.on('message', function incoming(message) {
    let parsedMessage;
    try {
      parsedMessage = JSON.parse(message);
      console.log('Получено сообщение:', parsedMessage);
    } catch (e) {
      console.log('Получено некорректное сообщение');
      return;
    }

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });

  ws.on('close', function close() {
    console.log('Клиент отключился');
  });
});

console.log('WebSocket сервер запущен на порту 8080');