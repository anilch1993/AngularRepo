import { NgModule } from "@angular/core";
import { RotatorComponent } from "./rotator.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        RotatorComponent
    ],
    imports:[
        CommonModule
    ],
    exports: [
        RotatorComponent
    ]
})
export class RotateModule{}