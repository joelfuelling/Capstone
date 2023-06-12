
OnCourse is a course tracking application. Users can log a class, price, if supplies are needed, and other various pieces of information as well as when the class takes place. This may change slightly as the model is confirmed to ve viable for MVP in the time alotted to complete the project.

Technologies used.
JavaScript
HTML/CSS
MERN stack

Getting Started:
Deployment: https://oncourse-mern.herokuapp.com/courses/648382a26f39c203052ee1bb
Trello Board: https://trello.com/b/AA94Aa9p/capstone

Sunday: Completed initial setup. New form and create route working. courses.map is not working at this time.

Monday (morning/afternoon): Fixed map by reworking props correctly. 
Altered String type of daysOfWeek to an array of strings per instructors recommendation...
    // Starting from the model 'String' needed changed to [String] to allow the days of the week to be an array rather than one long String. default needed set to []
    // 'multiple' added to select in html to allow multiple selections of 'daysOfWeek' from dropdown.
    // 'const daysRef = useRef([])' needed an empty array instead of string (SEE THE PATTERN!?)
    // allowed for multiple selection input of daysOfWeel dropdown. Could not integrate selecting/deselecting days by click this time around (have to use Cmd + click)
    // Completed up to edit/delete.

Tuesday (morning/afternoon): Completed delete and edit routes.
    - Days aren't logging in when adding course, need to fix (it was working).
    
