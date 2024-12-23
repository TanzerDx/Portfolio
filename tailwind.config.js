/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1%': '1%',
        '2%': '2%', 
        '3%': '3%',
        '4%': '4%',
        '5%': '5%',
        '6%': '6%',
        '7%': '7%', 
        '8%': '8%',
        '9%': '9%',
        '10%': '10%',
        '11.5%': '11.5%',
        '12%': '12%',
        '13%': '13%',
        '15.5%': '15.5%',
        '20%': '20%', 
        '23%': '23%', 
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '65%': '65%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '90%': '90%',
        '95%': '95%',
        '100%': '100%',
        '120%': '120%',
        '150%': '150%',
        '300%': '300%',
      },
      fontSize: {

        'heading(xl)': '800%',
        'heading(md)': '650%',
        'heading(sm)': '500%',
        'heading(default)': '350%',

        'subheading(xl)': '300%',
        'subheading(md)': '200%',
        'subheading(sm)': '150%',
        'subheading(default)': '100%',

        'aboutMe(xl)': '850%',
        'aboutMe(md)': '550%',
        'aboutMe(sm)': '400%',
        'aboutMe(default)': '250%',

        'aboutMeText(xl)': '270%',
        'aboutMeText(md)': '170%',
        'aboutMeText(sm)': '120%',
        'aboutMeText(default)': '90%',

        'experience(xl)': '340%',
        'experience(md)': '270%',
        'experience(sm)': '150%',
        'experience(default)': '140%',

        'technology': '170%',

        'projectHeading': '260%',

        'projectHeadingInPopup(xl)': '560%',
        'projectHeadingInPopup(md)': '200%',
        'projectHeadingInPopup(sm)': '150%',
        'projectHeadingInPopup(default)': '100%',

        'projectDescHeading(xl)': '420%',

        'projectDesc(xl)': '140%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        backgroundColor: '#17182D',
        textColor: '#9BE0E0',
        secondaryColor: "#6BBEB0"
      }
      
  }
  },
  plugins: [],
}

