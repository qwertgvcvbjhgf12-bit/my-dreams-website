/*
=========================================
F1 ENGINEERING ROADMAP
=========================================

This file controls:

- Daily lessons
- Progress tracking
- Calendar
- Learning resources
- Projects
- Navigation

Your progress is stored in your browser
using localStorage.
*/


/* ======================================
   365-DAY CURRICULUM
====================================== */

const lessons = [

    {
        category: "CAD",
        title: "Tab & Slot Joints + Mechanism Animation",
        description:
            "Create a tab-and-slot assembly in Onshape, then build an assembly that can be animated.",
        mission:
            "Design two flat parts that connect using tab-and-slot geometry. Add the parts to an assembly and make the mechanism move correctly.",
        learn:
            "Learn how tabs and slots are used to locate parts during manufacturing. Learn assembly mates, degrees of freedom and how mechanical constraints create realistic movement.",
        build:
            "Model two plates with matching tabs and slots. Create an assembly and animate the parts using mates.",
        test:
            "Try to move the assembly in a way the real mechanism could not physically move. Fix the constraints.",
        challenge:
            "Design the joint so that it can be manufactured without needing extremely complicated machining.",
        portfolio:
            "Save the CAD model, assembly screenshot and a short explanation of why you designed the joint that way.",
        resource:
            "https://www.onshape.com/en/resource-center/tech-tips"
    },


    {
        category: "Mechanisms",
        title: "Build a Four-Bar Linkage",
        description:
            "Understand how four-bar linkages create controlled mechanical motion.",
        mission:
            "Create a four-bar linkage and make it move through a full range of motion.",
        learn:
            "Learn the difference between links, pivots, drivers and followers. Understand how changing link lengths changes the motion.",
        build:
            "Create four links in CAD and assemble them using revolute mates.",
        test:
            "Change one link length and observe how the motion changes.",
        challenge:
            "Design a linkage that converts rotary motion into approximately straight-line motion.",
        portfolio:
            "Save an animation or screenshots showing the original and modified designs.",
        resource:
            "https://www.youtube.com/results?search_query=four+bar+linkage+mechanism"
    },


    {
        category: "Physics",
        title: "Torque vs Force",
        description:
            "Understand why the same force can produce different amounts of torque.",
        mission:
            "Calculate torque using different lever-arm lengths.",
        learn:
            "Torque depends on force and perpendicular distance from the pivot.",
        build:
            "Use a wrench, ruler or lever to demonstrate different lever arms.",
        test:
            "Predict which setup requires less force before testing.",
        challenge:
            "Design a mechanism that multiplies torque without changing the input force.",
        portfolio:
            "Save your calculations and photos of your experiment.",
        resource:
            "https://phet.colorado.edu/"
    },


    {
        category: "CAD",
        title: "Variables and Parametric Design",
        description:
            "Create a CAD model that can change dimensions without remodeling it.",
        mission:
            "Build one part that can automatically produce multiple design variants.",
        learn:
            "Learn design intent, variables, constraints and why parametric CAD is powerful.",
        build:
            "Create a bracket with adjustable width, height and hole spacing.",
        test:
            "Create at least three versions without rebuilding the part.",
        challenge:
            "Make your model so another person could easily understand which dimensions control it.",
        portfolio:
            "Save three configurations and a screenshot of your variable setup.",
        resource:
            "https://cad.onshape.com/help/"
    },


    {
        category: "Materials",
        title: "Aluminum vs Steel vs Carbon Fiber",
        description:
            "Learn why engineers don't simply choose the strongest material.",
        mission:
            "Choose a material for a hypothetical suspension component.",
        learn:
            "Compare strength, stiffness, density, cost, manufacturing difficulty and failure behavior.",
        build:
            "Create a comparison table.",
        test:
            "Decide which material would be best for three different components.",
        challenge:
            "Explain why a lighter material isn't automatically the better choice.",
        portfolio:
            "Save your comparison table and engineering recommendation.",
        resource:
            "https://www.makeitfrom.com/"
    },


    {
        category: "Programming",
        title: "Write Your First Engineering Calculator",
        description:
            "Use Python to turn engineering equations into a useful tool.",
        mission:
            "Build a calculator for gear ratio, RPM and torque.",
        learn:
            "Learn variables, user input, mathematical operations and formatted output.",
        build:
            "Write a Python program that asks for gear sizes and input RPM.",
        test:
            "Check your result against manual calculations.",
        challenge:
            "Add error handling and support multiple gear stages.",
        portfolio:
            "Save the Python file and a screenshot of it working.",
        resource:
            "https://docs.python.org/3/tutorial/"
    },


    {
        category: "Manufacturing",
        title: "Engineering Tolerances",
        description:
            "Learn why manufactured parts can never be perfectly exact.",
        mission:
            "Design two parts that must fit together.",
        learn:
            "Learn nominal dimensions, tolerances, clearance and interference.",
        build:
            "Create two mating parts in CAD.",
        test:
            "Calculate the smallest and largest possible clearance.",
        challenge:
            "Choose a tolerance that makes sense for a 3D printed part.",
        portfolio:
            "Create a drawing showing your tolerances.",
        resource:
            "https://www.asme.org/codes-standards/find-codes-standards/y14-5-dimensioning-tolerancing"
    },


    {
        category: "Vehicle Dynamics",
        title: "Calculate Weight Transfer",
        description:
            "Understand what happens to the load on each tire during acceleration and braking.",
        mission:
            "Calculate how braking changes front and rear axle loads.",
        learn:
            "Learn center of gravity height, wheelbase, acceleration and load transfer.",
        build:
            "Create a spreadsheet or Python calculator.",
        test:
            "Compare gentle braking with hard braking.",
        challenge:
            "Explain why weight transfer affects tire grip.",
        portfolio:
            "Save your calculations and diagrams.",
        resource:
            "https://www.racecar-engineering.com/"
    },


    {
        category: "Aerodynamics",
        title: "Lift, Drag and Angle of Attack",
        description:
            "Understand the basic aerodynamic forces acting on a wing.",
        mission:
            "Investigate how changing angle of attack affects lift and drag.",
        learn:
            "Learn lift, drag, air velocity, air density and angle of attack.",
        build:
            "Sketch or CAD model a simple airfoil.",
        test:
            "Compare several angles of attack.",
        challenge:
            "Find the point where increasing angle stops helping.",
        portfolio:
            "Save a graph or table of your results.",
        resource:
            "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/"
    },


    {
        category: "FEA",
        title: "Find a Stress Concentration",
        description:
            "Learn why sharp corners and holes can create high local stresses.",
        mission:
            "Design a simple bracket and predict where it will experience the most stress.",
        learn:
            "Learn stress, strain and stress concentration.",
        build:
            "Create a bracket with a mounting hole.",
        test:
            "Run a simulation if your CAD software supports it.",
        challenge:
            "Add geometry changes to reduce stress.",
        portfolio:
            "Save before/after screenshots and explain the improvement.",
        resource:
            "https://www.onshape.com/en/resource-center/tech-tips"
    },


    {
        category: "CAD",
        title: "Design for 3D Printing",
        description:
            "Design parts around the limitations of the manufacturing process.",
        mission:
            "Redesign a bracket specifically for FDM 3D printing.",
        learn:
            "Learn overhangs, supports, wall thickness, layer direction and print orientation.",
        build:
            "Create a functional bracket.",
        test:
            "Print it if possible and inspect the result.",
        challenge:
            "Reduce support material without sacrificing function.",
        portfolio:
            "Save your original and redesigned CAD models.",
        resource:
            "https://www.prusa3d.com/page/3d-printing-handbook_216/"
    },


    {
        category: "Math",
        title: "Engineering Vectors",
        description:
            "Learn how engineers break complicated forces into useful components.",
        mission:
            "Resolve a force into X and Y components.",
        learn:
            "Learn vectors, components, magnitude and direction.",
        build:
            "Create a force diagram for a suspension pickup point.",
        test:
            "Calculate the resultant force.",
        challenge:
            "Resolve multiple forces acting at the same point.",
        portfolio:
            "Save your calculations and diagram.",
        resource:
            "https://www.khanacademy.org/math/linear-algebra"
    },


    {
        category: "Robotics",
        title: "Design a Two-Stage Gear Train",
        description:
            "Use robotics experience to study mechanical power transmission.",
        mission:
            "Create a gear train with a target reduction ratio.",
        learn:
            "Learn gear ratio, RPM, torque and ideal power conservation.",
        build:
            "CAD model the gear train.",
        test:
            "Calculate the output speed and torque.",
        challenge:
            "Achieve the same ratio using different gear combinations.",
        portfolio:
            "Save the CAD assembly and calculations.",
        resource:
            "https://docs.wpilib.org/"
    },


    {
        category: "Vehicle Dynamics",
        title: "Camber, Toe and Slip Angle",
        description:
            "Learn three critical concepts in tire and suspension setup.",
        mission:
            "Create a one-page explanation of camber, toe and slip angle.",
        learn:
            "Understand how tire orientation and slip affect vehicle behavior.",
        build:
            "Draw a simplified wheel from the front and top views.",
        test:
            "Explain what happens when each alignment parameter changes.",
        challenge:
            "Design a hypothetical setup for a high-speed corner.",
        portfolio:
            "Save your setup sheet.",
        resource:
            "https://www.racecar-engineering.com/"
    },


    {
        category: "Aerodynamics",
        title: "Ground Effect",
        description:
            "Understand why a race-car floor can generate downforce.",
        mission:
            "Create a simplified diagram explaining ground effect.",
        learn:
            "Learn pressure, velocity and airflow through a restricted region.",
        build:
            "Sketch a simplified race-car floor.",
        test:
            "Explain what happens when the floor gets too close to the ground.",
        challenge:
            "Design a concept for a floor that maintains useful airflow across different ride heights.",
        portfolio:
            "Save your diagram and explanation.",
        resource:
            "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/"
    },


    {
        category: "Programming",
        title: "Plot Engineering Test Data",
        description:
            "Turn raw measurements into graphs that reveal patterns.",
        mission:
            "Generate or collect test data and plot it with Python.",
        learn:
            "Learn CSV files, lists, plotting and interpreting graphs.",
        build:
            "Create a force-vs-displacement graph.",
        test:
            "Identify the region where the system behaves differently.",
        challenge:
            "Add multiple test runs and compare them.",
        portfolio:
            "Save the dataset and graph.",
        resource:
            "https://matplotlib.org/stable/tutorials/"
    },


    {
        category: "Manufacturing",
        title: "Introduction to GD&T",
        description:
            "Learn how professional engineers communicate manufacturing requirements.",
        mission:
            "Add basic GD&T concepts to an engineering drawing.",
        learn:
            "Learn datums, position, flatness and perpendicularity.",
        build:
            "Create a drawing for a simple machined bracket.",
        test:
            "Check whether another person could manufacture and inspect your part.",
        challenge:
            "Remove unnecessary dimensions while keeping the drawing unambiguous.",
        portfolio:
            "Save your engineering drawing.",
        resource:
            "https://www.asme.org/codes-standards/find-codes-standards/y14-5-dimensioning-tolerancing"
    },


    {
        category: "Physics",
        title: "Rotational Inertia",
        description:
            "Understand why mass location matters when something rotates.",
        mission:
            "Compare the rotational inertia of objects with different mass distributions.",
        learn:
            "Learn moment of inertia and why moving mass farther from the axis changes rotational behavior.",
        build:
            "Calculate rotational inertia for simple shapes.",
        test:
            "Predict which wheel is harder to accelerate.",
        challenge:
            "Apply the concept to a race-car wheel.",
        portfolio:
            "Save calculations and diagrams.",
        resource:
            "https://openstax.org/details/books/university-physics-volume-1"
    },


    {
        category: "Project",
        title: "Design a Mini Differential",
        description:
            "Understand one of the coolest mechanical systems in a car.",
        mission:
            "Create a simplified differential in CAD.",
        learn:
            "Learn why the left and right wheels need to rotate at different speeds during a turn.",
        build:
            "Model the major differential components.",
        test:
            "Animate the outputs at different speeds.",
        challenge:
            "Create a simplified gear arrangement that demonstrates differential behavior.",
        portfolio:
            "Save your CAD assembly and explanation.",
        resource:
            "https://www.youtube.com/results?search_query=differential+gear+animation"
    },


    {
        category: "Engineering",
        title: "Perform a Professional Design Review",
        description:
            "Practice thinking like a real engineer reviewing a design.",
        mission:
            "Choose one of your previous projects and conduct a design review.",
        learn:
            "Learn requirements, constraints, risks, testing and design iteration.",
        build:
            "Create a design-review document.",
        test:
            "Ask someone else to find weaknesses in your design.",
        challenge:
            "Redesign one part based on the feedback.",
        portfolio:
            "Save the original design, review and revision.",
        resource:
            "https://www.nasa.gov/stem/"
    }

];


