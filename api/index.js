export default function handler(req, res) {
  const configs = [
    "vless://uuid@ip:port?security=reality&sni=google.com&fp=chrome&pbk=key&sid=id&type=grpc&serviceName=grpc#Server1",
    "vless://uuid@ip:port?security=reality&sni=google.com&fp=chrome&pbk=key&sid=id&type=grpc&serviceName=grpc#Server2"
  ].join('\n');

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Subscription-Userinfo', 'upload=0;download=0;total=107374182400;expire=1893456000');
  res.setHeader('profile-title', 'My Private VPN');
  res.setHeader('profile-web-page-url', 'https://t.me/your_channel');
  res.setHeader('Cache-Control', 'no-store');

  res.status(200).send(configs);
}
