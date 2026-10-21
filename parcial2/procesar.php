<?php
$nombre = htmlspecialchars($_POST["nombre"] ?? "", ENT_QUOTES, "UTF-8");
$correo = htmlspecialchars($_POST["correo"] ?? "", ENT_QUOTES, "UTF-8");
$pedido = htmlspecialchars($_POST["pedido"] ?? "", ENT_QUOTES, "UTF-8");

$carta = [
    "Saltena de pollo - Bs 6",
    "Docena de saltenas - Bs 65",
    "Refresco de mocochinchi - Bs 5"
];

echo '<!DOCTYPE html>';
echo '<html lang="es">';
echo '<head>';
echo '<meta charset="UTF-8">';
echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
echo '<title>Pedido recibido - Salteneria El Horno</title>';
echo '<link rel="stylesheet" href="styles.css">';
echo '</head>';
echo '<body>';
echo '<main class="contenedor">';
echo '<section class="tarjeta resultado">';
echo '<h1>Pedido recibido en Salteneria El Horno</h1>';
echo '<h2>Datos de tu pedido</h2>';
echo '<p><strong>Nombre:</strong> ' . $nombre . '</p>';
echo '<p><strong>Correo:</strong> ' . $correo . '</p>';
echo '<p><strong>Pedido:</strong> ' . ($pedido !== "" ? nl2br($pedido) : "Sin indicaciones") . '</p>';
echo '<h2>Nuestra carta</h2>';
echo '<ul>';
foreach ($carta as $producto) {
    echo '<li>' . $producto . '</li>';
}
echo '</ul>';
echo '<p class="firma">Te atiende Rosemary Cotaña</p>';
echo '<a class="volver" href="index.html">Volver al formulario</a>';
echo '</section>';
echo '</main>';
echo '</body>';
echo '</html>';
?>
