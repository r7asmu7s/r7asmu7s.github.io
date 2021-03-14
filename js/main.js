const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const countdown = document.querySelector('#countdown')
const uploadDate = new Date(`April 05 2021 12:00:00`)

// Update countdown time
function updateCountdown() {
	const currentTime = new Date()
	const diff = uploadDate - currentTime

	const d = Math.floor(diff / 1000 / 60 / 60 / 24)
	const h = Math.floor(diff / 1000 / 60 / 60) % 24
	const m = Math.floor(diff / 1000 / 60) % 60
	const s = Math.floor(diff / 1000) % 60

	// Add values to DOM
	days.innerHTML = d
	hours.innerHTML = h < 10 ? '0' + h : h
	minutes.innerHTML = m < 10 ? '0' + m : m
	seconds.innerHTML = s < 10 ? '0' + s : s
}

setInterval(updateCountdown, 1000)

// Get the current year for the copyright
$('#year').text(new Date().getFullYear())
