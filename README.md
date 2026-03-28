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
  - [Layout and Components](#layout-components)
    
- [Features](#features)
- [Mock-ups](#mock-ups)
  
- [Testing](#testing)
  - [Lighthouse](#lighthouse)
  - [Validation](#validation)
  - [User Stories Check](#user-stories-check)
  - [Testing on Other Devices](#testing-on-other-devices)
  - [Testing on Other Browsers](#testing-on-other-browsers)
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
