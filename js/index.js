let icon = document.getElementById('icon')
icon.addEventListener('mouseover', function () {
    this.children[0].setAttribute('fill', 'dodgerblue')
})
icon.addEventListener('mouseout', function () {
    this.children[0].setAttribute('fill', '#fff')
})


window.onload = function(){
    document.getElementById("container").style.opacity = 0
}