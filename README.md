# ClickStart

<img width="1206" height="528" alt="Website Mockup" src="https://github.com/user-attachments/assets/3e4df47a-c8fa-441e-aa54-5ecd731f83d3" />

ClickStart is an educational website designed to support adult learners studying basic digital skills. Its primary purpose is to allow learners to test their knowledge and practical understanding through interactive activities and quizzes, while also giving tutors a simple way to assess learner progress and identify areas for improvement.

The website was also created with future expansion in mind, so it can later develop into a more complete learning platform, where learners can not only assess their skills but also access learning materials in one place. This will allow ClickStart to develop into a one-stop study resource for the Digital Skills for Beginners course in Adult Education.

Required: HTML, CSS, JavaScript.

Optional: Favicon, external APIs.

Please visit the deployed website [here](https://ctrlaltkismet.github.io/clickstart/index.html) on GitHub pages.


## Contents

- [UX and UI](#ux-and-ui)
  - [Project Goals](#project-goals)
  - [Learner Goals](#learner-goals)
  - [Educational Establishment Goals](#educational-establishment-goals)
  - [Strategy](#strategy)
  - [User Stories](#user-stories)
  - [Site Structure](#site-structure)
  - [Wireframes](#wireframes)
  - [Design Choices](#design-choices)
  - [Layout and Components](#layout-and-components)
    
- [Features](#features)
- [Mock-ups](#mock-ups)
- [JavaScript Functionality](#javascript-functionality)
  
- [Testing](#testing)
  - [Lighthouse](#lighthouse)
  - [Validation](#validation)
  - [User Stories Check](#user-stories-check)
  - [Testing on Other Devices](#testing-on-other-devices)
  - [Testing on Other Browsers](#testing-on-other-browsers)
  - [Real World Testing and Feedback](#real-world-testing-and-feedback)
- [Tools and Technologies Used](#tools-and-technologies-used)
- [Installation](#installation)
- [Deployment](#deployment)
- [Future Features](#future-features)
- [Bugs and Fixes](#bugs-and-fixes)
- [Credits](#credits)

---

## UX and UI

The UX and UI of ClickStart were designed with beginner digital users in mind. The primary aim was to ensure the website is simple, clear, easy to navigate, while having a clean and professional appearance overall. It is designed to appear friendly and inviting as learners can find technology intimidating; positive language has been used and a warm, orange colour scheme to promote a friendly learning platform.

The interface uses a clean layout with clear navigation at the top of each page, allowing users to move between the Home, Learn, Practice, Quiz and Help pages without confusion. Each page follows a consistent structure, both on desktop and smaller devices, so users don’t feel lost when navigating the website.

Accessibility is a key consideration throughout the design. The Lexend font has been chosen due to its readability and reputation for being dyslexia friendly. Colour contrast between text and background was also considered to ensure content is easy to read.

Interactive elements such as buttons, the quiz, and the practice activity have been designed to provide immediate feedback, helping users to understand their progress and maintain engagement. 
The UX and UI were designed to reduce cognitive overload while creating a supportive learning and practice environment.

---

### Project Goals

The main goal of ClickStart was to create an educational website that supports beginner learners in developing basic digital skills, particularly when practising them. The website is designed to function as a practice tool with the implementation of learning pages at a later date.

Another goal was to demonstrate how HTML, CSS, and JavaScript can be combined to create an interactive and accessible web application that considers the needs of both learners and tutors.

The website aims to make assessing a learner’s starting point, at the beginning of their course, and end point more streamlined and easier – using not just x out of x scores but with encouraging comments and a percentage of the user’s total score. This makes it easier to see where the user is at in regard to their learning from a quick perspective, rather than relying on paper resources and taking time to mark assessments.

The two main target audiences for ClickStart are both adult learners studying basic digital skills and tutors who deliver these courses.

-	To provide a simple and accessible platform for practising basic digital skills.
-	To support learners in building confidence when using technology.
-	To create interactive quizzes and activities that reinforce classroom learning.
-	To assist tutors in assessing learner understanding and tracking progress.
-	To design an inclusive and user-friendly interface suitable for beginner and neurodiverse learners.
-	To develop the website into a future all-in-one learning and revision resource.

---

### Learner Goals

The primary goal for learners using the website is to build confidence in basic digital skills. This includes understanding how to navigate systems, recognise key terminology, and complete simple digital tasks.
Learners should be able to:

-	Explore planned learning topics through the Learn page, with full learning materials intended for future development.
-	Practise skills in a safe, guided environment on the Practice page.
-	Test their knowledge using the Quiz page.
-	Seek additional support using the Help page.

The website is designed to support independent learning, allowing learners to progress at their own pace while reinforcing key concepts.

---

### Educational Establishment Goals

From an educational perspective, the website supports tutors by providing an additional teaching resource that learners can access both inside and outside of the classroom. The goal is to reinforce learning through repetition and practice, particularly for beginner learners who may require more time to develop confidence. It also allows for blended learning, where classroom teaching is supported by online activities. Quiz and practical activities also give tutors an indication of the current skillset of learners, who may have the knowledge but not necessarily have the skills yet (or vice versa) which allows tutors to identify a gap in their students’ learning.

-	To provide a digital platform that supports the delivery of Digital Skills for Beginners curriculum through interactive and engaging resources.
-	To enable tutors to assess learner progress effectively through quizzes and practical activities.
-	To improve learner engagement and retention by offering accessible, easy-to-use digital tools that complement classroom teaching.
-	To support inclusive learning by ensuring the platform is accessible to learners with varying abilities, including those with low confidence or limited prior digital experience.
-	To create a centralised resource that can be used both in and outside of the classroom for independent study and revision.
-	To allow for future expansion of teaching materials, enabling the platform to grow alongside curriculum needs and technological developments.

---

## Strategy

The core strategy behind ClickStart is to create a simple, uncluttered, and engaging platform that focuses on learning through practice, allowing the user to actively engage with content rather than passively consume information. By prioritising interactive elements, the website reflects real classroom activities and reinforces key digital skills in a structured and supportive way.

The website is designed to:

- Offer opportunities for firsthand practice.
-	Allow users to test their understanding.

The platform is intended to support both learners and tutors. Learners are given the opportunity to build confidence by testing their understanding in a low-pressure environment, while tutors can use the website as an informal assessment tool to monitor progress and identify gaps in knowledge. This dual-purpose approach ensures the website is not only learner-focused but also supports effective teaching and assessment practices. Additionally, by emulating a file system, learners can practise how to navigate a fake file explorer without the risk of losing their own files. Using JavaScript, the website effectively emulates how to save a file in a designated folder and how to attach that file to an email, written with proper email etiquette. Though it isn’t exactly the same as navigating a true file explorer and attaching said file to emails, JavaScript has been utilised to simulate basic transferable concepts such as double-clicking to go into the next folder.

Accessibility is a key part of the strategy. This includes:
-	Clear navigation
-	Readable fonts
-	Consistent layouts
-	Simple language

The design strategy centres on simplicity, clarity, and the previously mentioned accessibility. As the target audience includes individuals with little to no prior digital experience, the interface avoids unnecessary complexity and uses clear navigation, readable fonts, and consistent layouts. Consideration has also been given to inclusive design, ensuring the platform is suitable for neurodiverse learners and those who may lack confidence with technology. Inclusive pictures have also been used to show that learners of any age, culture, or health can use the platform.

Although the current version of ClickStart focuses primarily on assessment and practice, the long-term strategy is to expand the platform into a fully integrated learning platform. Future developments will include dedicated learning pages, allowing users to access instructional content alongside quizzes and more activities relevant to the learning topic. This will transform the website into a single resource where learners can learn, practise, and revise independently. 
Additional features such as external resources and API integration (e.g. Wikipedia support on the Help page) further enhance the usability of the platform by providing learners with quick access to definitions and explanations. This supports independent learning and encourages users to explore topics beyond the classroom.

The main audience for ClickStart includes adult learners studying Digital Skills for Beginners courses and tutors who deliver these courses. The website is designed to support their needs by providing a structured, accessible, and engaging environment that complements classroom learning and encourages continued development outside of scheduled sessions.

---

## User Stories

The following user stories were created to guide the design and development of the ClickStart website. They reflect the needs of both learners and tutors, with a particular focus on assessment of digital skills.

Due to time constraints, the learning content section of the website is currently marked as “coming soon.” As a result, the implemented user stories focus primarily on navigation, assessment, accessibility, and support features.

---

### User Story 1 - Navigation

As a beginner learner, I want to navigate the website easily so that I can find different sections without confusion.

**Acceptance Criteria**

-	The website must include a clear navigation bar. 
-	All main pages must be accessible from the navigation menu. 
-	The layout must remain consistent across the website. 
-	Users must be able to clearly identify which page they are on. 

**Tasks**

-	Create a header with navigation links. 
-	Add links to Home, Learn, Practice, Quiz, and Help pages. 
-	Apply consistent styling across all pages. 
-	Test navigation links to ensure they function correctly. 

---

### User Story 2 - Realistic Digital Tasks

As a learner, I want to practise a realistic digital task so that I can apply my digital skills.

**Acceptance Criteria**

- The Practice page must simulate a realistic file-saving task. 
-	Users must be able to navigate a folder system. 
-	The system must check whether the correct folder and file name were used. 
-	The task must only progress when the previous step is completed. 
 
**Tasks**

- Create the Practice page structure. 
-	Build a simulated file explorer using JavaScript. 
-	Implement folder path tracking and dynamic folder rendering. 
-	Add validation for correct folder location and file name. 
-	Reveal the next stage only after the save task is completed. 

---

### User Story 3 - Email Task

As a learner, I want to complete an email task after saving a file so that I can practise a full digital workflow.

**Acceptance Criteria**

-	Users must be able to open a compose email section. 
-	The email form must require a recipient, subject, message, sign off, and attachment. 
-	The system must validate the input before submission. 
-	The file saved in the first stage must be attachable in the second stage. 
 
**Tasks**

-	Create the email form section on the Practice page. 
-	Add a compose button to reveal the form. 
-	Implement validation for all required email fields. 
-	Link the saved file to the attachment functionality. 
-	Provide feedback messages for success and errors. 

---

### User Story 4 - Quiz

As a learner, I want to test my knowledge using a quiz so that I can check my understanding of digital skills topics.

**Acceptance Criteria**

-	The Quiz page must display one question at a time. 
-	Users must be able to select an answer and move to the next question. 
-	The system must track the user’s score. 
-	Correct and incorrect answers must be clearly indicated. 
 
**Tasks**

-	Create the quiz layout using HTML and CSS. 
-	Store quiz questions in JavaScript. 
-	Dynamically display questions using JavaScript. 
-	Implement answer selection and score tracking. 
-	Display feedback and final score at the end. 

---

### User Story 5 - Looking up Digital Terms

As a learner, I want to search for unfamiliar digital terms so that I can get additional support when needed.

**Acceptance Criteria**

-	The Help page must include a search input and button. 
-	Users must be able to search using both the button and Enter key. 
-	The page must display a definition when a valid term is found. 
-	The page must display a helpful message if no result is found. 
 
**Tasks**

-	Create the Help page layout. 
-	Add a search input and search button. 
-	Use JavaScript to fetch data from the Wikipedia API. 
-	Prevent empty searches. 
-	Add keyboard support for the Enter key. 
-	Display fallback messages for missing results.

---

### User Story 6 - Accessibility and Readability

As a user with additional learning needs, I want the website to be accessible and readable so that I can use it comfortably.

**Acceptance Criteria**

-	The website must use a readable font. 
-	Text and background colours must provide sufficient contrast. 
-	The layout must be clear and uncluttered. 
-	Interactive elements must be easy to identify. 
 
**Tasks**

-	Implement the Lexend font across the website. 
-	Apply a consistent and accessible colour palette. 
-	Use spacing and layout to reduce visual clutter. 
-	Style buttons and links clearly. 
-	Review accessibility using testing tools. 

 ---

### User Story 7 - Supporting Beginner Learning

As a tutor or educational provider, I want the website to assess learners’ digital skills so that I can understand their current ability and identify areas for development.

**Acceptance Criteria**

-	The website must include activities that assess practical digital skills. 
-	The quiz must assess knowledge-based understanding. 
-	The Practice page must assess applied skills through realistic tasks. 
-	The assessment must provide feedback to support learner improvement. 
 
**Tasks**

-	Design and implement the Quiz page to assess knowledge. 
-	Design and implement the Practice page to assess practical skills. 
-	Implement validation and scoring logic using JavaScript. 
-	Ensure feedback is provided for both correct and incorrect responses. 
-	Structure the site so it can be used as an assessment tool in a teaching environment.

An additional user story would have involved using the website as a learning resource. However, the Learn section is currently marked as “coming soon” with the intention of adding content and continuing to develop this website at a later time. Due to time constraints, the core functionality of the website focuses on assessment through the Practice and Quiz pages. 

---

## Site Structure

The ClickStart website follows a consistent, accessible, and user-friendly layout, using a clean orange and white colour scheme designed to support readability with darker fonts and reduce visual overwhelm. A navigation bar is displayed at the top of every page, allowing users to easily move between key sections of the website, and a drop-down menu available on smaller screens to allow accessibility for learners who may not have a computer at home. The website’s title is also clickable, enabling users to return to the homepage at any time. The structure has been designed intentionally straightforward and intuitive, particularly for users with limited digital experience.
The website consists of five main pages, each with a clear purpose that supports the overall learning journey from introduction to assessment.

1.	The **Home Page** can be accessed via the first link in the navigation bar. This page introduces users to ClickStart, outlining its purpose as a digital skills support platform for beginners. Learners can go straight to the learning page or the practice page with two additional buttons in the hero section. The homepage provides a clear and welcoming overview of what users can expect, with simple navigation and a clear call to action guiding users towards practising or testing their skills. The layout is intentionally minimal to avoid overwhelming inexperienced users and promote ease of navigation.

2.	The **Learn Page** can be accessed via the second link in the navigation bar. This page currently contains a carousel of digital skills topics that are planned for future development. While much of the content is marked as “coming soon,” the structure demonstrates how the platform will evolve into a more complete learning resource. The intention is for each topic to link to dedicated learning pages, allowing users to access instructional content alongside relevant practical activities and quizzes.
   
3.	The **Practice Page** can be accessed via the third link in the navigation bar. This page provides users with guided, hands-on activities that simulate real digital tasks, such as file management, navigation, and email skills. The interactive design allows users to engage actively with content rather than passively reading, reinforcing practical skills that are directly transferable to real-world computer use. This page is a key part of the learning process, bridging the gap between theory and assessment.
   
4.	The **Quiz Page** can be accessed via the fourth link in the navigation bar. This page allows users to assess their knowledge through interactive multiple-choice questions. Users receive immediate feedback through visual indicators, helping them understand correct and incorrect answers. The quiz answers are additionally shuffled each time so learners must ensure they read the answers rather than memorising the location of correct answers. The quiz is designed to reinforce learning, build confidence, and provide an uncomplicated way for both learners and tutors to assess understanding.
   
5.	The **Help Page** can be accessed via the fifth and final link in the navigation bar. This page provides additional support for users who may need further clarification on key terms or concepts. It includes a search function powered by an external API, allowing users to quickly access definitions and explanations. If a search term yields no results, feedback is instantly provided to alert the user. The help page encourages independent learning and supports users who may require extra guidance outside of structured activities.

Overall, the structure of the website has been designed to guide users through a logical progression of classroom learning  practise  test  support, ensuring that all elements of the learning process are covered. The consistent layout and clear navigation help reduce cognitive load, making the platform accessible and easy to use for beginner learners. 

---
## Wireframes

Balsamiq was used to create each wireframe.

Index Page:

<img width="300" alt="Index Wireframe Computer screen" src="https://github.com/user-attachments/assets/129ed8bb-b40e-4ea9-8046-24eff29e84b4" />
<img width="200" alt="Index Wireframe Mobile" src="https://github.com/user-attachments/assets/0bfbd4a4-ac69-4a45-8651-1c2a2a8d0feb" />

Learn Page:

<img width="300" alt="Learn Wireframe Computer screen" src="https://github.com/user-attachments/assets/c346d43f-c407-46c2-bf51-4fb86d79fd3d" />
<img width="200" alt="Learn Wireframe Mobile" src="https://github.com/user-attachments/assets/1a232e8d-dfbc-4c15-80e0-0899fe70738d" />

Practice Page:

<img width="300" alt="Practice Wireframe computer screen" src="https://github.com/user-attachments/assets/f4e5d46d-8d06-4eec-8e6e-772ddefe6677" />
<img width="200" alt="Practice Wireframe Mobile" src="https://github.com/user-attachments/assets/8ac3547c-1296-4f0c-ab41-ad99e60cf98a" />

Quiz Page:

<img width="300" alt="Quiz wireframe computer screen" src="https://github.com/user-attachments/assets/91f5c9b1-47ee-4031-8cae-e99ac52015dd" />
<img width="200" alt="Quiz wireframe mobile" src="https://github.com/user-attachments/assets/64458348-baf6-4553-88df-f090cbad949c" />

Help Page:

<img width="300" alt="Help Wireframe Computer screen" src="https://github.com/user-attachments/assets/93782f5b-c35d-4ea2-8ca8-7ac1fc67511b" />
<img width="200" alt="Help wireframe mobile" src="https://github.com/user-attachments/assets/28a6d5e1-aa4b-4d0b-a24a-99c55028a971" />

---

## Design Choices

### Fonts

As ClickStart is designed for adult learners who may have low confidence with technology or additional needs, readability is a key priority. The font Lexend was chosen due to its reputation for improving reading fluency and reducing visual stress. This makes it particularly suitable for learners with dyslexia or those returning to education after a long period of time. The clean and modern appearance of the font also contributes to a professional yet approachable design.

<img width="600" alt="Lexend Font" src="https://github.com/user-attachments/assets/17ecb5aa-ff78-41bc-ae41-e680e8c4c57a" />

---

### Colour Palette

The website uses an orange and white colour scheme, supported by neutral tones such as grey and black for text hierarchy. The footer for the website is a dark blue with white text to stand out a little more while still maintaining contrast. Orange was selected as the primary accent colour as it is visually engaging without being overwhelming, helping to guide user attention towards key elements such as buttons and navigation links while promoting a warm learning environment.

A minimal colour palette has been intentionally used to:

-	Maintain high contrast between text and background for readability.
-	Reduce visual clutter for beginner and neurodiverse users.
-	Ensure accessibility for users with colour vision deficiencies.
  
The overall design aims to balance warmth and clarity, creating an interface that feels both welcoming and easy to navigate.

<img width="392" height="613" alt="Colour Palette" src="https://github.com/user-attachments/assets/1f689a97-fc75-419d-9589-e8f1f12eec7f" />

---

### Layout and Components

- A consistent page layout is used across all pages, including a navigation bar at the top, main content in the centre, and a footer at the bottom, ensuring users can navigate the website easily without confusion.
- A clear and accessible navigation bar is present on every page, with links to Home, Learn, Practice, Quiz, and Help, alongside a responsive hamburger menu for smaller devices.
- Large, clearly labelled buttons are used throughout the website to support beginner users and ensure elements are easy to interact with on both desktop and touch devices.
- A card-style layout is used on the homepage (e.g. “What You’ll Learn” and “How It Works”) to present information in a structured and digestible format.
- A carousel component is used on the Learn page to display topics in an interactive and engaging way, with both automatic and manual navigation controls.
- The Practice page uses a multi-stage layout, revealing sections step-by-step to prevent cognitive overload and guide the user through tasks in a structured way.
- A simulated file explorer interface is used as a key component of the Practice page, designed to visually replicate a real system while remaining simple and controlled.
- A compose email modal is used within the Practice page to simulate real-world email interaction in a familiar format.
- Interactive feedback elements (such as validation messages, score displays, and progress indicators) are used throughout to provide immediate user feedback.
- Hover and focus states are applied to buttons and navigation links, changing colour to clearly indicate interactivity and improve usability.
- Spacing and layout are intentionally designed with clear separation between sections to improve readability, particularly for beginner and neurodiverse users.
- Images and visual elements are used consistently across the website to support understanding without overwhelming the user.

---

## Homepage

### Navigation Bar

On the desktop, the navigation bar is always at the top of the page at all times with links to each page on the right-hand side and the logo and title of the website on the left-hand side. The link to each page is highlighted in orange to show the user which page they are actively using. 

<img width="1198" height="69" alt="Navigation Bar Computer" src="https://github.com/user-attachments/assets/1c70d144-a21a-4591-b394-f0ced7c8dd05" />


The navigation bar on mobile devices or tablets uses a hamburger icon with a drop-down menu for easy navigation:

<img width="406" height="69" alt="Navigation Bar Mobile 1" src="https://github.com/user-attachments/assets/6a7ed87e-018b-467d-a12c-f60b46b0e71c" />
<img width="409" height="302" alt="Navigation Bar Mobile 2" src="https://github.com/user-attachments/assets/788d508f-f9e2-4e2a-bccc-63b0518887aa" />

### Hero Image

The hero image of the homepage utilises the orange and warm accents seen throughout the website. The image can be seen in full on any size device and has been designed as a drawing to promote the friendly, warm vibe of the whole website. Each image used throughout the website uses the same art style and is generated using ChatGPT 5.3.

<img width="1332" height="644" alt="Hero Image" src="https://github.com/user-attachments/assets/ca2cda30-6183-419f-930e-27b4e8367b21" />

### What You'll Learn

On the homepage, the user can see three main topics that they can expect to learn on the website in the future. These are cards which pop up once hovered over (or tapped on if the user is using a touchscreen device).

<img width="1501" height="733" alt="Middle Section of Website" src="https://github.com/user-attachments/assets/d3945e31-9c6f-48bf-a957-b24295f1190f" />

### How It Works

This section of the homepage breaks the website down in four, easy to follow steps, and includes links to the respective pages.

<img width="1287" height="403" alt="How It Works Section" src="https://github.com/user-attachments/assets/c71f3e06-bc89-4b9a-9ec4-33ea87b329a0" />

### CTA

This section of the homepage is the overall call to action to encourage learners to browse available lessons (implemented in future improvements and development). This is accompanied with another picture of the same art style, utilising the same colour scheme of the website, and a large orange button to take the user to the Learn Page.

<img width="1262" height="473" alt="CTA Image" src="https://github.com/user-attachments/assets/ab07a968-5c4c-4687-a050-e345581eac94" />

### Footer

The footer is the only part of the website which does not follow the same orange colour scheme, allowing it to stand out and further improving contrast. It is dark blue with white text evenly distributed throughout. The footer remains the same on each web page and includes links to their respective pages alongside social media links.

<img width="1312" height="331" alt="Footer of Website" src="https://github.com/user-attachments/assets/4b73b6d4-009f-4586-955e-36299ed1d2ae" />

## Learn Page

### Carousel

The carousel on the learn page utilises JavaScript to move to the next topic every four seconds and stops once the mouse is hovered over it. Users can also click on each arrow to manually scroll through the carousel. Each lesson, so far, has an inactive button stating the lessons are ‘coming soon,’ though the carousel itself provides basic definitions for each topic alongside a tip for the user. 

<img width="1050" height="747" alt="Carousel on Learn Page" src="https://github.com/user-attachments/assets/be8451a3-0f89-4c45-a391-615e87d20762" />

## Practice Page

Each section of the practice page is split into individual sections to allow for easy readability.

### Task Scenario

This section introduces the scenario for the user which uses simple language so it is easy to follow along, alongside indicating the save location and what the file name should be for when they save the file. In orange text, it provides the first step clearly to the user.

<img width="1329" height="570" alt="Task Scenario Image" src="https://github.com/user-attachments/assets/40e2002b-a9b7-4a20-a2f9-55542095da06" />

### Cover Letter

This section simulates a written cover letter that the user must save. There is only one button available for the user to press to prevent any confusion. Once the user has clicked ‘Save As,’ the next section of the task is revealed. This has been designed intentionally, rather than having the whole task visible on the page, to prevent confusion and break the task up into something more easily digestible.

<img width="1213" height="493" alt="Cover Letter Image" src="https://github.com/user-attachments/assets/784e38b3-1723-430e-a841-f92b6413f24e" />

### Save As

Once ‘Save As’ has been clicked in the cover letter section, the simulated file explorer will appear on screen. CSS has been heavily implemented to create a fake file explorer layout with the file path in view at the top, the quick access section on the left, and a folder in the centre. Inside the ‘file explorer’ the user can see a hint ‘single click to select a folder. Double click to open it’ as a gentle reminder as to how to navigate the file explorer. There is a back button that is fully functional if the user wants to go back and a selected path beneath the explorer so the user can see which folder they have singularly clicked on. Once double clicking a folder, the selected path clears to ‘none.’ Additionally, the file path bar at the top of the file explorer tracks which folder the user is currently in. 

Beneath the file explorer is a box for users to write the name for their respective file ‘Cover_Letter_V1’. Validation has been used to ensure the user types the correct file name properly. If they type in the wrong file name, orange text will appear to remind them of the correct name, and the user will have lost a mark.

Finally, two buttons have been placed beneath file name: Save File and Cancel. This allows users to either go back or attempt to save their file. If successful, the email section of the task will pop up, and the cover letter and file explorer sections will now be hidden.

<img width="1213" height="802" alt="Fake File Explorer Image" src="https://github.com/user-attachments/assets/ca844115-e03e-4cd0-9621-b2c807989c05" />

### Practice Mail

To simulate writing an email, the user must press the ‘Compose’ button to open a new message. CSS has been used to create an accurate looking compose window, complete with; To, Subject, Message, Attach Saved File and Send Email. Validation has been heavily implemented here to ensure the user writes the correct email, include a subject line, and used proper email etiquette as well as ensuring the file has been attached before sending. Validation also includes users requiring to sign off properly, using their name.

In the first ‘Task Scenario’ box, step 1 of 2 will change into step 2 of 2, revealing the email address the user must place inside the ‘To’ section, it will also validate that the file has been saved successfully.

<img width="1213" height="789" alt="Open Composed Mail Box" src="https://github.com/user-attachments/assets/add64422-ec32-4f47-8dac-7e51c646c3b7" />

### Your Final Score

Once the task is completed, the email section will be hidden and the final score box will be revealed. This shows how many marks out of 9 the user has received alongside a percentage and an encouraging message. Step 2 of 2 changes in the scenario box as ‘Task Completed’.

<img width="1213" height="636" alt="Task Scenario Final Score Image" src="https://github.com/user-attachments/assets/ae941053-5a5f-4bc7-82bc-6fcdd9abb87d" />

## Quiz Page

The Quiz Page includes an interactive quiz consisting of 30 questions. It allows the user to see which question number they are on, what their current running score is, alongside a progression bar. Quiz answers are set to shuffle each time the user wants to redo the quiz, to prevent remembering the location of correct answers while encouraging them to slow down and read through each answer, respectively.

The quiz indicates if an answer has been correctly or incorrectly answered using red and green colours, while a button allows the user to go to the next question. If an answer has been answered incorrectly, the quiz shows the correct answer.
Once completed, the quiz will give the user a final score out of 30, a percentage, and an encouraging comment which differs depending on their score out of 30.

<img width="782" height="684" alt="Quiz Page Image" src="https://github.com/user-attachments/assets/afcaf0b3-c774-4203-b681-1a12a2bdce54" />
<img width="825" height="748" alt="Quiz Page Image Correct Answer" src="https://github.com/user-attachments/assets/0b067b7b-017e-4bdb-82e5-7f46564af615" />
<img width="840" height="746" alt="Quiz Page Image Incorrect Answer" src="https://github.com/user-attachments/assets/f11f794a-6ba7-4460-977c-e6ea83728a52" />
<img width="748" height="524" alt="Quiz complete" src="https://github.com/user-attachments/assets/26f6462c-9ee9-47eb-9cc8-b3fde7ef3097" />

## Help Page

The Help Page has additional guidance of the website, including frequent questions which use simple language which promotes an easy understanding of how to use the website.

<img width="443" height="798" alt="Help Page Overview" src="https://github.com/user-attachments/assets/153a0282-8adc-42fc-83d8-ba482bc0bcc7" />

## Look Up A Digital Word

Using the Wikipedia API, users can search a technical word which brings up a section with a short definition for their word. This is to help users search for basic explanations of digital terms such as browser or software and supports independent learning while encouraging learners to develop the skills to ‘search.’ Users can click the ‘search’ button after they have typed their word, or additional functionality has been implemented to allow the user to press the Return key to confirm the word they want to search.

Some search terms can be ambiguous, meaning more than one possible meaning. For example, the word ‘keyboard’ could refer to both the computer keyboard and the instrument. This is due to Wikipedia containing articles for multiple meanings of the same word and therefore searching a single term on its own may return an irrelevant result or a disambiguation page rather than the intended definition.

To improve the accuracy of results, a simple disambiguation handling approach was used. The contextual keyword ‘computer’ was added so the API would return a more relevant digital meaning. If a user searches the term ‘keyboard,’ the API will add the word ‘computer’ to it. 

Additionally, if the API cannot return a result, a message appears to alert the user of this.

<img width="735" height="317" alt="Help Search Bar Blank" src="https://github.com/user-attachments/assets/f7d3ef26-eebb-4056-b6f0-7f5465fc9072" />
<img width="773" height="612" alt="Help Search Bar Search Result" src="https://github.com/user-attachments/assets/1feee4c9-96b4-4180-853f-7bc5b6167a41" />
<img width="782" height="406" alt="Help Search Bar No Result" src="https://github.com/user-attachments/assets/4aac28b5-c9cf-4305-9290-db468bad426d" />

---

## Features

-	Accessible navigation available across all pages.
-	Responsive design for mobile, tablet, and desktop devices.
-	Clear and consistent layout used throughout the website.
-	Fonts chosen for readability and accessibility, particularly for beginner learners.
-	A consistent colour palette used across all pages to create a clear visual identity.
-	A homepage hero section introducing the purpose of the website.
-	A mobile navigation menu for smaller screen sizes.
-	A Learn page carousel to present topics in an engaging and interactive way.
-	A Practice page with an interactive file-saving and email-writing simulation.
-	A fake file explorer to help learners practise folder navigation and file organisation.
-	A guided email task that checks for recipient, subject line, greeting, sign off, and attachment.
-	Instant feedback messages to support learners when mistakes are made.
-	A scoring system on the Practice page to assess performance.
-	A Quiz page with multiple-choice questions to assess digital skills knowledge.
-	Randomised quiz answer order to make repeated attempts more varied.
-	A progress bar and live score tracking during the quiz.
-	End-of-quiz feedback based on the learner’s final percentage score.
-	A Help page connected to the Wikipedia API so users can search for digital terms.
-	Disambiguation handling on the Help page to improve search accuracy for computer-related terms.
-	Keyboard support for the Help page search using the Enter key.
-	External links in the footer to useful learning and support websites.
-	Social media links included in the footer.
-	A clickable site logo that returns the user to the homepage.

---

## Mock-Ups

Here are mock-ups on most devices for each page of my website. These were created on [fireship.dev](https://fireship.dev/amiresponsive?url=)  to test responsiveness.

### Home Page

<img width="1013" height="590" alt="Index Page Mockup" src="https://github.com/user-attachments/assets/14b25e97-bc2b-4598-ade1-9c35c288932e" />

### Learn Page

<img width="969" height="576" alt="Learn Page Mockup" src="https://github.com/user-attachments/assets/6449845e-2b71-4c84-9cee-c66aa4bec3a1" />

### Practice Page

<img width="1019" height="589" alt="Practice Page Mockup" src="https://github.com/user-attachments/assets/41fd9c39-0c4f-4181-93cf-6b19096de377" />

### Quiz Page

<img width="1031" height="582" alt="Quiz Page Mockup" src="https://github.com/user-attachments/assets/65dde1d1-c389-45e0-a9ab-9589a192f3df" />

### Help Page

<img width="970" height="575" alt="Help Page Mockup" src="https://github.com/user-attachments/assets/dfb16f89-5d01-4f12-ae64-b29067879c27" />

---

## JavaScript Functionality

JavaScript was used throughout the website to add interactivity, improve the user experience, and provide learners with engaging ways to practise digital skills. Each script file was separated by feature so that only the required JavaScript would load on the relevant page. This made the code easier to manage and prevented errors on pages where certain elements did not exist.

### Global Navigation (script.js)

The script.js file controls the mobile navigation menu. When the page loads, JavaScript selects the mobile menu button and the main navigation element. If both elements are present, an event listener is added to the button so that clicking it toggles the active class on the navigation menu.

This allows the navigation links to open and close on smaller screen sizes, improving responsiveness and making the website easier to use on mobile devices.

### Learn Page Carousel (carousel.js)

The Learn page includes a carousel that displays slides of learning topics. This script begins once the page content has fully loaded using DOMContentLoaded, which ensures the HTML elements exist before JavaScript tries to interact with them.
The carousel works by:

-	selecting the track, viewport, and navigation buttons 
-	storing all slide elements in an array 
-	keeping track of the current slide using an index 
-	moving the carousel with translateX() so the correct slide is shown. 

The goToSlide() function updates the current slide position, while the next() and prev() functions move forwards and backwards through the carousel. Modulo logic is used so the carousel loops continuously from the last slide back to the first.
Automatic slide movement is created using setInterval(), with slides changing every 4.5 seconds. This timer resets when the user manually clicks the next or previous buttons, making the carousel feel more responsive.

For accessibility and readability, the automatic movement pauses when the user hovers over the carousel or focuses on it using the keyboard. This prevents content from moving while the learner is trying to read it.

### Help Page Wikipedia Search (help.js)

The Help page uses the Wikipedia REST API to allow users to look up digital terms and receive a simple explanation. JavaScript selects the search button and text input field, then adds event listeners so a search can be started either by clicking the button or pressing the Enter key.

The searchWikipedia() function:

-	reads the user’s search term. 
-	removes unnecessary spaces using trim() 
-	checks that the input is not empty. 
-	builds the API URL using the search term. 
-	uses fetch() to request data from Wikipedia. 

If the input field is empty, the user is shown a message asking them to type a word before searching.

When data is returned from the API, the script checks whether the result is a disambiguation page. A disambiguation page happens when one word can have multiple meanings, for example “mouse” could refer to an animal or a computer device. To make the results more relevant to the website, the script automatically searches again using "computer " + searchTerm, which helps return the digital meaning of the word.

If a valid definition is found, the result is displayed inside a styled card showing the Wikipedia title and summary. If no useful result is found, an error message is shown asking the user to try another term.

This feature allows learners to independently explore unfamiliar digital vocabulary in a simple and beginner-friendly way.

### Practice Page Simulation (practice.js)

The Practice page contains the most complex JavaScript on the website. It was designed as an interactive simulation where learners practise two key digital tasks:

1.	saving a file in the correct folder with the correct name 
2.	writing and sending a professional email with an attachment
   
The script begins on DOMContentLoaded and connects to a large number of HTML elements, including the file explorer, modal window, email form, progress text, and results section.

### Simulated File Explorer

A fake file system is stored in a JavaScript object. This creates a simple folder structure:

-	This PC 
-	Documents 
-	Digital Skills for Beginners 
-	Homework 

The learner navigates this structure through buttons generated by JavaScript. The renderFolders() function creates a folder button for each folder in the current location, while updatePath() updates the path display so the learner can see where they are in the file structure.

Single-click selects a folder, while double-click or double-tap opens it. This was designed to imitate the way folders are used in a real file explorer while still being accessible to touch devices.
A back button allows the learner to move up the folder structure.

### Save File Task

When the learner clicks the save button, a modal window opens where they must save the file in the correct folder and type the correct filename: Cover_Letter_V1.
The script checks:

-	whether the user is in the correct folder 
-	whether a filename has been entered 
-	whether the filename matches the required format 

If the learner makes an error, a helpful message is displayed. If the learner completes the step correctly, the script:

-	awards marks where appropriate 
-	marks the file as saved. 
-	hides the document section. 
•	reveals the email section. 
•	updates the task progress message. 

### Email Task

The learner must then compose an email to employer@clickstartmail.com. Clicking the Compose button reveals the email form.
The form checks for:

-	the correct recipient email address 
-	a subject line 
-	a greeting such as “Dear,” “Hello,” or “Hi”. 
-	a main message body 
-	a sign off such as “Kind regards” or “Yours sincerely” 
-	the learner’s name under the sign off 
-	whether the saved file has been attached 

The attachment button also checks that the file was saved before allowing it to be attached. This mirrors the real-life workflow of saving a document before attaching it to an email.

To validate the message structure, the script splits the email into lines and checks the first, last, and second-last lines. This allows it to identify whether the learner has included the expected parts of a professional email.

If any section is missing, a specific feedback message is shown so the learner knows exactly what needs correcting.

### Scoring and Feedback

The practice task uses a scoring system stored in the practiceState object. This tracks whether each part of the task was completed correctly on the first try. Marks are awarded for correct first-attempt performance in both the file-saving and email-writing tasks.

Once the email is successfully sent, the showResults() function:

-	calculates the learner’s final mark out of 9. 
-	converts it into a percentage. 
-	displays feedback based on performance. 
-	updates the progress text to show the task is complete. 

This feature turns the Practice page into a guided simulation rather than a passive activity, helping learners practise digital skills in a more realistic way.

### Quiz Functionality (quiz.js and quizQuestions.js)

The quiz feature is split into two files:

-	quizQuestions.js stores the quiz data. 
-	quiz.js controls the quiz logic and display. 

Separating the questions from the logic keeps the code more organised and makes it easier to add, remove, or edit questions without changing the main functionality.

### Question Data

The quizQuestions.js file stores an array of objects. Each object contains:

-	a question 
-	a list of possible answers 
-	the correct answer 

This structure makes the quiz scalable and easy to maintain.

### Quiz Display and Logic

The quiz.js file imports the questions and keeps track of:

-	the current question number 
-	the learner’s score. 

The script selects the main quiz elements from the page, including the question text, answer buttons container, score display, next button, and progress bar.

The showQuestion() function displays the current question and creates answer buttons dynamically. Before displaying them, the answers are shuffled using the shuffleArray() function. This means the correct answer does not always appear in the same position, making the quiz fairer and more engaging.

When a learner clicks an answer, the selectAnswer() function:

-	checks whether the answer is correct. 
-	updates the score. 
-	highlights the correct answer in green. 
-	highlights the chosen wrong answer in red if needed. 
-	disables all answer buttons so only one answer can be selected. 
-	reveals the Next button. 
-	updates the progress bar.
  
The checkAnswer(), updateScore(), and nextQuestion() functions were separated into smaller reusable functions. This improves readability and made it easier to assess the quiz logic later using Jest.
When the learner reaches the end of the quiz, JavaScript calculates their percentage score and displays a final results message with feedback. A restart button is then generated so the learner can try the quiz again from the beginning.

### Automated Testing with Jest (quiz.test.js)

Automated testing was used to check the core quiz logic. The quiz.test.js file contains Jest tests for the following functions:

-	checkAnswer() 
-	updateScore() 
-	nextQuestion() 

These tests verify that:

-	correct answers return true. 
-	incorrect answers return false. 
-	the score increases only when an answer is correct. 
-	the next question index increases correctly. 

Using automated testing helped confirm that the underlying quiz logic worked as expected, even before checking the full feature in the browser.

---
## Testing

Throughout this project, a range of testing methods and tools were used to ensure the website functions correctly, is accessible, and provides a smooth user experience for beginner learners.

Manual testing was carried out across all pages to check navigation, interactivity, and overall usability. This included testing key features such as the carousel, quiz functionality, practice simulation, and the Wikipedia API search to ensure they behaved as expected.

Automated testing was also implemented for the quiz logic using Jest. Core functions such as answer checking, score updates, and question progression were tested to confirm that the underlying logic worked correctly.

Code validation tools were used to check the quality and accuracy of the HTML, CSS, and JavaScript. Any errors or warnings identified during this process were reviewed and resolved where necessary.

Accessibility and usability were considered throughout testing, including keyboard interaction (such as using the Enter key for search), readable font choices, and clear feedback messages for users.

The website was also tested on different screen sizes using developer tools and physical devices to ensure it is fully responsive and functions effectively across mobile, tablet, and desktop environments.

All bugs, errors, and improvements identified during testing were documented and addressed as part of the development process.

### Lighthouse

Due to my experiences with my previous milestone project, all images I used were produced both as a webp format (using Google’s Squoosh) with a fallback to PNG. Due to the website’s clear layout, compressed images, and strong contrast, all pages returned strong Lighthouse scores across performance, accessibility, best practices, and SEO, with results shown below.

### Homepage:

<img width="478" height="628" alt="Index Page" src="https://github.com/user-attachments/assets/9a8663d9-96b3-471b-81d1-8ca095cbbfb5" />

### Learn Page:

<img width="484" height="664" alt="Learn Page" src="https://github.com/user-attachments/assets/b4cd80e0-7e52-481c-89e8-f68ad44bc1ff" />

### Practice Page:

<img width="487" height="659" alt="Practice page" src="https://github.com/user-attachments/assets/6c4d99a3-e86e-47c0-99a2-aa8f0d968f71" />

### Quiz Page:

<img width="485" height="681" alt="Quiz Page" src="https://github.com/user-attachments/assets/94763b41-78e4-45ed-b814-60c1eaa24445" />

### Help Page:

<img width="488" height="681" alt="Help Page" src="https://github.com/user-attachments/assets/85902aba-6139-4210-b918-b7a9050d8488" />

I also ensured that the webp photos were being loaded using DevTools.

<img width="329" height="327" alt="Fallback images" src="https://github.com/user-attachments/assets/a7dc3c62-d4bd-45c0-b40c-ae27c0e53bbe" />

---

## Validation

To validate my code, I used W3C Markup Validation for my HTML code and the W3C CSS validation tool. Some errors occurred which were promptly fixed.

### HTML Validation

### Index Page

No issues were found.

<img width="1325" height="131" alt="Index page validation" src="https://github.com/user-attachments/assets/4cfc0100-7372-41fd-9259-ee6e820a437d" />

### Learn Page

**Validator Message:**
The validator reported that the aria-label attribute must not be used on a div unless the element has an appropriate ARIA role:

<img width="1267" height="294" alt="Learn page validation error" src="https://github.com/user-attachments/assets/60f6d09c-ec6e-41d7-9894-93d49e0d9d16" />

The carousel container was using accessibility attributes (aria-label and aria-roledescription) on a div element without defining a valid ARIA role. This caused a validation error because assistive technologies would not correctly interpret the purpose of the element.

The div was updated to include a valid ARIA role (role="region"), which makes the element identifiable as a meaningful section for assistive technologies.

**Fix:** 
div class="carousel" role="region" aria-label="Learning topics carousel"

This resolved the validation error while maintaining accessibility.
<img width="1303" height="136" alt="Learn page correction" src="https://github.com/user-attachments/assets/d9863a33-8de5-45e2-a24b-e1a9d5d33938" />

### Practice Page

**Validator Message:**

The validator warned that some section elements did not contain a heading, making them less accessible and harder to interpret structurally.

<img width="1258" height="536" alt="practice page validation error" src="https://github.com/user-attachments/assets/4c84a78d-2659-47f1-9d6c-135ad2291d43" />

Each section element should include a heading (h1–h6) so that screen readers and users can understand the structure and purpose of the content. Some sections in the Practice page were being used for layout purposes but did not include headings.

**Fix:**
Headings were added to the relevant sections using appropriate heading levels (e.g. h2), ensuring a clear and logical structure throughout the page.

E.g. h2 class="window-heading"-PracticeMail-/h2

Where necessary, headings were styled using custom CSS to maintain the original visual design.

<img width="1307" height="129" alt="practice page correction" src="https://github.com/user-attachments/assets/5eb2c15c-d59d-45ba-8bc8-069bca25c092" />

### Quiz Page

**Validator message:**
An unclosed span element caused a validation error, which also triggered an additional error stating that a closing /div tag had been encountered while other elements were still open.

<img width="1250" height="220" alt="Quiz page validation error" src="https://github.com/user-attachments/assets/9e1c0a26-a685-4a60-a3ce-dc4c4b8f8f4f" />

**Fix:**
The missing closing /span tag was added inside the quiz progress area, which resolved both validation errors.

---

### CSS Validation

After fixing a few errors (missing units) in the CSS code, the validator came back with no other issues with the code.

<img width="1325" height="149" alt="CSS Validation" src="https://github.com/user-attachments/assets/b3989309-e20e-4a4f-8094-76d62137e9d3" />

---

### JavaScript Validation

Jest was used to validate quiz logic as a test file.

<img width="601" height="122" alt="Quiz Logic passed" src="https://github.com/user-attachments/assets/7cf8b004-f4b8-40d5-82b1-3af5a9c33a52" />

JavaScript code was validated using a linting tool (ESLint) to identify any syntax errors and improve code quality.

---

## User Stories Check

To ensure my website had achieved all outcomes, I tracked the progress of my user stories and checked off each checkbox I had achieved under ‘tasks.’ 

<img width="1026" height="787" alt="User Stories Completed Overview" src="https://github.com/user-attachments/assets/42ca7a14-59d5-496e-95d4-86f668969d7e" />
<img width="834" height="810" alt="User Story 1" src="https://github.com/user-attachments/assets/f0494b3b-4ab7-46df-b4bf-c94015663333" />
<img width="837" height="608" alt="User Story 2" src="https://github.com/user-attachments/assets/5843b8fd-67e0-465d-95d3-9da03066fdaa" />
<img width="834" height="603" alt="User Story 3" src="https://github.com/user-attachments/assets/9cfd7dbf-f811-413e-89e5-008af8845937" />
<img width="829" height="599" alt="User Story 4" src="https://github.com/user-attachments/assets/14e16b43-434d-4279-9af4-5ed77e17ec9e" />
<img width="833" height="635" alt="User Story 5" src="https://github.com/user-attachments/assets/5da3ffc1-80a4-4c6b-ae57-61ebe8e62799" />
<img width="832" height="596" alt="User Story 6" src="https://github.com/user-attachments/assets/259f2039-0030-47eb-980e-9b3c81d831ef" />
<img width="831" height="632" alt="User Story 7" src="https://github.com/user-attachments/assets/e3056246-18ff-47fb-be71-1b8056871947" />

---

## Testing on Other Devices

To ensure the website was responsive on other devices, I tested the accessibility and functionality of the website on both an iPhone 16, iPad Pro, and smaller laptops within a classroom environment.

The website appears responsive on all devices and works exactly as intended.

---

## Testing on Other Browsers

To ensure each web page works as it should with the correct font and design, the website has been tested on multiple browsers: Chrome, Firefox, Microsoft Edge and Brave. While Chrome was the primary browser I used when testing the website, further testing showed that there were no changes to the website layout and design.

**Edge:**

<img width="1883" height="1021" alt="Website on Edge" src="https://github.com/user-attachments/assets/622146e9-681f-47c9-9fc5-e8bfc2cfec4f" />

**Firefox:**

<img width="1914" height="1024" alt="Website on FireFox" src="https://github.com/user-attachments/assets/e47a65a1-5330-4756-a480-46fd574b79d1" />

**Brave:**

<img width="1912" height="1019" alt="Website on Brave" src="https://github.com/user-attachments/assets/92944312-791e-464e-b8ed-a1435ebc6079" />

---
## Real World Testing and Feedback

The website was tested with real learners in an Adult Education classroom environment. Learners interacted with the Practice and Quiz pages as part of their digital skills sessions, allowing observation of usability, engagement, and understanding.

Observations included:

- Learners were able to navigate the website independently with minimal guidance.
- The Practice task was engaging and encouraged learners to think about real-world digital processes.
- Some learners initially struggled with email structure, which informed improvements to validation.
- The quiz format was well received, particularly the instant feedback and scoring system.
- The Help page supported learners in understanding unfamiliar terminology without tutor intervention.

Learner feedback included:

- "The steps made it easier to understand what to do."
- "The quiz was really good and I enjoyed it more than the paper copy."
- "I like seeing my score at the end of the quiz."

Based on this testing, several improvements were made:

- Email validation was extended to require a greeting, sign off, and name.
- Instructions were clarified to better support beginner learners.
- Feedback messages were improved to be more specific and supportive.
- Touchscreen support was improved for folder navigation.

The project was also reviewed by a manager within the Adult Education setting. 

Feedback highlighted that the website has strong potential as a practical teaching and assessment tool, particularly for supporting beginner learners in developing confidence with digital skills.

The interactive elements, such as the Practice task and quiz, were noted as being especially useful for reinforcing classroom learning in a structured and engaging way.

The project was recognised as something that could be further developed and potentially integrated into teaching practice in the future.

The project was also identified as an example of work that could support future development within the organisation, with potential for expanding digital learning resources beyond traditional classroom delivery.

---

## Tools and Technologies Used

A range of tools were used during development to support both functionality and design:

-	HTML5, CSS3, JavaScript
-	[Google Fonts (Lexend)](https://fonts.google.com/specimen/Lexend)
-	[W3C CSS Validation (to validate CSS Code)](https://jigsaw.w3.org/css-validator/)
-	[W3C Validator (to validate HTML Pages)](https://validator.w3.org/)
-	[ESLint – checks JavaScript for syntax errors, bad practices, and potential bugs](https://eslint.org/).
-	Jest – to test for quiz logic.
-	Lighthouse via Dev Tools
-	GitHub - used for version control and to manage workflow throughout development with regular commits
-	GitHub Pages - used to deploy final website.
-	VS Code - used to write and edit HTML, CSS, and JavaScript files.
-	Wikipedia API (REST) - Used to provide dynamic help content. 
-	[Squoosh (Google) – Used to compress images into Webp format. ](https://squoosh.app/)
-	[Fireship.dev - for mockups.](https://fireship.dev/amiresponsive)
-	[Balsamiq - to create wireframes.](https://balsamiq.com/)
-	[Photopea – Used to edit images and remove backgrounds. ](https://www.photopea.com/)
-	[ChatGPT – Used for debugging support and generating images.](https://chatgpt.com/)
-	Google Chrome, Microsoft Edge, Firefox, Brave (for web browser testing)
-	iPhone 16 and iPad Pro (12.9-inch) (5th generation) (used for testing website on physical devices).

---

## Installation

To clone this repository locally, use the following command:

git clone https://github.com/CtrlAltKismet/clickstart.git

Once cloned, navigate into the project directory:

cd clickstart

You can then open the project in your preferred code editor (e.g. VS Code) and run it using Live Server.

---
## Deployment

Deployed via GitHub Pages: [ClickStart Homepage](https://ctrlaltkismet.github.io/clickstart/index.html)

---

## Future Features

Due to time constraints, not all planned features were fully implemented within this version of the project. The current development focused primarily on assessment-based functionality, particularly the Practice and Quiz pages, which form the core purpose of the website.

However, several improvements and additional features have been identified for future development.

### Learning Content (Learn Page)

The Learn section is currently marked as “coming soon.” This was originally intended to provide structured teaching content to support beginner learners before completing the Practice and Quiz sections.
Future development will include:

-	Structured lessons covering key digital skills topics. 
-	Step-by-step guides to support learners with limited experience 
-	Visual and interactive elements to improve engagement. 
-	Integration with the Practice and Quiz pages to create a full learning pathway. 

### Practice Page Enhancements

While the Practice page is fully functional, several improvements could enhance usability and realism:

-	Add a reset or retry button to allow learners to repeat the task without refreshing the page. 
-	Expand the file explorer system to include more folders and incorrect pathways for increased realism. 
-	Add keyboard accessibility (e.g. using Enter to open folders) 
-	Improve the results screen to provide a clearer breakdown of performance. 
-	Further improve email validation by introducing spelling and grammar support, helping learners produce more professional written communication.

### Help Page Improvements

The Help page currently uses the Wikipedia API, which can sometimes return non-technical or ambiguous results.

Future improvements would include:

-	Refining search queries to prioritise computer-related definitions. 
-	Creating a custom glossary of key digital terms 
-	Adding suggested search terms for beginner learners 

### Accessibility Improvements

Although accessibility was considered during development, further improvements could be made:

-	Improve colour contrast to meet higher accessibility standards. 
-	Ensure heading structures follow a consistent hierarchy. 
-	Add alternative text for all images. 
-	Improve keyboard navigation across interactive elements. 
-	Allowing users to change the website font to better suit their individual needs, for example by offering options such as OpenDyslexic.

### Performance Optimisation

Some improvements were identified during Lighthouse testing:

-	Reduce unused CSS. 
-	Minify CSS and JavaScript files. 
-	Improve image loading by setting explicit width and height. 
-	Optimise loading performance for key elements. 

## Additional Features

Future versions of the website will include:

-	User progress tracking 
-	Login functionality for learners 
-	Downloadable resources or worksheets 
-	Integration with classroom platforms such as Google Classroom 

---

## Bugs and Fixes

During development, a range of bugs were encountered across both JavaScript functionality and general site structure. These issues provided valuable insight into debugging and problem-solving.

---
**Bug:** Carousel script caused errors on pages without carousel elements

**Fix:** The error “Cannot read properties of null (reading 'addEventListener')” occurred because the carousel script was loaded on every page, including those without carousel elements. This was resolved by moving the carousel code into a separate file and only loading it on the Learn page.

---

**Bug:** Incorrect file paths prevented JavaScript from loading

**Fix:** Referencing incorrect paths (e.g. assets/script/script.js instead of scripts/script.js) caused functionality, particularly on the Help page, to fail. This was resolved by correcting the file paths.

---

**Bug:** Wikipedia API requests failed due to incorrect URL formatting

**Fix:** The API request was missing a forward slash before the search term, resulting in invalid URLs such as .../summarybrowser. Adding the missing slash corrected the request and allowed data to load properly.

---

**Bug:** HTML inserted using innerHTML caused syntax issues

**Fix:** HTML was not wrapped in a string, causing JavaScript to interpret it as code. This was resolved by using template literals to correctly insert HTML content.

---

**Bug:** Help page returned confusing disambiguation results

**Fix:** Some searches returned results such as “keyboard may refer to,” which were not helpful for learners. This was resolved by detecting disambiguation responses and refining the search query automatically.

---

**Bug:** Syntax errors prevented JavaScript from executing

**Fix:** Several syntax-related issues were identified, including missing closing brackets, incorrect property names (e.g. textcontent instead of textContent), and incorrect operators. These were resolved through careful debugging and code review.

---

**Bug:** Save button stopped working on the Practice page

**Fix:** A syntax error later in the script prevented event listeners from attaching correctly. Fixing the syntax restored functionality.

---

**Bug:** Email validation used outdated variable names

**Fix:** Incorrect variable references caused validation to behave incorrectly. Updating variable names ensured the correct logic was applied.

---

**Bug:** Sign off validation failed when a name was included

**Fix:** The original logic only checked the final line of the email, which failed when users added their name underneath. This was resolved by checking both the last and second-to-last lines, and by converting values to lowercase to avoid case sensitivity issues.

---

**Bug:** Feedback messages disappeared when modals closed

**Fix:** Messages were originally placed inside modal elements, causing them to disappear when the modal closed. This was resolved by moving messages outside of modal containers, so they remain visible.

---

**Bug:** Folder navigation did not work on touchscreen devices

**Fix:** The original implementation relied on double-click events, which are not supported on touch devices. This was replaced with a timing-based double-tap system, improving cross-device compatibility.

---

**Bug:** Email task allowed unrealistic or incomplete email structure (identified through user testing)

**Fix:** During classroom testing, it was observed that learners could complete the email task without following a realistic structure. For example, learners could omit a greeting, write an unstructured message, or include a sign off without a name.

To resolve this, the email validation was extended to require:

-	A greeting (e.g. “Dear” or “Hello”) 
-	A main body of text 
-	A valid sign off (e.g. “Kind regards”) 
-	A name beneath the sign off 

Additionally, the validation logic was updated so that all incorrect inputs are recorded before feedback is displayed. This ensured that first-attempt scoring remained accurate while still guiding the user with clear error messages.
This improvement made the Practice task more realistic and better aligned with real-world digital communication skills.

---

**Bug:** Footer positioning issues on smaller screens

**Fix:** The footer did not consistently remain at the bottom of the page on smaller screens. This was resolved using Flexbox to ensure correct positioning across different screen sizes.

---

**Bug:** During testing with learners, a brief flash of placeholder quiz content was observed before the quiz fully loaded. Initially, this appeared to be a normal loading delay, as the content disappeared almost instantly.

To investigate further, the issue was recorded using a mobile phone and slowed down. This confirmed that default placeholder content ("Question text appears here" and generic answer buttons) was briefly rendered before the JavaScript populated the quiz with real data.

The issue occurred because the browser renders HTML immediately on page load, while the JavaScript responsible for dynamically inserting the quiz content executes slightly after. This caused a momentary display of uninitialised content.

![Bug Captured on Mobile Camera](https://github.com/user-attachments/assets/761492a9-f662-4e19-a6fb-e0c783dad1b3)


**Fix:** The issue was resolved by removing all placeholder quiz content from the HTML and ensuring that the quiz is only populated dynamically using JavaScript. Additionally, the quiz container was initially hidden using a CSS class and only revealed after the first question was fully rendered by JavaScript. This prevented any uninitialised content from appearing on screen. A safeguard was also added to the JavaScript export logic to ensure compatibility between browser-based ES modules and testing environments. This fix improved the overall user experience by eliminating visual flickering and ensuring a smooth, professional quiz loading process.

---

## Credits

Fonts by Google Fonts

Images via ChatGPT

Website inspired by learning platforms such as Learnmyway and the TLM simulated assessment tasks for Entry 3 and Level 1 learners.

