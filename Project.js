const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const animatedElements = document.querySelectorAll('.project, .project h1, .projectss, .projectname, .projectname h2, .projectss2, .projectss3, .projectss4, .projectss5, .projectnametext, .projectnametext2, .projectnametext3, .projectnametext4, .projectnametext h1, .projectnametext2 h1, .projectnametext3 h1, .projectnametext4 h1, .projectnametext5a, .projectnametext5 h1, .projectss6, .projectnametext6 h1, .projectss7, .projectnametext7 h1, .projectnametext8a, .projectss8,  .projectnametext8 h1, .projectss9, .projectnametext9 h1, .projectss10, .projectnametext10 h1, .projectss11, .projectnametext11 h1, .projectnametext12a, .projectss12, .projectnametext12 h1, .projectnametext13a, .projectss13, .projectnametext13 h1');
animatedElements.forEach((el) => observer.observe(el));