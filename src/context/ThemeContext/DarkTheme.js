//Function to change de theme to dark 
//(This changes is to ThemeProvider for react-native-elements)

export const darkTheme = {
    //Default theme
    Default: {
        background: '#121212',
        backgroundSecondary: '#1f1f1f',
        border: '#1f1f1f',
    },

    //Change color of the text

    Text: {
        style: {
            color: '#fff',
        },
    },

    //Change color of the icons

    Icon : {
        iconStyle: {
            color: '#fff',  
        }
    },
    
    //Change color of the inputs

    Input: {
        style: {
            color: '#fff',
        }
    },

    //Change color of the buttons

    Button: {
        buttonStyle: {
            backgroundColor: '#2185d0',
        }
    }
}