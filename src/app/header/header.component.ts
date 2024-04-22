import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.styles.css'
}
)

export class HeaderComponent {
    @Output() showRecipes = new EventEmitter<string>()
    @Output() showShopping = new EventEmitter<boolean>()
    showMyRecipes  = '';
    showList  = '';

    showAllRecipes(selected) {
        if(selected == 'recipes') {
            this.showMyRecipes = selected
            this.showRecipes.emit(this.showMyRecipes)
            console.log(this.showMyRecipes);
        }

    }

    showShoppingList(selected) {
        if(selected == 'shopping') {
            this.showList = selected
            this.showRecipes.emit(this.showList)
        }
    }




}