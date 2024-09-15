# startup
byu_fall24_cs260

Palette Path

# Specification Deliverable
  ## Elevator Pitch
  Embark of a colorful journey in **Palette Path**. Race to arrange your color pallete, transitioning from a set starting color to your target hue through a series of intermediate milestone colors. Each milestone must be passed in sequence, challenging your color navigation skils. How quickly can you paint your way to victory?

  ## Design
  Home/login page:
  ![alt text](images/home_page.jpeg)
  Scores page:
  ![alt text](images/scores_page.jpeg)
  GamePlay page:
  ![alt text](images/gameplay_page.jpeg)
  Solution example:
  ![alt text](images/solution_example.jpeg)
  
  ## Key Features
  * User Authentication: Ability to register and log in, with data stored persistently
  * Scoreboard: Displays the current scoreboard with data persistently stored
  * User Actions: Ability to log out and start a new game
  * Gameplay Mechanics: Players can select colors, place colors, and check their answers
  * Real-time Updates: New scores are displayed in real-time
  * Game State Management: Ability to quit the game at any point

  ## Technologies
  I will use the required techologies in the following ways...
   ### HTML
   3 HTML pages: 
   1. Index.html as home/login page - links to scores page
   2. Scores.html to display scoreboard - links to home and gameplay pages
   3. GamePlay.html for gameplay - links to scores page
   Each page will hyperlink the github repository
   ### CSS
   Utilizes color and images to create a visually appealing design
   Responsive design that adapts to various screen sizes
   ### JavaScript/ React
   Provides register, login, logout, play, select color, place color, quit, check answer
   ### Service
   Backend service with endpoints for:
   * register
   * login
   * logout
   * play
   * get colors - use [ColourLovers](https://www.colourlovers.com/api)
   * quit
   * check solution
   ### Database
   Stores users and passwords
   Stores high scores and the users and the date they happened
   ### Login
   Scores and gameplay are accessible only to authenticated users
   ### Websocket
   As each user finishes, their score is broadcast to all other users
