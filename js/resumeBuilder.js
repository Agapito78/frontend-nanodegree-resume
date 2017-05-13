/*
 //////////////////////////////////////////////////////
 HEADER
 //////////////////////////////////////////////////////

 Declaring bio with Personal Information and basic skills
 */
var bio = {
    name: "Andre Agapito",
    role: "Project Management / Web Development",
    contacts: {
        mobile: "999 999 9999",
        email: "agapito.andre@gmail.com",
        github: "agapito78",
        twitter: "@none",
        location: "Jersey City/NJ",
        blog: "http://revista.agapito.com.br"
    },
    welcomeMessage : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skills: ["Project Management", "Web Development", "MySQL", "Data Integration"],
    bioPic: "images/fry.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage );
        /*
         Display Header (name and current role)
         */
        $("#header").prepend(formattedName + formattedRole);
        $("#header").append(formattedBioPic);

        //Display Welcome Message
        $("#header").append(formattedWelcome);


        /*
         Display Skills
         */
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                $("#skills").append(HTMLskills.replace("%data%", skill));
            });

        }
        /*
         Display Contact Info
         */
        var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedHTMLblog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedHTMLmobile);
        $("#topContacts").append(formattedHTMLemail);
        $("#topContacts").append(formattedHTMLgithub);
        $("#topContacts").append(formattedHTMLblog);
        $("#topContacts").append(formattedHTMLlocation);


        /*
         //////////////////////////////////////////////////////
         FOOTER
         //////////////////////////////////////////////////////
         Add contact to Footer
         */
        $("#footerContacts").append(formattedHTMLmobile);
        $("#footerContacts").append(formattedHTMLemail);
        $("#footerContacts").append(formattedHTMLgithub);
        $("#footerContacts").append(formattedHTMLblog);
        $("#footerContacts").append(formattedHTMLlocation);
    }

}

/*
 //////////////////////////////////////////////////////
 EDUCATION
 //////////////////////////////////////////////////////
 Declaring Education variable with array of schools
 */
var education = {
    schools: [
        {
            name: "UNIMEP",
            location: "Piracicaba/SP/Brazil",
            degree: "BA",
            majors: ["System Information", "IT"],
            dates: "October 2002",
            url: "http://www.unimep.br"
        },
        {
            name: "Impacta",
            location: "Sao Paulo/Brazil",
            degree: "Training",
            majors: ["Project Management", "PMBOK", "PM Knowledge Areas"],
            dates: "October 2013",
            url: "http://www.impacta.com.br"
        },
        {
            name: "Impacta",
            degree: "Training",
            location: "Sao Paulo/Brazil",
            dates: "December 2013",
            majors: ["ITIL", "Service Desk Management", "SLA", "Incidents"],
            url: "http://www.impacta.com.br"
        }
    ],
    onlineCourses : {
        course: [{
            title: "Front-end Web Development",
            school: "UDACITY",
            dates: "May 2017",
            url: "https://www.udacity.com.br"
        }],
        display: function() {
            /*
             Display online Courses
             */
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);

            education.onlineCourses.course.forEach(function(course) {
                var link = HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school);

                var date = HTMLonlineDates.replace("%data%", course.dates);
                var url = HTMLonlineURL.replace("%data%", course.url);
                $(".education-entry:last").append(link);
                $(".education-entry:last").find("a").attr("href", course.url);
                $(".education-entry:last").append(date);
                $(".education-entry:last").append(url);
                $(".education-entry:last").find("a").attr("href", course.url);
                //$("#education").find("h3").append(date);
                //$("#education").append(url  );

            });

        }
    },
    display: function() {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(educ) {
            $(".education-entry").append(HTMLschoolName.replace("%data%", ""+educ.name) + " " + HTMLschoolDegree.replace("%data%", educ.degree));
            $(".education-entry:last").find("a:last").attr("href", educ.url);
            $(".education-entry").append(HTMLschoolDates.replace("%data%", educ.dates));
            $(".education-entry").append(HTMLschoolLocation.replace("%data%", educ.location));
            $(".education-entry").append(HTMLschoolMajor.replace("%data%", educ.majors));

            /*
             Display Online Courses
             */
        });
        education.onlineCourses.display();
    }
};
/*
 //////////////////////////////////////////////////////
 WORK EXPERIENCE
 //////////////////////////////////////////////////////
 Declaring Work Experience variable with array of jobs
 */
var work = {
    jobs: [
        {
            employer: "Volvo Cars",
            title: "IT Consultant",
            location: "Sao Paulo/SP/Brazil",
            dates: "April 2016 - Current",
            description: "Working as project manager and web developer consultant for different customers."
        },
        {
            employer: "Volvo Cars",
            title: "IT Coordinator",
            location: "Sao Paulo/SP/Brazil",
            dates: "January 2012 to April 2016",
            description: "In charge of IT operation and projects at VCC Brazil."
        },
        {
            employer: "Prosegur",
            title: "IT Coordinator",
            location: "Sao Paulo/SP/Brazil",
            dates: "December 2010 to January 2012",
            description: "Working with regional IT Infrastructure Manager and responsible for Service Management, Data Center and IT Compliance."
        },
        {
            employer: "Otis Elevators",
            title: "IT Analyst",
            location: "Sao Paulo/SP/Brazil",
            dates: "From February 2010 to December 2010",
            description: "Working with regional IT Infrastructure Manager and responsible for Service Management, Data Center and IT Compliance."
        }
    ],
    display: function() {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);
            work.jobs.forEach(function(job) {
                $(".work-entry:last").append(HTMLworkTitle.replace("%data%", job.title) + HTMLworkEmployer.replace("%data%", job.employer));
                $(".work-entry:last").append();
                $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
                $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
                $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
            });
        }
    }
}

/*
 //////////////////////////////////////////////////////
 PROJECTS
 //////////////////////////////////////////////////////
 Declaring Projects object with display method
 */
var project = {
    title: "Projeto 1",
    dates: "April 2016",
    description: "Development of eCommerce Platform",
    images: [
        "https://placeholdit.imgix.net/~text?txtsize=19&txt=200%C3%97150&w=200&h=150",
        "https://placeholdit.imgix.net/~text?txtsize=19&txt=200%C3%97150&w=200&h=150"
    ],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.description));
        this.images.forEach(function(img) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
        });
    }
};


/*
 //////////////////////////////////////////////////////
 Display Functions
 //////////////////////////////////////////////////////


 Display Work Experience
 */


bio.display();

/*
 Display Work Experience
 */

work.display();

/*
 Display Projects
 */
project.display();

/*
 Display Projects
 */
education.display();


//$("#main").append(internationalizeButton);

/*
 //////////////////////////////////////////////////////
 Places and Work Locations
 //////////////////////////////////////////////////////
 Display Google Mapos
 */
$("#mapDiv").append(googleMap);

/*
 /////////////////////////////////////////////////////////
 EVENT HANDLERS
 /////////////////////////////////////////////////////////
 */
$(document).click(function(loc) {
    if (loc == null) {
        loc = window.event
    }
    var _mouseX = loc.clientX;
    var _mouseY = loc.clientY;
    logClicks(_mouseX, _mouseY)
});


/*
 /////////////////////////////////////////////////////////
 FUNCTIONS
 /////////////////////////////////////////////////////////
 Internationalizing Name Format
 */
function inName(fullname) {
    if (fullname.length > 0) {
        var arrName = fullname.split(" ");
        if (arrName.length > 0) {
            var lastName = arrName[1];
            lastName = lastName.toUpperCase();
            return arrName[0] + " " + lastName;
        } else {
            return fullname;
        }
    } else {
        return fullname;
    }
}