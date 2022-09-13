import * as Yup from 'yup';


//Method to validate USERNAME, and not allow spaces
Yup.addMethod(Yup.string, "noSpacing", function(errorMessage){
    return this.test("test-input-spacing", errorMessage, function (value) {

        const {path, createError} = this;
        const hasSpacing = !value ? true : value.includes(" ")

        return hasSpacing ? createError({path, message: errorMessage}) : value;
    }
    
    )
}
    )
