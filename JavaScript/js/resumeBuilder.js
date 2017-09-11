/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main"). append("Jhean Marllos");
 var awesomeThoughts = "I am Jhean Marllos and I am Awesome";
 var funThoughts = awesomeThoughts.replace("Awesome", "Fun");
 console.log(awesomeThoughts);
 console.log(funThoughts);
  $("#main"). append(" "+funThoughts);*/
  /*var formattedName = HTMLheaderName.replace("%data%", "Jhean Marllos");
  var formattedRole = HTMLheaderRole.replace("%data%", "Project Manager");
  $("#header"). append(formattedName);
  $("#header"). append(formattedRole);*/
  //var array = ["high", "five"];
  /*var skills = ["DAO, ", "Project Manager, ", "Web Devoloper"];
  var bio = {
	  "name" : "Jhean Marllos",
	  "role" : "Project Manager",
	  "contactInfo" : "(88)99737-0908",
	  "pictureUrl" : "images/fry.jpg",
	  "welcomeMessage" : "I'm Jhean Marllos and I'm awesome",
	  "skills" : skills,
	  "age" : 21,
	  "graduacao" : "Ensino Médio"
  };
  $("#main"). append("Name: " + bio.name + " Age: " + bio.age + " Graduação: " + bio.graduacao + " Role: " + bio.role + " Contact: " + bio.contactInfo + " Picture: " + bio.pictureUrl + " Resume: " + bio.welcomeMessage + " Skills: " + bio.skills);
  var workObject = {};
  workObject.jobPosition = "Web Devoloper";
  workObject.employee = "N2S";
  workObject.yearsWorked = 1/2;
  var educationObject = {};
  educationObject.school = "Unecim";
  educationObject.years = [2000, 2001, 2002, 2003, 2004, 2005 ,2006 ,2007 ,2008 ,2009, 2010, 2011, 2012, 2013];
  $("#main"). append(workObject["jobPosition"]);
  $("#main"). append(" " + educationObject.school);*/
  
  var work = {
	"jobs": [
	{
		"employer": "N2S",
		"title": "Estagiario",
		"location": "Russas",
		"dates": 2017
	}
	]  
  };
  
  var projects = {
	"projects": [
	{
		"title": "Ensino de Programação para Alunos do Ensino Médio de Russas",
		"dates": 2015,
		"description": "Projeto que auxiliava no ensino de programação a alunos do ensino médio de Russas"
	}
	]  
  };
  
  var bio = {
	  "name" : "Jhean Marllos",
	  "role" : "Project Manager",
	  "contactInfo" : "(88)99737-0908",
	  "skills" : skills = ["DAO, ", "Project Manager, ", "Web Devoloper"],
	  "pictureUrl" : "images/fry.jpg",
	  "welcomeMessage" : "I'm Jhean Marllos and I'm awesome",
	  "age" : 21,
	  "graduacao" : "Ensino Médio",
	  "contacts" :{
		  "location":["Russas, CE", "Fortaleza, CE"]
	  }
  };
  
  var education = {
	"schools": [
	{
		"name": "Unecim",
		"location": "Russas",
	},
	{
		"name": "Universidade Federal do Ceará",
		"location": "Russas"
	}
	],
	"onlineCourses": [
	{
		"title": "GitHub",
		"school": "Udacity",
		"dates": 2017
	},
	{
		"title": "HTML, CSS",
		"school": "Udacity",
		"dates": 2017
	},
	{
		"title": "JavaScript",
		"school": "Udacity",
		"dates": 2017
	}
	]
  }
  
  function displayWork(){
	  for(job in work.jobs){
		  $("#workExperience"). append(HTMLworkStart);
		  var thisEmployer= HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		  var thisTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
		  var thisDates= HTMLworkDates.replace("%data%",work.jobs[job].dates);
		  var thisLocation= HTMLworkLocation.replace("%data%",work.jobs[job].location);
		  var thisEmployerTitle= thisEmployer+thisTitle;
		  $(".work-entry:last"). append(thisEmployerTitle);
		  $(".work-entry:last"). append(thisDates);
		  $(".work-entry:last"). append(thisLocation);
	  }
  }
  
  /*function inName(nome){
	  nome = nome.trim().split(" ");
	  nome[1]=nome[1].toUpperCase();
	  nome[0]=nome[0].slice(0,1).toUpperCase+ nome[0].slice(1).toLowerCase;
	  return (nome[0]+" "+nome[1]);
  }
  $('#main').append("jhean marllos");
  $('#main').append(internationalizeButton);*/
  
  
projects.display = function(){
	for(project in projects.projects){
		$("projects"). append(HTMLprojectStart);
		var thisTitle= HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var thisDates= HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var thisDescription= HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last"). append(thisTitle);
		$(".project-entry:last"). append(thisDates);
		$(".project-entry:last"). append(thisDescription);
	}
}

$("#mapDiv").append(googleMap);
initializeMap();