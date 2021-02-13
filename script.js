document.getElementById('random-button').addEventListener('click', reportResults)

function reportResults () {
  alert(document.getElementById('input').value)
  document.getElementById('background').style.backgroundColor = 'red'
}