/* ======================================
   CREATE A 365-DAY CURRICULUM
====================================== */

let curriculum = [];


/*
We repeat the lesson cycle while adding
small variations to create a full year.
*/

for (let day = 0; day < 365; day++) {

    const base = lessons[day % lessons.length];

    curriculum.push({
        ...base,

        day: day + 1,

        title:
            day < lessons.length
                ? base.title
                : `${base.title} — Advanced Practice`,

        description:
            day < lessons.length
                ? base.description
                : `${base.description} Take the concept further by applying it to a more realistic engineering problem.`
    });

}


/* ======================================
   STORAGE
====================================== */

let completedLessons =
    JSON.parse(
        localStorage.getItem("f1CompletedLessons") || "[]"
    );


let projectStatus =
    JSON.parse(
        localStorage.getItem("f1Projects") || "{}"
    );


/* ======================================
   DATE
====================================== */

const startDate = new Date();

startDate.setHours(0, 0, 0, 0);


function getDayNumber() {

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const difference =
        today - startDate;

    return Math.floor(
        difference / 86400000
    ) + 1;

}


/* ======================================
   TODAY'S LESSON
====================================== */

function getTodayLesson() {

    const day =
        Math.max(
            1,
            Math.min(
                365,
                getDayNumber()
            )
        );

    return curriculum[day - 1];

}


