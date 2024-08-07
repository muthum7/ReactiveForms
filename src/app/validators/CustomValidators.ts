import { FormControl } from "@angular/forms";

export class CustomValidators{

    static noSpaceAllowed(control: FormControl){
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {noSpaceAllowed: true}
        }
        return null;
    }

    static onlyAlpaAllowed(control: FormControl){
        if(control.value != null){
            const regex = /^[A-Za-z]+$/;
            const valid = regex.test(control.value)
            console.log(valid);
            return valid ? null : { onlyAlpaAllowed: true};
        }
        return "";
    }
}
