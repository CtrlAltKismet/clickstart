const quizQuestions = [
    {
        question: "Which of the following is the most secure password?",
        answers: [
            "password123",
            "MyDogMax",
            "W1nt3r_tru5t_0909!",
            "12345678"
        ],
        correct: "W1nt3r_tru5t_0909!"
    },

    {
        question: "A secure website address often starts with:",
        answers: [
            "http://",
            "ftp://",
            "https://",
            "www."
        ],
        correct: "https://"
    },

    {
        question: "What is the main purpose of an Antivirus program?",
        answers: [
            "To speed up your internet connection",
            "To protect your computer from malicious software",
            "To manage files and folders",
            "To block websites"
        ],
        correct: "To protect your computer from malicious software"
    },

    {
        question: "What does a Firewall mainly do?",
        answers: [
            "It scans emails for spelling errors.",
            "It monitors and controls incoming and outgoing network traffic.",
            "It backs up your important files.",
            "It organises your desktop icons."
        ],
        correct: "It monitors and controls incoming and outgoing network traffic."
    },

    {
        question: "Which of the following should you NOT do when managing your passwords?",
        answers: [
            "Use a mix of uppercase, lowercase, numbers, and symbols.",
            "Use a unique password for every important account.",
            "Write your passwords on a sticky note attached to your monitor.",
            "Change your important passwords regularly",
        ],
        correct: "Write your passwords on a sticky note attached to your monitor."

    },

    {
        question: "Why is it important to keep antivirus software updated?",
        answers: [
            "It makes your computer screen brighter",
            "It provides new virus definitions to detect the latest threats.",
            "It deletes all files on your computer.",
            "It increases internet speed.",
        ],
        correct: "It provides new virus definitions to detect the latest threats."

    },

    {
        question: "Which of the following is an example of hardware?",
        answers: [
            "A computer mouse",
            "Microsoft Word",
            "The operating system",
            "A mobile application",
        ],
        correct: "A computer mouse"

    },

    {
        question: "What is the main role of an Operating System (OS)?",
        answers: [
            "To store all your personal files.",
            "To search the internet.",
            "To print documents.",
            "To manage computer resources and allow hardware and software to work together.",
        ],
        correct: "To manage computer resources and allow hardware and software to work together."

    },

    {
        question: "A program like an internet browser or photo editor is an example of:",
        answers: [
            "Hardware",
            "Software",
            "A server",
            "Firmware",
        ],
        correct: "Software"

    },

    {
        question: "How do hardware and software work together when typing in Microsoft Word?",
        answers: [
            "The monitor types the letters automatically.",
            "The mouse writes the document.",
            "The keyboard sends input, the operating system processes it, and Word displays it.",
            "The printer sends the letters to Word.",
        ],
        correct: "The keyboard sends input, the operating system processes it, and Word displays it."

    },

    {
        question: "What is the primary function of a search engine?",
        answers: [
            "To create Word documents.",
            "To display web pages.",
            "To search the internet for information using keywords.",
            "To send emails.",
        ],
        correct: "To search the internet for information using keywords."

    },

    {
        question: "What is the difference between a web browser and a search engine?",
        answers: [
            "They are the same thing.",
            "A browser protects against viruses.",
            "A browser displays web pages and a search engine helps you find them.",
            "A search engine is used for sending emails.",
        ],
        correct: "A browser displays web pages and a search engine helps you find them."

    },

    {
        question: "What is a hyperlink?",
        answers: [
            "A computer virus.",
            "An advertisement.",
            "A browsing history.",
            "Text or an image that links to another page when clicked.",
        ],
        correct: "Text or an image that links to another page when clicked."

    },

    {
        question: "What does a sponsored search result usually mean?",
        answers: [
            "The company paid for the link to appear first.",
            "It is the most accurate answer.",
            "It is guaranteed virus-free.",
            "It is a government website.",
        ],
        correct: "The company paid for the link to appear first."

    },

    {
        question: "Why might you clear your browser cache and cookies?",
        answers: [
            "To make your computer heavier.",
            "To update your operating system.",
            "To send emails faster.",
            "To fix website loading problems and protect privacy.",
        ],
        correct: "To fix website loading problems and protect privacy."

    },

    {
        question: "What is phishing?",
        answers: [
            "A safe online game.",
            "A scam attempting to steal personal information.",
            "Deleting emails.",
            "A file attachment.",
        ],
        correct: "A scam attempting to steal personal information."

    },

    {
        question: "What is Two-Factor Authentication (2FA)?",
        answers: [
            "Signing in with only one password.",
            "Using two different forms of verification to access an account.",
            "Checking your email twice daily.",
            "An alternative way to send files.",
        ],
        correct: "Using two different forms of verification to access an account."

    },

    {
        question: "What is a danger of clicking sponsored search results without checking them?",
        answers: [
            "They may lead to scam or malicious websites.",
            "They always load slower.",
            "They delete your browser history.",
            "They automatically download files.",
        ],
        correct: "They may lead to scam or malicious websites."

    },

    {
        question: "What does the Bcc field in an email do?",
        answers: [
            "Sends the email twice.",
            "Deletes attachments.",
            "Adds a signature automatically.",
            "Hides the recipient's email address from other recipients.",
        ],
        correct: "Hides the recipient's email address from other recipients."

    },

    {
        question: "What is the main purpose of a folder in a file system?",
        answers: [
            "To store applications.",
            "To connect to the internet.",
            "To send emails.",
            "To organize and group related files.",
        ],
        correct: "To organize and group related files."

    },

    {
        question: "What is the part of a filename after the dot called? (.pdf, .jpg)",
        answers: [
            "File name",
            "File shortcut",
            "File extension",
            "File format",
        ],
        correct: "File extension"

    },

    {
        question: "Which key is used to toggle uppercase typing without holding it down?",
        answers: [
            "Ctrl",
            "Alt",
            "Shift",
            "Caps Lock",
        ],
        correct: "Caps Lock"

    },

    {
        question: "What does Ctrl + S do in most programs?",
        answers: [
            "Prints the document.",
            "Saves the document.",
            "Closes the program.",
            "Underlines text.",
        ],
        correct: "Saves the document."

    },

    {
        question: "What does the Italics formatting option do?",
        answers: [
            "Makes text slanted.",
            "Makes text bigger.",
            "Makes text bold.",
            "Underlines text.",
        ],
        correct: "Makes text slanted."

    },

    {
        question: "What is a hierarchical folder structure?",
        answers: [
            "Folders organised inside other folders.",
            "Random files on the desktop.",
            "A single folder for everything.",
            "Files sorted alphabetically.",
        ],
        correct: "Folders organised inside other folders."

    },

    {
        question: "Which file extension is commonly used for Word documents?",
        answers: [
            ".jpg",
            ".docx",
            ".mp3",
            ".png",
        ],
        correct: ".docx"

    },

    {
        question: "What is the keyboard shortcut for copying text?",
        answers: [
            "Ctrl + V",
            "Ctrl + C",
            "Ctrl + S",
            "Ctrl + P",
        ],
        correct: "Ctrl + C"

    },

    {
        question: "What is the keyboard shortcut for pasting text?",
        answers: [
            "Ctrl + X",
            "Ctrl + P",
            "Ctrl + A",
            "Ctrl + V",
        ],
        correct: "Ctrl + V"

    },

    {
        question: "What should you do after creating a document to find it later?",
        answers: [
            "Close the computer.",
            "Restart the computer.",
            "Delete the file.",
            "Save the document with a clear name and location.",
        ],
        correct: "Save the document with a clear name and location."

    },

    {
        question: "Which of the following is good email etiquette?",
        answers: [
            "Use a clear subject line and polite language.",
            "Write in all capital letters.",
            "Send blank emails.",
            "Ignore spelling.",
        ],
        correct: "Use a clear subject line and polite language."

    }

];

export default quizQuestions;