/* ======================================
   NAVIGATION
====================================== */

function showPage(pageName) {

    document.querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active-page");
        });


    const selected =
        document.getElementById(pageName);

    if (selected) {

        selected.classList.add(
            "active-page"
        );

    }


    document.querySelectorAll(".nav-button")
        .forEach(button => {

            button.classList.remove(
                "active"
            );

        });


    const buttons =
        document.querySelectorAll(
            ".nav-button"
        );


    const pages = [
        "dashboard",
        "today",
        "calendar",
        "learning",
        "projects",
        "progress"
    ];


    const index =
        pages.indexOf(pageName);


    if (index >= 0 && buttons[index]) {

        buttons[index]
            .classList.add("active");

    }


    if (pageName === "calendar") {

        renderCalendar();

    }


    if (pageName === "learning") {

        renderLearning();

    }


    if (pageName === "progress") {

        renderProgress();

    }

}


/* ======================================
   COMPLETE TODAY
====================================== */

function completeToday() {

    const lesson =
        getTodayLesson();

    const day =
        lesson.day;


    if (!completedLessons.includes(day)) {

        completedLessons.push(day);

        localStorage.setItem(
            "f1CompletedLessons",
            JSON.stringify(
                completedLessons
            )
        );

    }


    updateDashboard();

}


