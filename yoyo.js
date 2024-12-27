<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple JavaScript Example</title>
</head>
<body>
    <h1>Simple JavaScript Example</h1>
    <p id="greeting">Click the button to see a greeting!</p>
    <button onclick="showGreeting()">Click Me</button>

    <script>
        function showGreeting() {
            document.getElementById('greeting').textContent = 'Hello, Arigato eiei';
        }
    </script>
</body>
</html>
