<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'method']);
  exit;
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$phone = trim((string)($_POST['phone'] ?? ''));
$activity = trim((string)($_POST['activity'] ?? ''));
$location = trim((string)($_POST['location'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));

if ($name === '' || $message === '' || ($email === '' && $phone === '')) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'validation']);
  exit;
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'email']);
  exit;
}

$to = 'track.academy.sport@gmail.com';
$subject = 'Richiesta informazioni Track Academy';
$body = "Nome: {$name}\nEmail: {$email}\nTelefono: {$phone}\nAttivita: {$activity}\nSede: {$location}\n\n{$message}\n";
$from = $email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : 'no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost');
$headers = 'From: ' . $from . "\r\n" . 'Reply-To: ' . ($email !== '' ? $email : $from) . "\r\nContent-Type: text/plain; charset=UTF-8";

$sent = @mail($to, $subject, $body, $headers);

if (!$sent) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'mail']);
  exit;
}

echo json_encode(['ok' => true]);
