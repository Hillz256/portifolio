const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const skills = document.querySelector('#skills')

const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const skillsContent = document.querySelector('#skills-content')


about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'ABOUT ME',
    modal: true,
    background: '#228b22',
    maxWidth: '600px',
    minHeight: '300px',

    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#228b22')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'CONTACT ME',
    modal: true,
    maxWidth: '80%',
    minHeight: '60vh',
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#228b22')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})


skills.addEventListener('click', () => {
  const skillsBox = new WinBox({
    title: 'MY SKILLS',
    modal: true,
    maxWidth: '600px',
    minHeight: '300px',

    mount: skillsContent,
    onfocus: function () {
      this.setBackground('#228b22')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})