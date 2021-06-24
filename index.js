//1. Nav Links Manipulations

const about_container = document.querySelector(".about-container");

const nav_links = document.querySelector(".nav-links");
const about_btn = document.querySelector(".about");
const Blogs_btn = document.querySelector(".blogs");
const proj_btn = document.querySelector("#p-link")
const test_btn = document.querySelector("#t-link")
const cont_btn = document.querySelector("#c-link")




proj_btn.addEventListener('click',e=>{
  if(e.target.classList.contain('work-nav')){
    proj_btn.scrollIntoView();
  }
})

document.readyState()


//Projects section btns
const p_btn = document.querySelector('.p-section-btns')
//All Projects
const allProjects  = document.querySelectorAll('.projects-container ul li')

//Event Listner on Projects btns
// proj_btn.addEventListener('click', e =>{
//   e.preventDefault();
//   if(e.target.classList.contains('Dev')){
//     allProjects.forEach( (p) =>{
//       if(p.classList.contains('des-projects')){
//         p.classList.add('d-none')
//       }
//       else{
//         p.classList.remove('d-none')
//       }
//     })
//   }
//   else if(e.target.classList.contains('Ds')){
//     allProjects.forEach((p) => {
//       if(p.classList.contains('dev-projects')){
//           p.classList.add('d-none')
//         }
//       else{
//         p.classList.remove('d-none')
//       }
//       })
//     }
// })





nav_links.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("ab-nav")) {
    //This HTML will be the complete structure that our about-sub btn contains
    let HTML = `
        <div class="container about-sub row py-5" id="about-link">
        <div class="col-6 about-vector">
            <img src="./images/about-vector.svg" alt="" class="about-vector-img">
          </div>
          <div class="col-6 about-sub-details">
            <small class="text-uppercase">about me</small>
            <h1 class="whyHire-heading">Why Hire me for your next project<span style="color:#00D5BE;font-weight:bolder">?</span></h1>
            <p>Meet my startup developing agency <a href="https://www.thedevnation.com/" target="_blank" style="color:#fdaf42; text-decoration:none">DevNation.</a> Currently I'm working as a Full Stack Developer Fellow at DevNation. Before that I've worked as a <a href="https://www.fiverr.com/fahadhassan_1?up_rollout=true" target="_blank" style="color:#fdaf42; text-decoration:none">Freelancer</a> and as a <a style="color:#fdaf42; text-decoration:none">UI&UX</a> Designer </p>
            <p>I love to work in developing Responsive Websites and Web Applications and User Interface Designing. Because I always love to solve Web problems and to find better and easy way to solve it. I always try my best to develop interactive websites with best user experience.</p>
          </div>
        </div>
        </div>
        `;
    about_container.innerHTML = HTML;
    about_btn.scrollIntoView();
  } else if (e.target.classList.contains("blog-nav")) {

    //This HTML will be the complete structure that our Blogs-sub btn contains
    about_container.innerHTML = ''
    let HTML = `

<div class="blogs-sub">
        <div class=" container blog-section-headings">
        <h1>My Blogs</h1>
        <small class=" blogs-txt">With developing cool stuff, I love to Write and Teach others what I have learnt! </small>
      </div>

      <div class="container blogs-container">

        <div class="row">
          <div class="col-sm-6">
            <div class="card blogs-card">
              <div class="card-body">
                <h5 class="card-title blogs-title ">Build a Pomodoro Timer</h5>
                <small>Dev.to</small>
                <p class="card-text blogs-msg">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://dev.to/fahadhassan1213/build-a-pomodoro-timer-using-javascript-3d13" target="_blank" class="btn btn-primary blogs-learnMore-btn">Learn More</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card blogs-card">
              <div class="card-body">
                <h5 class="card-title blogs-title">Create a Weather App</h5>
                <small>Dev.to</small>
                <p class="card-text blogs-msg">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://dev.to/fahadhassan1213/build-a-weather-app-using-javascript-2g3h" target="_blank" class="btn btn-primary blogs-learnMore-btn">Learn More</a>
              </div>
            </div>
          </div>
      </div>    
    </div>
</div>
        `;
    about_container.innerHTML = HTML;
    Blogs_btn.scrollIntoView();
  }
  else if(e.target.classList.contains('work-nav')){
    proj_btn.scrollIntoView();
  }
  else if(e.target.classList.contains('test-nav')){
    test_btn.scrollIntoView();
  }
  else if(e.target.classList.contains('cont-nav')){
    cont_btn.scrollIntoView();
  }
  
});



//2. About Area Manippulation

const about_nav = document.querySelector('.about-nav')


