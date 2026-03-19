document.addEventListener("DOMContentLoaded", function ()) {

    const folderView = document.getElementById("folderView");
    const explorerPath = document.getElementById("explorerPath");
    const selectedPathText = document.getElementById("selectedPath");

    let currentPath = ["This PC"];
    let SelectedFolder = null;

    // Folder structure (fake file system)
    const fileSystem = {
        "This PC": ["Documents"],
        "Documents": ["Digital Skills for Beginners"],
        "Digital Skills for Beginners": ["Homework"],
        "Homework": []
    };
}