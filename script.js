console.log("Javascript is loaded!")

// function openInfo(evt, tabName) {
//     let i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     tablinks = document.getElementsByClassName("tablinks"); 
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     document.getElementById(tabName)
//     tabName.style.display = "block";
//     evt.currentTarget.className += " active";
// }

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

console.log(panels)

tabs.addEventListener('click', function(e) {
    if (e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel) {
            if (panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        }) 
    }
})



