//=============================================================================\\
//                                 Theme.js                                     \\
//                             made by nullcheats                                \\
//================================================================================\\

/*
This is where we simply get our element selectors and create variables
As you can see here we start the theme in 'Dark' mode by default
CurrentTheme has 2 options | 'Light' & 'Dark'
🌙 Dark mode
🌕 Light mode
*/
const Theme = document.querySelector(':root');
const ThemeText = document.getElementById('ThemeStyle');
var ExampleSlider = document.getElementById("SliderExample");
var SliderText = document.getElementById("SliderText");
let CurrentTheme = 'Dark';

/*
This is our "Function" to enable dark mode as you can see below
This will start of by changing the colours defined in :root
We change the colours to a RGB value for example 22,22,22 being a dark grey
Then we set our button text to '🌕 Light mode' so the user can switch back
and finally we set the 'CurrentTheme' variable to dark 
*/
const DarkMode = () => {
	Theme.style.setProperty('--BG', 'rgb(33, 33, 33)');
	Theme.style.setProperty('--SC', 'rgb(22, 22, 22)');
	Theme.style.setProperty('--EC', 'rgb(77, 97, 147)');
	Theme.style.setProperty('--TC', 'rgb(255, 255, 255)');

	ThemeText.innerHTML = '🌕 Light mode';
	CurrentTheme = 'Dark';

}

/*
This function acts exactly like our 'Dark' mode function
The only difference is here we set different colours (lighter colours)
As you can see here we also set the text to '🌙 Dark mode' so the user can switch back
*/
const LightMode = () => {
	Theme.style.setProperty('--BG', 'rgb(227, 227, 227)');
	Theme.style.setProperty('--SC', 'rgb(75, 134, 180)');
	Theme.style.setProperty('--EC', 'rgb(40, 56, 204)');
	Theme.style.setProperty('--TC', 'rgb(0, 0, 0)');
	ThemeText.innerHTML = '🌙 Dark mode';
	CurrentTheme = 'Light';
}

/*
This is a very simple function that will change the theme depending on the current theme and selection
As you can see this function is invoked upon clicking the nav bar button via the 'Onclick' event
This will use the variable above to determine what theme is already active and what theme to switch between
Once the theme needed has been identified it will then call the function 'DarkMode' or 'LightMode'
*/
const ChangeMode = () => {
	if (CurrentTheme == 'Dark') {
		LightMode();
	} else {
		DarkMode();
	}
}

/*
This is our very simple event listener that updates our label for the slider bar
This simply checks if the value is more than 0 and if so it will change the text to contain the current value
As you can see we only add the value if its more than '0' and if the value is <= 0 it will simply show 'Slider example'
*/
ExampleSlider.addEventListener('input', function() {
	if (ExampleSlider.value > 0) {
		SliderText.innerHTML = 'Slider example:' + ExampleSlider.value;
	} else {
		SliderText.innerHTML = 'Slider example';
	}
});