/* ======================================
   UPDATE DASHBOARD
====================================== */

function updateDashboard() {

    const lesson =
        getTodayLesson();


    document.getElementById(
        "todayTitle"
    ).textContent =
        lesson.title;


    document.getElementById(
        "todayCategory"
    ).textContent =
        lesson.category;


    document.getElementById(
        "todayDescription"
    ).textContent =
        lesson.description;


    document.getElementById(
        "lessonTitle"
    ).textContent =
        lesson.title;


    document.getElementById(
        "lessonSubtitle"
    ).textContent =
        `${lesson.category} · Day ${lesson.day}`;


    document.getElementById(
        "lessonCategory"
    ).textContent =
        lesson.category;


    document.getElementById(
        "lessonMission"
    ).textContent =
        lesson.mission;


    document.getElementById(
        "lessonLearn"
    ).textContent =
        lesson.learn;


    document.getElementById(
        "lessonBuild"
    ).textContent =
        lesson.build;


    document.getElementById(
        "lessonTest"
    ).textContent =
        lesson.test;


    document.getElementById(
        "lessonChallenge"
    ).textContent =
        lesson.challenge;


    document.getElementById(
        "lessonPortfolio"
    ).textContent =
        lesson.portfolio;


    updateProgress();

}


/* ======================================
   PROGRESS
====================================== */

function updateProgress() {

    const completed =
        completedLessons.length;


    const total =
        curriculum.length;


    const percentage =
        Math.round(
            completed / total * 100
        );


    document.getElementById(
        "completedCount"
    ).textContent =
        completed;


    document.getElementById(
        "totalCount"
    ).textContent =
        total;


    document.getElementById(
        "progressFill"
    ).style.width =
        percentage + "%";


    document.getElementById(
        "progressPercent"
    ).textContent =
        percentage + "% complete";


    const lessonsElement =
        document.getElementById(
            "progressLessons"
        );


    if (lessonsElement) {

        lessonsElement.textContent =
            completed;

    }


    const percentElement =
        document.getElementById(
            "progressPercentLarge"
        );


    if (percentElement) {

        percentElement.textContent =
            percentage + "%";

    }

}


/* ======================================
   RESOURCE
====================================== */

