// Each object is nested with related information that will populate into index.html
var bio = {
    'display': function() {
        // This function replaces relevant data from helper.js for formatting
        // Each item is then appended to the header element in index.html
        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
        $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

        // This function decides if any skills are listed in the skills object
        // If skills are listed, they are formatted through helper.js
        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            for (var count = 0; count < bio.skills.length; count++) {
                var formattedSkill = HTMLskills.replace('%data%', bio.skills[count]);
                $('#header').append(formattedSkill);
            }
        }

        // This function contains an array of formatted contact info from the main bio object
        // It then appends the formatted contact info to both topContacts and footerContacts
        // elements of index.html
        var formattedContactInfo = [
            formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
            formattedEmail = HTMLemail.replace('%data%', bio.contacts.email),
            formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github),
            formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location)
        ];
        for (var count = 0; count < formattedContactInfo.length; count++) {
            $('#topContacts').append(formattedContactInfo[count]);
            $('#footerContacts').append(formattedContactInfo[count]);
        }
    },
    'name': 'Steven Young',
    'role': 'Front End Developer',
    'contacts': {
        'mobile': '(423) 432-5144',
        'email': 'stevenyoung131@gmail.com',
        'github': 'stevenyoung131',
        'location': 'Chattanooga, TN',
    },
    'biopic': 'images/me.jpg',
    'welcomeMessage': 'Welcome to my Resume!',
    'skills': ['People and Task Management', ' Python', ' HTML', ' CSS', ' JS', ' Problem Solving']
};

var work = {
    'display': function() {
        // This function iterates through each element of the work.jobs object
        // It combines a formatted name and formatted title
        // It then appends the formatted info to the workExperience element of index.html
        for (var count = 0; count < work.jobs.length; count++) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[count].employer);
            formattedEmployer = formattedEmployer.replace('#', work.jobs[count].url);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[count].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[count].location));
            $('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[count].dates));
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[count].description));
        }
    },
    'jobs': [{
            'employer': 'Debos Diners Inc.',
            'title': 'General Manager',
            'dates': '2010 - present',
            'location': 'Hixson, TN, US',
            'description': 'Oversee general operations of five managers and 50-70 hourly employees in a fast-paced full service restaurant environment.  Operate within budget and develop strategies to drive consistent sales growth.  Oversee all purchasing and scheduling and report weekly numbers to Above Store Leaders.',
            'url': 'http://www.debosdiners.com'
        },
        {
            'employer': 'PF Changs China Bistro',
            'title': 'Manager',
            'dates': '2006-2010',
            'location': 'Chattanooga, TN, US',
            'description': 'Assist in general operations of fine dining restaurant.  Responsible for all bar-related purchasing, general health and cleanliness, and hiring.  Operated withing given budget on a day to day basis.',
            'url': 'http://www.pfchangs.com'
        }
    ]
};

var projects = {
    'display': function() {
        // This function iterates through each element of projects.projects
        // It appends the formatted project info to the projects element of index.html
        for (var count = 0; count < projects.projects.length; count++) {
            $('#projects').append(HTMLprojectStart);
            var newTitle = HTMLprojectTitle.replace('#', projects.projects[count].url);
            $('.project-entry:last').append(newTitle.replace('%data%', projects.projects[count].title));
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.projects[count].dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.projects[count].description));
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[count].images));
        }
    },
    'projects': [{
        'title': 'Movie Website',
        'dates': '2017',
        'description': 'A website that displays my favorite movies with some additional data, and plays the movie trailer when a movie is clicked on.',
        'images': [
        'images/movies.png'
      ],
        'url': 'projects/fresh_tomatoes.html'
    }]
};

var education = {
    'display': function() {
        // This function iterates through each element of educaiton.schools
        // It then appends formatted data to the education element of index.html
        for (var count = 0; count < education.schools.length; count++) {
            $('#education').append(HTMLschoolStart);
            var newName = HTMLschoolName.replace('#', education.schools[count].url);
            $('.education-entry:last').append(newName.replace('%data%', education.schools[count].name)) + (HTMLschoolDegree.replace('%data%', education.schools[count].degree));
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[count].dates));
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[count].majors));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[count].location));
        }

        // Displays formatted online class information below school information after inserting a new h3 tag
        $('#education').append(HTMLonlineClasses);
        for (var count = 0; count < education.onlineCourses.length; count++) {
            $('#education').append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[count].title);
            formattedTitle = formattedTitle.replace('#', education.onlineCourses[count].url);
            var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[count].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            var newURL = HTMLonlineURL.replace('#', education.onlineCourses[count].url);
            $('.education-entry:last').append(formattedTitleSchool);
            $('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[count].dates));
            $('.education-entry:last').append(newURL.replace('%data%', education.onlineCourses[count].url));
        }
    },
    'schools': [{
            'name': 'Southern Adventist University',
            'location': 'Collegedale, TN, US',
            'degree': 'Not completed',
            'majors': [
                'Music Education',
                ' Nursing'
            ],
            'dates': '2004-2006',
            'url': 'http://www.southern.edu'
        },
        {
            'name': 'University of Tennessee at Chattanooga',
            'location': 'Chattanooga, TN, US',
            'degree': 'Not completed',
            'majors': [
                'Computer Science'
            ],
            'dates': '2014-2015',
            'url': 'https://www.utc.edu'
        }
    ],
    'onlineCourses': [{
        'title': 'Intro to Programming',
        'school': 'Udacity',
        'dates': '2017',
        'url': 'https://www.udacity.com/course/intro-to-programming-nanodegree--nd000'
    }]
};

// Inserts the googleMap onto index.html in the mapDiv element
$('#mapDiv').append(googleMap);

// A button that appears at the bottom of the page that changes the name style
// to an international standard
$('#main').append(internationalizeButton);

function inName(name) {
    // This function replaces the name element of the bio object with
    // a first name in the format of capital first character, lower case name,
    // and last name in all caps
    name = name.trim().split(' ');
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + ' ' + name[1];
}

bio.display();
projects.display();
work.display();
education.display();
