import { NgModule } from "@angular/core";
import { InInputComponent } from "./in-input.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        InInputComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        InInputComponent
    ]
})
export class InInputModule{}