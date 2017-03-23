$(document).ready(function (){
  alert("Hello")
var $form= $('form')

// $links.on('click', function(){
//   e.preventDefault()
// })

$form.on('submit', function(e){
  e.preventDefault()
  console.log($(this).serializeArray());
})
})
