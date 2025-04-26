const images = [
  "https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/29421578/pexels-photo-29421578.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/29421577/pexels-photo-29421577.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/18148937/pexels-photo-18148937/free-photo-of-vintage-tram-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/18148933/pexels-photo-18148933/free-photo-of-street-fruit-vendor-walking-with-trailer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

let btn = document.getElementById("changeBackground");

btn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = `url(${images[randomIndex]})`;
});
