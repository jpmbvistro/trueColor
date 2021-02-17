document.querySelector('button').addEventListener('click',convertHex)

const hexColorRange = 16777216;

function convertHex() {
  const month = document.querySelector('#input1').value
  const day = document.querySelector('#input2').value
  const year = document.querySelector('#input3').value
  const mdy = Number(`${month}${day}${year}`)
  const color = ((month*day*year*mdy)%hexColorRange).toString(16).padStart(6,"0")
  document.querySelector('#output').innerText = `#${color}`
  document.querySelector('body').style.backgroundColor = `#${color}`
  document.querySelector('h1').style.color = `#${color}`
  document.querySelector('button').style.backgroundColor = `#${color}`
}

/**
Aside panel functionality
**/
document.querySelector('.info-button').addEventListener('click', toggleAside)
document.querySelector('#hide-aside').addEventListener('click', toggleAside)

function toggleAside(){       document.querySelector('aside').classList.toggle('reveal')
}
/**
Aside Panel end
*/
