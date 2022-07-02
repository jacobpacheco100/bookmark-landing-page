// features

const ft_info = [
  {
    img: "assets/images/illustration-features-tab-1.svg",
    h1: "Bookmark in one click",
    p: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites",
  },
  {
    img: "assets/images/illustration-features-tab-2.svg",
    h1: "Intelligent search",
    p: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    img: "assets/images/illustration-features-tab-3.svg",
    h1: "Share your bookmarks",
    p: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
]

const features = document.getElementById("features") //create for each
const ft_img = document.querySelector(".ft-img")
const ft_h1 = document.querySelector(".ft-h1")
const ft_p = document.querySelector(".ft-p")

features.addEventListener("click", (event) => {
  const e = event.target

  if (e.classList.contains("SB")) {
    ft_img.src = ft_info[0].img
    ft_h1.textContent = ft_info[0].h1
    ft_p.textContent = ft_info[0].p
  } else if (e.classList.contains("SS")) {
    ft_img.src = ft_info[1].img
    ft_h1.textContent = ft_info[1].h1
    ft_p.textContent = ft_info[1].p
  } else {
    ft_img.src = ft_info[2].img
    ft_h1.textContent = ft_info[2].h1
    ft_p.textContent = ft_info[2].p
  }
})

// red underline

const sb = document.querySelector(".SB")
const ss = document.querySelector(".SS")
const es = document.querySelector(".ES")

features.addEventListener("click", (event) => {
  const e = event.target
  if (e.classList.contains("SB")) {
    sb.classList.add("bb-red")
    ss.classList.remove("bb-red")
    es.classList.remove("bb-red")
  } else if (e.classList.contains("SS")) {
    sb.classList.remove("bb-red")
    ss.classList.add("bb-red")
    es.classList.remove("bb-red")
  } else {
    sb.classList.remove("bb-red")
    ss.classList.remove("bb-red")
    es.classList.add("bb-red")
  }
})

// Q&A

const questions = document.querySelectorAll(".question")

questions.forEach((question) => {
  const btn = question.querySelector(".question-title")
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text")
  })
})

// Email validation

const form = document.querySelector("form")
const email = document.getElementById("email")
// email.value = "jacob@gmail.com"

const response = document.getElementById("response")
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

form.addEventListener("submit", () => {
  if (pattern.test(email.value)) {
    form.classList.remove("response-invalid")
    form.classList.toggle("response-valid")
    response.textContent = "Email sent!"
  } else {
    form.classList.toggle("response-invalid")
    response.textContent = "Whoops! Make sure its an email"
  }
})
