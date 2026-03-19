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

    // Render folders in current location
    function renderFolders() {
        folderView.innerHTML = "";

        const currentFolder = currentPath[currentPath.length - 1];
        const folders = fileSystem[currentFolder];

        folders.forEach(folder => {
            const btn = document.createElement("button");
            btn.classList.add("folder-btn");
            btn.textContent = "📁 " + folder;
        })
    }
}