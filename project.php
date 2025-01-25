<?php
function renderTemplate($templateFile, $variables = []) {
    // Extract the variables to a local namespace
    extract($variables);

    // Start output buffering
    ob_start();

    // Include the template file
    include $templateFile;

    // Get the contents of the buffer and clean it
    $output = ob_get_clean();

    // Return the output
    return $output;
}

// Example usage
$templateFile = 'project.html';
$variables = ['title' => 'My Project', 'content' => 'Welcome to my project!'];
echo renderTemplate($templateFile, $variables);
?>