function openResource() {

    const lesson =
        getTodayLesson();


    window.open(
        lesson.resource,
        "_blank"
    );

}


/* ======================================
   CALENDAR
====================================== */

let calendarDate =
    new Date();


function renderCalendar() {

    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


    document.getElementById(
        "calendarMonth"
    ).textContent =
        `${monthNames[month]} ${year}`;


    const grid =
        document.getElementById(
            "calendarGrid"
        );


    grid.innerHTML = "";


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    for (let i = 0; i < firstDay; i++) {

        const empty =
            document.createElement(
                "div"
            );

        grid.appendChild(empty);

    }


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const cell =
            document.createElement(
                "div"
            );


        cell.className =
            "calendar-day";


        const date =
            new Date(
                year,
                month,
                day
            );


        const difference =
            Math.floor(
                (
                    date -
                    startDate
                ) / 86400000
            );


        const lessonNumber =
            difference + 1;


        let lesson = null;


        if (
            lessonNumber >= 1 &&
            lessonNumber <= 365
        ) {

            lesson =
                curriculum[
                    lessonNumber - 1
                ];

        }


        if (
            lesson &&
            completedLessons.includes(
                lesson.day
            )
        ) {

            cell.classList.add(
                "completed"
            );

        }


        const today =
            new Date();


        if (
            date.toDateString() ===
            today.toDateString()
        ) {

            cell.classList.add(
                "today"
            );

        }


        cell.innerHTML = `

            <div class="calendar-number">
                ${day}
            </div>

            ${
                lesson
                ?
                `
                <div class="calendar-lesson">
                    Day ${lesson.day}<br>
                    ${lesson.title}
                </div>
                `
                :
                `
                <div class="calendar-lesson">
                    No curriculum
                </div>
                `
            }

        `;


        grid.appendChild(cell);

    }

}


function previousMonth() {

    calendarDate.setMonth(
        calendarDate.getMonth() - 1
    );

    renderCalendar();

}


function nextMonth() {

    calendarDate.setMonth(
        calendarDate.getMonth() + 1
    );

    renderCalendar();

}


/* ======================================
   LEARNING LIBRARY
====================================== */

function renderLearning() {

    const container =
        document.getElementById(
            "learningList"
        );


    container.innerHTML = "";


    const unique = [];


    lessons.forEach(
        lesson => {

            if (
                !unique.some(
                    item =>
                        item.title ===
                        lesson.title
                )
            ) {

                unique.push(
                    lesson
                );

            }

        }
    );


    unique.forEach(
        lesson => {

            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "resource";


            element.innerHTML = `

                <div>

                    <h3>
                        ${lesson.title}
                    </h3>

                    <p>
                        ${lesson.category}
                    </p>

                </div>


                <a
                    href="${lesson.resource}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open Resource ↗
                </a>

            `;


            container.appendChild(
                element
            );

        }
    );

}


/* ======================================
   PROJECTS
====================================== */

function startProject(number) {

    projectStatus[number] =
        !projectStatus[number];


    localStorage.setItem(
        "f1Projects",
        JSON.stringify(
            projectStatus
        )
    );


    const message =
        projectStatus[number]
            ? "Project started! 🔧"
            : "Project removed from active projects.";


    alert(message);

}


/* ======================================
   SKILL PROGRESS
====================================== */

function renderProgress() {

    const container =
        document.getElementById(
            "skillProgress"
        );


    container.innerHTML = "";


    const categories = {};


    curriculum.forEach(
        lesson => {

            if (
                !categories[
                    lesson.category
                ]
            ) {

                categories[
                    lesson.category
                ] = {
                    total: 0,
                    completed: 0
                };

            }


            categories[
                lesson.category
            ].total++;


            if (
                completedLessons.includes(
                    lesson.day
                )
            ) {

                categories[
                    lesson.category
                ].completed++;

            }

        }
    );


    Object.entries(
        categories
    ).forEach(
        ([category, data]) => {

            const percent =
                Math.round(
                    data.completed /
                    data.total *
                    100
                );


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "skill-row";


            row.innerHTML = `

                <div class="skill-header">

                    <span>
                        ${category}
                    </span>

                    <span>
                        ${percent}%
                    </span>

                </div>


                <div class="skill-bar">

                    <div
                        class="skill-fill"
                        style="
                            width:${percent}%;
                        "
                    ></div>

                </div>

            `;


            container.appendChild(
                row
            );

        }
    );

}


/* ======================================
   START APP
====================================== */

updateDashboard();

renderCalendar();

renderLearning();

renderProgress();
