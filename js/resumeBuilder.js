var bio = {
  name: "Philip Fry",
  role: "Pizza delivery guy",
  contacts: {
    mobile: "888-888-8888",
    email: "philip@fry.info",
    github: "philipfry",
    twitter: "fry",
    location: "Brooklyn, NY",
  },
  welcomeMessage: "Welcome!",
  skills: [
    "awesomeness",
    "delivering things",
    "cryogenic things",
    "saving the universe"
  ],
  biopic: "images/fry.jpg"
};

bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", this.name));

  $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
  $("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
  $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

  $("#footerContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%", this.contacts.email));
  $("#footerContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
  $("#footerContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
  $("#footerContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

  $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < this.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", this.skills[i]));
  }
};

work = {
  jobs: [
    {
      employer: "Planet Express",
      title: "Delivery Boy",
      location: "Brooklyn, NY",
      dates: "January 3000 - Future",
      description: "Delivering packages across the galaxy."
    },
    {
      employer: "Panucci's Pizza",
      title: "Delivery Boy",
      location: "Manhattan, NY",
      dates: "1998 - December 31, 1999",
      description: "Delivering pizza across NY."
    }
  ]
};

work.display = function() {
  for (var i = 0; i < this.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry").last().append(
        HTMLworkEmployer.replace("%data%", this.jobs[i].employer) +
        HTMLworkTitle.replace("%data%", this.jobs[i].title));
    $(".work-entry").last().append(
        HTMLworkLocation.replace("%data%", this.jobs[i].location));
    $(".work-entry").last().append(
        HTMLworkDates.replace("%data%", this.jobs[i].dates));
    $(".work-entry").last().append(
        HTMLworkDescription.replace("%data%", this.jobs[i].description));
  }
};

projects = [
  {
    title: "Traveling pizza delivery guy problem",
    dates: "1998",
    description:
      "Researched a heuristic for delivering pizzas in the fastest way " +
      "possible.",
    images: ["images/tsp1.gif", "images/tsp2.gif"]
  }
];

projects.display = function() {
  for (var i = 0; i < this.length; i++) {
    var project = this[i];
    $("#projects").append(HTMLprojectStart);
    $(".project-entry").last().append(
        HTMLprojectTitle.replace("%data%", project.title));
    $(".project-entry").last().append(
        HTMLprojectDates.replace("%data%", project.dates));
    $(".project-entry").last().append(
        HTMLprojectDescription.replace("%data%", project.description));
    for (var j = 0; j < project.images.length; j++) {
      $(".project-entry").last().append(
          HTMLprojectImage.replace("%data%", project.images[j]));
    }
  }
};

education = {
  schools: [
    {
      name: "Nova Southeastern University",
      location: "Fort Lauderdale, FL",
      degree: "Masters",
      majors: ["CS"],
      dates: 2013,
      url: "http://www.nova.edu/"
    },
    {
      name: "Eckerd College",
      location: "Saint Petersburg, FL",
      degree: "BA",
      majors: ["CS"],
      dates: 2003,
      url: "http://www.eckerd.edu/"
    },
  ],
  onlineCourses: [
    {
      title: "Javascript Basics",
      school: "Udacity",
      date: 2015,
      url: "https://www.udacity.com/course/ud804"
    }
  ]
}

education.display = function() {
  for (var i = 0; i < this.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry").last().append(
        HTMLschoolName.replace("%data%", this.schools[i].name) +
        HTMLschoolDegree.replace("%data%", this.schools[i].degree));
    $(".education-entry").last().append(
        HTMLschoolDates.replace("%data%", this.schools[i].dates));
    $(".education-entry").last().append(
        HTMLschoolMajor.replace("%data%", this.schools[i].majors.join(", ")));
  }
  $("#education").append(HTMLonlineClasses);
  for (var i = 0; i < this.onlineCourses.length; i++) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry").last().append(
        HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title) +
        HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school));
    $(".education-entry").last().append(
        HTMLonlineDates.replace("%data%", this.onlineCourses[i].date));
    $(".education-entry").last().append(
        HTMLonlineURL.replace("%data%", this.onlineCourses[i].url));
  }
};


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