about_nav.addEventListener('click', e=>{
    e.preventDefault();

    if(e.target.classList.contains('about')){

        let HTML = `
        <div class="container about-sub row py-5" id="about-link">
        <div class="col-6 about-vector">
            <img src="./images/about-vector.svg" alt="" class="about-vector-img">
          </div>
          <div class="col-6 about-sub-details">
            <small class="text-uppercase">about me</small>
            <h1 class="whyHire-heading">Why Hire me for your next project<span style="color:#00D5BE;font-weight:bolder">?</span></h1>
            <p>Meet my startup developing agency <a href="https://www.thedevnation.com/" target="_blank" style="color:#fdaf42; text-decoration:none">DevNation.</a> Currently I'm working as a Full Stack Developer Fellow at DevNation. Before that I've worked as a <a href="https://www.fiverr.com/fahadhassan_1?up_rollout=true" target="_blank" style="color:#fdaf42; text-decoration:none">Freelancer</a> and as a <a style="color:#fdaf42; text-decoration:none">UI&UX</a> Designer </p>
            <p>I love to work in developing Responsive Websites and Web Applications and User Interface Designing. Because I always love to solve Web problems and to find better and easy way to solve it. I always try my best to develop interactive websites with best user experience.</p>
          </div>
        </div>
        </div>
        `;
    about_container.innerHTML = HTML;
    }

    else if (e.target.classList.contains("blogs")) {

        //This HTML will be the complete structure that our Blogs-sub btn contains
        about_container.innerHTML = ''
        let HTML = `
    
    <div class="blogs-sub">
            <div class=" container blog-section-headings">
            <h1>My Blogs</h1>
            <small class=" blogs-txt">With developing cool stuff, I love to Write and Teach others what I have learnt! </small>
          </div>
    
          <div class="container blogs-container">
    
            <div class="row">
              <div class="col-sm-6">
                <div class="card blogs-card">
                  <div class="card-body">
                    <h5 class="card-title blogs-title ">Build a Pomodoro Timer</h5>
                    <small>Dev.to</small>
                    <p class="card-text blogs-msg">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="https://dev.to/fahadhassan1213/build-a-pomodoro-timer-using-javascript-3d13" target="_blank" class="btn btn-primary blogs-learnMore-btn">Learn More</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card blogs-card">
                  <div class="card-body">
                    <h5 class="card-title blogs-title">Create a Weather App</h5>
                    <small>Dev.to</small>
                    <p class="card-text blogs-msg">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="https://dev.to/fahadhassan1213/build-a-weather-app-using-javascript-2g3h" target="_blank" class="btn btn-primary blogs-learnMore-btn">Learn More</a>
                  </div>
                </div>
              </div>
          </div>    
        </div>
    </div>
            `;
        about_container.innerHTML = HTML;
      }

    else if(e.target.classList.contains('services')){
        about_container.innerHTML = ''
        let HTML = `
        
        <div class="container MyService-sub row py-5">
        <div class="col-6 MyServices-sub-details">
          <small class="text-uppercase">My Services</small>
          <h1 class="MyServices-heading">What I'll do for you<span style="color:#00D5BE;font-weight: bolder;">?</span></h1>
          <p>Full Life Cycle Services</p>
          <ul>
            <li>- Development & Designs</li>
            <li>- Integration of third party services</li>
            <li>- Consulting and Advisory Services</li>
            <li>- Sustainment</li>
          </ul>
          <p>Technologies</p>
          <ul>
            <li>- Full Stack Programming</li>
            <li>- Cloud</li>
            <li>- Web</li>
          </ul>
        </div>
        <div class="col-5 MyServices-vector">
          <img src="./images/my-service-img.svg" alt="" class="MyServices-vector-img">
        </div>
      </div>

        
        `

    about_container.innerHTML = HTML
    }
    

    else if(e.target.classList.contains('experties')){

        about_container.innerHTML = ''

        let HTML = `
        
        <div class="container MyExperties-sub row py-5">

      <div class="col-5 MyExperties-vector">
        <img src="./images/my-experties-vector.svg" alt="" class="MyExperties-vector-img">
      </div>
    
        <div class="col-6 MyExperties-sub-details">
          <small class="text-uppercase">My Experties</small>
          <h1 class="MyExperties-heading">What I do<span style="color:#00D5BE;font-weight: bolder;">?</span></h1>
          <p style="color:#b3b3b3">A Creative Full-Stack-Developer who love to explore every Web Tech</p>
          <p style="color:#b3b3b3">Develop Fully Responsive professional Web sites and Web applications<p>
          <hr style="color: #fdaf42;">
          
          <div class="exp-icons">
            <div class="exp-icons-div"><img src="./images/exp-icons/iconfinder_html5_294678.png" alt="">\
            <p>HTML5</p>
            </div>
            <div class="exp-icons-div"><img src="./images/exp-icons/iconfinder_css3_294692.png" alt="">\
            <p>CSS3</p>
            </div>
            <div class="exp-icons-div"><img src="./images/exp-icons/iconfinder_code-programming-javascript-software-develop-command-language_652581.png" alt="">\
            <p>Javascript</p>
            </div>
            <div class="exp-icons-div"><img src="./images/exp-icons/iconfinder_267_Python_logo_4375050.png" alt="">\
            <p>Python</p>
            </div>
            <div class="exp-icons-div"><img src="./images/exp-icons/iconfinder_dbs_sql_mysql_database_mdb_oracle_files_4852543.png" alt="">\
            <p>SQL Server</p>
            </div>
            <div class="exp-icons-div"><img src="./images/exp-icons/iconfinder_google_firebase_1175544.png" alt="">\
            <p>Firebase</p>
            </div>
            <div class="exp-icons-div"><img src="./images/exp-icons/iconfinder_react_7423887.png" alt="">\
            <p>React</p>
            </div>
            <div class="exp-icons-div"><img src="./images/exp-icons/iconfinder_illustrator_2318055.png" alt="">\
            <p>Illustrator</p>
            </div>
            <div class="exp-icons-div"><img src="./images/exp-icons/iconfinder_3_Xd_Adobe_logo_logos_4373061.png" alt="">\
            <p>XD</p>
            </div>
            <div class="exp-icons-div"><img src="./images/exp-icons/iconfinder_logo_brand_brands_logos_adobe_photoshop_2993707.png" alt="">\
            <p>photoshop</p>
            </div>
          </div>
        </div>    
      </div>  
       
        
        `
    about_container.innerHTML = HTML
    }


})